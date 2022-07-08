// contracts/Governance/IGovernanceWhitelist.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./IGovernanceBase.sol";
 
// interface for Digitized commercial bank money
interface IGovernanceWhitelist is IGovernanceBase {

    // whitelisting account for the transfer
    function whitelistAccount(address account) external;

    // blacklist account for the transfer
    function blacklistAccount(address account) external;

}


