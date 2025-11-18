import { casualResponses, misspellings, aiResponseEmojis } from '../data/casual.js';
import { exportChatAsPDF } from './pdf_export.js';
// FIX 1: Corrected module path from './vector_utils.js' to './vector_utiles.js'
import { generateKnowledgeVector, generateInputVector, cosineSimilarity } from './vector_utiles.js';

/* --------------------------
1. Canvas Initialization and Constants
---------------------------- */
const canvas = document.getElementById('chatCanvas');
const ctx = canvas.getContext('2d');

const HEADER_HEIGHT_PX = 48; // Height of the chat-header HTML element (from CSS)
const INPUT_AREA_HEIGHT_PX = 50; // Height of the input-area HTML element (from CSS)
const CANVAS_PADDING = 15;
const FONT_SIZE = 14;
const LINE_HEIGHT = FONT_SIZE * 1.5;
const BUBBLE_PADDING = 10;
const BUBBLE_RADIUS = 8;
const MAX_MESSAGE_WIDTH_RATIO = 0.7; // Max 70% of canvas width for message bubbles
const SIMILARITY_THRESHOLD = 0.7; // Minimum score to match a knowledge item

// Global State
let knowledge = [];
let emojiMap = {};
// Dynamic learning stores user facts, e.g., their name
let dynamicLearning = JSON.parse(localStorage.getItem('dynamicLearning') || '{}');
const DYNAMIC_LEARNING_KEYWORDS = ['my name is', 'i am called', 'you can call me', 'i am', 'my age is', 'i live in'];
let chatHistory = JSON.parse(localStorage.getItem('chatHistory') || '[]');

// Canvas State for scrolling and layout
let scrollYOffset = 0; // Vertical offset for scrolling all content
let contentTotalHeight = 0; // Actual height of all drawn messages
let lastKnownCanvasHeight = 0; // To detect if canvas height changed due to resize

// HTML Elements for input and button interactions (these are not drawn on canvas)
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');


/* --------------------------
2. Data Loaders
---------------------------- */
// Fetch all necessary data
Promise.all([
    fetch('./data/knowledge.json').then(res => res.json()),
    fetch('./data/emojiMap.json').then(res => res.json())
]).then(([knowledgeData, emojiMapData]) => {
    knowledge = knowledgeData;
    emojiMap = emojiMapData;
    
    // Auto-generate vectors for knowledge items if not present
    knowledge.forEach(item => {
        if (!item.vector || item.vector.length === 0) {
            item.vector = generateKnowledgeVector(item);
        }
    });

    initializeUI();
}).catch(err => console.error("Failed to load necessary data:", err));


/* --------------------------
3. Canvas Drawing Utilities
---------------------------- */

const NORMAL_FONT = `${FONT_SIZE}px 'Inter', sans-serif`;
const BOLD_FONT = `bold ${FONT_SIZE}px 'Inter', sans-serif`;


// Helper function to break text into lines, accounting for bold tags and max width
function wrapText(text, maxWidth) {
    const lines = [];
    // Replace <br> with actual newline characters
    const textWithNewlines = text.replace(/<br\s*\/?>/gi, '\n'); 
    const paragraphs = textWithNewlines.split('\n');

    paragraphs.forEach(paragraph => {
        const parts = paragraph.split(/<\/?b>/i); // Split by <b> and </b> tags
        let isBold = false;
        let currentLine = [];
        let currentLineWidth = 0;

        parts.forEach((part, partIndex) => {
            // Toggle bold for subsequent parts
            if (partIndex > 0) { 
                isBold = !isBold; 
            }
            if (part.length === 0) return; // Skip completely empty parts resulting from consecutive tags

            ctx.font = isBold ? BOLD_FONT : NORMAL_FONT;
            const words = part.split(' ');

            for (let i = 0; i < words.length; i++) {
                const word = words[i];
                if (word.length === 0) continue;

                // Measure with space unless it's the last word of the part
                const wordWithSpace = word + (i < words.length - 1 ? ' ' : '');
                const wordWidth = ctx.measureText(wordWithSpace).width;

                if (currentLineWidth + wordWidth > maxWidth && currentLine.length > 0) {
                    lines.push(currentLine);
                    currentLine = [{ text: word, bold: isBold }];
                    currentLineWidth = wordWidth;
                } else {
                    currentLine.push({ text: word, bold: isBold });
                    currentLineWidth += wordWidth;
                }
            }
        });
        if (currentLine.length > 0) {
            lines.push(currentLine);
        } else if (paragraph.length === 0 && paragraphs.length > 1) { // Preserve empty lines
            lines.push([]);
        }
    });
    return lines;
}


