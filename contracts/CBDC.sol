
// contracts/CBDC.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CBDC is ERC20 {

    constructor (string memory name, string memory symbol) ERC20(name, symbol)
    {



    }
}