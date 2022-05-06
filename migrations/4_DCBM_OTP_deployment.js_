const variables = require('./variables');
const DCBM = artifacts.require("DCBM/DCBM");
var Name = "Digitized OTP Forint";
var Symbol = "eOTP";
var CommercialBankName = "OTP";
var CommercialBankRole;
var CrossBorderBankName = "Alibaba";

var DCBMInstance;

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

  var CommercialBankAccount = accounts[3]; // account 3
  var CrossBorderBankAccount = accounts[8]; // account 8
  
  console.log("DCBM deployment and setup started: Bank : ",CommercialBankName);
  console.log("");
  // deploy
  console.log("STEP 1. [Role:,",CommercialBankName, "] DCBM contract deployment, name: ",Name," Symbol: ",Symbol );
  await deployer.deploy(DCBM,Name,Symbol, {from: accounts[2]});

  // get instance
  DCBMInstance = await DCBM.deployed();
  console.log("DCBM contract deployed, address : ",DCBMInstance.address);
  variables.addressOTP = DCBMInstance.address;
  variables.DCBMInstanceOTP = DCBMInstance

  // whitelist commercial bank account
  console.log("STEP 2. [Role:,",CommercialBankName, "] whitelisting account to commercial bank : ",CommercialBankName);
  await DCBMInstance.whitelistAccount(CommercialBankAccount, {from: accounts[2]})
  console.log("Commercial bank account whitelisted");

  // mint DBCM for commercial bank account
  console.log("STEP 3. [Role:,",CommercialBankName, "] Minting 100 DCBM for CommercialBankAccount :", CommercialBankName);
  await DCBMInstance.mint(CommercialBankAccount, 100, {from: accounts[2]})
  console.log("Minted 100 DCBM for the CommercialBankAccount", CommercialBankName);

  // check Commercial Bank DCBM balance
  console.log("STEP 4. [Role:, Anybody ] Check balance of :", CommercialBankName);
  var DCBMBalance = await DCBMInstance.balanceOf(CommercialBankAccount, {from: accounts[10]})
  console.log("Bank ", CommercialBankName, " has DCBM balance ", DCBMBalance.toNumber());

  console.log("DCBM deployment and setup finished");

  console.log("STEP 5. Start test transaction, transfer 50 DCBM from ",CommercialBankName, " to ", CrossBorderBankName);
  await DCBMInstance.transfer(CrossBorderBankAccount, 50, {from: accounts[3]});

  // check Commercial Bank DCBM balance
  console.log("STEP 6. [Role:, Anybody ] Check balance of :", CommercialBankName);
  var DCBMBalance2 = await DCBMInstance.balanceOf(CommercialBankAccount, {from: accounts[10]})
  console.log("Bank ", CommercialBankName, " has DCBM balance ", DCBMBalance2.toNumber());

  // check Commercial Bank DCBM balance
  console.log("STEP 7. [Role:, Anybody ] Check balance of :", CrossBorderBankName);
  var DCBMBalance3 = await DCBMInstance.balanceOf(CrossBorderBankAccount, {from: accounts[10]})
  console.log("Bank crossborder has DCBM balance ", DCBMBalance3.toNumber());
  
};
