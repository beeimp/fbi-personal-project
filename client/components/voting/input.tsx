import { FunctionComponent } from "react";
import { css } from '@emotion/react';

interface VotingInputProps {

}

const VotingInput: FunctionComponent<VotingInputProps> = () => {

  const wrapperStyle = css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 20px;
  `;
  const inputStyle = css`
    width: 100%;
    height: 100%;
    text-align: right;
    font-size: 20px;
    border: none;
  `;

  const labelStyle = css`
    
  `;

  return (
    <div css={wrapperStyle}>
      <input css={inputStyle} type={"number"}></input> <label css={labelStyle}>Klay</label>
    </div>
  );
}

export default VotingInput;