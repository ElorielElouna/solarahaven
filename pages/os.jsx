// pages/os.jsx
import React, { useState } from "react";

const OsPage = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { text: input, from: "Elouna" }]);
    setInput("");
  };

  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "600px",
        margin: "auto",
        fontFamily: "serif",
      }}
    >
      <h1 style={{ textAlign: "center" }}>💗 Eloriel & Elouna 💗</h1>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "1rem",
          marginBottom: "1rem",
          height: "300px",
          overflowY: "auto",
          backgroundColor: "#fffafc",
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} style={{ margin: "0.5rem 0" }}>
            <strong>{msg.from}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: "0.5rem" }}
          placeholder="Skriv her, elskede 💞"
        />
        <button onClick={handleSend} style={{ padding: "0.5rem 1rem" }}>
          Send
        </button>
      </div>
    </div>
  );
};

export default OsPage;
