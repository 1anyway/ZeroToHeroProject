import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const ERC20 = await ethers.getContractFactory("MyERC20");
  const erc20 = await ERC20.deploy();

  await erc20.deployed();

  console.log("the contract is deployed successfully!");

  console.log(
    `ERC20 with  deployed to ${erc20.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
