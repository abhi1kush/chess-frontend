import React from "react";
import "../../styles/components/NoticeBoard.css"

const NoticeBoard = ({messages, isValid}) => {
    return (
        <div className="notice-board">
            <div className={`notice-header ${isValid ? "legal" : "isIllegal"}`}>
                Board setup is {isValid ? "" : "not" } valid.
            </div>
            {messages.map((msg) => (
                msg.text != null && msg.text !== "" && <div className={`message ${msg.type}`} key={msg.text}>{msg.text}</div>
            ))}
        </div>
    );
};

export default NoticeBoard;