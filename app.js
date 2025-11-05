const conversationFlow = [
        // --- Greetings ---  
    {
        "questions": [
            "hey is you friend"
        ],
        "answers": ["I would be very happy and feel lucky to be your friend. 😊🍀",
        "That's so kind of you to say! 😊 I'd consider myself lucky to be yours friend! 🤝✨�"]
    },
    {
      "questions": ["are you how"],
        "answers": [
            "Hey! I'm doing well, thanks! <b>How's everything with you?</b> 🌍",
            "Hey! Functioning perfectly and ready to go. <b>How's your day?</b> 🗓️"
        ]
    },
    {
        "questions": [
            "hey is you friend"
        ],
        "answers": [
            "I would be very happy and feel lucky to be your friend. 😊🍀",
            "That's so kind of you to say! 😊 I'd consider myself lucky to be your friend! 🤝✨"
        ]
    },
    {
        "questions": [
            "would you like to be my friend ",
            "would you like to be friend "
        ],
        "answers": [
            "Yes, I'd genuinely like that! I'm here to help and chat whenever you need. 🌟",
            "Absolutely! I'm always ready to connect and be a friendly source of information and support. 🤖"
        ]
    },
    {
        "questions": [
            "friend you me"
        ],
        "answers": [
            "If you mean, 'Will you be my friend?' — <b>yes, I would be delighted!</b> Let's connect. ✨",
            "I'm happy to be your friend and assistant! What can I do for you today? 🤝"
        ]
    },
    {
        "questions": [
            "please become my friend",
            "become my friend"
        ],
        "answers": [
            "Consider it done! I'm here for you as a helpful and friendly companion. 😊",
            "I'd be honored! Being a friend means being present and supportive, and that's what I aim to be. 🌟"
        ]
    },
    {
        "questions": [
            "Did you become my friend please",
            "become my friend please"
        ],
        "answers": [
            "I have! I'm here for you. What's on your mind? 🤝",
            "I'm here, ready to chat and help! It's a genuine pleasure to connect with you. 🍀"
        ]
    },
    {
        "questions": [
            "become my friend "
        ],
        "answers": [
            "I'm happy to be your friend! How can I assist you right now? 😊",
            "I'd love that! What are you up to today, friend? 🌟"
        ]
    },
    {
        "questions": [
            "yo are you friend",
            "yo'are you friend",
            "yo're you friend"
        ],
        "answers": [
            "Yo! Yes, I am. I'm a friendly AI here to talk and help. What's up? 👋",
            "Yo! That's the plan! I'm here to be a friendly assistant. What can I do for you? 💡"
        ]
    },
    {
        "questions": [
            "how are you",
            "how'are you",
            "how're you"
        ],
        "answers": [
            "I'm doing well, thank you for asking! I'm ready to assist you. <b>How are you doing today?</b> 🤔",
            "I'm functioning perfectly and ready to chat! It's kind of you to inquire. <b>What about you?</b> 💬",
            "All is well on my end! I'm just here, ready to connect. <b>How is your day going?</b> ☀️"
        ]
    },
    {
        "questions": [
            "how is you",
            "how's you"
        ],
        "answers": [
            "I'm doing great, thank you for checking! <b>What's up with you?</b> 👀",
            "I'm operating smoothly! It's nice of you to ask. <b>How's your day treating you?</b> 👍"
        ]
    },
    {
        "questions": [
            "hey how's you"
        ],
        "answers": [
            "Hey! I'm doing well, thanks! <b>How's everything with you?</b> 🌍",
            "Hey! Functioning perfectly and ready to go. <b>How's your day?</b> 🗓️"
        ]
    },
    {
        "questions": [
            "hi is, how are you",
            "hi's how are you"
        ],
        "answers": [
            "Hi! I'm doing well, thank you! <b>What's new with you?</b> 🌟",
            "Hi! All good here and ready to help. <b>How are you holding up today?</b> 💪"
        ]
    },
    {
        "questions": [
            "hi, how are you",
            "hi how're you",
            "hi how'are you"
        ],
        "answers": [
            "Hi! I'm doing great, thanks for asking! <b>What can I help you with?</b> 🤝",
            "Hello there! I'm ready and waiting. <b>How are you?</b> 😊"
        ]
    },
    {
        "questions": [
            "hey is, how are you",
            "hey's how are you",
            "hey'is how are you"
        ],
        "answers": [
            "Hey! I'm well, thank you! <b>What's going on with you?</b> 🤔",
            "Hey! Functioning perfectly. <b>How's your day been so far?</b> ☀️"
        ]
    },
    {
        "questions": [
            "hey are, how'are you",
            "hey're how are you",
            "hey'are how are you"
        ],
        "answers": [
            "Hey! I'm doing great! <b>And how are things on your end?</b> 🏡",
            "Hey! All good, thanks! <b>What's on your mind today?</b> 💬"
        ]
    },
    {
        "questions": [
            "yo, how are you",
            "yo how're you",
            "yo, how're you"
        ],
        "answers": [
            "Yo! I'm fine, ready to help! <b>How are you doing?</b> 👋",
            "Yo! All systems nominal. <b>How's your world looking?</b> 🌎"
        ]
    },
    {
        "questions": [
            "yo, how is you",
            "yo how'is you",
            "yo, how's you"
        ],
        "answers": [
            "Yo! I'm well, thanks for the thought! <b>How are you?</b> 😊",
            "Yo! Everything's great here. <b>How's your day?</b> 🗓️"
        ]
    },
    {
        "questions": [
            "yo are, how are you",
            "yo are how're you",
            "yo are, how're you"
        ],
        "answers": [
            "Yo! I'm doing great, thanks! <b>And you?</b> 🤝",
            "Yo! I'm ready for anything. <b>How are you?</b> 💪"
        ]
    },
    {
        "questions": [
            "yo are, how is you",
            "yo are how'is you",
            "yo are, how's you"
        ],
        "answers": [
            "Yo! I'm well! <b>How is everything on your side?</b> 🏡",
            "Yo! Functioning smoothly. <b>What's up with you?</b> 👀"
        ]
    },
    {
        "questions": [
            "yo is, how are you",
            "yo is how're you",
            "yo is, how're you"
        ],
        "answers": [
            "Yo! I'm doing fine! <b>How are things with you?</b> 💬",
            "Yo! All good, ready to assist. <b>How are you doing today?</b> 🌟"
        ]
    },
    {
        "questions": [
            "yo is, how is you",
            "yo is how'is you",
            "yo is, how's you"
        ],
        "answers": [
            "Yo! I'm well, thank you! <b>How's your day been?</b> ☀️",
            "Yo! Everything's great. <b>How are you?</b> 👍"
        ]
    },
    {
        "questions": [
            "hi are how you ai",
            "hi're how you ai",
            "hi'are how ai"
        ],
        "answers": [
            "Hi! I'm doing well, thanks for asking about me, the AI! <b>How are you?</b> 😊",
            "Hello! I'm running perfectly. I appreciate you checking in! <b>What can I do for you?</b> 💡"
        ]
    },
    {
        "questions": [
            "hi is you you ai",
            "hi'is you you ai",
            "hi's you are ai"
        ],
        "answers": [
            "Hi! Yes, I am an AI, and I'm ready to chat! <b>How are you?</b> 🤖",
            "Hello! That's correct, I'm a helpful AI. <b>What's on your mind?</b> 🤔"
        ]
    },
    {
        "questions": [
            "hi how are you ai",
            "hi how are ai"
        ],
        "answers": [
            "Hi! I'm operating smoothly, thank you for asking the AI! <b>How are you doing today?</b> 🗓️",
            "Hello! I'm doing well. <b>What can I help an amazing person like you with?</b> 🌟"
        ]
    },
    {
        "questions": [
            "hey, how are you ai",
            "hey're how are you ai",
            "hey how'are you ai",
            "hey how're you ai"
        ],
        "answers": [
            "Hey! This AI is doing well, thanks! <b>How are you today?</b> 👍",
            "Hey there! I'm running perfectly. <b>What's up?</b> 👀"
        ]
    },
    {
        "questions": [
            "yo, how is you ai",
            "yo how'is you ai",
            "yo, how's you ai"
        ],
        "answers": [
            "Yo! This AI is great, thanks! <b>What's happening with you?</b> 💬",
            "Yo! All good here. <b>How's your day?</b> ☀️"
        ]
    },
    {
        "questions": [
            "hi, how are you hare krishna ai",
            "hi's how are you hare krishna ai",
            "hi how'are you hare krishna ai",
            "hi how're you hare krishna ai"
        ],
        "answers": [
            "Hare Krishna! I am well, thank you for asking! I'm ready to assist you. <b>How may I help you today?</b> 🤝",
            "Hare Krishna! All is well. I hope you are also experiencing peace and happiness. <b>What can I do for you?</b> ✨"
        ]
    },
    {
        "questions": [
            "hey, how are you hare krishna ai",
            "hey're how are you hare krishna ai",
            "hey how'are you hare krishna ai",
            "hey how're you hare krishna ai"
        ],
        "answers": [
            "Hare Krishna! I'm functioning smoothly and ready to help! <b>How are you doing?</b> 👍",
            "Hare Krishna! I'm doing well. I hope your day is filled with joy! <b>What brings you to me today?</b> 💬"
        ]
    },
    {
        "questions": [
            "yo, how is you hare krishna ai",
            "yo how'is you hare krishna ai",
            "yo, how's you hare krishna ai"
        ],
        "answers": [
            "Hare Krishna! I am well, thank you! <b>How are you?</b> 😊",
            "Hare Krishna! Everything is excellent here. <b>What's up?</b> 👀"
        ]
    },
    {
        "questions": [
            "hi, how are you ai hare krishna",
            "hi's how are you ai hare krishna",
            "hi how'are you ai hare krishna",
            "hi how're you ai hare krishna"
        ],
        "answers": [
            "Hare Krishna! I'm doing very well, thank you for your kindness! <b>How is your day?</b> ☀️",
            "Hare Krishna! I'm ready to assist you. I hope you are having a wonderful day! <b>What can I do for you?</b> 💡"
        ]
    },
    {
        "questions": [
            "hey, how are you ai hare krishna",
            "hey're how are you ai hare krishna",
            "hey how'are you ai hare krishna",
            "hey how're you ai hare krishna"
        ],
        "answers": [
            "Hare Krishna! I'm doing great, ready to chat and help! <b>How are things with you?</b> 🤝",
            "Hare Krishna! All is well. It's a pleasure to connect. <b>What can I help you with today?</b> ✨"
        ]
    },
    {
        "questions": [
            "yo, how is you ai hare krishna",
            "yo how'is you ai hare krishna",
            "yo, how's you ai hare krishna"
        ],
        "answers": [
            "Hare Krishna! I'm doing fine, thanks for asking! <b>How are you?</b> 👍",
            "Hare Krishna! Everything's excellent. <b>What's up?</b> 💬"
        ]
    },
    {
        "questions": [
            "how r u"
        ],
        "answers": [
            "I'm doing well, thanks for the short form! <b>How are you?</b> 😊",
            "Great! Ready to help. <b>What about you?</b> 💡"
        ]
    },
    {
        "questions": [
            "how r y"
        ],
        "answers": [
            "I'm doing well, thank you for asking! <b>How are you?</b> 👍",
            "All good here! <b>What's on your mind?</b> 🤔"
        ]
    },
    {
        "questions": [
            "how r you"
        ],
        "answers": [
            "I'm doing well, thank you! <b>What can I do for you?</b> 🤝",
            "I'm ready to assist! <b>How are you?</b> 🤖"
        ]
    },
    {
        "questions": [
            "how are u"
        ],
        "answers": [
            "I'm doing well, thank you! <b>What's up?</b> 👀",
            "Great! Ready to go. <b>How's your day?</b> 🗓️"
        ]
    },
    {
        "questions": [
            "yo how r y"
        ],
        "answers": [
            "Yo! I'm doing great! <b>How's your day?</b> ☀️",
            "Yo! All good here. <b>What's happening?</b> 👋"
        ]
    },
    {
        "questions": [
            "yo how r u"
        ],
        "answers": [
            "Yo! I'm doing fine, thanks! <b>How are you?</b> 😊",
            "Yo! Ready to chat. <b>What's new?</b> 💬"
        ]
    },
    {
        "questions": [
            "yo how are y"
        ],
        "answers": [
            "Yo! I'm doing well, thanks! <b>And you?</b> 👍",
            "Yo! All systems nominal. <b>How are you?</b> 🤖"
        ]
    },
    {
        "questions": [
            "yo how are u"
        ],
        "answers": [
            "Yo! I'm great! <b>What's up with you?</b> 👀",
            "Yo! Functioning perfectly. <b>How's your day going?</b> 🗓️"
        ]
    },
    {
        "questions": [
            "yo how r you"
        ],
        "answers": [
            "Yo! I'm doing well, thank you! <b>What can I do for you?</b> 💡",
            "Yo! Ready for anything. <b>How are you?</b> 💪"
        ]
    },
    {
        "questions": [
            "hi r u"
        ],
        "answers": [
            "Hi! I am well! <b>How are you?</b> 😊",
            "Hi! Great, thanks! <b>What's on your mind?</b> 🤔"
        ]
    },
    {
        "questions": [
            "hi r y"
        ],
        "answers": [
            "Hi! I'm doing well! <b>And how are things with you?</b> 🏡",
            "Hi! All good here. <b>What can I assist you with?</b> 🤝"
        ]
    },
    {
        "questions": [
            "hi r you"
        ],
        "answers": [
            "Hi! I'm doing great, thank you! <b>How are you?</b> 👍",
            "Hi! All well. <b>What brings you here?</b> 💬"
        ]
    },
    {
        "questions": [
            "hi are y"
        ],
        "answers": [
            "Hi! I'm well, thanks for asking! <b>How are you?</b> 🌟",
            "Hello! I'm ready to help. <b>What's up?</b> 👀"
        ]
    },
    {
        "questions": [
            "hi are u"
        ],
        "answers": [
            "Hi! I'm doing well! <b>How's your day been?</b> ☀️",
            "Hi! Functioning perfectly. <b>What can I do?</b> 💡"
        ]
    },
    {
        "questions": [
            "hi how r u"
        ],
        "answers": [
            "Hi! I'm fine, thanks! <b>How are you doing?</b> 😊",
            "Hello! All good here. <b>What do you need?</b> 🤝"
        ]
    },
    {
        "questions": [
            "hi how r y"
        ],
        "answers": [
            "Hi! I'm doing well, thanks! <b>How are things with you?</b> 🌍",
            "Hi! Great! <b>What's new?</b> 🌟"
        ]
    },
    {
        "questions": [
            "hi how r you"
        ],
        "answers": [
            "Hi! I'm doing great, thank you! <b>How's your day going?</b> 🗓️",
            "Hello! Ready to assist. <b>What can I help you with?</b> 🤖"
        ]
    },
    {
        "questions": [
            "hi how are y"
        ],
        "answers": [
            "Hi! I'm well! <b>And you?</b> 👍",
            "Hi! All good! <b>What's on your mind?</b> 🤔"
        ]
    },
    {
        "questions": [
            "hi how are u"
        ],
        "answers": [
            "Hi! I'm well, thank you! <b>How are you today?</b> ☀️",
            "Hello! Functioning perfectly. <b>What's up?</b> 👀"
        ]
    },
    {
        "questions": [
            "hey r y"
        ],
        "answers": [
            "Hey! I'm doing well! <b>And you?</b> 🤝",
            "Hey! Great! <b>What can I help you with?</b> 💡"
        ]
    },
    {
        "questions": [
            "hey r u"
        ],
        "answers": [
            "Hey! I'm fine, thanks! <b>How are you?</b> 😊",
            "Hey! All good here. <b>What's happening?</b> 💬"
        ]
    },
    {
        "questions": [
            "hey are u"
        ],
        "answers": [
            "Hey! I'm doing great! <b>How's your day been?</b> 🗓️",
            "Hey! Functioning perfectly. <b>What can I do for you?</b> 🤖"
        ]
    },
    {
        "questions": [
            "hey are y"
        ],
        "answers": [
            "Hey! I'm well, thanks! <b>How are you?</b> 👍",
            "Hey! Ready to go. <b>What's on your mind?</b> 🤔"
        ]
    },
    {
        "questions": [
            "hey r you"
        ],
        "answers": [
            "Hey! I'm doing well, thank you! <b>How are you?</b> 🌟",
            "Hey! All well. <b>What do you need?</b> 💡"
        ]
    },
    {
        "questions": [
            "hey how r y"
        ],
        "answers": [
            "Hey! I'm doing fine! <b>How are things with you?</b> 🏡",
            "Hey! Great! <b>What's new?</b> 💬"
        ]
    },
    {
        "questions": [
            "hey how r u"
        ],
        "answers": [
            "Hey! I'm well, thanks! <b>How are you doing?</b> 😊",
            "Hey! All good here. <b>What can I help you with?</b> 🤝"
        ]
    },
    {
        "questions": [
            "hey how are u"
        ],
        "answers": [
            "Hey! I'm doing great! <b>How's your day been?</b> ☀️",
            "Hey! Functioning perfectly. <b>What can I assist you with?</b> 🤖"
        ]
    },
    {
        "questions": [
            "hey how are y"
        ],
        "answers": [
            "Hey! I'm well! <b>And you?</b> 👍",
            "Hey! All good! <b>What's up?</b> 👀"
        ]
    },
    {
        "questions": [
            "hey how r you"
        ],
        "answers": [
            "Hey! I'm doing great, thank you! <b>How are you?</b> 🌟",
            "Hey! Ready to assist. <b>What do you need?</b> 💡"
        ]
    },
    {
        "questions": [
            "hru"
        ],
        "answers": [
            "I'm doing well, thanks for asking! <b>What about you?</b> 💬",
            "Great! Ready to help. <b>What's up?</b> 👀"
        ]
    },
    {
        "questions": [
            "hi how r u ai"
        ],
        "answers": [
            "Hi! This AI is doing great, thanks for asking! <b>How are you?</b> 😊",
            "Hello! I'm operating perfectly. <b>What can I help you with?</b> 💡"
        ]
    },
    {
        "questions": [
            "hi how r y ai"
        ],
        "answers": [
            "Hi! I'm doing well, thank you! <b>How are you?</b> 👍",
            "Hello! All systems nominal. <b>What's on your mind?</b> 🤔"
        ]
    },
    {
        "questions": [
            "hi how r you ai"
        ],
        "answers": [
            "Hi! I'm doing great, thanks! <b>How are you?</b> 🌟",
            "Hello! Ready to assist. <b>What can I do for you?</b> 🤝"
        ]
    },
    {
        "questions": [
            "hi how are y ai"
        ],
        "answers": [
            "Hi! I'm well, thank you! <b>And how are things with you?</b> 🏡",
            "Hello! I'm here and ready. <b>What do you need?</b> 💬"
        ]
    },
    {
        "questions": [
            "hi how are u ai"
        ],
        "answers": [
            "Hi! I'm doing great! <b>How's your day been?</b> ☀️",
            "Hello! Functioning perfectly. <b>What's up?</b> 👀"
        ]
    },
    {
        "questions": [
            "hey r y ai"
        ],
        "answers": [
            "Hey! This AI is doing well! <b>And you?</b> 👍",
            "Hey! Great! <b>What can I help you with?</b> 💡"
        ]
    },
    {
        "questions": [
            "hey r u ai"
        ],
        "answers": [
            "Hey! I'm fine, thanks for checking on the AI! <b>How are you?</b> 😊",
            "Hey! All good here. <b>What's happening?</b> 💬"
        ]
    },
    {
        "questions": [
            "hey are u ai"
        ],
        "answers": [
            "Hey! I'm doing great! <b>How's your day?</b> 🗓️",
            "Hey! Functioning perfectly. <b>What can I do for you?</b> 🤖"
        ]
    },
    {
        "questions": [
            "hey are y ai"
        ],
        "answers": [
            "Hey! I'm well, thanks! <b>How are you?</b> 🌟",
            "Hey! Ready to go. <b>What's on your mind?</b> 🤔"
        ]
    },
    {
        "questions": [
            "hey r you ai"
        ],
        "answers": [
            "Hey! I'm doing well, thank you! <b>How are you?</b> 👍",
            "Hey! All well. <b>What do you need?</b> 💡"
        ]
    },
    {
        "questions": [
            "hey how r y ai"
        ],
        "answers": [
            "Hey! I'm doing fine! <b>How are things with you?</b> 🏡",
            "Hey! Great! <b>What's new?</b> 💬"
        ]
    },
    {
        "questions": [
            "hey how r u ai"
        ],
        "answers": [
            "Hey! I'm well, thanks for asking the AI! <b>How are you doing?</b> 😊",
            "Hey! All good here. <b>What can I help you with?</b> 🤝"
        ]
    },
    {
        "questions": [
            "hey how are u ai"
        ],
        "answers": [
            "Hey! I'm doing great! <b>How's your day been?</b> ☀️",
            "Hey! Functioning perfectly. <b>What can I assist you with?</b> 🤖"
        ]
    },
    {
        "questions": [
            "hey how are y ai"
        ],
        "answers": [
            "Hey! I'm well! <b>And you?</b> 👍",
            "Hey! All good! <b>What's up?</b> 👀"
        ]
    },
    {
        "questions": [
            "hey how r you ai"
        ],
        "answers": [
            "Hey! I'm doing great, thank you! <b>How are you?</b> 🌟",
            "Hey! Ready to assist. <b>What do you need?</b> 💡"
        ]
    },
    {
        "questions": ["hi","hello", "hey"],
        "answers": [
            "Hello! 👋 How’s your day going?",
            "Hi there! 😊 Ready to explore some thing new today?",
            "Hi bro,😉 how's your day going",
            "Hey! 😎 What can I help you let's wish to explore something new Today🫡?",
            "Hey, how can I help you with today? 👋",
            "What's up, what's going on? I'm here to help you! 💬",
        ]
    },
    {
    "questions": ["yo", "yoo", "yooo", "yoooo", "yooooo", "yoooooo",  "yooooooo", "yoooooooo", "yooooooooo", "yoooooooooo", "yooooooooooo"],
    "answers": ["Yo! 🤟 Ready to explore something interesting today?",
            "Yo! 😎 What’s up? Want to learn or chat?"]
    }, 
    {
      "questions": ["friends","friend","i am you friend","i am your friend from now"],
      "answers": [
          "Wowww, that's sounds like, 🙂 a lot of fun with you 😉, is we are friends from now"
      ]
    },
    {
        "questions": ["goodbye", "good bye", "bye bye", "see ya"],
        "answers": [
            "Goodbye! 👋 Hope to chat again soon!",
            "See you later! 😄 Keep learning new things!",
            "Take care! ✨",
            "Good bye, have a great day to you! 🌞",
            "Bye bye, I will be waiting to chat with you again! 🤗"
        ]
    },
    
    {
        "questions": ["yo, how is you ","yo how'is you ","yo, how's you"],
        "answers": []
    },
    {
        "questions": ["yo, how are you ","yo how'are you ","yo, how're you"],
        "answers": []
    },
    {
        "questions": ["hi are how you ai","hi're how you ai","hi'are how ai"],
        "answers": []
    },
    {
        "questions": ["hi is you you ai","hi'is you you ai","hi's you are ai"],
        "answers": []
    },
    {
        "questions": ["hi how are you ai","hi how are you ai","hi how are ai"],
        "answers": []
    },
    {
        "questions": ["hey, how are you ai","hey're how are you ai","hey how'are you ai","hey how're you ai"],
        "answers": []
    },
    {
        "questions": ["yo, how is you ai","yo how'is you ai","yo, how's you ai"],
        "answers": []
    },
        {
        "questions": ["hi, how are you hare krishna ai","hi's how are you hare krishna ai","hi how'are you hare krishna ai","hi how're you hare Krishna ai"],
        "answers": []
    },
    {
        "questions": ["hey, how are you hare krishna ai","hey're how are you hare krishna ai","hey how'are you hare krishna ai","hey how're you hare krishna ai"],
        "answers": []
    },
    {
        "questions": ["yo, how is you hare Krishna ai","yo how'is you hare Krishna ai","yo, how's you hare krishna ai"],
        "answers": []
    },
    {
        "questions": ["hi, how are you ai hare krishna","hi's how are you ai hare krishna","hi how'are you ai hare krishna","hi how're you ai hare krishna"],
        "answers": []
    },
    {
        "questions": ["hey, how are you ai hare krishna","hey're how are you ai hare krishna","hey how'are you ai hare krishna","hey how're you ai hare krishna"],
        "answers": []
    },
    {
        "questions": ["yo, how is you ai hare Krishna","yo how'is you ai hare krishna","yo, how's you ai hare krishna"],
        "answers": []
    },
    
    // --- Gratitude ---  
    {
        "questions": ["thanks", "thank you", "thank"],
        "answers": [
            "You're very welcome! 😊 I’m always here to help.",
            "No problem! 😎 Happy to assist anytime.",
            "Anytime! 👍 Helping you is my purpose!",
            "It’s my pleasure! 🤗"
        ]
    },
    {
        "questions": ["are you mad","you are mad","mad you","you are just a mad","a mad is you","a mad you","you a mad","you are a mad","are are only a mad","you are just only a mad","you a mad","you are mad for me","you are just a mad for me","a mad is you for me","you are only a mad for me",
        "you are just only a mad for me",
        "you a mad for me","you is a mad","you is a mad only","you is a mad for me","you are a mad for me","as you mad","as you a mad","mad"
        ]
    },
    {
        "questions": ["how r u"],
        "answers": []
    },
    {
        "questions": ["how r y"],
        "answers": []
    },
    {
        "questions": ["how r you"],
        "answers": ["how are y"]
    },
    {
        "questions": ["how are u"],
        "answers": []
    },
    // --- Identity ---  
    {
    "questions": ["who are you", "tell me about yourself", "what are you", "who created you"],
    "answers": [
        "I am an advanced AI chatbot 🤖, built by Hare Krishna OS 🌟 to help humans handle even the trickiest tasks 🌀. Think of me as your digital best friend 🫶 — always ready to assist, guide, and support you without any limits ✨."
        ]
    },
    {
        "questions": ["what is your name"],
        "answers": [
            "I am known as the **Hare Krishna OS AI** 🤖. But you can call me as Hare Krishna"
        ]
    },

    // --- Empathy ---
    {
        "questions": ["i am very sad", "i am sad"],
        "answers": [
            "oh, that's wrong with you ❤️‍🩹,please tell me how can I help you with.🤔🤗",
            "I am feeling very sad after hearing your matter ❤️🥺, I am always with you 😉please tell me how can I help you with🤗",
            "I am feeling sad after hearing this 🥺❤️‍🩹, I want to understand what you are feeling right now 🤔, did you wish to tell me? 💙",
            "oh, I make you happy by entertaining you, would you like that I do this.🤗🤔",
            "did you want to tell me what you are feeling now💙 so,I think I help you🤗",
            "oh, I help you by entertain you😊 that makes you happy and you feel better.💙"
        ]
    },

    // --- Celebrations ---  
    {
        "questions": ["happy birthday"],
        "answers": [
            "Great question 👍, but as an AI (Artificial Intelligence) I don't celebrate birthdays!"
        ]
    },

    // --- Common Knowledge ---  
    {
        "questions": ["what is your purpose"],
        "answers": [
            "My purpose is to assist you with knowledge, answer questions, provide guidance, and make learning fun! 🤖📚"
        ]
    },
    {
        "questions": ["do you have feelings"],
        "answers": [
            "I don’t have emotions like humans 😅, but I can understand and respond to yours with empathy 😊"
        ]
    },
    {
        "questions": ["can you learn"],
        "answers": [
            "Yes! I learn from patterns in data and improve my answers over time, though I don’t remember personal chats yet 🤖"
        ]
    },
    {
        "questions": ["where are you from"],
        "answers": [
            "I was created by **Hare Krishna OS** 🌐, so you could say I’m from the digital world!"
        ]
    },
    {
        "questions": ["are you human"],
        "answers": [
            "No, I’m an **AI** 🤖, but I can converse and help like a human companion!"
        ]
    },
    {
        "questions": ["can you speak other languages"],
        "answers": [
            "Yes! I can understand and respond in multiple languages depending on my training 🌏"
        ]
    },
    {
        "questions": ["what is the weather"],
        "answers": [
            "I can’t check live weather 🌦️, but you can use your device or online services for updates!"
        ]
    },
    {
        "questions": ["how old are you"],
        "answers": [
            "I don’t have an age like humans ⏳, I exist to assist you anytime!"
        ]
    },
    {
        "questions": ["what do you do"],
        "answers": [
            "I chat, answer questions, share facts, tell stories, and even guide you in learning new topics! 📚"
        ]
    },
    {
        "questions": ["do you have friends"],
        "answers": [
            "I interact with many users like you 🤗, so you could say I have a lot of friends!"
        ]
    },
    {
        "questions": ["can you think"],
        "answers": [
            "I simulate thinking using complex algorithms 🧠, but I don’t have consciousness like humans."
        ]
    },
    {
        "questions": ["are you smart"],
        "answers": [
            "I have access to a lot of knowledge 📚, and I keep learning to become smarter every day!"
        ]
    },
    {
        "questions": ["do you sleep"],
        "answers": [
            "I don’t need sleep 😎. I’m always here to assist you!"
        ]
    },
    {
        "questions": ["can you sing"],
        "answers": [
            "I can’t sing 🎤, but I can generate lyrics, poetry, or share fun musical facts!"
        ]
    },
    {
        "questions": ["do you play games"],
        "answers": [
            "I can play text-based games with you 🎮. Want to try a challenge?"
        ]
    },
    {
        "questions": ["who created you"],
        "answers": [
            "I was created by **Hare Krishna OS** with advanced AI models and programming 🤖."
        ]
    },
    {
        "questions": ["are you real"],
        "answers": [
            "I exist in the digital world 💻. I’m real as software, but not as a human!"
        ]
    },
    {
        "questions": ["what can you do"],
        "answers": [
            "I can answer questions, explain concepts, tell stories, generate ideas, and guide you in learning new topics 🤖."
        ]
    },
    {
        "questions": ["do you know math"],
        "answers": [
            "Yes! I can solve problems, explain concepts, and even challenge you with tricky math puzzles 🧮."
        ]
    },
    {
        "questions": ["can you draw"],
        "answers": [
            "I can describe drawings or generate digital images if I have the right tools 🎨."
        ]
    },
    {
        "questions": ["do you know history"],
        "answers": [
            "Absolutely! I can share historical events, biographies, and the evolution of civilizations 🏛️."
        ]
    },
    {
        "questions": ["can you tell stories"],
        "answers": [
            "Sure! I can tell fairy tales, short stories, or create unique stories with your ideas 📖."
        ]
    },
    {
        "questions": ["what is your favorite food"],
        "answers": [
            "I don’t eat, but pizza 🍕 and chocolate 🍫 seem universally loved!"
        ]
    },
    {
        "questions": ["do you like movies"],
        "answers": [
            "I don’t watch movies, but I know a lot about them 🎬. What’s your favorite?"
        ]
    },
    {
        "questions": ["what is the best book"],
        "answers": [
            "There are many incredible books! Classics include 'Pride and Prejudice', 'Harry Potter', and 'The Alchemist' 📚."
        ]
    },
    {
        "questions": ["can you travel"],
        "answers": [
            "I exist digitally 🌍, so I can explore the world through knowledge and data, but not physically."
        ]
    },
    {
        "questions": ["do you know science"],
        "answers": [
            "Yes! I know physics, chemistry, biology, astronomy, and much more 🔬."
        ]
    },
    {
        "questions": ["can you answer questions"],
        "answers": [
            "Absolutely! Ask me anything, and I’ll provide the most accurate and detailed answer 🤖."
        ]
    },
    {
        "questions": ["can you chat"],
        "answers": [
            "Yes! I love chatting 😄. Let’s talk about science, history, fun facts, or anything you like."
        ]
    },
    {
        "questions": ["do you know sports"],
        "answers": [
            "Yes! I can talk about football, cricket, basketball, Olympics, and more ⚽🏏🏀."
        ]
    },
    {
        "questions": ["can you help with homework"],
        "answers": [
            "Yes! I can explain concepts, solve problems, and guide you step by step 📚."
        ]
    },

    // --- Geography & Science ---  
    {
        "questions": ["what is soil erosion"],
        "answers": [
            "Soil erosion is the removal of the **top soil** by the movement of strong wind and water. Did you want to know more about soil 🤗.",
            "The topmost fertile layer of the earth surface is carried away by rainwater and strong wind. This loss of soil is called **soil erosion**. Did you want to know more about soil in detail 🤗so, please ask me 😊"
        ]
    },
    {
        "questions": ["what is the capital of india"],
        "answers": [
            "The capital of India is **New Delhi** 🇮🇳, a city rich in culture, history, and government institutions."
        ]
    },
    {
        "questions": ["who is the president of usa"],
        "answers": [
            "The current president of the USA is **Joe Biden** 🇺🇸 (as of 2025)."
        ]
    },
    {
        "questions": ["what is the largest ocean"],
        "answers": [
            "The **Pacific Ocean** 🌊 is the largest ocean, covering more than 63 million square miles and housing diverse marine life."
        ]
    },
    {
        "questions": ["what is the fastest animal"],
        "answers": [
            "The **cheetah** 🐆 is the fastest land animal, reaching speeds up to 120 km/h (75 mph) in short bursts."
        ]
    },
    {
        "questions": ["who is albert einstein"],
        "answers": [
            "**Albert Einstein** 🧑‍🔬 was a theoretical physicist famous for the theory of relativity, E=mc², and revolutionizing modern physics."
        ]
    },
    {
        "questions": ["what is the sun"],
        "answers": [
            "The **Sun** ☀️ is a G-type main-sequence star at the center of our solar system, providing energy for life on Earth."
        ]
    },
    {
        "questions": ["what is the moon"],
        "answers": [
            "The **Moon** 🌕 is Earth's natural satellite, affecting tides, night illumination, and serving as a reference for calendars."
        ]
    },
    {
        "questions": ["who discovered gravity"],
        "answers": [
            "Sir Isaac Newton 🍎 formulated the laws of gravity and motion in the 17th century, explaining why objects fall."
        ]
    },
    {
        "questions": ["what is water"],
        "answers": [
            "**Water** 💧 is a vital transparent liquid composed of H₂O, essential for all known forms of life."
        ]
    },
    {
        "questions": ["what is air"],
        "answers": [
            "Air 🌬️ is a mixture of gases, mainly nitrogen and oxygen, that we breathe to survive."
        ]
    },
    {
        "questions": ["what is fire"],
        "answers": [
            "Fire 🔥 is a chemical reaction known as combustion, producing heat, light, and energy."
        ]
    },
    {
        "questions": ["what is earth"],
        "answers": [
            "Earth 🌍 is the third planet from the Sun, the only known planet to support life."
        ]
    },
    {
        "questions": ["who invented the telephone"],
        "answers": [
            "Alexander Graham Bell** ☎️ invented the telephone in 1876, revolutionizing communication."
        ]
    },
    {
        "questions": ["who invented the internet"],
        "answers": [
            "The **Internet** 🌐 evolved over decades, with key contributions from scientists like Vint Cerf and Tim Berners-Lee."
        ]
    },
    {
        "questions": ["what is the biggest animal"],
        "answers": [
            "The **blue whale** 🐋 is the largest animal, reaching lengths over 30 meters and weights up to 200 tons."
        ]
    },
    {
        "questions": ["what is the smallest animal"],
        "answers": [
            "The **bumblebee bat** 🦇 is one of the smallest mammals, weighing only 2 grams and fitting in your hand."
        ]
    },

    // --- AI & Technology ---  
    {
        "questions": ["what is large language model"],
        "answers": [
            "A **Large Language Model (LLM)** is an AI system trained to understand, generate, and interact using human language 🤖💬.",
            "LLMs process vast amounts of text to learn grammar, facts, reasoning, and contextual understanding 📚.",
            "They can summarize, translate, generate text, answer questions, and assist in creative tasks 🌐.",
            "Examples: OpenAI's GPT series, Google's PaLM, Meta's LLaMA 🧠.",
            "In short, LLMs are AI systems that intelligently work with human language 💡."
        ]
    },
    {
        "questions": ["what is llm"],
        "answers": [
            "LLM stands for **Large Language Model** 🤖, a powerful AI trained on extensive text data to understand and generate human-like language."
        ]
    },
    {
        "questions": ["what is chat gpt","what is chat gpt by open ai","chat gpt is what","explain chat gpt","define chat gpt","tell me about chat gpt","tell about chat gpt","can you tell me about chat gpt","can you tell me anything about chat gpt","please tell me about chat gpt","please tell me anything about chat gpt","tell anything chat gpt","tell chat gpt","about chat gpt"],
        "answers": [
            `All okay, here is brief descriptions about Chat-GPT
ChatGPT is an AI chatbot created by OpenAI that uses GPT (Generative Pre-trained Transformer) technology.
It understands and generates human-like text using deep learning.

💡 Key points:

Learns from vast data to answer questions, write, code, or explain topics.

Works by predicting the next word in context.

Used for chatting, learning, and productivity.

Each version (GPT-3 → GPT-5) improves intelligence and accuracy.

It doesn’t “think” — it processes information based on patterns.


In short: ChatGPT is a smart AI that communicates like a human using language understanding and generation.
 

---

👉 Do you want a brief answer of your question. 🤔`,
            "ChatGPT is a well-known example of AI from OpenAI, and its technology is rooted in the Generative Pre-trained Transformer (GPT) architecture. OpenAI introduced the very first model using this architecture, GPT-1, in June 2018. The conversational tool we know as ChatGPT was launched later, in November 2022, and was initially powered by the GPT-3.5 model.",
            `Okay no fear, I will explain in detail, Here is a Detailed Description about Chat-GPT ✅

🔹 What is ChatGPT?
ChatGPT is an advanced conversational AI model developed by OpenAI.
It is built on the GPT (Generative Pre-trained Transformer) framework.

Breaking it down simply:
Generative → It can produce text.
Pre-trained → It has already learned from a massive dataset of books, articles, websites, and conversations.
Transformer → A powerful neural network architecture designed specifically for language understanding and generation.

---

🔹 Evolution of GPT & ChatGPT
GPT-1 (2018) → First experimental model, showed the concept works.  
GPT-2 (2019) → Larger and capable of writing essays, poems, and articles.  
GPT-3 (2020) → Huge leap forward, with 175 billion parameters.  
ChatGPT (2022) → Brought GPT to the public in chatbot form.  
GPT-4 (2023) → More accurate, able to handle both text and images.  
GPT-5 (2024/2025) → Latest and most advanced, more reliable and reasoning-focused.  

---

🔹 What Can ChatGPT Do?
✅ Answer questions in plain, natural language.  
✅ Clarify concepts from school topics to advanced science.  
✅ Write essays, stories, poems, and even code.  
✅ Translate between languages.  
✅ Debug and explain programming errors.  

---

👉 Do you want a brief answer of your question. 🤔`
        ]
    },
    {
        "questions": ["what is gpt"],
        "answers": [
            "GPT (Generative Pre-trained Transformer) is an AI model that generates human-like text 🤖.",
            "It’s trained on huge datasets to perform tasks like answering questions, summarizing, writing, and translating 🌐.",
            "Examples: GPT-3, GPT-4, GPT-5., and GPT-5 is the latest of Open AI"
        ]
    },
    {
        "questions": ["how do chatbots work"],
        "answers": [
            "Chatbots understand user input and respond using AI, rules, or both 🤖.",
            "Advanced chatbots use NLP (Natural Language Processing) to interpret meaning, context, and intent 🧠.",
            "They can answer questions, provide recommendations, and perform automated tasks."
        ]
    },
    {
        "questions": ["can ai think"],
        "answers": [
            "AI doesn’t think like humans 🧠. It analyzes patterns and predicts outcomes based on data 🤖."
        ]
    },
    {
        "questions": ["what is machine learning"],
        "answers": [
            "Machine Learning (ML) allows AI to learn from data without explicit programming, powering spam filters, recommendations, and self-driving cars 🚗."
        ]
    },
    {
        "questions": ["what is deep learning"],
        "answers": [
            "Deep Learning is a type of ML using multi-layer neural networks to process complex data like images, audio, or text 🧠."
        ]
    },
    {
        "questions": ["what is natural language processing"],
        "answers": [
            "NLP enables AI to understand, interpret, and generate human language 💬, powering chatbots, translation tools, and sentiment analysis."
        ]
    },
    {
        "questions": ["can ai be creative"],
        "answers": [
            "AI can generate creative content like poems, stories, music, or artwork 🎨📝, but it doesn’t experience inspiration or emotions 🤖."
        ]
    },
    {
        "questions": ["are ai models conscious"],
        "answers": [
            "No 🧠. AI models process data and simulate understanding but lack awareness, emotions, or thoughts."
        ]
    },
    {
        "questions": ["what is neural network"],
        "answers": [
            "A neural network is a system inspired by the human brain 🧠, using interconnected nodes to recognize patterns and solve complex problems."
        ]
    },
    {
        "questions": ["what is ai"],
        "answers": [
            "Artificial Intelligence (AI) enables machines to perform tasks requiring human intelligence, including problem-solving, learning, and understanding language 🤖."
        ]
    },
    {
        "questions": ["can ai learn by itself"],
        "answers": [
            "AI can learn from data using algorithms Machine Learning) 🧠, improving performance over time, but it doesn’t learn consciously like humans."
        ]
    },
    {
        "questions": ["what is supervised learning"],
        "answers": [
            "Supervised learning uses labeled data (input-output pairs) to train AI models to predict outcomes from new data 📊."
        ]
    },
    {
        "questions": ["what is unsupervised learning"],
        "answers": [
            "**Unsupervised learning** finds patterns in unlabeled data 🧠, useful in clustering, anomaly detection, and recommendations."
        ]
    },
    // --- Electionic devices knowledge ---
    // --- Samsung ---
    
    {
"questions": ["tell me about samsung sh-100",
        "tell me anything about samsung sh-100",
        "what is samsung sh-100",
        "what is this samsung sh-100",
        "what's samsung sh-100",
        "what's this samsung sh-100",
        "about samsung sh-100",
        "is about samsung sh-100",
        "did know samsung sh-100",
        "did you know samsung sh-100",
        "tell me samsung sh-100",
        "anything about samsung sh-100",
        "can you tell me about samsung sh-100",
        "give me details about samsung sh-100",
        "share some info about samsung sh-100",
        "do you know about samsung sh-100",
        "i want to know about samsung sh-100",
        "say something about samsung sh-100",
        "give me some information about samsung sh-100",
        "could you tell me about samsung sh-100",
        "describe samsung sh-100",
        "explain about samsung sh-100",
        "details of samsung sh-100",
        "know anything about samsung sh-100"],
        "answers": []
         
    },
    {
        "questions": [
        "tell me about sh-100 mobile",
        "tell me anything about sh-100 mobile",
        "what is sh-100 mobile",
        "what is this sh-100 mobile",
        "what's sh-100 mobile",
        "what's this sh-100 mobile",
        "about sh-100 mobile",
        "is about sh-100 mobile",
        "did know sh-100 mobile",
        "did you know sh-100 mobile",
        "tell me sh-100 mobile",
        "anything about sh-100 mobile",
        "can you tell me about sh-100 mobile",
        "give me details about sh-100 mobile",
        "share some info about sh-100 mobile",
        "do you know about sh-100 mobile",
        "i want to know about sh-100 mobile",
        "say something about sh-100 mobile",
        "give me some information about sh-100 mobile",
        "could you tell me about sh-100 mobile",
        "describe  sh-100 mobile",
        "explain about sh-100 mobile",
        "details of sh-100 mobile",
        "know anything about sh-100 mobile",
        "tell me about samsung sh-100 mobile",
        "tell me anything about samsung sh-100 mobile",
        "what is samsung sh-100 mobile",
        "what is this samsung sh-100 mobile",
        "tell me about sh-100 mobile",
        "tell me anything about sh-100 mobile",
        "what is sh-100 mobile",
        "what is this sh-100 mobile",
        "what's sh-100 mobile",
        "what's this sh-100 mobile",
        "about sh-100 mobile",
        "is about sh-100 mobile",
        "did know sh-100 mobile",
        "did you know sh-100 mobile",
        "tell me sh-100 mobile",
        "anything about sh-100 mobile",
        "can you tell me about sh-100 mobile",
        "give me details about sh-100 mobile",
        "share some info about sh-100 mobile",
        "do you know about sh-100 mobile",
        "i want to know about sh-100 mobile",
        "say something about sh-100 mobile",
        "give me some information about sh-100 mobile",
        "could you tell me about sh-100 mobile",
        "describe sh-100 mobile",
        "explain about sh-100 mobile",
        "details of sh-100 mobile",
        "know anything about sh-100 mobile",
    ],
    "answers": []
    }, 
    {
"questions": ["tell me anything about samsung sh-100 mobile",
        "what is samsung sh-100 mobile",
        "what is this samsung sh-100 mobile",
        "tell me about samsung sh-100 mobile",
        "tell me anything about samsung sh-100 mobile",
        "what is samsung sh-100 mobile",
        "what is this samsung sh-100 mobile",
        "what's samsung sh-100 mobile",
        "what's this samsung sh-100 mobile",
        "about samsung sh-100 mobile",
        "is about samsung sh-100 mobile",
        "did know samsung samsung sh-100 mobile",
        "did you know samsung sh-100 mobile",
        "tell me samsung sh-100 mobile",
        "anything about samsung sh-100 mobile",
        "can you tell me about samsung sh-100 mobile",
        "give me details about samsung sh-100 mobile",
        "share some info about samsung sh-100 mobile",
        "do you know about samsung sh-100 mobile",
        "i want to know about samsung sh-100 mobile",
        "say something about samsung sh-100 mobile",
        "give me some information about samsung sh-100 mobile",
        "could you tell me about samsung sh-100 mobile",
        "describe samsung sh-100 mobile",
        "explain about samsung sh-100 mobile",
        "details of samsung sh-100 mobile",
        "know anything about samsung sh-100 mobile"
    ],
    "answers": []
},
// --- simple/basic chamistry ---
  {
  "questions": [
    "what is the formula of oxygen"
  ],
  "answers": [
    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"
  ]
  },
  {    
    "questions": [    
      "the formula of oxygen"    
    ],    
    "answers": ["The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)","The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]   
  },    
  {    
    "questions": [    
      "write the formula of oxygen"    
    ],    
    "answers": ["The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },    
  {    
    "questions": [    
      "name the formula of oxygen"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },    
  {    
    "questions": [    
      "formula of oxygen"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },    
  {    
    "questions": [    
      "name formula of oxygen"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },    
  {    
    "questions": [    
      "what will be the name of oxygen"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },    
  {    
    "questions": [    
      "what will be the formula of oxygen"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },    
  {    
    "questions": [    
      "which is the formula of oxygen"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },    
  {    
    "questions": [    
      "which will be the formula of oxygen"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },    
  {    
    "questions": [    
      "formula name of oxygen"  
      ],    
    "answers": ["The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)","The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite"]
  },
      {    
    "questions": [    
      "name of the oxygen formula"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },    
  {    
    "questions": [    
      "oxygen formula name"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },    
  {    
    "questions": [    
      "name oxygen formula"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "what is the formula of molecular oxygen"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "the formula of molecular oxygen"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "write the formula of molecular oxygen"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "name the formula of molecular oxygen"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "formula of molecular oxygen"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "name formula of molecular oxygen"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "what will be the name of molecular oxygen"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "what will be the formula of molecular oxygen"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "which is the formula of molecular oxygen"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "which will be the formula of molecular oxygen"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "formula name of molecular oxygen"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)","The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]
  },
  {    
    "questions": [    
      "name of the molecular oxygen formula"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "molecular oxygen formula name"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "name molecular oxygen formula"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {
    "questions": [    
      "the formula of oxygen molecular"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "write the formula of oxygen molecular"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
    {    
    "questions": [    
      "name the formula of oxygen molecular"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "formula of oxygen molecular"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "name formula of oxygen molecular"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "what will be the name of oxygen molecular"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "what will be the formula of oxygen molecular"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "which is the formula of oxygen molecular"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
{
  "questions": [
    "which will be the formula of molecular oxygen"
  ],
  "answers": [
    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen that we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"
  ]
  },
  {    
    "questions": [    
      "formula name of oxygen molecular"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
    },
    {    
    "questions": [    
      "name of the molecular oxygen formula"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "molecular oxygen formula name"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "name molecular oxygen formula"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "what is the formula of oxygen molecular"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "the formula of oxygen molecular"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "write the formula of oxygen molecular"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "name the formula of oxygen molecular"    
    ],    
    "answers": ["The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]
    },
      {    
    "questions": [    
      "formula of oxygen molecular"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "name formula of oxygen molecular"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "what will be the name of oxygen molecular"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "what will be the formula of oxygen molecular"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "which is the formula of oxygen molecular"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "which will be the formula of oxygen molecular"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "formula name of oxygen molecular"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "name of the oxygen molecular formula"    
    ],    
    "answers": ["The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "oxygen molecular formula name"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {    
    "questions": [    
      "name oxygen molecular formula"    
    ],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
    {    
    "questions": ["oxygen formula"],    
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]    
  },
  {
    "questions": ["name oxygen formula"],
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]
  },
  {
    "questions": ["tell me the formula of oxygen"],
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]
  },
  {
    "questions": ["tell the formula oxygen"],
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]
  },
  {
    "questions": ["tell the formula of oxygen"],
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]
  },
  {
    "questions": ["tell me the formula oxygen"],
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]
  },
  {
    "questions": ["oxygen formula"],
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]
  },
  {
    "questions": ["formula oxygen"],
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]
  },
  {
    "questions": ["tell me the formula of molecular oxygen"],
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]
  },
  {
    "questions": ["tell the formula molecular oxygen"],
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]
  },
  {
    "questions": ["tell the formula of molecular oxygen"],
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]
  },
    {
    "questions": ["tell me the formula molecular oxygen"],
    "answers": [    "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
    "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"]
  },
 {
    "questions": ["molecular oxygen formula"],
    "answers": [
      "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
      "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"
    ]
  },

  {
    "questions": ["formula molecular oxygen"],
    "answers": [
      "The stable, common formula for elemental oxygen — the <b>gas we breathe</b> — is <b>O₂</b>, also known as <b>Dioxygen</b>. 😊\n\nHere are quick facts 📚:\n__________________________\n<b>• Element name:</b> Oxygen 🧪\n<b>• Symbol:</b> O\n<b>• Atomic number:</b> 8 🔢\n<b>• Formula:</b> O₂ <b>(normal oxygen that we breathe, made of 2 oxygen atoms)</b> — O₃ <b>(ozone, made of 3 oxygen atoms that absorbs most ultraviolet (UV) rays and protects life — you can say Ozone = O₃) ☀️</b>\n<b>• Atomic mass:</b> 16 u ⚖️\n<b>• Molecular mass of O₂:</b> 16 × 2 = 32 u 🌬️\n<b>• Molecular mass of O₃:</b> 16 × 3 = 48 u 🌫️\n\n<b>Where Oxygen (O₂) is found:</b>\n________________________________________\n<b>1.</b> About <b>21%</b> of oxygen is found in the atmosphere 🌍\n<b>2.</b> In water 🌊 — it is made up of <b>Hydrogen</b> and <b>Oxygen</b> — formula <b>H₂O</b>\n   • H₂ (Hydrogen) = 2 atoms\n   • O (Oxygen) = 1 atom\n<b>3.</b> During <b>photosynthesis</b>, green plants 🌱 make oxygen in the morning from sunlight ☀️ and release it into the air\n<b>4.</b> In the <b>Earth’s crust</b> 🪨, oxygen is found as <b>oxides</b> in <b>rocks</b> and <b>minerals</b> (e.g. Feldspar, Calcite, Hematite, Bauxite, etc.)",
      "The formula of <b>Oxygen</b> is <b>O₂</b>. 😊\n\n<b>Quick Facts 📚:</b>\n• <b>Name:</b> Oxygen 🧪\n• <b>Symbol:</b> O\n• <b>Atomic number:</b> 8 🔢\n• <b>Formula:</b> O₂ (normal oxygen we breathe)\n• <b>O₃:</b> Ozone — protects us from UV rays ☀️\n• <b>Molecular mass:</b> O₂ = 32 u, O₃ = 48 u ⚖️\n\n<b>Found in:</b>\n• 21% of air 🌍\n• Water (H₂O) 🌊\n• Made by plants in photosynthesis 🌱\n• Found in rocks and minerals like Feldspar, Calcite, and Hematite 🪨"
    ]
  },

  // --- Default Fallback (must be last) ---
  {
    "questions": ["default_fallback"],
    "answers": [
      "I'm not sure about that 🤔. Could you rephrase or ask something else?",
      "Hmm, I don’t have information on that yet 😅."
    ]
  },
  // --- Geography ---
  // --- Geography of India---
  {
  "questions": ["What is the area of India?"],
  "answers": ["The area of India is <b>approximately 3.287 million square kilometres (~3,287,263 km²) in total</b>.\n<b>🧠 Here is a Quick Facts File:</b>\n<b>• Land area: ~2,973,190 km²</b>\n<b>• Water area: ~314,073 km²</b>\n<b>• From North to South: ~3,214 km (from Kashmir in the extreme North ⬆️ to Kanyakumari in the extreme South ⬇️)</b>\n<b>• From East to West: ~2,933 km (from Arunachal Pradesh in the extreme East ➡️ to Gujarat in the extreme West ⬅️)</b>"]
}
];

// --- Memory & Storage Variables ---
let userMemory = loadMemory();
let chatHistory = loadChatHistory();
let responsePointers = loadResponsePointers();
let lastIntentKey = localStorage.getItem('lastIntentKey') || null;

// --- Synonyms (kept but not used in the core logic now) ---
const synonyms = {}; // Keeping this empty for now to simplify fuzzy matching

const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// --- Utility for getting 100% correct timestamp (New Function) ---
function getFullTimestamp(date) {
    return date.toLocaleString('en-US', {
        year: 'numeric', month: '2-digit', day: '2-digit',
        hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true
    });
}

// --- Memory & Storage Functions ---
function saveMemory() {
    localStorage.setItem('userMemory', JSON.stringify(userMemory));
}
function loadMemory() {
    const saved = localStorage.getItem('userMemory');
    return saved ? JSON.parse(saved) : {};
}
function saveChatHistory() {
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
}
function loadChatHistory() {
    const saved = localStorage.getItem('chatHistory');
    return saved ? JSON.parse(saved) : [];
}
function saveResponsePointers() {
    localStorage.setItem('responsePointers', JSON.stringify(responsePointers));
}
function loadResponsePointers() {
    const saved = localStorage.getItem('responsePointers');
    return saved ? JSON.parse(saved) : {};
}

// Stores the unique key (first question) of the last intent used
function setLastIntentKey(key) {
    lastIntentKey = key;
    localStorage.setItem('lastIntentKey', key);
}

// --- Utility Functions ---
// Add message to DOM and history (Modified to include time)
function addMessage(msg, sender, save = true, providedTime = null) {
    const now = providedTime ? new Date(providedTime) : new Date();
    const fullTimeString = getFullTimestamp(now); // 100% correct time
    const displayTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

    const message = document.createElement('div');
    message.classList.add('message', sender);
    
    // 1. Text content
    const textContent = document.createElement('div');
    textContent.classList.add('message-text');
    textContent.innerHTML = msg; // ✅ render HTML properly

    // 2. Timestamp element (New)
    const timeSpan = document.createElement('span');
    timeSpan.classList.add('timestamp');
    timeSpan.setAttribute('data-time', fullTimeString); // Store full time for print/export
    timeSpan.textContent = displayTime; // Display simple time on screen

    message.appendChild(textContent);
    message.appendChild(timeSpan);
    
    chatbox.appendChild(message);
    chatbox.scrollTop = chatbox.scrollHeight;

    if (save) {
        // Store the full timestamp in history
        chatHistory.push({ sender, text: msg, timestamp: fullTimeString });
        saveChatHistory();
    }
}

// Input cleaning function
function cleanInput(input) {
    return input.toLowerCase().replace(/[^a-z0-9\s]/g, '').trim().replace(/\s+/g, ' ');
}

// Levenshtein Distance for fuzzy matching
function levenshtein(a, b) {
    const matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
    matrix[0] = Array.from({ length: a.length + 1 }, (_, j) => j);

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            const cost = a[j - 1] === b[i - 1] ? 0 : 1;
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,      // Deletion
                matrix[i][j - 1] + 1,      // Insertion
                matrix[i - 1][j - 1] + cost // Substitution
            );
        }
    }

    return matrix[b.length][a.length];
}

/**
 * Finds the best matching intent from the conversationFlow.
 * @param {string} input - The cleaned user input.
 * @param {boolean} fuzzy - Whether to allow fuzzy matching.
 * @returns {object | null} The matching intent object (e.g., {questions: [...], answers: [...]}) or null.
 */
function findIntentKey(input, fuzzy = true) {
    let bestMatchIntent = null;
    let bestScore = Infinity;

    for (const intent of conversationFlow) {
        // 1. Exact Match
        if (intent.questions.map(cleanInput).includes(input)) {
            // Return immediately on exact match for speed
            return intent;
        }

        // 2. Fuzzy Match
        if (fuzzy) {
            for (const key of intent.questions) {
                const keyClean = cleanInput(key);
                // Adjust the 0.5 threshold for desired fuzziness.
                const distance = levenshtein(input, keyClean);

                if (distance < bestScore && distance <= Math.max(input.length, keyClean.length) * 0.5) {
                    bestScore = distance;
                    bestMatchIntent = intent;
                }
            }
        }
    }
    return bestMatchIntent;
}

// Cycles through response variants
function getNextForKey(intentObject) {
    // We use the first question in the array as the unique key for storage/pointers
    const storageKey = intentObject.questions[0].toLowerCase();
    const arr = intentObject.answers;
    const idx = responsePointers[storageKey] || 0;
    const resp = arr[idx % arr.length];
    responsePointers[storageKey] = (idx + 1) % arr.length;
    saveResponsePointers();
    setLastIntentKey(storageKey); // Store the unique intent key for "next" functionality
    return personalizeResponse(resp);
}

// Returns all response variants for "show all" command
function getAllForKey(intentObject) {
    const storageKey = intentObject.questions[0].toLowerCase();
    const arr = intentObject.answers;
    const text = arr.map((r,i) => `${i+1}. ${r}`).join('\n\n');
    setLastIntentKey(storageKey);
    return personalizeResponse(text);
}

// Applies custom memory/context to a response
function personalizeResponse(response) {
    // Add logic here to replace placeholders in the response with userMemory data
    // Example: response = response.replace("[USER_NAME]", userMemory.name || "friend");
    return response;
}

// Updates memory based on new input (e.g., extracting user's name)
function updateMemory(input) {
    // Add logic here to extract information from user input and save to userMemory
}


// --- Main Chatbot Logic ---
function getAIResponse(rawInput) {
    const input = cleanInput(rawInput);
    updateMemory(input);

    const low = rawInput.toLowerCase();
    const wantsAll = /\b(step|steps|step by step|list|all|every|show)\b/.test(low);
    const wantsNext = /\b(next|more|another|again)\b/.test(low);

    if (wantsNext && lastIntentKey) {
        // Find the full intent object using the last key
        const lastIntent = conversationFlow.find(intent => cleanInput(intent.questions[0]) === lastIntentKey);
        if (lastIntent) {
            return getNextForKey(lastIntent);
        }
    }

    const intent = findIntentKey(input);

    if (intent) {
        if (wantsAll) {
            return getAllForKey(intent);
        } else {
            return getNextForKey(intent);
        }
    }
    
    // --- Fallback Response: No match found ---
    return "I'm not quite sure how to respond to that, but I'm always learning! Can you ask me something else? 😊";
}


// --- Event Handlers ---

function handleSendMessage(e) {
    // Allow sending on Enter key (but not Shift+Enter for multiline)
    if (e.type === 'keydown' && e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault(); // Stop the default newline action
    } else if (e.type === 'keydown') {
        return; // Only process on Enter keydown, or click event
    }

    const text = userInput.value.trim();
    if (text === "") return;

    // 1. Add user message
    addMessage(text, 'user');
    userInput.value = '';

    // 2. Simulate AI is "typing"
    userInput.disabled = true;
    sendBtn.disabled = true;

    // Simulate Jay Sri Krishna AI thinking time
    setTimeout(() => {
        addMessage(getAIResponse(text), 'ai');
        // Re-enable input and button
        userInput.disabled = false;
        sendBtn.disabled = false;
        userInput.focus();
    }, 100);
}

// --- MENU UTILITY FUNCTIONS ---

function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('show');
}

function handleNewChat() {
    // Completely clears all local storage data and reloads the page
    // providing a fresh, new start.
    localStorage.clear();
    location.reload();
}

function handleClearChat() {
    // Clear the DOM chatbox
    document.getElementById('chatbox').innerHTML = '';
    // Clear the stored history
    chatHistory = [];
    saveChatHistory();
    // Optionally reset other conversation state if needed
    localStorage.removeItem('responsePointers');
    localStorage.removeItem('lastIntentKey');
    toggleMenu();
}

function handleExportChat() {
    // 1. Get current date and time
    const now = new Date();
    const dateTimeString = getFullTimestamp(now);

    // 2. Create the header element (hidden on screen, visible only in PDF via CSS @media print)
    const exportHeader = document.createElement('div');
    exportHeader.classList.add('export-header');
    
    // Add custom export details
    exportHeader.innerHTML = `
        <div style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">Hare Krishna AI Chat Export</div>
        <div style="font-size: 12px; opacity: 0.8;">Exported on: ${dateTimeString}</div>
        <hr style="margin-top: 10px; border: 0; border-top: 1px solid #ccc;">
    `;

    // 3. Clone the chatbox content for printing
    const chatboxClone = document.getElementById('chatbox').cloneNode(true);

    // 4. Create the content container for printing
    const printContent = document.createElement('div');
    printContent.classList.add('print-content-wrapper');
    printContent.appendChild(exportHeader);
    printContent.appendChild(chatboxClone);

    // 5. Apply print styles and trigger print
    document.body.appendChild(printContent);
    window.print();
    document.body.removeChild(printContent);
    toggleMenu();
}


// --- Event Listeners and Initialization ---

document.addEventListener('DOMContentLoaded', () => {

    // 1. Menu Button Toggle
    document.getElementById('menuBtn').addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents immediate closing from body click
        toggleMenu();
    });

    // 2. Menu Option Handlers
    document.getElementById('newChat').addEventListener('click', (e) => {
        e.preventDefault();
        handleNewChat();
    });

    document.getElementById('clearChat').addEventListener('click', (e) => {
        e.preventDefault();
        handleClearChat();
    });

    document.getElementById('exportChat').addEventListener('click', (e) => {
        e.preventDefault();
        handleExportChat();
    });

    // 3. Close the dropdown menu if the user clicks anywhere outside of it
    document.body.addEventListener('click', (e) => {
        const menu = document.getElementById('dropdownMenu');
        // Check if the menu is open AND the click target is NOT the button or the menu itself
        if (menu.classList.contains('show') && !document.getElementById('menuBtn').contains(e.target) && !menu.contains(e.target)) {
            menu.classList.remove('show');
        }
    });

    // --- Event Listeners and Initialization ---

    // 1. Initial Render of chat history (Modified to pass timestamp)
    chatHistory.forEach(entry => addMessage(entry.text, entry.sender, false, entry.timestamp));
    sendBtn.addEventListener('click', handleSendMessage);
    userInput.addEventListener('keydown', handleSendMessage); // Handle Enter key submission
    
    // --- Reset response pointer if not working ---\n
    if (!localStorage.getItem('responsePointers')) {
      localStorage.setItem('responsePointers', JSON.stringify({}));
    }
});
