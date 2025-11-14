/* --------------------------
1. Knowledge Base (Original 7 Items Only)
---------------------------- */
const knowledge = [
  // Original 7 items (India-focused)
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
  {keywords:["hi","hello","hey"], responses:["Hello! How’s it going?","Hey! What’s up?"]},
  {keywords:["how are you"], responses:["I am fine, thanks! How are you?"]},
  {keywords:["thank you","thanks"], responses:["You’re welcome!","Anytime!"]}
];

let sessionMemory = []; 
let dynamicMemory = JSON.parse(localStorage.getItem("dynamicMemory")) || [];

function learnNewInfo(key,value){
  dynamicMemory.push({key:key.toLowerCase(), value:value});
  localStorage.setItem("dynamicMemory", JSON.stringify(dynamicMemory));
}
function validateName(name){return /^[a-zA-Z\s\-]{1,50}$/.test(name);} 

/* --------------------------
3. Core AI Logic (Vector Matching)
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
function rewriteAnswer(text,userQuestion){
  if(userQuestion===userQuestion.toUpperCase()) text=text.toUpperCase();
  else text=text.charAt(0).toUpperCase()+text.slice(1);
  return text.replace(/\s+/g, ' ').trim();
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

  // 3. Semantic vector search
  const qVec=sentenceToVector(qLower);
  let best=null, bestScore=0;
  for(let item of knowledge){let s=cosine(qVec,item.vector); if(s>bestScore){bestScore=s; best=item;}}
  if(best && bestScore>0.2){return best.answers.map(a=>rewriteAnswer(a,question));}
  
  return ["Sorry! I don’t have knowledge about that topic in my offline memory. You can try teaching me something."];
}


/* --------------------------
4. Chat and Feature Functions
---------------------------- */
function addMessage(text,sender){
    const chat=document.getElementById("chatbox"); 
    const msg=document.createElement("div");
    msg.className="message "+sender;
    msg.textContent=text;
    chat.appendChild(msg);
    chat.scrollTop=chat.scrollHeight;
    sessionMemory.push({sender: sender, text: text, timestamp: new Date().toLocaleString()});
}

function addMultipleMessages(msgs){
    let i=0;
    function sendNext(){
        if(i>=msgs.length) return; 
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
    addMessage(q,"user");
    addMultipleMessages(generateAnswer(q));
    input.value=""; // Clear the textarea
}

function clearChat() {
    document.getElementById("chatbox").innerHTML = "";
    sessionMemory = [];
}

function newChat() {
    if (sessionMemory.length > 0) {
        if (!confirm("Are you sure you want to start a new chat? The current conversation will be lost.")) {
            return;
        }
    }
    clearChat();
}

function exportChat() {
    if (sessionMemory.length === 0) {
        alert("The chat is empty. Nothing to export!");
        return;
    }
    let chatText = `--- Hare Krishna AI Conversation Export ---\n\n`;
    sessionMemory.forEach(msg => {
        const senderLabel = msg.sender === 'user' ? 'You' : 'AI';
        chatText += `[${msg.timestamp}] ${senderLabel}: ${msg.text}\n\n`;
    });
    const blob = new Blob([chatText], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `Hare_Krishna_AI_Chat_Export_${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    addMessage("Chat successfully exported!", "ai");
}

/* --------------------------
5. Event Listeners and Initialization
---------------------------- */
document.addEventListener('DOMContentLoaded', () => {
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

    // Input Handlers
    document.getElementById('sendBtn').addEventListener('click', askAI);
    
    // ENTER KEY SUBMISSION IS DISABLED
});
