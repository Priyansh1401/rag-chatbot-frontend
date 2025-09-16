import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";

const API_URL = "http://localhost:5000";

function App() {
  const [sessionId, setSessionId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    startSession();
  }, []);

  const startSession = async () => {
    const res = await axios.post(`${API_URL}/session`);
    setSessionId(res.data.sessionId);
  };

  const sendMessage = async () => {
    if (!input) return;
    const res = await axios.post(`${API_URL}/chat/${sessionId}`, { query: input });
    setMessages([...messages, { role: "user", content: input }, { role: "bot", content: res.data.answer }]);
    setInput("");
  };

  const resetSession = async () => {
    await axios.delete(`${API_URL}/reset/${sessionId}`);
    setMessages([]);
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((m, i) => (
          <div key={i} className={m.role}>{m.content}</div>
        ))}
      </div>
      <div className="input-area">
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Ask me something..." />
        <button onClick={sendMessage}>Send</button>
        <button onClick={resetSession}>Reset</button>
      </div>
    </div>
  );
}

export default App;
