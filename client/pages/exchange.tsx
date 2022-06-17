import type { NextPage } from 'next';
import { Header } from '../layout/header';
import { ChangeEventHandler, MouseEventHandler, useEffect } from 'react';
import { useState } from 'react';
import { exchange, getBalance, writePost } from '../utils/caver';
import { BoradSubmitType } from '../types/submit';
import { ipfsImagesUpload } from '../utils/pinata';
const Exchange: NextPage = () => {
  const [account, setAccount] = useState<number>(0);
  const [balance, setBalance] = useState<string>("0");
  const [writPosting, setWritePosting] = useState<BoradSubmitType>({
    text: '',
    imageUrls: []
  })
  const [imageFiles, setImageFiles] = useState<File[]>([]);

  useEffect(() => {
    try {
      getBalance(window.klaytn.selectedAddress).then((_balance) => {
        setBalance(() => _balance ?? "0");
      })
    } catch (err) {
      console.error(err);
    }
  }, [])

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
    getBalance(window.klaytn.selectedAddress).then((_balance) => {
      setBalance(() => _balance ?? "0");
    })
  }

  return (
    <div>
      <Header title="DeSogram"></Header>
      <div>
        소유 : <span>{balance}</span> DSG
      </div>
      <p>
        {"1 Klay -> 10 DSG"}
      </p>
      <div>
        <input type='number' onChange={accountHandler} placeholder='환전할 금액..'></input>
        <button onClick={exchangeHandler}>환전하기</button>
      </div>
      <div>
        <h3>글쓰기</h3>
        <textarea placeholder='글쓰기..' onChange={(e)=>{setWritePosting((value)=>({...value, text: e.target.value}))}}></textarea>
        <input type='file' multiple onChange={(e)=>{
          // if(e.target.files?.length > 6) return alert('파일을 6개 이하로 넣어주세요!');
          // const files = e.target.files;
          // setImageFiles(() => []);
          // for(let i = 0; i < files?.length ?? 0; i++){
          //   setImageFiles((value) => [...value, files[i]]);
          // }
        }}></input>
        <button onClick={async()=>{
          console.log(process.env.NEXT_PUBLIC_PINATA_JWT);
          const ipfsImages = ipfsImagesUpload(imageFiles, writPosting.text.length > 10 ? writPosting.text.slice(10) : writPosting.text)
          if(ipfsImages !== undefined) return;
          setWritePosting(value => ({
            ...value,
            imageUrls: ipfsImages
          }))
          await writePost(writPosting.text, writPosting.imageUrls)
        }}>전송</button>
      </div>
    </div>
  )
}

export default Exchange;