import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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
