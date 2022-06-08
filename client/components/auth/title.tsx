import { css, SerializedStyles } from '@emotion/react';

const authTitleStyle = css`
  text-align: center;
  font-size: 50px;
  margin: 150px 0;
`

const registerTitleStyle = css`
  text-align: left;
  font-size: 30px;
  margin: 20px;
`

interface AuthTitleProps {
  title: String,
  mode?: String
}

const AuthTitle: React.FC<AuthTitleProps> = ({ title, mode="auth" }) => {
  return (
    <h3 css={mode === "auth" ? authTitleStyle : mode === "register" ? registerTitleStyle : css`` }> 
      {title}
    </h3>
  );
}

export default AuthTitle;