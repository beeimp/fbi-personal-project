import type {NextPage} from 'next';
import styles from '../styles/auth.module.scss'
import {AuthRegisterLayer} from '../layout/auth';
import { useState } from 'react';
import { userInfoType } from '../types/auth';
const RegisterPage:NextPage = () => {
  const [userInfo, setUserInfo] = useState<userInfoType>({
    address: "",
    useranme: "",
    phoneNumber: ""
  });
  
  return(
    <div className={styles.authWrapper}>
      <AuthRegisterLayer title='Desogram' userInfo={userInfo} setUserInfo={setUserInfo}></AuthRegisterLayer>
    </div>
  );
}

export default RegisterPage