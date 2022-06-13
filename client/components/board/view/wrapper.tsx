import { FunctionComponent, ReactNode, RefObject } from "react";
import { css } from '@emotion/react';

interface BoardViewWrapperProps {
  children: ReactNode;
  closeViewHandler: React.MouseEventHandler;
  wrapperRef: RefObject<HTMLDivElement>;
}

const BoardViewWrapper: FunctionComponent<BoardViewWrapperProps> = ({ children, closeViewHandler, wrapperRef }) => {
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
    display: grid;
    grid-template-rows: 100px 2fr 1fr 150px;
    grid-template-columns: 1fr;

    position: relative;

    width: 80%;
    height: 80%;
    max-width: 1500px;
    min-height: 600px;

    border: 3px solid black;
    background-color: white;
    border-radius: 10px;
    box-sizing: border-box;

    @media (min-width: 800px) {
        grid-template-rows: 100px 3fr 150px;
        grid-template-columns: 1fr 1fr;
      }
  `;

  return (
    <div css={blurWrapperStyle} onClick={closeViewHandler}>
      <div ref={wrapperRef} css={wrapperStyle}>
        {children}
      </div>
    </div>
  );
}

export default BoardViewWrapper;