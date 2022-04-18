// contracts/PvD/PvD.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "./IPvD.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../Governance/GovernanceWhitelist.sol";


// payment versus devlivery experimental implementation
contract PvD is IPvD, GovernanceWhitelist {

    // constructor
    constructor () {
        // creator is default admin
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    // htlc structure
    struct HTLC {
      bytes32 hashlock;
      uint256 timelock;
      address cbdcAddress;
      address fromAddress;
      address toAddress;
      uint256 amount;
      }

    mapping(uint256 => HTLC) public htlcs;

    // event : htlc setup
    event HTLCSetup(
      uint256 htlcid,
      bytes32 hashlock,
      uint256 timelock,
      address cbdcAddress,
      address fromAddress,
      address toAddress,
      uint256 amount
    );

    // event : htlc execute
    event HTLCexecute(
      uint256 htlcid,
      bytes32 hashlock,
      address cbdcAddress,
      address fromAddress,
      address toAddress,
      uint256 amount
    );

    // event : htlcrollback
    event HTLCrollback(uint256 htlcid); 

    // setup HTLC
    function setupHTLC(
      uint256 htlcid,
      bytes32 hashlock,
      uint256 timelock,
      address cbdcAddress,
      address fromAddress,
      address toAddress,
      uint256 amount) public {
          // get cbdc structure 
          IERC20 cbdc = IERC20(cbdcAddress);
          // check allowance cbdc: at propositon amount1 has to be set
          require(cbdc.allowance(fromAddress, address(this)) >= amount ,"Not enough allowed balance cbdc");

          // create struct
          HTLC memory htlc = HTLC(
            hashlock,
            timelock,
            cbdcAddress,
            fromAddress,
            toAddress,
            amount);
          // save
          htlcs[htlcid] = htlc;
          // check if from account whitelisted
          require(whitelist[htlc.fromAddress] == true,"From account must be whitelisted");
          // transfer to this contract
          cbdc.transferFrom(
            fromAddress,
            address(this),
            amount
          );
          // raise event
          emit HTLCSetup (
            htlcid,
            hashlock,
            timelock,
            cbdcAddress,
            fromAddress,
            toAddress,
            amount
          );
      } 

    // getting swap infromation
    function getHTLC(uint256 htlcid) public view returns (
      bytes32 hashlock,
      uint256 timelock,
      address cbdcAddress,
      address fromAddress,
      address toAddress,
      uint256 amount
    ) {
        // getting htlc for the id
        HTLC memory htlc = htlcs[htlcid];
        // return result
        return (
            htlc.hashlock,
            htlc.timelock,
            htlc.cbdcAddress,
            htlc.fromAddress,
            htlc.toAddress,
            htlc.amount
        );
    }

    // execute a HTLC
    function executeHTLC(uint256 htlcid, string memory hashkey) public { 
      // getting htlc
      HTLC memory htlc = htlcs[htlcid];
      // hashkey must be correct
      require(htlc.hashlock == sha256(abi.encodePacked(hashkey)), "password is wrong");
      // timestamp must be in the future      
      require(block.number <= htlc.timelock, "timelock already activated");      
      // get cbdc structure 
      IERC20 cbdc = IERC20(htlc.cbdcAddress);
      // transfer to the recipient
      cbdc.transfer(
            htlc.toAddress,
            htlc.amount
          );
      // raise event
      emit HTLCexecute(
            htlcid,
            htlc.hashlock,
            htlc.cbdcAddress,
            htlc.fromAddress,
            htlc.toAddress,
            htlc.amount);
    } 

    // rollback a HTLC
    function rollbackHTLC(uint256 htlcid) public {
      // getting htlc
      HTLC memory htlc = htlcs[htlcid];
      // timelock mus be active
      require(block.number > htlc.timelock, "timelock still not active");
      // get cbdc structure 
      IERC20 cbdc = IERC20(htlc.cbdcAddress);
      // transfer back to recipient
      cbdc.transfer(
            htlc.toAddress,
            htlc.amount
          );
      // raise event
      emit HTLCrollback(htlcid);
    }



}
