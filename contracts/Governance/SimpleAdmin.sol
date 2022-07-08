// contracts/Governance/SimpleAdmin.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./IAdmin.sol";
 
// governance for simple admin functionalities
contract SimpleAdmin is IAdmin {

    // admins
    mapping (address => bool) public admins;

    // event : add admin
    event AdminAdded(address admin);

    // event : revoke admin
    event AdminRevoked(address admin);

    // modifier: check if caller is admin
    modifier isAdmin() {
        require(admins[msg.sender] == true, "Caller must be an administrator");
        _;
    } 

    // adding admin
    function addAdmin(address admin) public isAdmin() {
        // adding admin
        admins[admin] = true;
        // raise event
        emit AdminAdded(admin);
    } 

    // revoling admin
    function revokeAdmin(address admin) public isAdmin() {
        // adding admin
        admins[admin] = false;
        // raise event
        emit AdminRevoked(admin);
    }

}