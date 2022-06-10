import { FunctionComponent, ReactNode } from "react";
import { css } from '@emotion/react';

interface BoardViewWrapperProps {
  children: ReactNode;
  closeViewHandler: React.MouseEventHandler;
}

const BoardViewWrapper: FunctionComponent<BoardViewWrapperProps> = ({ children, closeViewHandler }) => {
  const blurWrapperStyle = css`
    backdrop-filter: blur(8px);
    
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px;
    margin: 0px;

    `;
  const wrapperStyle = css`
    position: relative;
    display: flex;
    width: 80%;
    max-width: 1500px;
    height: 80%;
    min-height: 600px;
    border: 3px solid black;
    background-color: white;
    border-radius: 10px;
    box-sizing: border-box;

    @media (max-width: 800px) {
        display: block;
      }
  `;

  return (
    <div css={blurWrapperStyle} onClick={closeViewHandler}>
      <div css={wrapperStyle}>
        {children}
      </div>
    </div>
  );
}

export default BoardViewWrapper;