// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "./Owned.sol";

contract RewardsDistributionRecipient {
    address public rewardsDistribution;


    modifier onlyRewardsDistribution() {
        require(msg.sender == rewardsDistribution, "Caller is not RewardsDistribution contract ");
        _;
    }
}