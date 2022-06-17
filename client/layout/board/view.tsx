import React, { Dispatch, EventHandler, SetStateAction, useRef, useState } from 'react';
import { BoardViewHeader, BoardViewWrapper } from "../../components/board";
import { ProfileAvatar } from "../../components/profile";
import ProfileUsername from "../../components/profile/username";
import ImageSliderLayout from '../image-slider/index';
import { contentsType } from '../../types/board';
import BoardCommentsInputLayout from './commentsInput';
import BoardContentsLayout from './contents';
interface BoardViewLayoutProps {
  setIsView: Dispatch<SetStateAction<boolean>>;
  contents: contentsType;
}

const BoardViewLayout: React.FC<BoardViewLayoutProps> = ({ setIsView, contents }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const closeViewHandler: React.MouseEventHandler = (event: React.MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
    if (event.target !== event.currentTarget) return;
    setIsView(false);
  }

  return (
    <BoardViewWrapper wrapperRef={wrapperRef} closeViewHandler={closeViewHandler}>
      <BoardViewHeader Avatar={<ProfileAvatar size={"50px"} />} Useranme={<ProfileUsername username="fbi-personal" />}></BoardViewHeader>
      <ImageSliderLayout wrapperRef={wrapperRef} imageUrls={contents.image_urls}></ImageSliderLayout>
      <BoardContentsLayout></BoardContentsLayout>
      <BoardCommentsInputLayout></BoardCommentsInputLayout>
    </BoardViewWrapper>
  )
};

export default BoardViewLayout;