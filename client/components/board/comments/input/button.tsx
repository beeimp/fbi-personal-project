import { FunctionComponent, ReactNode } from "react";
import { css } from '@emotion/react';

interface BoardCommentsInputButtonProps {
  children: ReactNode;
}
 
const BoardCommentsInputButton: FunctionComponent<BoardCommentsInputButtonProps> = ({children}) => {

  const buttonStyle = css`
    /* display: fle; */

    font-size: 20px;
    width: 100px;
    height: 50px;

    border: none;
    background: none;

    padding: 0;
    margin: 0;

    & :hover {
      color: darkgray;
      transition-duration: 0.3s;
    }
  `;

  return (
    <button css={buttonStyle}>{children}</button>
  );
}
 
export default BoardCommentsInputButton;