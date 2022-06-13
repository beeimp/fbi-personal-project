import { FunctionComponent, ReactNode } from "react";
import { css } from '@emotion/react';

interface VotingWrapperProps {
  children: ReactNode;
}
 
const VotingWrapper: FunctionComponent<VotingWrapperProps> = ({children}) => {
  const wrapperStyle = css`
    display: flex;

    height: 50px;
    margin: 10px;
  `;

  return (
    <div css={wrapperStyle}>
      {children}
    </div>
  );
}
 
export default VotingWrapper;