import { FunctionComponent } from "react";
import { css } from '@emotion/react';

interface AuthInputProps {
  label: string;
}

const AuthInput: FunctionComponent<AuthInputProps> = ({label}) => {

  const inputBoxWrapperStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    margin: 50px;
  `
  const inputLabelStyle = css`
    width: 100px;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  `

  const inputStyle = css`
    width: 250px;
    border-radius: 100px;
    font-size: 20px;
    padding: 10px 20px;
    background-color: #F3F3F3;
    color: #898989;
  `

  return (
    <div css={inputBoxWrapperStyle}>
      <label css={inputLabelStyle}>{label}</label>
      <input css={inputStyle} placeholder={`${label}을 입력...`}></input>
    </div>
  );
}
 
export default AuthInput;