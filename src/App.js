import {ChatEngine} from 'react-chat-engine'
import './App.css';

function App() {
  return (
    <ChatEngine
      height='100vh'
      publicKey={'b75e5bd5-cd84-404c-b820-06feff8c98c0'}
      userName={'john_smith'}
      userSecret={'secret_1234'}
    />
  );
}

export default App;
