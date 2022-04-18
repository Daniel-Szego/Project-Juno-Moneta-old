// contracts/PvP/PvPManager.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "../Governance/GovernanceWhitelist.sol";
import "./IPvP.sol";

// payment versus payment manager experimental implementation
// OTC style
contract PvPManager is GovernanceWhitelist, IPvP {

    // swap structure
    struct Swap {
      address cbdc1Address;
      address from1Address;
      address to1Address;
      uint256 amount1; 
      address cbdc2Address;
      address from2Address;
      address to2Address;
      uint256 amount2;
      }

    mapping(uint256 => Swap) swaps;

    // event : proposeswap
    event SwapProposed(
        uint256 indexed swapid,
        address cbdc1,
        address indexed from1,
        address to1,
        uint256 amount1,
        address cbdc2,
        address from2,
        address indexed to2,
        uint256 amount2);

    // event : swapdone
    event SwapDone(
        address cbdc1,
        address indexed from1,
        address to1,
        uint256 amount1,
        address cbdc2,
        address from2,
        address indexed to2,
        uint256 amount2);

    // event : swapcancelled
    event SwapCancelled(uint256 swapid); 

    // constructor
    constructor () {
        // creator is default admin
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    // proposing a swap from party1 to a party2
    function proposeSwap(
      uint256 swapid,
      address cbdc1Address,
      address from1Address,
      address to1Address,
      uint256 amount1, 
      address cbdc2Address,
      address from2Address,
      address to2Address,
      uint256 amount2) public {
        // getting token wrappers
        IERC20 cbdc1 = IERC20(cbdc1Address);
        // check allowance cbdc1: at propositon amount1 has to be set
        require(cbdc1.allowance(from1Address, address(this)) >= amount1 ,"Not enough allowed balance cbdc1");
        // swap id not taken
        require(swaps[swapid].cbdc1Address == address(0) && swaps[swapid].cbdc2Address == address(0), "Spap id already taken");
        // create swap struct
        Swap memory swap = Swap(cbdc1Address,
                         from1Address,
                         to1Address,
                         amount1,
                         cbdc2Address,
                         from2Address,
                         to2Address,
                         amount2);

        // save swap
        swaps[swapid] = swap;
        // raise event
        emit SwapProposed(
                swapid,
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

    // do swap, from address 2 has to approve the swap with approving the necessary amount for exchange
    function doSwap(uint256 swapid) public 
      {
        // getting swap information
        Swap memory swap = swaps[swapid];
        // getting token wrappers
        IERC20 cbdc1 = IERC20(swap.cbdc1Address);
        IERC20 cbdc2 = IERC20(swap.cbdc2Address);
        // check if from1 account is whitelisted
        require(whitelist[swap.from1Address] == true,"From 1 account must be whitelisted");
        // check if from2 account is whitelisted
        require(whitelist[swap.from2Address] == true,"From 2 account must be whitelisted");
        // check allowance cbdc1
        require(cbdc1.allowance(swap.from1Address, address(this)) >= swap.amount1 ,"Not enough allowed balance cbdc1");
        // check allowance cbdc2
        require(cbdc2.allowance(swap.from2Address, address(this)) >= swap.amount2 ,"Not enough allowed balance cbdc2");
        // do transfer1
        cbdc1.transferFrom(
            swap.from1Address,
            swap.to1Address,
            swap.amount1
        );
        // do transfer2
        cbdc2.transferFrom(
            swap.from2Address,
            swap.to2Address,
            swap.amount2
        );
        // raise event
        emit SwapDone(
            swap.cbdc1Address,
            swap.from1Address,
            swap.to1Address,
            swap.amount1,
            swap.cbdc2Address,
            swap.from2Address,
            swap.to2Address,
            swap.amount2
        );
        // delete swap
        delete swaps[swapid];
    }

    // cancelling a proposed swap
    function cancelSwap(uint256 swapid) public {
        // getting swap information
        Swap memory swap = swaps[swapid];
        // only parties can cancel the swap
        require(swap.from1Address == msg.sender || swap.from2Address == msg.sender, "Only the effected parties can cancel the swap");
        // delete swap
        delete swaps[swapid];
        // event : swapcancelled
        emit SwapCancelled(swapid); 
    } 

    // getting swap infromation
    function getSwap(uint256 swapid) public view returns (
      address cbdc1Address,
      address from1Address,
      address to1Address,
      uint256 amount1, 
      address cbdc2Address,
      address from2Address,
      address to2Address,
      uint256 amount2
    ) {
        // getting swap information
        Swap memory swap = swaps[swapid];
        // return information
        return (swap.cbdc1Address,
                swap.from1Address,
                swap.to1Address,
                swap.amount1,
                swap.cbdc2Address,
                swap.from2Address,
                swap.to2Address,
                swap.amount2
                 );
    }


    // only admin can delete the contract
    function kill(address payable to) onlyRole(COMMERCIAL_BANK) public {
        selfdestruct(to);
    }


}