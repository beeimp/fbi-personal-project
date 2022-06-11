import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // 카이카스 지갑 연결 확인
  const checkKaiKas = () => {
    if (window?.klaytn?._kaikas) {
      window.klaytn._kaikas.isUnlocked().then((isUnlocked: boolean) => {
        if (!isUnlocked) {
          router.push('/auth');
        }
      });
    } else {
      router.push('/auth');
    }
  }

  useEffect(() => {
    checkKaiKas();

    document.addEventListener('mousedown', checkKaiKas);
    return () => {
      document.removeEventListener('mousedown', checkKaiKas);
    }
  })
  return <Component {...pageProps} />
}

export default MyApp
