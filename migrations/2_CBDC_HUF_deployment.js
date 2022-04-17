const variables = require('./variables');
const CBDC = artifacts.require("WcCBDC/WcCBDC");
var CentralBankName = "MNB";
var Name = "Digitized Hungarian Forint";
var Symbol = "eHUF";
var CommercialBankName = "OTP";
var CommercialBankRole;
var CrossBorderBankName = "Alibaba";

var CBDCInstance;

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

  var DeployerAccount = accounts[0]; // account 0
  var CentralBankBurnAccount = accounts[1]; // account 1
  var CommercialBankAdmin = accounts[2]; // account 2
  var CommercialBankAccount = accounts[3]; // account 3
  var CrossBorderBankAccount = accounts[8]; // account 8
  
  console.log("CBDC deployment and setup started: Bank : ",CentralBankName);
  console.log("");
  // deploy
  console.log("STEP 1. [Role:,",CentralBankName, "] CBDC contract deployment, name: ",Name," Symbol: ",Symbol );
  await deployer.deploy(CBDC,Name,Symbol, {from: accounts[0]});

  // get instance
  CBDCInstance = await CBDC.deployed();
  console.log("CBDC contract deployed, address : ",CBDCInstance.address);
  variables.addressHUF = CBDCInstance.address;
  variables.CBDCInstanceHUF = CBDCInstance

  // setup central bank burn account
  console.log("STEP 2. [Role:,",CentralBankName, "] Central bank account set, account");
  await CBDCInstance.setBurnAccount(CentralBankBurnAccount, {from: accounts[0]});
  console.log("2. Burn account set");

  // add commercial bank admin
  CommercialBankRole = await CBDCInstance.COMMERCIAL_BANK();
  //console.log("Rolename",CommercialBankRole);
  console.log("STEP 3. [Role:,",CentralBankName, "] granting commercial Bank role to :",CommercialBankName);
  await CBDCInstance.grantRole(CommercialBankRole,CommercialBankAdmin, {from: accounts[0]});
  console.log("Commercial bank role set");

  // whitelist commercial bank account
  console.log("STEP 4. [Role:,",CommercialBankName, "] whitelisting account to commercial bank : ",CommercialBankName);
  await CBDCInstance.whitelistAccount(CommercialBankAccount, {from: accounts[2]})
  console.log("Commercial bank account whitelisted");

  // require CBDC for commercial bank account
  console.log("STEP 5. [Role:,",CommercialBankName, "] Requiring 100 CBDC for the CommercialBankAccount :", CommercialBankName);
  await CBDCInstance.requireCBDC(CommercialBankAccount, 100, {from: accounts[2]})
  console.log("Required 100 CBDC for the CommercialBankAccount", CommercialBankName);

  // mint CBDC for commercial bank account
  console.log("STEP 6. [Role:,",CentralBankName, "] Minting 100 CBDC for CommercialBankAccount :", CommercialBankName);
  await CBDCInstance.mint(CommercialBankAccount, 100, {from: accounts[0]})
  console.log("Minted 100 CBDC for the CommercialBankAccount", CommercialBankName);

  // check Commercial Bank CBDC balance
  console.log("STEP 7. [Role:, Anybody ] Check balance of :", CommercialBankName);
  var CBDCBalance = await CBDCInstance.balanceOf(CommercialBankAccount, {from: accounts[10]})
  console.log("Bank ", CommercialBankName, " has CBDC balance ", CBDCBalance.toNumber());

  console.log("CBDC deployment and setup finished");

  console.log("STEP 8. Start test transaction, transfer 50 CBDC from ",CommercialBankName, " to ", CrossBorderBankName);
  await CBDCInstance.transfer(CrossBorderBankAccount, 50, {from: accounts[3]});

  // check Commercial Bank CBDC balance
  console.log("STEP 9. [Role:, Anybody ] Check balance of :", CommercialBankName);
  var CBDCBalance2 = await CBDCInstance.balanceOf(CommercialBankAccount, {from: accounts[10]})
  console.log("Bank ", CommercialBankName, " has CBDC balance ", CBDCBalance2.toNumber());

  // check Commercial Bank CBDC balance
  console.log("STEP 10. [Role:, Anybody ] Check balance of :", CrossBorderBankName);
  var CBDCBalance3 = await CBDCInstance.balanceOf(CrossBorderBankAccount, {from: accounts[10]})
  console.log("Bank crossborder has CBDC balance ", CBDCBalance3.toNumber());
  
};
