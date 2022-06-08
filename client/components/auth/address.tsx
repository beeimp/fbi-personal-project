import { css } from "@emotion/react";
import { FunctionComponent } from "react";

interface AuthAddressProps {
  address: string
}

const AuthAddress: FunctionComponent<AuthAddressProps> = ({ address }) => {

  const addressWrapperStyle = css`
    text-align: center;
    width: 400px;
    margin: 50px;
  `
  const addressLabelWrapperStyle = css`
    text-align: left;
    margin: 15px;
  `

  const addressLabelStyle = css`
    width: 100px;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  `

  const addressStyle = css`
    width: 350px;
    height: 25px;
    border-radius: 100px;
    border-color: black;
    font-size: 15px;
    padding: 10px 20px;
    background-color: #F3F3F3;
    color: #898989;
  `

  return (
    <div css={addressWrapperStyle}>
      <div css={addressLabelWrapperStyle}>
        <label css={addressLabelStyle}>계정 주소</label>
      </div>
      <input css={addressStyle} value={address} disabled></input>
    </div>
  );
}

export default AuthAddress;