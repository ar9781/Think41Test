import MessageList from './MessageList';
import UserInput from './UserInput';
import ConversationHistory from './ConversationHistory';
import { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

export default function ChatWindow() {
  const { messages, saveCurrentConversation, loading } = useContext(ChatContext);

  return (
    <div className="flex h-screen">
      <ConversationHistory />
      <div className="flex flex-col flex-1">
        <div className="flex-1 overflow-y-auto bg-white">
          <MessageList messages={messages} />
        </div>
        {loading && <div className="p-2 text-center text-gray-500">AI is typing...</div>}
        <UserInput />
        <button onClick={saveCurrentConversation} className="self-end m-2 text-sm text-blue-500">Save Conversation</button>
      </div>
    </div>
  );
}
