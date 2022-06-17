import { Children, FunctionComponent } from "react";
import { css } from '@emotion/react';

interface BoardViewConentsTextProps {
  text: string;
}

const BoardViewConentsText: FunctionComponent<BoardViewConentsTextProps> = ({ text }) => {

  const wrapperStyle = css`
    padding: 5px;
  `

  const textStyle = css`
    padding: 5px;
    margin: 0;
    
  `

  return (
    <div css={wrapperStyle}>
      <p css={textStyle}>
        &nbsp;&nbsp;{text}
      </p>
    </div>
  );
}

export default BoardViewConentsText;