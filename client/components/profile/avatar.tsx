import { FunctionComponent } from "react";
import { css } from '@emotion/react';

interface ProfileAvatarProps {
  size?: string,
  imageUrl?: string
}

const ProfileAvatar: FunctionComponent<ProfileAvatarProps> = ({ size = "150px", imageUrl="" }) => {

  const imageWrapperStyle = css`
    display: flex;
    justify-content: center;
    align-content: center;
    height: ${size};
  `;

  const imageStyle = css`
    border-radius: 100%;
    width: ${size};
    height: ${size};
    background-image: url(${imageUrl});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
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
        imageUrl !== ''
          ?
          <div css={imageStyle}></div>
          :
          <div css={emptyStyle}></div>
      }
    </div>
  );
}

export default ProfileAvatar;