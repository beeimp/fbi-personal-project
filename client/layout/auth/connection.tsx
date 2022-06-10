import { FunctionComponent, MouseEventHandler } from "react";
import { AuthWrapper, AuthTitle, AuthLogo, AuthButton } from '../../components/auth';
import { useRouter } from 'next/router';

interface AuthConnectionLayerProps {
  title: string;
}

const AuthConnectionLayer: FunctionComponent<AuthConnectionLayerProps> = ({ title }) => {
  const router = useRouter();
  const metaMaskConnectionHandler: MouseEventHandler = async (event: React.MouseEvent<Element, globalThis.MouseEvent>) => {
    event.preventDefault();
    try {
      if(!window?.klaytn) throw new Error();		   
      await window.klaytn.enable();
      router.push('/register');
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <AuthWrapper>
      <AuthTitle title={title}></AuthTitle>
      <AuthLogo></AuthLogo>
      <AuthButton onClick={metaMaskConnectionHandler}>KaiKas Connection</AuthButton>
    </AuthWrapper>
  );
}

export default AuthConnectionLayer;