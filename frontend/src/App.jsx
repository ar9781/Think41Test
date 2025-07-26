import { ChatProvider } from './context/ChatContext';
import ChatWindow from './components/ChatWindow';

export default function App() {
  return (
    <ChatProvider>
      <ChatWindow />
    </ChatProvider>
  );
}
