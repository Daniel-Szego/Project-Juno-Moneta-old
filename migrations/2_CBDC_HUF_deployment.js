const CBDC = artifacts.require("CBDC");
var Name = "Digitized Hungarian Forint";
var Symbol = "eHUF";
var CommercialBankName = "OTP";
var CommercialBankRole;

var CBDCInstance;

module.exports = async function (deployer) {
  let accounts = await web3.eth.getAccounts();

  var CentralBankAdmin = accounts[0]; // account 0
  var CentralBankBurnAccount = accounts[1]; // account 1
  var CommercialBankAdmin = accounts[2]; // account 2
  var CommercialBankAccount = accounts[3]; // account 3
  var CrossBorderBankAccount = accounts[8]; // account 8
  

  console.log("CBDC deployment and setup started: Bank",Name);
  // deploy
  await deployer.deploy(CBDC,Name,Symbol, {from: accounts[0]});
  console.log("1. CBDC contract deployed");

  // get instance
  CBDCInstance = await CBDC.deployed();

  // setup central bank burn account
  await CBDCInstance.setBurnAccount(CentralBankBurnAccount, {from: accounts[0]});
  console.log("2. Burn account set");

  // add commercial bank admin
  CommercialBankRole = await CBDCInstance.COMMERCIAL_BANK();
  //console.log("Rolename",CommercialBankRole);
  await CBDCInstance.grantRole(CommercialBankRole,CommercialBankAdmin, {from: accounts[0]});
  console.log("3. Commercial bank role set");

  // whitelist commercial bank account
  await CBDCInstance.whitelistAccount(CommercialBankAccount, {from: accounts[2]})
  console.log("4. Commercial bank account whitelisted");

  // require CBDC for commercial bank account
  await CBDCInstance.requireCBDC(CommercialBankAccount, 100, {from: accounts[2]})
  console.log("5. Required 100 CBDC for the CommercialBankAccount", CommercialBankName);

  // mint CBDC for commercial bank account
  await CBDCInstance.mint(CommercialBankAccount, 100, {from: accounts[0]})
  console.log("6. Mint 100 CBDC for the CommercialBankAccount", CommercialBankName);

  // check Commercial Bank CBDC balance
  var CBDCBalance = await CBDCInstance.balanceOf(CommercialBankAccount, {from: accounts[10]})
  console.log("7. Bank ", CommercialBankName, " has CBDC balance ", CBDCBalance.toNumber());

  console.log("CBDC deployment and setup finished");

  console.log("8. Start test transaction");
  await CBDCInstance.transfer(CrossBorderBankAccount, 50, {from: accounts[3]});

  // check Commercial Bank CBDC balance
  var CBDCBalance2 = await CBDCInstance.balanceOf(CommercialBankAccount, {from: accounts[10]})
  console.log("8.a. Bank ", CommercialBankName, " has CBDC balance ", CBDCBalance2.toNumber());

  // check Commercial Bank CBDC balance
  var CBDCBalance3 = await CBDCInstance.balanceOf(CrossBorderBankAccount, {from: accounts[10]})
  console.log("8.b. Bank crossborder has CBDC balance ", CBDCBalance3.toNumber());
  
};
