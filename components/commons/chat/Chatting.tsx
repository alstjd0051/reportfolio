import React, { useState } from "react";

interface IMessage {
  user: string;
  message: string;
}

const Chatting: React.FC = () => {
  const [sendMessage, setSendMessage] = useState<string>("");
  const [connected, setConnected] = useState<boolean>(false);
  const [chat, setChat] = useState<IMessage[]>([]);

  return <div>Chatting</div>;
};

export default Chatting;
