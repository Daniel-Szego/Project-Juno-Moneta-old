// contracts/GreenFinance/IGreenFinance.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./IGreenToken.sol";
import "../Governance/GovernanceWhitelist.sol";
 
// green finance token basic interface
//contract GreenToken is ERC20, GovernanceWhitelist, IGreenToken {

contract GreenToken {

/*

    // part of the transferred taint should be decerased
    uint256 public forgetFactor;

    // decimals in percent
    uint256 public decimals;

    // tain structure
    struct Taint {
        uint256 unitCarbonPerBlock; // amount of carbon pollution per blocks
        uint256 unitMethanePerBlock; // amount of methane pollution per blocks
        uint256 percentCarbon; // amount of carbon pollution per token
        uint256 percentMethane; // amount of methane pollution per token
        uint256 latestCalculation; // latest calculation as of pollution
    }

    // tain factor for individual addresses
    mapping(address => Taint) public taintFactor;

    // constructor
    constructor (string memory name, 
                 string memory symbol, 
                 uint256 _forgetFactor,
                 uint256 _decimals) ERC20(name, symbol)
    {
        // creator is default admin
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
        // set decimals for percents
        decimals = _decimals;
        // set forget factor
        forgetFactor = _forgetFactor;
    }


    // getting carbon and methane 
    function getTaintPercent(address account) public view returns (uint256,uint256) {
        // get taint account
        Taint memory taint = taintFactor[account];
        // return carbon and methane pollution
        return (taint.percentCarbon, taint.percentMethane);
    }

    // getting cummulated carbon and methane for the amount stored
    function getTaint(address account) public view returns (uint256,uint256) {
        // get balance
        uint256 balance = balanceOf(account);
        // get taint account
        Taint memory taint = taintFactor[account];
        // getting time from latest update
        uint256 timeInBlockNr = block.number - taint.latestCalculation;
        // calculate percentual carbon pollution
        uint carbonPollution = ((timeInBlockNr * tain.percentCarbon) / 10 ** decimals) * balance;
        // calculate percentual methan pollution
        uint methanePollution = ((timeInBlockNr * tain.percentMethane) / 10 ** decimals) * balance;
        // return
        return (carbonPollution, methanePollution);
    }

    // after token transfer overwrite with environmental accounting
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual override {
        // get taint from
        Taint memory from = taintFactor[from];
        // get from balance
        uint256 fromBalance = balanceOf(from);
        // get to balance
        uint256 toBalance = balanceOf(to);
        // getting time from latest update
        uint256 timeInBlockNr = block.number - taint.latestCalculation;
        // calculate percentual carbon pollution
        uint carbonPollution = ((timeInBlockNr * tain.percentCarbon) / 10 ** decimals) * balance;
        // calculate percentual methan pollution
        uint methanePollution = ((timeInBlockNr * tain.percentMethane) / 10 ** decimals) * balance;




        // calculate transferred cummulated account
        uint256 transferredCACarbon = (amount * fromTaint.cummulatedCarbon) / fromBalance;
        uint256 transferredCAMethane = (amount * fromTaint.cummulatedMethane) / fromBalance;
        // decerease from account with the transferred cummulated account
        fromTaint.cummulatedCarbon -= transferredCACarbon;
        fromTaint.cummulatedMethane -= transferredCAMethane;
        // get tain to
        Taint memory toTaint = taintFactor[to];
        // increase cummulated account of the target
        toTaint.cummulatedCarbon += transferredCACarbon + ((amount * fromTaint.unitCarbon) / forgetFactor);
        toTaint.cummulatedMethane += transferredCAMethane + ((amount * fromTaint.unitMethane) / forgetFactor);
        // call super
        super._afterTokenTransfer(from, to, amount);
    }

*/

}