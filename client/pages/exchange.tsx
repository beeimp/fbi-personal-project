import type { NextPage } from 'next';
import { Header } from '../layout/header';
import Caver from 'caver-js';
import { ChangeEventHandler, MouseEventHandler, useEffect } from 'react';
import { useState } from 'react';

import tokenAbi from '../tokenAbi.json';
const CONTRACT_ADDRESS="0x50436fcE0C5c03E3Caf6277389f6Fc60Ca73e6E8"

const Exchange: NextPage = () => {
  const [account, setAccount] = useState<number>(0);
  useEffect(() => {

  })

  const accountHandler:ChangeEventHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if(value >= 0){
      setAccount(value);
    }
    if(value < 0){
      event.target.value = "0";
    }
  }

  const exchangeHandler:MouseEventHandler = async (event:React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    const caver = new Caver(window.klaytn);
    const desoContract = new caver.contract(tokenAbi as AbiItem[], CONTRACT_ADDRESS);
    const value = caver.utils.toPeb(1, 'KLAY');
    try {
      const exchange = await desoContract.methods.exchange();
      // const res = await exchange.send({from: window.klaytn.selectedAddress, gas: 100000});
      const res = await exchange.send({from: window.klaytn.selectedAddress, gas:100000, value: value });
      console.log(res);

      console.dir(exchange);
    } catch (err) {
      console.error(err);
    }
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