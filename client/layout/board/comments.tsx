import { FunctionComponent } from "react";
import {BoardCommentsWrapper, BoardCommentsInputButton, BoardCommentsInput, BoardCommentsInputWrapper } from "../../components/board";
import VotingLayout from './voting';

interface BoardCommentsLayoutProps {

}

const BoardCommentsLayout: FunctionComponent<BoardCommentsLayoutProps> = () => {
  return (
    <BoardCommentsWrapper>
      <VotingLayout></VotingLayout>
      <BoardCommentsInputWrapper>
        <BoardCommentsInput></BoardCommentsInput>
        <BoardCommentsInputButton>전송</BoardCommentsInputButton>
      </BoardCommentsInputWrapper>
    </BoardCommentsWrapper>
  );
}

export default BoardCommentsLayout;