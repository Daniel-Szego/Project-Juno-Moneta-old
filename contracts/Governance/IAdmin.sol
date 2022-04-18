// contracts/Governance/IAdmin.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// governance interface for simple admin functionalities
interface IAdmin {

    // adding admin to the contract
    function addAdmin(address admin) external;

    // revoking admin from the contract
    function revokeAdmin(address admin) external;

}