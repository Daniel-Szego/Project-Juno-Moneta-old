// contracts/GreenFinance/IGreenFinance.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/IAccessControl.sol";
import "../Governance/IGovernanceWhitelist.sol";
 
// green finance token basic interface
interface IGreenToken is IERC20, IGovernanceWhitelist {

    



}
