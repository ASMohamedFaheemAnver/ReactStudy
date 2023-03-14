import { ChatFeed } from "react-chat-ui";

const ReactChatUI = () => {
  const currentUserId = 3;
  const messages = [
    {
      id: 1,
      message: "I'm the recipient! (The person you're talking to)",
    },
    {
      id: 3,
      message: "I'm you -- the blue bubble!",
    },
    {
      id: 1,
      message: "1",
    },
    {
      id: 1,
      message: "2",
    },
    {
      id: 1,
      message: "3",
    },
    {
      id: 3,
      message: "1",
    },
  ].map((msg) => ({ ...msg, id: msg.id === currentUserId ? 0 : msg.id }));
  return (
    <div style={{ width: "50%", background: "#f4f4f4" }}>
      <ChatFeed isTyping={true} messages={messages} />
    </div>
  );
};

export default ReactChatUI;
