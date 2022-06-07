import React, { useState } from 'react';

const MessageDateTime: React.FC = () => {
  const [date] = useState<String>('');
  return (
    <div>
      {date}
    </div>
  )
};
export default MessageDateTime;