import { ChangeEventHandler, Dispatch, FunctionComponent, MouseEventHandler, SetStateAction, useEffect } from "react";
import { AuthWrapper, AuthTitle, AuthInput, AuthAddress, AuthButton } from '../../components/auth';
import { ProfileAvatar } from '../../components/profile';
import { userInfoType } from "../../types/auth";
import { useRouter } from 'next/router';
interface AuthRegisterProps {
  title: string;
  userInfo: userInfoType;
  setUserInfo: Dispatch<SetStateAction<userInfoType>>;
}

const AuthRegister: FunctionComponent<AuthRegisterProps> = ({ title, userInfo, setUserInfo }) => {
  const router = useRouter();

  useEffect(() => {
    if (window && window.klaytn) {
      if (userInfo.address === "") {
        setUserInfo({
          ...userInfo,
          address: window.klaytn.selectedAddress
        })
      }
      window.klaytn.on('accountsChanged', function (account: string[]) {
        // kaikas에서 계정을 변경할 때 마다 내부의 함수가 실행됩니다.
        setUserInfo({
          ...userInfo,
          address: account[0]
        })
      });
    }
  }, [setUserInfo, userInfo])

  const inputChangeHandler: ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      ...userInfo,
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
      <AuthAddress address={userInfo.address}></AuthAddress>
      <AuthInput label="닉네임" name="username" onChange={inputChangeHandler}></AuthInput>
      <AuthInput label="전화번호" name="phoneNumber" onChange={inputChangeHandler}></AuthInput>
      <AuthButton onClick={submitHandler}>회원가입</AuthButton>
    </AuthWrapper>
  );
}

export default AuthRegister;