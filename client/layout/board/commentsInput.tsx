import { FunctionComponent } from "react";
import {BoardCommentsWrapper, BoardCommentsInputButton, BoardCommentsInput, BoardCommentsInputWrapper } from "../../components/board";
import VotingLayout from './voting';

interface BoardCommentsInputLayoutProps {

}

const BoardCommentsInputLayout: FunctionComponent<BoardCommentsInputLayoutProps> = () => {
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

export default BoardCommentsInputLayout;