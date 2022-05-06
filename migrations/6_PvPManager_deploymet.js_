const variables = require('./variables');
const CBDC = artifacts.require("CBDC");
const PvPManager = artifacts.require("PvPManager");
var CommercialBankRole;

var PvPManagerInstance;
var CBDCHUFInstance;
var CBDCYUANInstance;

// accounts
// 0 deployer MNB admin
// 1 MNB burn
// 2 OTP admin
// 3 OTP account
// 4 
// 5 deployer PBOF admin
// 6 PBOF burn account
// 7 Alibaba admin
// 8 Alibaba account
// 9
// 10 external account to read out anything


module.exports = async function (deployer) {
    let accounts = await web3.eth.getAccounts();
  
    var DeployerAddress = accounts[0]; // account 0 somebody deploys the contract

    var CommercialBankAdminOTP = accounts[2]; // account 2
    var CommercialBankAccountOTP = accounts[3]; // account 3

    var CommercialBankAdminAlibaba = accounts[7]; // account 7
    var CommercialBankAccountAlibaba = accounts[8]; // account 8

    console.log("Deploy and setup PvP Manager");
    console.log("");

    console.log("STEP 1. [Role: deployer ] deploy Payment versus payment manager");
    await deployer.deploy(PvPManager, {from: accounts[2]});

    // get instances
    PvPManagerInstance = await PvPManager.deployed();
    CBDCHUFInstance = variables.CBDCInstanceHUF;
    CBBDCInstanceYUAN = variables.CBBDCInstanceYUAN;
    console.log(CBDCHUFInstance.address);
    console.log(CBBDCInstanceYUAN.address);
 
 //   var CBDCHUFInstance = await CBDC.deployed(variables.addressHUF);
 //   var CBDCYUANInstance = await CBDC.deployed(variables.addressYUAN);

    // add commercial bank admin
    CommercialBankRole = await CBDCHUFInstance.COMMERCIAL_BANK();
    console.log("Rolename",CommercialBankRole);
    console.log("STEP 2. [Role:, granting commercial Bank role to : OTP account");
    await PvPManagerInstance.grantRole(CommercialBankRole,CommercialBankAdminOTP, {from: accounts[2]});

    console.log("STEP 3. [Role:, granting commercial Bank role to : Alibaba account");
    await PvPManagerInstance.grantRole(CommercialBankRole,CommercialBankAdminAlibaba, {from: accounts[2]});

    console.log("STEP 4. [Role: OTP ] whitelist OTP accounts");
    await PvPManagerInstance.whitelistAccount(CommercialBankAccountOTP, {from: accounts[2]});

    console.log("STEP 5. [Role: MNB ] whitelist mnb accounts");
    await PvPManagerInstance.whitelistAccount(CommercialBankAccountAlibaba, {from: accounts[7]});

    console.log("Deploy and setup PvP Manager finished");

    console.log("Test PvP");
    console.log("STEP 6. [Role: any ] get initial balances OTP");
    var CBDCBalance2 = await CBDCHUFInstance.balanceOf(CommercialBankAccountOTP, {from: accounts[10]})
    console.log("Bank OTP has CBDC HUF balance ", CBDCBalance2.toNumber());

    console.log("STEP 7. [Role: any ] get initial balances Alibaba");
    var CBDCBalance3 = await CBBDCInstanceYUAN.balanceOf(CommercialBankAccountAlibaba, {from: accounts[10]})
    console.log("Bank Alibaba has CBDC YUAN balance ", CBDCBalance3.toNumber());

    console.log("STEP 8. [Role: OTP ] allow for OTP on the PvPManager to transact 10 CBDC HUF");
    await CBDCHUFInstance.approve(PvPManagerInstance.address, 10, {from: accounts[3]});

    console.log("STEP 9. [Role: OTP ] propose swap to Alibaba 10 eHUF to 10 eYUAN");
    await PvPManagerInstance.proposeSwap(
        1,
        CBDCHUFInstance.address,
        CommercialBankAccountOTP,
        CommercialBankAccountAlibaba,
        10, 
        CBBDCInstanceYUAN.address,
        CommercialBankAccountAlibaba,
        CommercialBankAccountOTP,
        10,        
        {from: accounts[3]});

    console.log("STEP 10. [Role: Alibaba ] allow for OTP on the PvPManager to transact 10 CBDC HUF");
    await CBBDCInstanceYUAN.approve(PvPManagerInstance.address, 10, {from: accounts[8]});
    
    console.log("STEP 11. [Role: Anybody ] doswap");
    await PvPManagerInstance.doSwap(1, {from: accounts[8]});

    console.log("STEP 12. [Role:, Anybody ] Check eHUF balance of OTP");
    var CBDCBalance2 = await CBDCHUFInstance.balanceOf(CommercialBankAccountOTP, {from: accounts[10]})
    console.log("Bank OTP eHUF ", CBDCBalance2.toNumber());

    console.log("STEP 13. [Role:, Anybody ] Check eYUAN balance of OTP");
    var CBDCBalance3 = await CBBDCInstanceYUAN.balanceOf(CommercialBankAccountOTP, {from: accounts[10]})
    console.log("Bank OTP eYUAN ", CBDCBalance3.toNumber());

    console.log("STEP 14. [Role:, Anybody ] Check eYUAN balance of Alibaba");
    var CBDCBalance4 = await CBBDCInstanceYUAN.balanceOf(CommercialBankAccountAlibaba, {from: accounts[10]})
    console.log("Bank Alibaba eYUAN ", CBDCBalance4.toNumber());

    console.log("STEP 15. [Role:, Anybody ] Check eHUF balance of Alibaba");
    var CBDCBalance4 = await CBDCHUFInstance.balanceOf(CommercialBankAccountAlibaba, {from: accounts[10]})
    console.log("Bank Alibaba eHUF ", CBDCBalance4.toNumber());

};