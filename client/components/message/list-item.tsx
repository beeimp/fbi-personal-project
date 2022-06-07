import React, { useState } from 'react';

const MessageListItem: React.FC = () => {
  const [username] = useState<String>('');
  const [message] = useState<String>('');
  const [datetime] = useState<String>('');

  return (
    <div>
      <i>프로필사진</i>
      <p><span>{username}</span> 님</p>
      <p><span>{message}</span>・{datetime}분</p>
    </div>
  )
};
export default MessageListItem;