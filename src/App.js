import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

function App() {
  return (
    <ChatEngine
      height='100vh'
      publicKey={process.env.REACT_APP_PROJECT_ID}
      userName={'Tom'}
      userSecret={'lordy159!'}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
}

export default App;