/**
 * Draws text that can contain <b> tags and wraps within maxWidth.
 * @param {Array<Array<{text: string, bold: boolean}>>} wrappedLines - Pre-wrapped text lines.
 * @param {number} x - Starting X coordinate.
 * @param {number} y - Starting Y coordinate.
 * @param {string} color - Text color.
 * @returns {number} The total height of the drawn text block.
 */
function drawTextLines(wrappedLines, x, y, color) {
    let currentY = y;
    ctx.fillStyle = color;
    ctx.textBaseline = 'alphabetic';

    wrappedLines.forEach(line => {
        let currentX = x;
        line.forEach(wordObj => {
            ctx.font = wordObj.bold ? BOLD_FONT : NORMAL_FONT;
            // Add space only if it's not the last word object in the line array
            const textToDraw = wordObj.text + (line.indexOf(wordObj) < line.length - 1 ? ' ' : '');
            ctx.fillText(textToDraw, currentX, currentY); 
            currentX += ctx.measureText(textToDraw).width;
        });
        currentY += LINE_HEIGHT;
    });
    return currentY - y; // Return the total height occupied
}


// Draw a single chat message bubble on the canvas
function drawMessage(msg, yStart) {
    const isUser = msg.sender === 'user';
    const text = msg.text;
    const canvasWidth = canvas.width;
    const maxTextDrawWidth = canvasWidth * MAX_MESSAGE_WIDTH_RATIO - (BUBBLE_PADDING * 2);

    // 1. Calculate wrapped lines and total height
    const wrappedLines = wrapText(text, maxTextDrawWidth);
    const textBlockHeight = wrappedLines.length * LINE_HEIGHT;
    const bubbleHeight = textBlockHeight + (BUBBLE_PADDING * 2);

    // 2. Determine Bubble Width (find the longest line in pixels)
    let maxLineWidth = 0;
    wrappedLines.forEach(line => {
        let currentLinePixelWidth = 0;
        line.forEach(wordObj => {
            ctx.font = wordObj.bold ? BOLD_FONT : NORMAL_FONT;
            const textWidth = ctx.measureText(wordObj.text).width;
            // Only consider the space if it's not the last element
            const spaceWidth = (line.indexOf(wordObj) < line.length - 1) ? ctx.measureText(' ').width : 0;
            currentLinePixelWidth += textWidth + spaceWidth;
        });
        if (currentLinePixelWidth > maxLineWidth) {
            maxLineWidth = currentLinePixelWidth;
        }
    });

    const bubbleWidth = Math.min(canvasWidth * MAX_MESSAGE_WIDTH_RATIO, maxLineWidth + (BUBBLE_PADDING * 2));

    // 3. Define Bubble Position and Color
    const bubbleColor = isUser ? '#e6f7f2' : '#fff'; // User: light green, AI: white
    const textColor = '#333'; // Dark text
    let bubbleX;
    
    if (isUser) {
        bubbleX = canvasWidth - CANVAS_PADDING - bubbleWidth;
    } else {
        bubbleX = CANVAS_PADDING;
    }

    // 4. Draw the Bubble (Rectangle with rounded corners)
    ctx.fillStyle = bubbleColor;
    ctx.beginPath();
    ctx.moveTo(bubbleX + BUBBLE_RADIUS, yStart);
    ctx.lineTo(bubbleX + bubbleWidth - BUBBLE_RADIUS, yStart);
    ctx.arcTo(bubbleX + bubbleWidth, yStart, bubbleX + bubbleWidth, yStart + BUBBLE_RADIUS, BUBBLE_RADIUS);
    ctx.lineTo(bubbleX + bubbleWidth, yStart + bubbleHeight - BUBBLE_RADIUS);
    ctx.arcTo(bubbleX + bubbleWidth, yStart + bubbleHeight, bubbleX + bubbleWidth - BUBBLE_RADIUS, yStart + bubbleHeight, BUBBLE_RADIUS);
    ctx.lineTo(bubbleX + BUBBLE_RADIUS, yStart + bubbleHeight);
    ctx.arcTo(bubbleX, yStart + bubbleHeight, bubbleX, yStart + bubbleHeight - BUBBLE_RADIUS, BUBBLE_RADIUS);
    ctx.lineTo(bubbleX, yStart + BUBBLE_RADIUS);
    ctx.arcTo(bubbleX, yStart, bubbleX + BUBBLE_RADIUS, yStart, BUBBLE_RADIUS);
    ctx.closePath();
    ctx.fill();

    // 5. Draw the Text inside the Bubble
    const textStartX = bubbleX + BUBBLE_PADDING;
    const textStartY = yStart + BUBBLE_PADDING + FONT_SIZE;
    drawTextLines(wrappedLines, textStartX, textStartY, textColor);
    
    return bubbleHeight + CANVAS_PADDING; // Total space taken by message including bottom margin
}

