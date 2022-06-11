import { FunctionComponent } from "react";
import Img from 'next/image';
import { css } from '@emotion/react';

interface ProfileAvatarProps {
  size?: string
}

const ProfileAvatar: FunctionComponent<ProfileAvatarProps> = ({ size = "150px" }) => {

  const imageWrapperStyle = css`
    display: flex;
    justify-content: center;
    align-content: center;
    height: ${size};
  `;

  const imageStyle = css`
    border-radius: 100%;
  `

  const emptyStyle = css`
    background-color: gray;
    width: ${size};
    height: ${size};
    border-radius: 100%;
  `;

  return (
    <div css={imageWrapperStyle}>
      {
        false
          ?
          <Img css={imageStyle} src="/" alt="Avatar" width={size} height={size} ></Img>
          :
          <div css={emptyStyle}></div>
      }
    </div>
  );
}

export default ProfileAvatar;