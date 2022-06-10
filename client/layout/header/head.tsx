import React, { FunctionComponent } from 'react';
import { HeaderIconButton, HeaderLogo, HeaderWrapper } from '../../components/header';
import { ProfileAvatar } from '../../components/profile';
import style from '../../styles/header.module.scss';

interface HeaderProps {
  title: string;
}


const HeaderLayout: FunctionComponent<HeaderProps> = ({ title }) => {
  return (
    <HeaderWrapper>
      <HeaderLogo title={title}></HeaderLogo>
      <div className={style.buttonWrapper}>
        <HeaderIconButton iconUrl='/home.png' size='40px'></HeaderIconButton>
        <HeaderIconButton iconUrl='/send.png' size='40px'></HeaderIconButton>
        <ProfileAvatar size='50px' ></ProfileAvatar>
      </div>
    </HeaderWrapper>
  )
}

export default HeaderLayout;