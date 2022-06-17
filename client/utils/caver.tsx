import Caver from 'caver-js';
import tokenAbi from '../tokenAbi.json';
const CONTRACT_ADDRESS = "0x902c048e1939c5be90Be7761cb65223333A2b3C9"

export const getBalance = async (address: string) => {
  try {
    const caver = new Caver(window.klaytn);
    const desoContract = new caver.contract(tokenAbi, CONTRACT_ADDRESS);
    const balance = await desoContract.methods.balanceOf(address).call();
    return caver.utils.fromPeb(balance, 'KLAY');
  } catch (err) {
    console.error(err);
  }
}

export const exchange = async () => {
  try {
    const caver = new Caver(window.klaytn);
    const desoContract = new caver.contract(tokenAbi, CONTRACT_ADDRESS);
    const exchange = await desoContract.methods.exchange();
    const value = caver.utils.toPeb(1, 'KLAY');
    // const res = await exchange.send({from: window.klaytn.selectedAddress, gas: 100000});
    const res = await exchange.send({ from: window.klaytn.selectedAddress, gas: 100000, value: value });
    console.log(res);

    console.dir(exchange);
  } catch (err) {
    console.error(err);
  }
}

export const getPost = async (postId: number) => {
  try {
    const caver = new Caver(window.klaytn);
    const desoContract = new caver.contract(tokenAbi, CONTRACT_ADDRESS);
    const post = await desoContract.methods.getPost(postId);
    return post;
  } catch (err) {
    console.error(err);
  }
}

export const writePost = async (text: string, imageUrls: string[]) => {
  try {
    const caver = new Caver(window.klaytn);
    const desoContract = new caver.contract(tokenAbi, CONTRACT_ADDRESS);
    await desoContract.methods.writePost(text, imageUrls).send({ from: window.klaytn.selectedAddress, gas: 100000 });
  } catch (err) {
    console.error(err);
  }
}

export const writeComment = async (postId: number, text: string) => {
  try {
    const caver = new Caver(window.klaytn);
    const desoContract = new caver.contract(tokenAbi, CONTRACT_ADDRESS);
    await desoContract.methods.writeComment(postId, text).send({ from: window.klaytn.selectedAddress, gas: 100000 });
  } catch (err) {
    console.error(err);
  }
}

export const postUpVoting = async (postId: number, amount: number) => {
  try {
    const caver = new Caver(window.klaytn);
    const desoContract = new caver.contract(tokenAbi, CONTRACT_ADDRESS);
    await desoContract.methods.postUpVoting(postId, amount).send({ from: window.klaytn.selectedAddress, gas: 100000 });
  } catch (err) {
    console.error(err);
  }
}

export const postDownVoting = async (postId: number, amount: number) => {
  try {
    const caver = new Caver(window.klaytn);
    const desoContract = new caver.contract(tokenAbi, CONTRACT_ADDRESS);
    await desoContract.methods.postDownVoting(postId, amount).send({ from: window.klaytn.selectedAddress, gas: 100000 });
  } catch (err) {
    console.error(err);
  }
}

export const commentUpVoting = async (commentId:number, postId: number, amount: number) => {
  try {
    const caver = new Caver(window.klaytn);
    const desoContract = new caver.contract(tokenAbi, CONTRACT_ADDRESS);
    await desoContract.methods.commentUpVoting(commentId, postId, amount).send({ from: window.klaytn.selectedAddress, gas: 100000 });
  } catch (err) {
    console.error(err);
  }
}

export const commentDownVoting = async (commentId:number, postId: number, amount: number) => {
  try {
    const caver = new Caver(window.klaytn);
    const desoContract = new caver.contract(tokenAbi, CONTRACT_ADDRESS);
    await desoContract.methods.commentDownVoting(commentId, postId, amount).send({ from: window.klaytn.selectedAddress, gas: 100000 });
  } catch (err) {
    console.error(err);
  }
}