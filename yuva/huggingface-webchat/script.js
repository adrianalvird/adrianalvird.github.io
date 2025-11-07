document.getElementById("userInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

async function sendMessage() {
  const input = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");
  const userText = input.value.trim();
  if (!userText) return;

  // Add user message
  chatbox.innerHTML += `<div><b>You:</b> ${userText}</div>`;
  input.value = "";

  // Hugging Face API - educational use
  const API_URL = "https://api-inference.huggingface.co/models/microsoft/DialoGPT-large";
  const HF_TOKEN = "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"; // Replace with actual token

  // Loading message
  const loadingMsg = document.createElement("div");
  loadingMsg.innerHTML = `<i>Bot is thinking...</i>`;
  chatbox.appendChild(loadingMsg);
  chatbox.scrollTop = chatbox.scrollHeight;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${HF_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: userText })
    });

    if (!response.ok) throw new Error(`API Error: ${response.status}`);

    const result = await response.json();
    loadingMsg.remove();

    // Handle different response formats
    let botReply = result.generated_text || 
                   result[0]?.generated_text || 
                   "Sorry, I didn't understand that.";

    chatbox.innerHTML += `<div><b>Bot:</b> ${botReply}</div>`;
    chatbox.scrollTop = chatbox.scrollHeight;

  } catch (error) {
    loadingMsg.remove();
    chatbox.innerHTML += `<div style="color:red;"><b>Learning Note:</b> ${error.message}</div>`;
    console.log("Educational debug:", error);
  }
}