// contracts/PvP/IPvP.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
 
// payment versus payment interface
interface IPvP {

    // propose a swap from a party to party
    function proposeSwap(
      uint256 swapid,
      address cbdc1Address,
      address from1Address,
      address to1Address,
      uint256 amount1, 
      address cbdc2Address,
      address from2Address,
      address to2Address,
      uint256 amount2) external; 

    // execute a proposed swap
    function doSwap(uint256 swapid) external; 

    // cancelling a proposed swap
    function cancelSwap(uint256 swapid) external; 

    // getting swap infromation
    function getSwap(uint256 swapid) external view returns (
      address cbdc1Address,
      address from1Address,
      address to1Address,
      uint256 amount1, 
      address cbdc2Address,
      address from2Address,
      address to2Address,
      uint256 amount2
    );

}
