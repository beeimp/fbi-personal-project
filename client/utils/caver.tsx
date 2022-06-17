import Caver from 'caver-js';
import tokenAbi from '../tokenAbi.json';
const CONTRACT_ADDRESS = "0x50436fcE0C5c03E3Caf6277389f6Fc60Ca73e6E8"

export const exchange = async () => {
  try {
    const caver = new Caver(window.klaytn);
    const desoContract = new caver.contract(tokenAbi, CONTRACT_ADDRESS);
    const value = caver.utils.toPeb(1, 'KLAY');
    const exchange = await desoContract.methods.exchange();
    // const res = await exchange.send({from: window.klaytn.selectedAddress, gas: 100000});
    const res = await exchange.send({ from: window.klaytn.selectedAddress, gas: 100000, value: value });
    console.log(res);

    console.dir(exchange);
  } catch (err) {
    console.error(err);
  }
}

export const getBalance = async () => {
  try {
    const caver = new Caver(window.klaytn);
    const desoContract = new caver.contract(tokenAbi, CONTRACT_ADDRESS);
    const value = caver.utils.toPeb(1, 'KLAY');
    const exchange = await desoContract.methods.exchange();
    // const res = await exchange.send({from: window.klaytn.selectedAddress, gas: 100000});
    const res = await exchange.send({ from: window.klaytn.selectedAddress, gas: 100000, value: value });
  } catch (err) {
    console.error(err);
  }
}