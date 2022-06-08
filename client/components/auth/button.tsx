import { FunctionComponent, ReactNode } from "react";
import { css } from '@emotion/react';

interface AuthButtonProps {
  children: ReactNode
}

const buttonWrapperStyle = css`
  display: flex;
  justify-content: center;
  align-content: center;

  margin: 80px 100px;
`
const buttonStyle = css`
  font-size: 30px;
  border-radius: 10px;
  padding: 10px 20px;
  background-color: #BDBDBD;
  color: white;
  & :hover {
    background-color: #6d6d6d;
    transition-duration: 0.5s;
    cursor: pointer;
  }
`

const AuthButton: FunctionComponent<AuthButtonProps> = ({children}) => {
  return (
    <div css={buttonWrapperStyle}>
      <button css={buttonStyle}>{children}</button>
    </div>
  );
}

export default AuthButton;