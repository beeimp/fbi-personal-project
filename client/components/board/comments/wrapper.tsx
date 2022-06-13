import { FunctionComponent, ReactNode } from "react";
import { css } from '@emotion/react';

interface BoardCommentsWrapperProps {
  children: ReactNode;
}

const BoardCommentsWrapper: FunctionComponent<BoardCommentsWrapperProps> = ({ children }) => {
  const wrapperStyle = css`
    grid-column: 1/2;
    grid-row: 4/5;

    position: relative;
    display: block;

    border-top: 1px solid gray;
    
    padding: 10px;

    @media screen and (min-width: 800px) {
      grid-row: 3/4;
      grid-column: 2/3;
    }
  `;
  return (
    <div css={wrapperStyle}>
      {children}
    </div>
  );
}

export default BoardCommentsWrapper;