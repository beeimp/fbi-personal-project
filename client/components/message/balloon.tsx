import React, { useState } from 'react';

const MessageBalloon: React.FC = () => {
  const [message] = useState<String>('');
  return (
    <div>
      <div>
        {message}
      </div>
    </div>
  )
};
export default MessageBalloon;