import { FunctionComponent, MouseEventHandler, ReactNode } from "react";
import { css } from '@emotion/react';

interface ImageSliderButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler;
  name: string;
}

const ImageSliderButton: FunctionComponent<ImageSliderButtonProps> = ({ children, onClick, name }) => {
  if (name !== 'next' && name !== 'prev') throw new Error(`ImageSliderButton의 name은 'next' 또는 'prev'만 가능(name=${name}`);

  const buttonStyle = css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 10%;

    top: 0;
    bottom: 0;
    ${name === 'prev' ? "left: 0;" : "right: 0;"}

    background: none;
    border: none;
    
    & :hover {
      background-color: rgba(255, 255, 255, 0.1);
      transition-duration: 0.2s;
      cursor: pointer;
    }
  `;

  return (
    <button css={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default ImageSliderButton;