import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      'Project-ID': process.env.REACT_APP_PROJECT_ID,
      'User-Name': username,
      'User-Secret': password,
    };

    try {
      axios.get('https://api.chatengine.io/chats', {
        headers: authObject,
      });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
    } catch (error) {}
  };

  return (
    <div className='wrapper'>
      <div className='form'>
        <h1 className='title'>Chat Application</h1>
        <form
          onSubmit={() => {
            handleSubmit();
          }}
        >
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='input'
            placeholder='username'
            required
          />
          <input
            type='text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='input'
            placeholder='password'
            required
          />
          <div align='center'>
            <button type='submit' className='button'>
              <span>Start Chatting</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
