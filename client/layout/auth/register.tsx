import { ChangeEventHandler, Dispatch, FunctionComponent, MouseEventHandler, SetStateAction, useEffect } from "react";
import { AuthWrapper, AuthTitle, AuthInput, AuthAddress, AuthButton } from '../../components/auth';
import { ProfileAvatar } from '../../components/profile';
import { registerInfoType } from "../../types/user";
import { useRouter } from 'next/router';
interface AuthRegisterProps {
  title: string;
  registerInfo: registerInfoType;
  setRegisterInfo: Dispatch<SetStateAction<registerInfoType>>;
}

const AuthRegister: FunctionComponent<AuthRegisterProps> = ({ title, registerInfo, setRegisterInfo }) => {
  const router = useRouter();

  useEffect(() => {
    if (window && window.klaytn) {
      if (registerInfo.address === "") {
        setRegisterInfo({
          ...registerInfo,
          address: window.klaytn.selectedAddress
        })
      }
      window.klaytn.on('accountsChanged', function (account: string[]) {
        // kaikas에서 계정을 변경할 때 마다 내부의 함수가 실행됩니다.
        setRegisterInfo({
          ...registerInfo,
          address: account[0]
        })
      });
    }
  }, [setRegisterInfo, registerInfo])

  const inputChangeHandler: ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterInfo({
      ...registerInfo,
      [event.target.name]: event.target.value
    })
  }

  const submitHandler: MouseEventHandler = () => {
    // 회원가입하여 서버에 정보 요청 후 토큰 응답
    router.push('/');
  }

  return (
    <AuthWrapper>
      <AuthTitle title={title} mode="register"></AuthTitle>
      <ProfileAvatar size="200px"></ProfileAvatar>
      <AuthAddress address={registerInfo.address}></AuthAddress>
      <AuthInput label="닉네임" name="username" onChange={inputChangeHandler}></AuthInput>
      <AuthInput label="전화번호" name="phoneNumber" onChange={inputChangeHandler}></AuthInput>
      <AuthButton onClick={submitHandler}>회원가입</AuthButton>
    </AuthWrapper>
  );
}

export default AuthRegister;