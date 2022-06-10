import { NextPage } from 'next';
import styles from '../styles/auth.module.scss'
import {AuthConnectionLayer} from '../layout/auth';

const AuthPage: NextPage = () => {
  return (
    <div className={styles.authWrapper}>
      <AuthConnectionLayer title={"DeSogram"}></AuthConnectionLayer>
    </div>
  )
}

export default AuthPage;