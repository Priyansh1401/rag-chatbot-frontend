RAG Chatbot – Frontend

This is the React + SCSS frontend for the RAG-powered chatbot assignment.
It provides a simple chat interface where users can ask questions, view responses, and reset their chat session.

🚀 Features

Chat UI with past messages

Input box for queries

Streaming-like bot responses (typed effect)

Reset session button

API calls to backend (/session, /chat/:sessionId, /reset/:sessionId)

🛠 Tech Stack

React (CRA) – Frontend framework

SCSS – Styling

Axios – API requests

⚙️ Setup & Run Locally
1. Clone Repo
git clone https://github.com/your-username/rag-chatbot-frontend.git
cd rag-chatbot-frontend

2. Install Dependencies
npm install

3. Configure Backend URL

In src/App.js, set the API URL to your backend (default localhost:5000):

const API_URL = "http://localhost:5000";

4. Run App
npm start


Frontend will start at 👉 http://localhost:3000
.

🧪 How to Test

On page load → new session is created via backend.

Type a message → request is sent to backend (/chat/:sessionId).

Chat history is displayed in UI.

Click Reset → clears session history.

📸 Demo Flow

User enters a query.

Bot fetches response from backend (Gemini + Redis + Qdrant).

Conversation is shown in chat window.

Reset button clears chat history for that session.

📌 Notes

This repo only contains frontend.

Make sure backend is running before testing frontend.
