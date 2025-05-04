import React from "react";
import "../../styles/components/NoticeBoard.css"
import { Message } from "../../CustomTypes/CustomTypes";

// Define props for the component
interface NoticeBoardProps {
    messages: Message[];
    isValid: boolean;
  }

const NoticeBoard: React.FC<NoticeBoardProps> = React.memo(({messages, isValid}) => {
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
});

export default NoticeBoard;