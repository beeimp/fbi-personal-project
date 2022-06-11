import React, { FunctionComponent, MouseEventHandler } from 'react';
import { css } from '@emotion/react';
import Img from 'next/image';

interface BoardPreviewProps {
  imageUrls: Array<string>;
  size?: string;
  onClick: MouseEventHandler;
};


const BoardPreview:FunctionComponent<BoardPreviewProps> = ({imageUrls=["/"], size="50px", onClick}) => {

  const wrapperStyle = css`
    position: relative;
    display: flex;
    overflow: hidden;
    justify-content: star;
    align-content: center;
    width: 380px;
    height: 400px;
    margin: 10px;

    & > span {
      position: absolute;
    }
  `;

  const imageStyle = css`
    background-image: url(${imageUrls[0]});
    background-size : cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100%;

    & :hover {
      transform: scale(1.3);
      transition-duration: 0.3s;
    }
  `;

  const moreStyle = css`
    position: absolute;
    background-image: url("/more.png");
    background-repeat: no-repeat;
    background-size : cover;
    background-position: center;
    width: ${size};
    height: ${size};
    top: 0px;
    right: 0px;
  `;

  return(
    <div css={wrapperStyle} onClick={onClick}>
      <div css={imageStyle}></div>
      {imageUrls.length > 1 ? <div css={moreStyle}></div> : undefined}
    </div>
  )
}

export default BoardPreview