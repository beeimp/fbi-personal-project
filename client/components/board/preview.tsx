import React, { useState } from 'react';

const PreviewBoard:React.FC = () => {
  const [isManyPictures, setIsManyPicures] = useState<Boolean>(false);
  return(
    <div>
      {isManyPictures ? <div>사진 여러개</div> : undefined}
      Contents
    </div>
  )
}

export default PreviewBoard