// Helper to estimate height without drawing (used for scroll bounding)
function getMessageRenderHeight(msg) {
    const canvasWidth = canvas.width;
    const maxTextDrawWidth = canvasWidth * MAX_MESSAGE_WIDTH_RATIO - (BUBBLE_PADDING * 2);
    
    // Use the same wrapping logic to get accurate line count
    const wrappedLines = wrapText(msg.text, maxTextDrawWidth);
    const textBlockHeight = wrappedLines.length * LINE_HEIGHT;
    
    return textBlockHeight + (BUBBLE_PADDING * 2) + CANVAS_PADDING; // height + padding + margin
}


// Main drawing function: Clears canvas and redraws all messages
function drawAll() {
    // Only proceed if canvas dimensions are valid
    if (canvas.width <= 0 || canvas.height <= 0) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the entire canvas

    let currentY = CANVAS_PADDING + scrollYOffset;
    contentTotalHeight = 0; // Reset content height for recalculation

    // Draw from old to new, top to bottom
    chatHistory.forEach(msg => {
        const messageHeight = getMessageRenderHeight(msg); // Get actual height
        
        // Only draw if the message is within the visible canvas area
        if (currentY + messageHeight > 0 && currentY < canvas.height) {
            drawMessage(msg, currentY);
        }
        currentY += messageHeight;
        contentTotalHeight += messageHeight;
    });

    // Draw placeholder if no messages
    if (chatHistory.length === 0) {
        ctx.fillStyle = '#666';
        ctx.font = NORMAL_FONT;
        ctx.textAlign = 'center';
        ctx.fillText("Start a conversation with Hare Krishna AI!", canvas.width / 2, canvas.height / 2);
        ctx.textAlign = 'left'; // Reset for other drawing operations
    }
}

// Scroll to the bottom when a new message is added or on initial load
function scrollToBottom() {
    // Calculate the total required height for all content
    let totalRenderedHeight = CANVAS_PADDING; // Start with top padding
    chatHistory.forEach(msg => {
        totalRenderedHeight += getMessageRenderHeight(msg);
    });

    const viewableHeight = canvas.height;
    // Max scroll is the difference between total content height and viewable area
    const maxScroll = Math.max(0, totalRenderedHeight - viewableHeight);
    
    // scrollYOffset is negative when content is scrolled up
    scrollYOffset = -maxScroll; 
    drawAll();
}

