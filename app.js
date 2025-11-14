/* --------------------------
1. Knowledge Base (Extracted and Combined)
---------------------------- */
const knowledge = [
  // Factual Knowledge (Original 7 Items)
  {topic:"India Area", answers:["India covers an area of about 3.287 million square kilometres. This makes it the 7th largest country in the world by land area."], vector:[1,0,0,0,0,0,0]},
  {topic:"India Capital", answers:["The capital of India is New Delhi. It serves as the seat of the government."], vector:[1,0,0,0,0,0,1]},
  {topic:"Uttar Pradesh Population", answers:["Uttar Pradesh has a population of over 240 million people, making it the most populous state in India."], vector:[0,1,0,0,0,0,0]},
  {topic:"Ganga River", answers:["The Ganga is the longest and most sacred river of India. Originating from the Gangotri Glacier in the Himalayas."], vector:[0,0,0,1,0,0,0]},
  {topic:"Himalayas", answers:["The Himalayas are the highest mountain range on Earth. Stretching across northern India, Nepal, Bhutan, and Tibet."], vector:[0,0,0,0,1,0,0]},
  {topic:"Thar Desert", answers:["The Thar Desert, also known as the Great Indian Desert, is in northwestern India, mainly Rajasthan."], vector:[0,0,0,0,0,1,0]},
  {topic:"Andaman Nicobar Climate", answers:["The Andaman and Nicobar Islands have a tropical climate. Monsoon season occurs from June to September."], vector:[0,0,0,0,0,0,1]}
];

/* --------------------------
2. Casual conversation and Memory (Preserved)
---------------------------- */
const casualResponses = [
  // Casual Responses (Extracted)
  {keywords:["hi","hello","hey"], responses:["Hello! How’s it going?","Hey! What’s up?"]},
  {keywords:["how are you"], responses:["I am fine, thanks! How are you?"]},
  {keywords:["thank you","thanks"], responses:["You’re welcome!","Anytime!"]}
];

// --- PERSISTENCE CHANGE: Load history from localStorage or start fresh ---
let chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || []; 
let dynamicMemory = JSON.parse(localStorage.getItem("dynamicMemory")) || [];

function learnNewInfo(key,value){
  dynamicMemory.push({key:key.toLowerCase(), value:value});
  localStorage.setItem("dynamicMemory", JSON.stringify(dynamicMemory));
}
function validateName(name){return /^[a-zA-Z\s\-]{1,50}$/.test(name);} 

/* --------------------------
3. Core AI Logic (Vector Matching & Realism)
---------------------------- */
function sentenceToVector(sentence){
  sentence = sentence.toLowerCase();
  let vec=[0,0,0,0,0,0,0]; // 7 dimensions
  if(sentence.includes("india") && sentence.includes("area")) vec[0]=1;
  if(sentence.includes("capital") || sentence.includes("delhi")) vec[1]=1;
  if(sentence.includes("population") || sentence.includes("people")) vec[2]=1;
  if(sentence.includes("river") || sentence.includes("ganga")) vec[3]=1;
  if(sentence.includes("mountain") || sentence.includes("himalayas")) vec[4]=1;
  if(sentence.includes("desert") || sentence.includes("thar")) vec[5]=1;
  if(sentence.includes("climate") || sentence.includes("andaman")) vec[6]=1;
  return vec;
}
function cosine(a,b){let dot=0,na=0,nb=0;for(let i=0;i<a.length;i++){dot+=a[i]*b[i];na+=a[i]*a[i];nb+=b[i]*b[i];}return dot/(Math.sqrt(na)*Math.sqrt(nb)+Math.sqrt(nb)*0.0001);}

/**
 * Enhanced Realism Logic: Rewrites the answer based on the user's question's tone (capitalization).
 */
function rewriteAnswer(text,userQuestion){
  // If the user's entire question is uppercase (YELLING/emphatic), use uppercase for the answer.
  if(userQuestion===userQuestion.toUpperCase() && userQuestion.length > 5) {
      text=text.toUpperCase();
  }
  // Otherwise, ensure the answer starts with a capital letter (standard sentence case).
  else {
      text=text.charAt(0).toUpperCase()+text.slice(1);
  }
  return text.replace(/\s+/g, ' ').trim(); // Clean up whitespace
}

