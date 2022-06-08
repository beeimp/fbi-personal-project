import React from 'react';
import {jsx,css} from '@emotion/react';

const wrapperStyle = css`
  position: relative;
  border: 3px solid #B7B7B7;
  width: 500px;
  height: 800px;
`

type AuthWrapperProps = {
  children: React.ReactNode;
}

const AuthWrapper:React.FC<AuthWrapperProps> = ({children}) => {
  return (
    <div css={wrapperStyle}>
      {children}
    </div>
  );
}

export default AuthWrapper;