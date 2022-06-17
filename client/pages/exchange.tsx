import type { NextPage } from 'next';
import { Header } from '../layout/header';
import { ChangeEventHandler, MouseEventHandler, useEffect } from 'react';
import { useState } from 'react'; 
import { exchange } from '../utils/caver';
const Exchange: NextPage = () => {
  const [account, setAccount] = useState<number>(0);
  useEffect(() => {

  })

  const accountHandler: ChangeEventHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (value >= 0) {
      setAccount(value);
    }
    if (value < 0) {
      event.target.value = "0";
    }
  }

  const exchangeHandler: MouseEventHandler = async (event: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    await exchange();
  }

  return (
    <div>
      <Header title="DeSogram"></Header>
      <p>
        {"1 Klay -> 10 DSG"}
      </p>
      <input type='number' onChange={accountHandler} placeholder='환전할 금액..'></input>
      <button onClick={exchangeHandler}>환전하기</button>
    </div>
  )
}

export default Exchange;