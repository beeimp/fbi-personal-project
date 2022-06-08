import type {NextPage} from 'next';
import styles from '../styles/auth.module.scss'
import {AuthRegisterLayer} from '../layout/auth';

const RegisterPage:NextPage = () => {
  return(
    <div className={styles.authWrapper}>
      <AuthRegisterLayer title='Desogram'></AuthRegisterLayer>
    </div>
  );
}

export default RegisterPage