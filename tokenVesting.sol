
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenVesting is Ownable {
    struct Stakeholder {
        address addr;
        uint256 amount;
        uint256 releaseTime;
        bool isWhitelisted;
        bool isClaimed;
    }

    IERC20 public token;
    mapping(address => Stakeholder) public stakeholders;
    address[] public stakeholderAddresses;

    event TokenReleased(address beneficiary, uint256 amount);

    constructor(address _token) {
        token = IERC20(_token);
    }

    function addStakeholder(address _stakeholder, uint256 _amount, uint256 _releaseTime) external onlyOwner {
        require(!stakeholders[_stakeholder].isWhitelisted, "Stakeholder already whitelisted");
        stakeholders[_stakeholder] = Stakeholder(_stakeholder, _amount, _releaseTime, true, false);
        stakeholderAddresses.push(_stakeholder);
    }

    function claimTokens() external {
        require(stakeholders[msg.sender].isWhitelisted, "You are not whitelisted");
        require(block.timestamp >= stakeholders[msg.sender].releaseTime, "Tokens are not yet available");
        require(!stakeholders[msg.sender].isClaimed, "Tokens already claimed");

        uint256 amount = stakeholders[msg.sender].amount;
        stakeholders[msg.sender].isClaimed = true;
        token.transfer(msg.sender, amount);

        emit TokenReleased(msg.sender, amount);
    }

    function withdraw(uint256 amount) external onlyOwner {
        token.transfer(owner(), amount);
    }
}
