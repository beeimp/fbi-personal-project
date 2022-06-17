import { FunctionComponent, ReactNode } from "react";
import { css } from '@emotion/react';

interface VotingWrapperProps {
  children: ReactNode;
  height?: string;
}
 
const VotingWrapper: FunctionComponent<VotingWrapperProps> = ({children, height}) => {
  const wrapperStyle = css`
    display: flex;

    height: ${height};
    margin: 10px;
  `;

  return (
    <div css={wrapperStyle}>
      {children}
    </div>
  );
}
 
export default VotingWrapper;