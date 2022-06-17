import { FunctionComponent } from "react";
import {BoardViewContentsWrapper, BoardViewContentsHead, BoardViewConentsText } from '../../components/board/view/contents';
import { css } from '@emotion/react';
import BoardViewCommentsLayout from './comments';
import comments from '../../dummy/comments.json';

interface BoardContentsLayoutProps {
}
 
const BoardContentsLayout: FunctionComponent<BoardContentsLayoutProps> = () => {

  const contentsWrapperStyle = css`
    
  `

  return (
    <BoardViewContentsWrapper>
      <BoardViewConentsText text="테스트 문자 입니다."></BoardViewConentsText>
      <BoardViewCommentsLayout comments={comments}></BoardViewCommentsLayout>
    </BoardViewContentsWrapper>
  );
}
 
export default BoardContentsLayout;