/**
 * Adds a new message to the chat history, updates local storage, and redraws the canvas.
 * @param {string} text - The message content.
 * @param {string} sender - 'user' or 'ai'.
 * @param {boolean} [skipScroll=false] - Optional flag to prevent immediate scrolling.
 */
function addMessage(text, sender, skipScroll = false) {
    const newMessage = {
        text: text,
        sender: sender,
    };
    
    chatHistory.push(newMessage);
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));

    drawAll();
    if (!skipScroll) {
        scrollToBottom();
    }
}


/* --------------------------
4. AI Logic and Processing
---------------------------- */

/**
 * Normalizes and cleans the user input.
 * @param {string} text - The raw user input.
 * @returns {string} The processed input.
 */
function normalizeInput(text) {
    let input = text.toLowerCase().trim();
    
    // Simple misspelling correction
    const words = input.split(/\s+/);
    const correctedWords = words.map(word => misspellings[word] || word);
    input = correctedWords.join(' ');

    // Remove common punctuation for better keyword matching
    input = input.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g,"");
    input = input.replace(/\s{2,}/g," "); // Replace multiple spaces with single space

    return input;
}


/**
 * Core function to generate the AI response based on the input.
 * @param {string} input - The normalized user input.
 * @returns {string} The AI's response text.
 */
function getAIResponse(input) {
    // 1. Dynamic Learning Check (e.g., "my name is X")
    for (const keyword of DYNAMIC_LEARNING_KEYWORDS) {
        if (input.includes(keyword)) {
            const pattern = new RegExp(`.*${keyword}\\s*([\\w\\s]+).*`, 'i');
            const match = input.match(pattern);
            if (match && match[1].trim()) {
                const value = match[1].trim();
                dynamicLearning[keyword] = value;
                localStorage.setItem('dynamicLearning', JSON.stringify(dynamicLearning));
                return `Got it! I will remember that ${keyword} ${value}. 😊`;
            }
        }
    }

    // 2. Casual/Hardcoded Responses
    for (const entry of casualResponses) {
        if (entry.keywords.some(k => input.includes(k))) {
            return entry.responses[Math.floor(Math.random() * entry.responses.length)];
        }
    }
    
    // 3. Knowledge Base (Vector Similarity)
    const inputVector = generateInputVector(input);
    let bestMatch = { similarity: 0, response: null };

    knowledge.forEach(item => {
        // Skip items without vectors
        if (!item.vector || item.vector.length === 0) return; 

        const similarity = cosineSimilarity(inputVector, item.vector);
        if (similarity > bestMatch.similarity) {
            bestMatch.similarity = similarity;
            bestMatch.response = item.answers[Math.floor(Math.random() * item.answers.length)];
        }
    });

    if (bestMatch.similarity >= SIMILARITY_THRESHOLD && bestMatch.response) {
        // Add random emoji to the response
        const emoji = aiResponseEmojis[Math.floor(Math.random() * aiResponseEmojis.length)];
        return `${bestMatch.response} ${emoji}`;
    }

    // 4. Default Fallback
    return "I am still learning and don't have enough knowledge to answer that question. Can you ask me something else about India?";
}

/**
 * Handles the full AI response flow: get input, process, get AI answer, display both.
 * @param {string} rawInput - The user's raw input from the text field.
 */
function processAIResponse(rawInput) {
    if (!rawInput.trim()) return;

    // Display User Message
    addMessage(rawInput.trim(), 'user');

    // Process and Get AI Response
    const normalizedInput = normalizeInput(rawInput);
    const aiResponseText = getAIResponse(normalizedInput);

    // Display AI Message
    addMessage(aiResponseText, 'ai');
}


/* --------------------------
5. Event Handlers and Initialization
---------------------------- */

