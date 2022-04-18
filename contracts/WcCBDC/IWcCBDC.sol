// contracts/WcCBDC/IwcCBDC.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/IAccessControl.sol";
import "../Governance/IGovernanceWhitelist.sol";

// interface for wholesale crossborder DBDC
interface IwcCBDC is IERC20, IAccessControl, IGovernanceWhitelist  {

    // setting burn account for the central bank
    function setBurnAccount(address newAccount) external;        

    // minting functionality: creating new CBDC
    function mint(address to, uint256 amount) external;

    // burning functionality: burning already created CBDC
    function burn(uint256 amount) external;

    // apply for new CBDC to be minted
    function requireCBDC(address account, uint256 amount) external;
    
}