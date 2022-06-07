import React from 'react';

const MessageInput: React.FC = () => {
  return (
    <div>
      <i>이모지</i>
      <input placeholder='메세지 입력...'></input>
      <button>사진</button>
      <button type='submit' >전송</button>
    </div>
  )
};
export default MessageInput;