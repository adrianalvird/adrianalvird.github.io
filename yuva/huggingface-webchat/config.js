// Configuration file
const CONFIG = {
    HF_TOKEN: "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",
    API_URL: "https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium",
    API_PARAMS: {
        max_length: 150,
        temperature: 0.7,
        do_sample: true
    },
    FALLBACK_RESPONSES: {
        'hello': 'Hello! Nice to meet you! How can I assist you today?',
        'hi': 'Hi there! 😊 What would you like to talk about?',
        'how are you': "I'm doing great! Thanks for asking. How about you?",
        'what is your name': "I'm an AI chatbot powered by Hugging Face models!",
        'thank you': "You're welcome! Is there anything else I can help with?",
        'bye': 'Goodbye! Feel free to come back if you have more questions!',
        'who created you': 'I was created using Hugging Face API and JavaScript!',
        'what can you do': 'I can chat with you, answer questions, and have conversations using AI!'
    }
};
