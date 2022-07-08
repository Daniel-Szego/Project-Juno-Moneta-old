// contracts/Governance/Roles.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
 
// interface for Digitized commercial bank money
contract Roles {

    // basic roles
    bytes32 public constant CENTRAL_BANK = keccak256("CENTRAL_BANK");
    bytes32 public constant COMMERCIAL_BANK = keccak256("COMMERCIAL_BANK");
    bytes32 public constant GOVERNMENT = keccak256("GOVERNMENT");
    bytes32 public constant SUPERVISOR = keccak256("SUPERVISOR");

}
