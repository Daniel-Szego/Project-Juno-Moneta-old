// contracts/DCBM.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./IDCBM.sol";
import "../Governance/GovernanceWhitelist.sol";
 
// Digitized commercial bank money experimental implementation
contract DCBM is ERC20, GovernanceWhitelist, IDCBM {

    //central bank burner account: burning is possible only from central banks burner account
    address public burnAccount;

    //event burn account set
    event BurnAccountSet(address);

    // constructor
    constructor (string memory name, string memory symbol) ERC20(name, symbol)
    {
        // creator is default admin
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);

        // creator is central bank
        _setupRole(COMMERCIAL_BANK, msg.sender);

        // mint is from zero address, it must be whitelisted
        whitelist[address(0)] = true;

    }

    // setting the burner account
    function setBurnAccount(address newAccount) public onlyRole(COMMERCIAL_BANK) {        
        // set burn account
        burnAccount = newAccount;
        // whitelist burn account
        whitelist[newAccount] = true;
        // emit event burn account
        emit BurnAccountSet(newAccount);
    }

    // minting is by central bank only
    function mint(address to, uint256 amount) public onlyRole(COMMERCIAL_BANK) {
        // mint amount
        _mint(to, amount);
    }

    // buring is by central bank only: and only from the burner account
    function burn(uint256 amount) public onlyRole(COMMERCIAL_BANK) {
        _burn(burnAccount, amount);
    }

    // extend transfer with whitelisting and blacklisting functionality
    function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual override
    {
        super._beforeTokenTransfer(from, to, amount);
        require(whitelist[from] == true, "From account must be whitelisted");
    }

    // only central bank can delete the contract
    function kill(address payable to) onlyRole(COMMERCIAL_BANK) public {
        selfdestruct(to);
    }

}