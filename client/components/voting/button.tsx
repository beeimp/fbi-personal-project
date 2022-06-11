import { FunctionComponent, MouseEventHandler, ReactNode } from "react";
import { css } from '@emotion/react';

interface VotingButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
 
const VotingButton: FunctionComponent<VotingButtonProps> = ({children, onClick}) => {

  const buttonStyle = css`
    width: 80px;
    border-radius: 100px;
    margin-left: 10px;
  `;
  return ( 
    <button css={buttonStyle} onClick={onClick}>{children}</button>
  );
}
 
export default VotingButton;