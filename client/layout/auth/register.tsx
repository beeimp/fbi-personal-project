import { FunctionComponent } from "react";
import {AuthWrapper, AuthTitle, AuthInput, AuthAddress, AuthButton} from '../../components/auth';
import {ProfileAvatar} from '../../components/profile';
interface AuthRegisterProps {
  title: string
}
 
const AuthRegister: FunctionComponent<AuthRegisterProps> = ({title}) => {
  return (
    <AuthWrapper>
      <AuthTitle title={title} mode="register"></AuthTitle>
      <ProfileAvatar size="200px"></ProfileAvatar>
      <AuthAddress address="0x843a3442F9b95a5ad73636F67667B7b635d6f553"></AuthAddress>
      <AuthInput label="닉네임"></AuthInput>
      <AuthInput label="전화번호"></AuthInput>
      <AuthButton>회원가입</AuthButton>
    </AuthWrapper>
  );
}
 
export default AuthRegister;