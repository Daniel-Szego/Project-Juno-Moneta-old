const variables = require('./variables');
const CBDC = artifacts.require("CBDC");
const PvPManager = artifacts.require("PvPManager");

var PvPManagerInstance;
var CBDCHUFInstance;
var CBDCYUANInstance;

module.exports = async function (deployer) {
    let accounts = await web3.eth.getAccounts();
  
    var DeployerAddress = accounts[0]; // account 0

    var CommercialBankAdminOTP = accounts[2]; // account 2
    var CommercialBankAccountOTP = accounts[3]; // account 3

    var CommercialBankAdminAlibaba = accounts[6]; // account 6
    var CommercialBankAccountAlibaba = accounts[7]; // account 7

    console.log("Deploy and setup PvP Manager");
    console.log("");

    console.log("STEP 1. [Role: deployer ] deploy Payment versus payment manager");
    await deployer.deploy(PvPManager,CommercialBankAdminOTP, CommercialBankAdminAlibaba);

    // get instances
    PvPManagerInstance = await PvPManager.deployed();
    CBDCHUFInstance = variables.CBDCInstanceHUF;
    CBBDCInstanceYUAN = variables.CBBDCInstanceYUAN;
    console.log(CBDCHUFInstance.address);
    console.log(CBBDCInstanceYUAN.address);
 
    var CBDCHUFInstance = await CBDC.deployed(variables.addressHUF);
    var CBDCYUANInstance = await CBDC.deployed(variables.addressYUAN);

    console.log("STEP 2. [Role: OTP ] whitelist OTP accounts");
    await PvPManagerInstance.whitelistAccount(CommercialBankAccountOTP, {from: accounts[2]});

    console.log("STEP 3. [Role: MNB ] whitelist mnb accounts");
    await PvPManagerInstance.whitelistAccount(CommercialBankAccountAlibaba, {from: accounts[6]});

    console.log("Deploy and setup PvP Manager finished");

    console.log("Test PvP");
    console.log("STEP 4. [Role: any ] get initial balances OTP");
    var CBDCBalance2 = await CBDCHUFInstance.balanceOf(CommercialBankAccountOTP, {from: accounts[10]})
    console.log("Bank OTP has CBDC HUF balance ", CBDCBalance2.toNumber());

    console.log("STEP 5. [Role: any ] get initial balances Alibaba");
    var CBDCBalance3 = await CBDCYUANInstance.balanceOf(CommercialBankAccountAlibaba, {from: accounts[10]})
    console.log("Bank Alibaba has CBDC YUAN balance ", CBDCBalance3.toNumber());

    console.log("STEP 6. [Role: OTP ] allow for OTP on the PvPManager to transact 10 CBDC HUF");
    await CBDCHUFInstance.approve(PvPManagerInstance.address, 10);

    // problem: as soon this is approved, it can be traded for 0 YUAN !!!



};