import type {NextPage} from 'next';
import styles from '../styles/auth.module.scss'
import {AuthRegisterLayer} from '../layout/auth';
import { useState } from 'react';
import { registerInfoType } from '../types/user';
const RegisterPage:NextPage = () => {
  const [registerInfo, setRegisterInfo] = useState<registerInfoType>({
    address: "",
    useranme: "",
    phoneNumber: "",
    thumbnail: ""
  });
  
  return(
    <div className={styles.authWrapper}>
      <AuthRegisterLayer title='Desogram' registerInfo={registerInfo} setRegisterInfo={setRegisterInfo}></AuthRegisterLayer>
    </div>
  );
}

export default RegisterPage