// Main chatbot functionality
class Chatbot {
    constructor() {
        this.userInput = document.getElementById('userInput');
        this.chatbox = document.getElementById('chatbox');
        this.sendBtn = document.getElementById('sendBtn');
        this.status = document.getElementById('status');
        
        this.initEventListeners();
    }

    initEventListeners() {
        this.userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !this.sendBtn.disabled) {
                this.sendMessage();
            }
        });
        
        this.userInput.focus();
    }

    async sendMessage() {
        const message = this.userInput.value.trim();
        if (!message) return;

        this.addMessage('user', message);
        this.userInput.value = '';
        
        this.setUIState(false);
        this.status.textContent = 'Processing your message...';

        const typingMsg = this.addMessage('typing', 'Bot is thinking...');

        try {
            const response = await this.callHuggingFaceAPI(message);
            
            typingMsg.remove();
            
            if (response.success) {
                this.addMessage('bot', response.reply);
                this.status.textContent = 'Message sent successfully';
            } else {
                this.addMessage('error', response.error);
                this.status.textContent = 'API error - using fallback';
            }

        } catch (error) {
            typingMsg.remove();
            this.addMessage('error', `Connection error: ${error.message}`);
            this.status.textContent = 'Network error - check connection';
        } finally {
            this.setUIState(true);
            this.userInput.focus();
        }
    }

    async callHuggingFaceAPI(message) {
        try {
            const response = await fetch(CONFIG.API_URL, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${CONFIG.HF_TOKEN}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    inputs: message,
                    parameters: CONFIG.API_PARAMS
                })
            });

            if (response.ok) {
                const data = await response.json();
                let reply = data.generated_text || 
                           data[0]?.generated_text || 
                           "I understand your message!";
                
                return { success: true, reply: reply };
                
            } else if (response.status === 503) {
                const errorData = await response.json();
                const waitTime = errorData.estimated_time ? Math.ceil(errorData.estimated_time) : 30;
                return { 
                    success: false, 
                    error: `Model is loading. Please wait ${waitTime} seconds and try again.` 
                };
                
            } else {
                return { 
                    success: false, 
                    error: `API error: ${response.status} - ${response.statusText}` 
                };
            }

        } catch (error) {
            return await this.callWithCorsProxy(message);
        }
    }

    async callWithCorsProxy(message) {
        try {
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            const response = await fetch(proxyUrl + CONFIG.API_URL, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${CONFIG.HF_TOKEN}`,
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest"
                },
                body: JSON.stringify({
                    inputs: message,
                    parameters: { max_length: 100 }
                })
            });

            if (response.ok) {
                const data = await response.json();
                let reply = data.generated_text || "Thanks for your message!";
                return { success: true, reply: reply };
            } else {
                throw new Error('Proxy call failed');
            }
        } catch (proxyError) {
            return this.getFallbackResponse(message);
        }
    }

    getFallbackResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        for (const [key, response] of Object.entries(CONFIG.FALLBACK_RESPONSES)) {
            if (lowerMessage.includes(key)) {
                return { success: true, reply: response };
            }
        }

        const defaultResponses = [
            `I understand you said "${message}". That's interesting!`,
            `Thanks for sharing: "${message}". What would you like to know?`,
            `I see you mentioned "${message}". Could you tell me more about that?`,
            `"${message}" - that's a great point! How can I help you further?`
        ];
        
        const randomResponse = defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
        return { success: true, reply: randomResponse };
    }

    addMessage(type, text) {
        const messageDiv = document.createElement('div');
        
        switch(type) {
            case 'user':
                messageDiv.className = 'user-msg';
                messageDiv.innerHTML = `<strong>You:</strong> ${text}`;
                break;
            case 'bot':
                messageDiv.className = 'bot-msg';
                messageDiv.innerHTML = `<strong>Bot:</strong> ${text}`;
                break;
            case 'typing':
                messageDiv.className = 'typing';
                messageDiv.innerHTML = `<strong>Bot:</strong> ${text}`;
                break;
            case 'error':
                messageDiv.className = 'error-msg';
                messageDiv.innerHTML = `<strong>Note:</strong> ${text}`;
                break;
        }
        
        this.chatbox.appendChild(messageDiv);
        this.chatbox.scrollTop = this.chatbox.scrollHeight;
        
        return messageDiv;
    }

    setUIState(enabled) {
        this.userInput.disabled = !enabled;
        this.sendBtn.disabled = !enabled;
        this.sendBtn.textContent = enabled ? 'Send' : 'Processing...';
    }
}

// Initialize chatbot when page loads
document.addEventListener('DOMContentLoaded', function() {
    window.chatbot = new Chatbot();
});

// Global function for HTML onclick
function sendMessage() {
    if (window.chatbot) {
        window.chatbot.sendMessage();
    }
}
