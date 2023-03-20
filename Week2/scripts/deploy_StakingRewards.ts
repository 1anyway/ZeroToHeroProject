import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  const _owner = "0xD84f607C4d7BE59A6aA4f01091ECF30F694d9230";
  const _rewardsDistribution = "0xD84f607C4d7BE59A6aA4f01091ECF30F694d9230";
  const _rewardsToken = "0xfC4Cd8939fb841C80549b07DF0395dE548076a2a";
  const _stakingToken = "0xfC4Cd8939fb841C80549b07DF0395dE548076a2a";
  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const StakingReward = await ethers.getContractFactory("StakingReward");
  const stakingReward = await StakingReward.deploy(
    _owner,
    _rewardsDistribution,
    _rewardsToken,
    _stakingToken
     );

  await stakingReward.deployed();

  console.log("the contract is deployed successfully!");

  console.log(
    `StakingReward with  deployed to ${stakingReward.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
