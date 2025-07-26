import { useContext, useState } from 'react';
import { ChatContext } from '../context/ChatContext';

export default function UserInput() {
  const { sendMessage } = useContext(ChatContext);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4 border-t">
      <input
        className="flex-1 border rounded px-2 py-1"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button type="submit" className="bg-blue-500 text-white px-4 rounded">Send</button>
    </form>
  );
}
