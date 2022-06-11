import { FunctionComponent } from "react";
import { css } from '@emotion/react';

interface ProfileUsernameProps {
  username: string;
}
 
const ProfileUsername: FunctionComponent<ProfileUsernameProps> = ({username}) => {
  const usernameSytle = css`
    font-size: 20px;
    font-weight: 600;
    margin: 0 10px;
  `;

  return (
    <span css={usernameSytle}>{username}</span>
  );
}
 
export default ProfileUsername;