function generateAnswer(question){
  const qLower=question.toLowerCase().trim();
  if(!qLower) return ["Please ask something!"];

  // 1. Casual Responses
  for(let item of casualResponses){for(let kw of item.keywords){if(qLower.includes(kw)){return [item.responses[Math.floor(Math.random()*item.responses.length)]];}}}

  // 2. Check dynamic memory & Teaching Logic
  let teachMatch=question.match(/my (.+?) (is|in) (.+)/i);
  if(teachMatch){
    let key=teachMatch[1].trim(), value=teachMatch[3].trim();
    learnNewInfo(key,value); 
    return ["Got it! I will remember your "+key+" is "+value];
  }
  for(let m of dynamicMemory){if(qLower.includes(m.key)) return ["I remember! Your " + m.key + " is " + m.value];}

  // 3. Semantic vector search (Enhanced to handle multiple topics)
  const qVec = sentenceToVector(qLower);
  const matchedTopics = [];
  const MATCH_THRESHOLD = 0.2; 

  for(let item of knowledge){
    let score = cosine(qVec, item.vector);
    if(score > MATCH_THRESHOLD){
      matchedTopics.push(item);
    }
  }

  if (matchedTopics.length > 0) {
    if (matchedTopics.length > 1) {
      // Logic for COMPOUND/MULTIPLE questions: Combine answers into one structured response
      let response = "I found information on a few topics you mentioned:\n\n";
      
      matchedTopics.forEach((topic, index) => {
          const topicAnswer = topic.answers.map(a => rewriteAnswer(a, question)).join(" ");
          response += (index + 1) + ". " + topicAnswer + "\n";
      });
      
      return [response.trim()];

    } else {
      // Logic for SINGLE question: return the answer simply
      return matchedTopics[0].answers.map(a => rewriteAnswer(a, question));
    }
  }
  
  // 4. Default response
  return ["Sorry! I don’t have knowledge about that topic in my offline memory. You can try teaching me something."];
}


/* --------------------------
4. Chat and Feature Functions (Updated for Persistence)
---------------------------- */
function addMessage(text, sender, isFromHistory = false){
    const chat=document.getElementById("chatbox"); 
    const msg=document.createElement("div");
    msg.className="message "+sender;
    msg.textContent=text;
    chat.appendChild(msg);
    chat.scrollTop=chat.scrollHeight;
    
    // Only save new messages to history/localStorage
    if (!isFromHistory) {
      const newEntry = {sender: sender, text: text, timestamp: new Date().toLocaleString()};
      chatHistory.push(newEntry);
      localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
    }
}

function addMultipleMessages(msgs){
    let i=0;
    function sendNext(){
        if(i>=msgs.length) return; 
        // Post new messages (isFromHistory is false by default)
        addMessage(msgs[i],"ai"); 
        i++; 
        setTimeout(sendNext,500 + Math.random()*400);
    } 
    sendNext();
}

function askAI(){
    const input=document.getElementById("userInput"); 
    const q=input.value.trim();
    if(!q)return;
    // Post user message and save
    addMessage(q,"user");
    addMultipleMessages(generateAnswer(q));
    input.value=""; // Clear the textarea
}

function clearChat() {
    if (confirm("Are you sure you want to clear the entire chat history?")) {
        document.getElementById("chatbox").innerHTML = "";
        // --- PERSISTENCE CHANGE: Clear localStorage and memory array ---
        chatHistory = [];
        localStorage.removeItem('chatHistory');
        addMessage("Chat history cleared!", "ai", true); // Post message but don't save it
    }
}

function newChat() {
    if (chatHistory.length > 0) {
        if (!confirm("Are you sure you want to start a new chat? The current conversation will be lost.")) {
            return;
        }
    }
    // --- PERSISTENCE CHANGE: Clear localStorage and memory array ---
    document.getElementById("chatbox").innerHTML = "";
    chatHistory = [];
    localStorage.removeItem('chatHistory');
    // We don't post a message here as per your original requirement of no welcome message.
}

function exportChat() {
    if (chatHistory.length === 0) {
        alert("The chat is empty. Nothing to export!");
        return;
    }
    let chatText = `--- Hare Krishna AI Conversation Export ---\n\n`;
    chatHistory.forEach(msg => {
        const senderLabel = msg.sender === 'user' ? 'You' : 'AI';
        // Note: Using the timestamp saved in the history object
        chatText += `[${msg.timestamp}] ${senderLabel}: ${msg.text}\n\n`;
    });
    const blob = new Blob([chatText], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `Hare_Krishna_AI_Chat_Export_${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    addMessage("Chat successfully exported!", "ai", true); // Post message but don't save it
}

/* --------------------------
5. Event Listeners and Initialization
---------------------------- */
document.addEventListener('DOMContentLoaded', () => {
    
    // --- PERSISTENCE CHANGE: LOAD HISTORY ON DOM LOAD ---
    chatHistory.forEach(entry => {
        // Render existing messages, setting the flag 'true' so they aren't resaved.
        addMessage(entry.text, entry.sender, true);
    });

    // Dropdown Menu Toggle
    document.getElementById('menuBtn').addEventListener('click', (e) => {
        e.stopPropagation(); 
        document.getElementById('dropdownMenu').classList.toggle('show');
    });

    // Close menu when clicking outside
    document.body.addEventListener('click', (e) => {
        const menu = document.getElementById('dropdownMenu');
        if (menu.classList.contains('show')) {
            if (!document.getElementById('menuBtn').contains(e.target) && !menu.contains(e.target)) {
                menu.classList.remove('show');
            }
        }
    });

    // Menu Option Handlers
    document.getElementById('newChat').addEventListener('click', (e) => { e.preventDefault(); newChat(); });
    document.getElementById('clearChat').addEventListener('click', (e) => { e.preventDefault(); clearChat(); });
    document.getElementById('exportChat').addEventListener('click', (e) => { e.preventDefault(); exportChat(); });

    // Input Handlers: Send only on button click (Enter key submission is disabled)
    document.getElementById('sendBtn').addEventListener('click', askAI);
});
