
// contracts/CBDC.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract CBDC is ERC20, AccessControl {

    // roles
    bytes32 public constant CENTRAL_BANK = keccak256("CENTRAL_BANK");
    bytes32 public constant COMMERCIAL_BANK = keccak256("COMMERCIAL_BANK");
    bytes32 public constant GOVERNMENT = keccak256("GOVERNMENT");
    bytes32 public constant SUPERVISOR = keccak256("SUPERVISOR");

    //central bank burner account: burning is possible only from central banks burner account
    address public burnAccount;

    //event burn account set
    event BurnAccountSet(address);

    // whitelist account
    mapping(address => bool) public whitelist;

    //events whitelist, blacklist
    event WhitelistAccount(address);
    event BlacklistAccount(address);

    // reuired amount of CBDC
    mapping (address => uint256) public requiredCBDC;

    // event for require CBDC
    event RequiredCBDC(address, uint256);

    // constructor
    constructor (string memory name, string memory symbol) ERC20(name, symbol)
    {
        // creator is default admin
        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);

        // creator is central bank
        _setupRole(CENTRAL_BANK, msg.sender);

        // mint is from zero address, it must be whitelisted
        whitelist[address(0)] = true;

    }

    // setting the burner account
    function setBurnAccount(address newAccount) public onlyRole(CENTRAL_BANK) {        
        // set burn account
        burnAccount = newAccount;
        // whitelist burn account
        whitelist[newAccount] = true;
        // emit event burn account
        emit BurnAccountSet(newAccount);
    }

    // minting is by central bank only
    function mint(address to, uint256 amount) public onlyRole(CENTRAL_BANK) {
        // can mint if CBDC is required 
        require(requiredCBDC[to] >= amount, "CBDC must be required before ");
        // mint amount
        _mint(to, amount);
        // decrement required amount
        requiredCBDC[to] -= requiredCBDC[to];
    }

    // buring is by central bank only: and only from the burner account
    function burn(uint256 amount) public onlyRole(CENTRAL_BANK) {
        _burn(burnAccount, amount);
    }

    // whitelisting account for the transfer
    function whitelistAccount(address account) public onlyRole(COMMERCIAL_BANK) {
        // do whitelist
        whitelist[account] = true;
        // raise event
        emit WhitelistAccount(account);
    } 

    // blacklisting account for the transfer
    function blacklistAccount(address account) public onlyRole(COMMERCIAL_BANK) {
        // do blacklist
        whitelist[account] = false;
        // raise blacklist event
        emit BlacklistAccount(account);
    } 

    // extend transfer with whitelisting and blacklisting functionality
    function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual override
    {
        super._beforeTokenTransfer(from, to, amount);
        require(whitelist[from] == true, "From account must be whitelisted");
    }

    //require new CBDC
    function requireCBDC(address account, uint256 amount) public onlyRole(COMMERCIAL_BANK) {
        // require CBDC
        requiredCBDC[account] += amount;
        // raise event
        emit RequiredCBDC(account, amount);
    }

}