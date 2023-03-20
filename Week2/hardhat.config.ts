import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const deployer = "";
const url = "https://bsc-testnet.nodereal.io/v1/5025852a99eb4cdd8479ba2a85a98340";
const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    bsc: {
      accounts: [deployer],
      url: `${url}`
    }
  }
};

export default config;
