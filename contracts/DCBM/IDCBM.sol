// contracts/IDCBM.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/IAccessControl.sol";
import "../Governance/IGovernanceWhitelist.sol";

// interface for Digitized commercial bank money
interface IDCBM is IERC20, IAccessControl, IGovernanceWhitelist {

    // minting functionality: creating new CBDC
    function mint(address to, uint256 amount) external;

    // burning functionality: burning already created CBDC
    function burn(uint256 amount) external;

}