/**
 * Handles the click or keypress event to send a message.
 */
function handleUserInput() {
    const input = userInput.value;
    if (input.trim() !== '') {
        processAIResponse(input);
        userInput.value = ''; // Clear input field
    }
    userInput.focus();
}

/**
 * Ensures the canvas always fits the chat area between the header and input field.
 */
function resizeCanvas() {
    const chatContainer = canvas.parentElement;
    const chatContainerHeight = chatContainer.clientHeight;
    
    const newHeight = chatContainerHeight - HEADER_HEIGHT_PX - INPUT_AREA_HEIGHT_PX;
    const newWidth = chatContainer.clientWidth;

    // Only resize and redraw if dimensions have changed
    if (newHeight !== canvas.height || newWidth !== canvas.width || newHeight !== lastKnownCanvasHeight) {
        canvas.width = newWidth;
        canvas.height = newHeight;
        lastKnownCanvasHeight = newHeight;
        drawAll();
        // Since resize can change total viewable height, always ensure scroll is right
        scrollToBottom(); 
    }
}

/**
 * Sets up all event listeners and initial state after data is loaded.
 */
function initializeUI() {
    // Ensure the canvas is sized correctly on load and resize
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas(); // Initial resize

    // Input Events
    sendBtn.addEventListener('click', handleUserInput);
    userInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevents a new line in the input field
            handleUserInput();
        }
    });

    // Scrolling (using the mousewheel on the canvas itself)
    canvas.addEventListener('wheel', (event) => {
        event.preventDefault(); // Prevent page scroll
        
        // Adjust scroll offset based on wheel delta
        scrollYOffset += event.deltaY * 0.7; 
        
        // Calculate bounds
        const viewableHeight = canvas.height;
        let totalRenderedHeight = CANVAS_PADDING;
        chatHistory.forEach(msg => { totalRenderedHeight += getMessageRenderHeight(msg); });
        
        // The maximum *positive* scroll (i.e., offset) should be CANVAS_PADDING (when scrolled all the way up)
        // The minimum *negative* scroll offset is when the bottom of the content aligns with the bottom of the canvas view
        const minScrollOffset = viewableHeight - totalRenderedHeight - CANVAS_PADDING;
        
        // Clamp scrollYOffset within boundaries
        if (scrollYOffset > CANVAS_PADDING) scrollYOffset = CANVAS_PADDING;
        if (scrollYOffset < minScrollOffset) scrollYOffset = minScrollOffset;

        drawAll(); // Redraw with new scroll offset
    });


    // Menu Button Toggle
    menuBtn.addEventListener('click', () => {
        dropdownMenu.classList.toggle('show');
    });
    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (!event.target.closest('.menu-container')) {
            dropdownMenu.classList.remove('show');
        }
    });

    // Menu Action Handlers (Standard HTML DOM)
    document.getElementById('newChat').addEventListener('click', () => {
        localStorage.clear(); // Clear all local storage including learning
        window.location.reload(); // Reloads the page to start fresh
    });
    document.getElementById('clearChat').addEventListener('click', () => {
        chatHistory = [];
        localStorage.removeItem('chatHistory');
        // Now calls the canvas version of addMessage to re-render
        addMessage("Chat history cleared! Welcome back. I will remember your name. 😊", 'ai', true); 
    });
    document.getElementById('exportChat').addEventListener('click', () => {
        exportChatAsPDF(chatHistory);
        dropdownMenu.classList.remove('show'); // Close menu after action
    });

    // Initial message load and draw
    if (!chatHistory.length) {
        addMessage("Welcome! I am Hare Krishna AI, powered by Jay Sri Krishna AI. Ask me anything about India! ✨", 'ai', true);
    } 

    // Initial draw and scroll to bottom ensures everything is visible
    scrollToBottom(); // This function calls drawAll()
    userInput.focus(); // Focus the input field on load
}
