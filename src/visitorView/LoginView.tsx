import React, { useState } from 'react';

interface PropsShape {}

export default (props: PropsShape) => {
  const [localUserName, setLocalUserName] = useState('');
  const [localPassword, setLocalPassword] = useState('');

  return (
    <div>
      <form>
        <label>Username</label>
        <input type='text' value={localUserName} />

        <label>Password</label>
        <input type='password' value={localPassword} />

        <button>Submit</button>
      </form>
    </div>
  )
}