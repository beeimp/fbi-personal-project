import { FunctionComponent } from "react";
import { BoardViewContentsHead, BoardViewConentsText } from '../../components/board/view/contents';
import { commentType } from "../../types/board";
import VotingLayout from "./voting";
import { css } from '@emotion/react';

interface BoardCommentsLayoutProps {
  comments: commentType[];
}

const BoardViewCommentsLayout: FunctionComponent<BoardCommentsLayoutProps> = ({ comments }) => {

  const commentsWrapper = css`
    margin-top: 50px;
    margin-left: 10px;
    margin-right: 10px;
  `;
  return (
    <div css={commentsWrapper}>
      {comments
        .sort((a, b) => b.create_date - a.create_date)
        .map((comment, index) => {
          const createDate = new Date(comment.create_date).toString().split(' ').slice(0, 5).join(' ');
          return (
            <div key={index}>
              <BoardViewContentsHead username={comment.user_info.username} imageUrl={comment.user_info.thumbnail}></BoardViewContentsHead>
              <BoardViewConentsText text={comment.comment}></BoardViewConentsText>
              <span>{createDate}</span>
              <VotingLayout height="30px" ></VotingLayout>
            </div>
          );
        })}
    </div>
  );
}

export default BoardViewCommentsLayout;