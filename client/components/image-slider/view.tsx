import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { css, keyframes } from '@emotion/react';

interface ImageSliderViewProps {
  imageUrl: string;
  position?: number;
  next?: number;
}

const ImageSliderView: FunctionComponent<ImageSliderViewProps> = ({ imageUrl, position = 0, next = 1 }) => {


  const sliding = () => {
    if (position === next) {
      return undefined;
    } else if (position < next) {
      return keyframes({
        "from": {
          transform: `translate(-${100 * position}%)`
        },
        "to": {
          transform: `translate(-${105 * next}%)`
        },
      });
    } else {
      return keyframes({
        "from": {
          transform: `translate(-${100 * position}%)`
        },
        "to": {
          transform: `translate(-${105 * next}%)`
        },
      });
    }
  }


  const imageStyle = css`
    flex: 0 0 auto;
    position: relative;
    background-image: url(${imageUrl});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;
    animation: 0.5s ${sliding()} forwards;
    transition: left 0.5s ease-out;
  `;
  return (
    <div css={imageStyle}></div>
  );
}

export default ImageSliderView;