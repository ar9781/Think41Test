import { useContext } from 'react';
import { ChatContext } from '../context/ChatContext';

export default function ConversationHistory() {
  const { history, loadConversation } = useContext(ChatContext);

  return (
    <div className="w-64 border-r p-4 overflow-y-auto bg-gray-50">
      <h2 className="font-bold mb-2">Past Conversations</h2>
      {history.map((session) => (
        <div
          key={session.id}
          className="cursor-pointer p-2 hover:bg-gray-200 rounded"
          onClick={() => loadConversation(session.messages)}
        >
          {session.timestamp}
        </div>
      ))}
    </div>
  );
}
