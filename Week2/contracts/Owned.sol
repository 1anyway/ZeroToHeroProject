//SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

contract Owned {

    event OwnerChanged(address oldOwner, address newOwner);

    address public owner;

    constructor(address _owner) {
        require(_owner != address(0), "Owner address cannot be 0");
        owner = _owner;
        emit OwnerChanged(address(0), _owner);
    }

    modifier onlyOwner {
        _onlyOwner();
        _;
    }

    function _onlyOwner() private view {
        require(msg.sender == owner, "Only the contract owner may perform this action");
    }
}

