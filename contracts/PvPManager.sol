// contracts/PvPManager.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// CBDC basic token implementation
contract PvPManager {

    // admins
    mapping (address => bool) admins;

    // event : add admin
    event AdminAdded(address admin);

    // event : revoke admin
    event AdminRevoked(address admin);

    // whitelist account
    mapping(address => bool) public whitelist;

    //events whitelist, blacklist
    event WhitelistAccount(address);
    event BlacklistAccount(address);

    // event : pvpswap
    event PvPSwap(
        address cbdc1,
        address from1,
        address to1,
        uint256 amount1,
        address cbdc2,
        address from2,
        address to2,
        uint256 amount2);

    // constructor
    constructor (address admin1, address admin2) {
        // set initiator as admin
        admins[msg.sender] = true;
        // set admin1 as admin
        admins[admin1] = true;
        // set admin2 as admin
        admins[admin2] = true;
    }

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

    // whitelisting account for the swap
    function whitelistAccount(address account) public isAdmin() {
        // do whitelist
        whitelist[account] = true;
        // raise event
        emit WhitelistAccount(account);
    } 

    // blacklisting account for the swap
    function blacklistAccount(address account) public isAdmin() {
        // do blacklist
        whitelist[account] = false;
        // raise blacklist event
        emit BlacklistAccount(account);
    } 

    // memoryless swap, counterparty is this smart contract
    function pvpswap(
      address cbdc1Address,
      address from1Address,
      address to1Address,
      uint256 amount1, 
      address cbdc2Address,
      address from2Address,
      address to2Address,
      uint256 amount2) public 
      {
        // getting token wrappers
        IERC20 cbdc1 = IERC20(cbdc1Address);
        IERC20 cbdc2 = IERC20(cbdc2Address);
        // check if from1 account is whitelisted
        require(whitelist[from1Address] == true,"From 1 account must be whitelisted");
        // check if from2 account is whitelisted
        require(whitelist[from2Address] == true,"From 2 account must be whitelisted");
        // check allowance cbdc1
        require(cbdc1.allowance(from1Address, address(this)) >= amount1 ,"Not enough allowed balance cbdc1");
        // check allowance cbdc2
        require(cbdc2.allowance(from2Address, address(this)) >= amount2 ,"Not enough allowed balance cbdc2");
        // do transfer1
        cbdc1.transferFrom(
            from1Address,
            to1Address,
            amount1
        );
        // do transfer2
        cbdc1.transferFrom(
            from2Address,
            to2Address,
            amount2
        );
        // emit event
        emit PvPSwap(
            cbdc1Address,
            from1Address,
            to1Address,
            amount1,
            cbdc2Address,
            from2Address,
            to2Address,
            amount2
        );
    }

    // only admin can delete the contract
    function kill(address payable to) isAdmin() public {
        selfdestruct(to);
    }


}