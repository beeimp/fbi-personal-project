import { FunctionComponent, ReactNode } from "react";
import { css } from '@emotion/react';

interface BoardViewHeaderProps {
  Avatar: ReactNode;
  Useranme: ReactNode;
}
 
const BoardViewHeader: FunctionComponent<BoardViewHeaderProps> = ({Avatar, Useranme}) => {

  
  const wrapperStyle = css`
    grid-row: 1/2;
    grid-column: 1/2;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid black;
    padding: 5px 20px;

    @media screen and (min-width: 800px) {
      grid-column: 2/3;
    }
  `;

  return (
    <div css={wrapperStyle}>
      {Avatar}
      <span>{Useranme}</span>
    </div>
  );
}
 
export default BoardViewHeader;