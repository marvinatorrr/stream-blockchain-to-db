"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const config_1 = require("./config");
async function myfunction() {
    const provider = new ethers_1.ethers.providers.JsonRpcProvider(config_1.config.httpsUrl + config_1.config.key);
    const signer = provider.getSigner();
    const blockNumber = await provider.getBlockNumber();
    const balance = await provider.getBalance('ethers.eth');
    console.log(blockNumber);
    console.log(ethers_1.ethers.utils.formatEther(balance));
}
myfunction();
//# sourceMappingURL=index.js.map