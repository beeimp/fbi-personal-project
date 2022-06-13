import { FunctionComponent } from "react";
import { css } from '@emotion/react';

interface BoardCommentsInputProps {
  
}
 
const BoardCommentsInput: FunctionComponent<BoardCommentsInputProps> = () => {
  const inputStyle = css`
    width: 100%;
    font-size: 20px;

    border: none;

    padding: 10px;
    resize: none;
  `;
  return (
    <textarea css={inputStyle} spellCheck="false" rows={1}></textarea>
  );
}
 
export default BoardCommentsInput;