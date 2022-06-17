import type { NextPage, NextPageContext } from 'next'
import { useState, useEffect, useCallback } from 'react';
import Router, { useRouter } from 'next/router';

import { Header } from '../layout/header';
import { BoardPreviewLayout, BoardViewLayout } from '../layout/board';
import { contentsType } from '../types/board';

interface HomeProps {
  isAuth: boolean;
  _contentList: contentsType[];
}

const Home: NextPage<HomeProps> = ({ isAuth, _contentList}) => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [isView, setIsView] = useState<boolean>(false);
  const [view, setView] = useState<contentsType>({
    id: -1,
    image_urls: [],
    article: "",
    create_date: 1654962789818,
    hashtag: [],
    up_voting: 0,
    down_voting: 0
  });
  const [contentList, setContentList] = useState<contentsType[]>(_contentList);

  useEffect(() => {
    // // 카이카스 지갑 잠금 확인
    // window.klaytn._kaikas.isUnlocked().then((isUnlocked:boolean)=>{
    //   if(!isUnlocked){
    //     router.push('/auth');
    //   }
    // });

    // 계정 로그인 확인
    if (!isAuth) {
      router.push('/auth');
    }
    
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, [isAuth, router]);

  if (loading) {
    return <div>...</div>
  }
  return (
    <div>
      {isAuth
        ?
        <>
          <Header title={"DeSogram"}></Header>
          <BoardPreviewLayout contentList={contentList} setView={setView} setIsView={setIsView}></BoardPreviewLayout>
          {isView ? <BoardViewLayout contents={view} setIsView={setIsView}></BoardViewLayout> : undefined}
        </>
        :
        undefined
      }
    </div>
  )
}

Home.getInitialProps = async (context: NextPageContext) => {

  const contentList = require('../dummy/posts.json');
  const isAuth: boolean = true;
  return { 
    isAuth: isAuth, 
    _contentList: contentList,
  };
}

export default Home;