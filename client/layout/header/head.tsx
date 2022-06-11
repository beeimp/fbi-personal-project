import Link from 'next/link';
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
        <Link href={"/"}><a><HeaderLogo title={title}></HeaderLogo></a></Link>
      <div className={style.buttonWrapper}>
        <Link href="/"><a><HeaderIconButton iconUrl='/home.png' size='40px'></HeaderIconButton></a></Link>
        <Link href="/message"><a><HeaderIconButton iconUrl='/send.png' size='40px'></HeaderIconButton></a></Link>
        <ProfileAvatar size='50px' ></ProfileAvatar>
      </div>
    </HeaderWrapper>
  )
}

export default HeaderLayout;