import { FunctionComponent, ReactNode } from "react";
import { css } from '@emotion/react';
import { ProfileAvatar } from "../../../profile";

interface BoardViewContentsHeadProps {
  username: string;
  imageUrl: string;
}

const BoardViewContentsHead: FunctionComponent<BoardViewContentsHeadProps> = ({ username, imageUrl }) => {

  const headStyle = css`
    display: flex;
    align-items: center;
  `;
  const usernameSytle = css`
    font-size: 15px;
    font-weight: 600;
    margin: 0 10px;
  `;

  return (
    <div css={headStyle}>
      <ProfileAvatar size="30px" imageUrl={imageUrl}></ProfileAvatar>
      <span css={usernameSytle}>{username}</span>
    </div>
  );
}

export default BoardViewContentsHead;