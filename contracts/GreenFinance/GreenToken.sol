// contracts/GreenFinance/IGreenFinance.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./IGreenToken.sol";
import "../Governance/GovernanceWhitelist.sol";

// green finance token basic interface
contract GreenToken is ERC20, GovernanceWhitelist, IGreenToken {

    // part of the transferred taint should be decerased
    uint256 public forgetFactor;

    // tain structure
    struct Taint {
        uint256 unitCarbon;
        uint256 unitMethane;
        uint256 cummulatedCarbon;
        uint256 cummulatedMethane;
    }

    // tain factor for individual addresses
    mapping(address => Taint) public taintFactor;

    // constructor
    constructor (string memory name, string memory symbol) ERC20(name, symbol)
    {
        // creator is default admin
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    // after token transfer overwrite with environmental accounting
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual override {
        // get taint from
        Taint memory fromTaint = taintFactor[from];
        // get from balance
        uint256 fromBalance = balanceOf(from);
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

}