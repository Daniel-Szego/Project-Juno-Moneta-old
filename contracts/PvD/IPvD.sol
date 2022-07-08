// contracts/PvD/IPvD.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
 
// payment versus devlivery basic interface
interface IPvD {

    // setup HTLC
    function setupHTLC(
      uint256 htlcid,
      bytes32 hashlock,
      uint256 timelock,
      address cbdcAddress,
      address fromAddress,
      address toAddress,
      uint256 amount) external; 

    // execute a HTLC
    function executeHTLC(uint256 htlcid, string memory hashkey) external; 

    // rollback a HTLC
    function rollbackHTLC(uint256 htlcid) external; 

    // getting HTLC infromation
    function getHTLC(uint256 htlcid) external view returns (
      bytes32 hashlock,
      uint256 timelock,
      address cbdcAddress,
      address fromAddress,
      address toAddress,
      uint256 amount
    );

}
