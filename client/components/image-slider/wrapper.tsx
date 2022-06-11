import { FunctionComponent, ReactNode } from "react";
import { css } from '@emotion/react';

interface ImageSliderWrapperProps {
  children: ReactNode;
  size: number | undefined;
}

const ImageSliderWrapper: FunctionComponent<ImageSliderWrapperProps> = ({ children, size }) => {
  const defaultCss = css`
    position: relative;
    overflow: hidden;
    background-color: black;

    @media (min-width: 800px){
      width: 50%;
      height: 100%;
    }
  `;

  const defaultWrapperStyle = css`
    ${defaultCss}
    width: 100%;
    & :after {
      content: "";
      display: flex;
      padding-bottom: 100%;
    }
  `;

  const sizeWrapperStyle = css`
  ${defaultCss}
    width: ${size}px;
    height: ${size}px;
  `;

  const wrapperStyle = css`
    grid-row: 2/3;
    grid-column: 1/2;
    
    display: flex;
    flex-wrap: nowrap;
    max-width: 100%; /* 이미지 슬라이드 구현을 위해 최대 width 제한 */
    overflow: hidden;

    position: relative;
    background-color: black;

    @media (min-width: 800px){
      grid-row: 1/4;
      grid-column: 1/2;
    }
  `

  return (
    // <div css={size ? sizeWrapperStyle : defaultWrapperStyle}>
    <div css={wrapperStyle}>
      {children}
    </div>
  );
}

export default ImageSliderWrapper;