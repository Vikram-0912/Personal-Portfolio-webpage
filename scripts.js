<script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"> </script>
 
  var typed = new Typed("#element", {
    strings: [
      "<i>Web Developer</i>",
      "C++ programer",
      "PowerBI Expert",
      "Data Analyst",
    ],
    typeSpeed: 50,
  });


  // Function to display contact info
  function showContactInfo() {
    alert("Email: vikrammodasra145@gmail.com\nPhone: +91 1234567890");
  }
 
 
 
// Chatbot Logic
function toggleChatbot() {
const chatbot = document.getElementById('chatbot');
chatbot.style.display = chatbot.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
const userInput = document.getElementById('user-input').value.trim();
if (userInput === '') return;

// Display user message
const chatbotBody = document.getElementById('chatbot-body');
const userMessage = document.createElement('div');
userMessage.className = 'message user';
userMessage.textContent = userInput;
chatbotBody.appendChild(userMessage);

// Get bot response
const botResponse = getBotResponse(userInput);
const botMessage = document.createElement('div');
botMessage.className = 'message bot';
botMessage.textContent = botResponse;
chatbotBody.appendChild(botMessage);

// Clear input and scroll to bottom
document.getElementById('user-input').value = '';
chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

function handleKeyPress(event) {
if (event.key === 'Enter') {
  sendMessage();
}
}

function getBotResponse(userInput) {
const questions = {
  'who are you': 'I am a chatbot designed to help you learn more about Vikram Modasra and his portfolio.',
  'what skills do you have': 'Vikram is skilled in Web Development, Data Analysis, C++ Programming, and PowerBI.',
  'tell me about your projects': 'Vikram has worked on various projects including web development, data analysis, and automation using Python.',
  'how can i contact you': 'You can contact Vikram via email at vikrammodasra145@gmail.com or phone at +91 1234567890.',
  'what is your experience': 'Vikram has experience as a Data Analyst, HTML Developer, and C++ Programmer.',
  'github': 'You can find Vikram\'s GitHub profile here: https://github.com/Vikram-0912',
  'linkedin': 'You can find Vikram\'s LinkedIn profile here: https://linkedin.com/in/vikram-modasra-b857a4261',
  'instagram': 'You can find Vikram\'s Instagram profile here: https://www.instagram.com/i_vikram.09',
  'facebook': 'You can find Vikram\'s Facebook profile here: https://www.facebook.com/profile.php?id=100089485543130',
};

userInput = userInput.toLowerCase();
for (const [question, answer] of Object.entries(questions)) {
  if (userInput.includes(question)) {
    return answer;
  }
}

return "I'm sorry, I don't understand that question. Please ask something about Vikram's portfolio.";
}
