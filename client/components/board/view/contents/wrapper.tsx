import { FunctionComponent, ReactNode } from "react";
import { css } from '@emotion/react';

interface BoardViewContentsWrapperProps {
  children: ReactNode
}
 
const BoardViewContentsWrapper: FunctionComponent<BoardViewContentsWrapperProps> = ({children}) => {

  const wrapperStyle = css`
    margin: 10px;
  `;

  return (
    <div css={wrapperStyle}>
      {children}
    </div>
  );
}
 
export default BoardViewContentsWrapper;