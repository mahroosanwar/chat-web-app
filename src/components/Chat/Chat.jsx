import React, { useState, useEffect, useRef } from "react";
import { UilMessage } from "@iconscout/react-unicons";
import BadgeAvatars from "../BadgeAvatars/BadgeAvatars";
import CodeSnippet from "../CodeSnippet/CodeSnippet";

import io from 'socket.io-client';

import "./Chat.scss";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const socket = io('http://localhost:3000');
  const messageInputRef = useRef(null);

  useEffect(() => {
    // Event listener for receiving new messages
    socket.on('chatMessage', newMessage => {
      setMessages(prevMessages => [...prevMessages, newMessage]);
    });

    // Clean up the event listener when the component is unmounted
    return () => {
      socket.off('chatMessage');
    };
  }, [socket]);

  const handleSendMessage = () => {
    const inputValue = messageInputRef.current.value;

    if (inputValue.trim() !== "") {
      const newMessage = {
        content: inputValue,
        timestamp: new Date().toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
        }),
        sender: <BadgeAvatars />,
      };

      if (isCode(inputValue)) {
        newMessage.contentType = "code";
      }

      // Emit a 'chatMessage' event to the server
      socket.emit('chatMessage', newMessage);

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      messageInputRef.current.value = "";
    }
  };

  const isCode = (input) => {
    // Implement your own logic to determine if the input contains code
    // For example, you can check for specific code patterns or keywords
    return (
      input.includes("function") ||
      input.includes("const") ||
      input.includes("let") ||
      input.includes("var")
    );
  };

  const renderMessageContent = (message) => {
    if (message.contentType === "code") {
      return <CodeSnippet code={message.content} />;
    }

    console.log(message.contentType);
    return <div className="content">{message.content}</div>;
  };

  console.log(messages);

  return (
    <div className="chat">
      <h2>Chatbox</h2>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <div className="user-profile">
              <div className="sender">{message.sender}</div>
            </div>
            <div className="message-section">
              <div className="content">{renderMessageContent(message)}</div>
              {/* <div className="content">{message.content}</div> */}
              <div className="timestamp">{message.timestamp}</div>
            </div>
          </div>
        ))}
      </div>
      <div className="input">
        <textarea type="text" ref={messageInputRef} />
        {/* <input type="text" ref={messageInputRef} /> */}
        <button onClick={handleSendMessage}>
          <UilMessage />
        </button>
      </div>
    </div>
  );
};

export default Chat;
