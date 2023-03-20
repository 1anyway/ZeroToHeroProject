// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "./Owned.sol";

contract Pausable is Owned {

    bool public paused;

    constructor(address _owner) Owned(_owner) {
        owner = _owner;
        require(owner != address(0), "Owner must be set");

    }

    function Paused() external onlyOwner {
        paused = true;
    }

    function unPaused() external onlyOwner {
        paused = false;
    }

    modifier notPaused {
        require(!paused, "This action cannot be performed while the contract is paused");
        _;
    }
}
