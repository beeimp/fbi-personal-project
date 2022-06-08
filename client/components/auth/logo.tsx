import { FunctionComponent } from "react";
import { css } from '@emotion/react';
import Img from 'next/image';

interface AuthLogoProps {

}

const AuthLogo: FunctionComponent<AuthLogoProps> = () => {
  const imageSize = '100px';
  
  const authLogoWrapperStyle = css`
    width: 100%;
    height: ${imageSize};
    text-align: center;
  `

  return (
    <div css={authLogoWrapperStyle}>
      <Img src='/KaiKas_logo.png' alt='MetaMask Logo' width={imageSize} height={imageSize}></Img>
    </div>
  );
}

export default AuthLogo;