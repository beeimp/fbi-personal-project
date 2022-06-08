import { FunctionComponent } from "react";
import { AuthWrapper, AuthTitle, AuthLogo, AuthButton } from '../../components/auth';

interface AuthConnectionLayerProps {
  title: string;
}

const AuthConnectionLayer: FunctionComponent<AuthConnectionLayerProps> = ({title}) => {
  return (
    <AuthWrapper>
      <AuthTitle title={title}></AuthTitle>
      <AuthLogo></AuthLogo>
      <AuthButton>KaiKas Connection</AuthButton>
    </AuthWrapper>
  );
}

export default AuthConnectionLayer;