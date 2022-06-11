import { FunctionComponent, ReactNode } from "react";
import { css } from '@emotion/react';

interface BoardCommentsInputWrapperProps {
  children: ReactNode;
}

const BoardCommentsInputWrapper: FunctionComponent<BoardCommentsInputWrapperProps> = ({ children }) => {
  const wrapperStyle = css`
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    left: 0;
    right: 0;
    bottom: 0;

    height: 50px;
    
    border: 1px solid gray;
    border-radius: 50px;

    overflow: hidden;
    box-sizing: border-box;
    
    margin: 10px;
  `;
  return (
    <div css={wrapperStyle}>
      {children}
    </div>
  );
}

export default BoardCommentsInputWrapper;