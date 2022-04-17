// contracts/Governance/GovernanceWhitelist.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/access/AccessControl.sol";
import "./IGovernanceWhitelist.sol";
import "./Roles.sol";

// Governance contract for whitelisting
contract GovernanceWhitelist is IGovernanceWhitelist, AccessControl, Roles {

    // whitelist account
    mapping(address => bool) public whitelist;

    //events whitelist, blacklist
    event WhitelistAccount(address);
    event BlacklistAccount(address);

    // whitelisting account for the transfer
    function whitelistAccount(address account) public onlyRole(COMMERCIAL_BANK) {
        // do whitelist
        whitelist[account] = true;
        // raise event
        emit WhitelistAccount(account);
    } 

    // blacklisting account for the transfer
    function blacklistAccount(address account) public onlyRole(COMMERCIAL_BANK) {
        // do blacklist
        whitelist[account] = false;
        // raise blacklist event
        emit BlacklistAccount(account);
    } 

}

