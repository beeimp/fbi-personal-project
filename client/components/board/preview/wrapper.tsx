import { FunctionComponent, ReactNode } from "react";
import { css } from '@emotion/react';

interface BoardPreviewWrapperProps {
  children: ReactNode;
}

const BoardPreviewWrapper: FunctionComponent<BoardPreviewWrapperProps> = ({ children }) => {
  const coverStyle = css`
    display: flex;
    justify-content: center;
  `;

  const wrapperStyle = css`
    display: flex;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;
    position: relative;
    max-width: 1200px;
    margin: 50px;
  `;
  return (
    <div css={coverStyle}>
      <div css={wrapperStyle}>
        {children}
      </div>
    </div>
  );
}

export default BoardPreviewWrapper;