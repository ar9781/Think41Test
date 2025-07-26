import Message from './Message';

export default function MessageList({ messages }) {
  return (
    <div className="flex flex-col gap-2 overflow-y-auto p-4 h-full">
      {messages.map((msg, index) => (
        <Message key={index} message={msg} />
      ))}
    </div>
  );
}
