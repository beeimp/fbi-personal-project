import { FunctionComponent, ReactNode } from "react";
import { css } from '@emotion/react';

interface BoardViewHeaderProps {
  Avatar: ReactNode;
  Useranme: ReactNode;
}
 
const BoardViewHeader: FunctionComponent<BoardViewHeaderProps> = ({Avatar, Useranme}) => {

  
  const wrapperStyle = css`
    display: flex;
    height: 80px;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 5px 20px;
  `;

  return (
    <div css={wrapperStyle}>
      {Avatar}
      <span>{Useranme}</span>
    </div>
  );
}
 
export default BoardViewHeader;