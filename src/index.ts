import {ethers} from 'ethers';
import {config} from './config';

async function myfunction() {
  const provider = new ethers.providers.JsonRpcProvider(
    config.httpsUrl + config.key
  );

  const signer = provider.getSigner();

  const blockNumber = await provider.getBlockNumber();
  const balance = await provider.getBalance('ethers.eth');
  console.log(blockNumber);
  console.log(ethers.utils.formatEther(balance));
}

myfunction();
