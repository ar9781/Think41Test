export default function Message({ message }) {
    return (
      <div className={`my-2 p-2 rounded max-w-md ${message.sender === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-200 self-start'}`}>
        <p>{message.text}</p>
      </div>
    );
  }
  