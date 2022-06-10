import { FunctionComponent } from "react";
import Img from 'next/image';
import { css } from '@emotion/react';

interface HeaderIconButtonProps {
  iconUrl: string;
  size?: string;
}

const HeaderIconButton: FunctionComponent<HeaderIconButtonProps> = ({ iconUrl, size = "50px" }) => {

  const buttonStyle = css`
    display: flex;
    justify-content: center;
    align-content: center;
    width: ${size};
    height: ${size};
    border: none;
    background: none;
    padding: 0;
    margin: 0;
  `;

  return (
    <button css={buttonStyle}>
      <Img src={iconUrl} width={size} height={size}></Img>
    </button>
  );
}

export default HeaderIconButton;