/**
 * Creates a print-friendly view of the chat history and triggers the browser's print dialog,
 * which enables a "Save as PDF" download option.
 * The output is styled to resemble a chat screenshot with detailed timestamps inside the bubbles.
 * @param {Array<Object>} chatHistory - The array of chat message objects.
 */
export function exportChatAsPDF(chatHistory) {
    if (chatHistory.length === 0) {
        console.error("Chat is empty. Nothing to export!");
        return;
    }

    // Create a unique file name for the PDF download prompt
    const now = new Date();
    const fileName = `Hare-Krishna-AI-Chat-${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}_${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}${now.getSeconds().toString().padStart(2, '0')}.pdf`;

    // 1. Create the custom header content
    const headerHtml = `
        <div class="pdf-header">
            <h2>Hare Krishna AI 
                <span class="sub-heading">powered By Jay Sri Krishna AI</span>
            </h2>
            <p>${now.toLocaleDateString()} ${now.toLocaleTimeString()}</p>
        </div>
    `;

    // 2. Create the message content
    let messagesHtml = '<div id="print-chatbox">';
    chatHistory.forEach(msg => {
        // Remove <b> and <br> tags for cleaner text inside the bubble
        const cleanedText = msg.text.replace(/<br>/g, '\n').replace(/<\/?b>/g, '');

        // Structure the message with text and timestamp inside the bubble, removing the "You" / "AI" labels
        messagesHtml += `
            <div class="message ${msg.sender}">
                <div class="message-text">${cleanedText}</div>
                <div class="timestamp">${msg.timestamp}</div>
            </div>
        `;
    });
    messagesHtml += '</div>';

    // 3. Construct the full HTML document with updated styles
    const printContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>${fileName}</title>
            <link rel="stylesheet" href="css/style.css"> 
            <style>
                /* CSS specific to the print window to ensure correct rendering */
                @page { margin: 15mm; }
                body { 
                    font-family: 'Inter', sans-serif;
                    margin: 0; 
                    padding-top: 60px; /* Space for fixed header */
                    background: white; 
                    color: black; 
                }
                /* Chat-like container */
                #print-chatbox {
                    display: flex;
                    flex-direction: column;
                    gap: 15px; /* Increased gap for visual separation */
                    padding: 20px;
                    background-color: #f7f7f7; /* Light background for a "screenshot" feel */
                }
                /* Base message styling (the bubble) */
                .message {
                    padding: 10px 12px;
                    border-radius: 20px; /* More rounded for a modern chat look */
                    max-width: 80%;
                    line-height: 1.4;
                    white-space: pre-wrap; /* Preserve newlines */
                    font-size: 14px;
                    position: relative; /* To contain timestamp */
                }
                
                /* Text content within the bubble */
                .message-text {
                    margin-bottom: 5px; /* Space above timestamp */
                    word-wrap: break-word; /* Ensure long words wrap */
                }

                /* User (Question) Bubble Style */
                .message.user {
                    background-color: #007aff; /* iOS/modern blue */
                    color: white;
                    align-self: flex-end;
                    border-bottom-right-radius: 5px; /* Tail effect on bottom corner */
                }
                /* AI (Answer) Bubble Style */
                .message.ai {
                    background-color: #e5e5ea; /* iOS/modern light gray */
                    color: black;
                    align-self: flex-start;
                    border-bottom-left-radius: 5px; /* Tail effect on bottom corner */
                }
                
                /* Timestamp inside the bubble, at the bottom-right/left */
                .timestamp {
                    font-size: 10px;
                    margin-top: 2px; /* Small separation from text */
                }
                .message.user .timestamp { 
                    text-align: right; 
                    color: rgba(255, 255, 255, 0.7); /* Lighter color on dark background */
                }
                .message.ai .timestamp { 
                    text-align: left; 
                    color: #8c8c8c; /* Darker color on light background */
                }
                /* Styles for pdf-header are in style.css and will be linked */
            </style>
        </head>
        <body>
            ${headerHtml}
            ${messagesHtml}
            <script>
                // Self-destruct function to clean up the print window
                window.onafterprint = function() {
                    window.close();
                };
                // Use a timeout to ensure CSS is loaded before printing, and trigger print dialog
                setTimeout(() => window.print(), 250);
            </script>
        </body>
        </html>
    `;

    // 4. Create and open a temporary window to hold the content
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    if (!printWindow) {
        console.error("Popup blocked! Please allow popups for this site to export the chat.");
        alert("Popup blocked! Please allow popups for this site to export the chat.");
        return;
    }
    printWindow.document.write(printContent);
    printWindow.document.close();
}
