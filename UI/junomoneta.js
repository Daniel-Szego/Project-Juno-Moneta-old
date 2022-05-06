abiCBDC = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_players","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"attend","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"pickWinner","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

abiDCMB = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_players","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"attend","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"pickWinner","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

abiPvP = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_players","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"attend","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"pickWinner","outputs":[],"stateMutability":"nonpayable","type":"function"}]');





if(typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'){
	console.log('web3 detected in junomoneta.js');
    web3 = new Web3(window.ethereum); 
    //account = web3.eth.accounts[0];
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
	console.log('going to localhost');

    //account = web3.eth.accounts[0];
}


//--Contracts
var cbdcHufContractAddress = "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73";
var cbdcHufContract = new web3.eth.Contract(abiCBDC,cbdcHufContractAddress);

var cbdcYuanContractAddress = "0xfe3b557e8fb62b89f4916b721be55ceb828dbd73";
var cbdcYuanContract = new web3.eth.Contract(abiCBDC,cbdcYuanContractAddress);

var PvPManagerContractAddress = "0x39Ce188CCA4EBF6DF7E89ab0602f199a369A0BD8";
var PvPManagerContract = new web3.eth.Contract(abiPvP,PvPManagerContractAddress);

var dcmbHufContractAddress = "0x39Ce188CCA4EBF6DF7E89ab0602f199a369A0BD8";
var dcmbHufContract = new web3.eth.Contract(abiDCMB,dcmbHufContractAddress);

var dcmbYuanContractAddress = "0x39Ce188CCA4EBF6DF7E89ab0602f199a369A0BD8";
var dcmbYuanContract = new web3.eth.Contract(abiDCMB,dcmbYuanContractAddress);


//--Participants
var centralBankMnbAddress = "0x39Ce188CCA4EBF6DF7E89ab0602f199a369A0BD8";
var centralBankPBOFddress = "0x39Ce188CCA4EBF6DF7E89ab0602f199a369A0BD8";

var centralBankBurnMnbAddress = "0x39Ce188CCA4EBF6DF7E89ab0602f199a369A0BD8";
var centralBankBurnPBOFddress = "0x39Ce188CCA4EBF6DF7E89ab0602f199a369A0BD8";

var commbankAdminOtpAddress = "0x39Ce188CCA4EBF6DF7E89ab0602f199a369A0BD8";
var commbankAdminAlibabaAddress = "0x39Ce188CCA4EBF6DF7E89ab0602f199a369A0BD8";

var commbankOtpAddress = "0x39Ce188CCA4EBF6DF7E89ab0602f199a369A0BD8";
var commbankAlibabaAddress = "0x39Ce188CCA4EBF6DF7E89ab0602f199a369A0BD8";



function setBurnMnb() {
    address = $("#burnAddressMnb").val();    
    console.log("Set burn = " + address);
    
    cbdcHufContract.methods.setBurnAccount(address).send({from: account}).on('error',console.error);    
}

function setBurnPbof() {
    address = $("#burnAddressPbof").val();    
    console.log("Set burn = " + address);
    
    cbdcYuanContract.methods.setBurnAccount(address).send({from: account}).on('error',console.error);    
}

function grantRoleMnb() {
    address = $("#commbank_admin_address_mnb").val();    
    console.log("Grant role = " + address);
    
    cbdcHufContract.methods.COMMERCIAL_BANK().call({from: account}, (err, res) => {
        if(err) {
            console.log(err);            
        }
        else {
            console.log(res);
            role = res;
            cbdcHufContract.methods.grantRole(role,address).send({from: account}).on('error',console.error);    
        }
    });
}

function grantRolePbof() {
    address = $("#commbank_admin_address_pbof").val();    
    console.log("Grant role = " + address);
    
    cbdcYuanContract.methods.COMMERCIAL_BANK().call({from: account}, (err, res) => {
        if(err) {
            console.log(err);            
        }
        else {
            console.log(res);
            role = res;
            cbdcYuanContract.methods.grantRole(role,address).send({from: account}).on('error',console.error);    
        }
    });
}

function mintMnb() {
    amount = $("#mint_amount_mnb").val();
    address = $("#mint_commbank_address_mnb").val();
    console.log("Mint amount = " + amount + ", address = " + adddress);
    
    cbdcHufContract.methods.mint(address, amount).send({from: account}).on('error',console.error);    
}

function mintPbof() {
    amount = $("#mint_amount_pbof").val();
    address = $("#mint_commbank_address_pbof").val();
    console.log("Mint amount = " + amount + ", address = " + adddress);
    
    cbdcYuanContract.methods.mint(address, amount).send({from: account}).on('error',console.error);    
}

function whitelistAccountOtp() {
    address = $("#whitelist_commbank_address_otp").val();    
    console.log("Whitelist address = " + address);
    
    cbdcHufContract.methods.whitelistAccount(address).send({from: account}).on('error',console.error);    
}

function whitelistAccountAlibaba() {
    address = $("#whitelist_commbank_address_alibaba").val();    
    console.log("Whitelist address = " + address);
    
    cbdcYuanContract.methods.whitelistAccount(address).send({from: account}).on('error',console.error);    
}

function requireCBDCHuf() {
    amount = $("#require_cbdc_huf_amount").val();
    address = $("#require_commbank_address_otp").val();
    console.log("Require amount = " + amount + ", address = " + adddress);
    
    cbdcHufContract.methods.requireCBDC(address,amount).send({from: account}).on('error',console.error);
}

function requireCBDCHYuan() {
    amount = $("#require_cbdc_yuan_amount").val();
    address = $("#require_commbank_address_alibaba").val();
    console.log("Require amount = " + amount + ", address = " + adddress);
    
    cbdcYuanContract.methods.requireCBDC(address,amount).send({from: account}).on('error',console.error);
}

function whitelistAccountDcmbOtp() {
    address = $("#whitelist_commbank_address_dcmb_otp").val();
    console.log("Whitelist DCMB address = " + adddress);
    
    dcmbHufContract.methods.whitelistAccount(address).send({from: account}).on('error',console.error);
}

function whitelistAccountDcmbAlibaba() {
    address = $("#whitelist_commbank_address_dcmb_alibaba").val();
    console.log("Whitelist DCMB address = " + adddress);
    
    dcmbYuanContract.methods.whitelistAccount(address).send({from: account}).on('error',console.error);
}

function mintDcmbOtp() {
    address = $("#mint_dcmb_otp_commbank_address").val();
    amount = $("#mint_dcmb_otp_amount").val();
    console.log("Mint amount = " + amount + ", address = " + adddress);
    
    dcmbHufContract.methods.mint(address,amount).send({from: account}).on('error',console.error);
}

function mintDcmbAlibaba() {
    address = $("#mint_dcmb_alibaba_commbank_address").val();
    amount = $("#mint_dcmb_alibaba_amount").val();
    console.log("Mint amount = " + amount + ", address = " + adddress);
    
    dcmbYuanContract.methods.mint(address,amount).send({from: account}).on('error',console.error);
}

function pvpGrantRoleMnb() {
    address = $("#pvp_otp_grant_commbank_address").val();    
    console.log("PvP Grant role = " + address);
    
    cbdcHufContract.methods.COMMERCIAL_BANK().call({from: account}, (err, res) => {
        if(err) {
            console.log(err);            
        }
        else {
            console.log(res);
            role = res;
            PvPManagerContract.methods.grantRole(role,address).send({from: account}).on('error',console.error);    
        }
    });
}

function grantRolePbof() {
    address = $("#pvp_alibaba_grant_commbank_address").val();    
    console.log("PvP Grant role = " + address);
    
    cbdcYuanContract.methods.COMMERCIAL_BANK().call({from: account}, (err, res) => {
        if(err) {
            console.log(err);            
        }
        else {
            console.log(res);
            role = res;
            PvPManagerContract.methods.grantRole(role,address).send({from: account}).on('error',console.error);    
        }
    });
}

function pvpWhitelistAccountOtp() {
    address = $("#pvp_otp_whitelist_commbank_address").val();    
    console.log("PvP Whitelist address = " + address);
    
    PvPManagerContract.methods.whitelistAccount(address).send({from: account}).on('error',console.error);    
}

function pvpWhitelistAccountAlibaba() {
    address = $("#pvp_alibaba_whitelist_commbank_address").val();    
    console.log("PvP Whitelist address = " + address);
    
    PvPManagerContract.methods.whitelistAccount(address).send({from: account}).on('error',console.error);    
}

function transferCbdcHuf() {
    amount = $("#transfer_cbdc_huf_amount").val();
    address = $("#transfer_cbdc_huf_target_address").val();
    console.log("Transfer CBDC amount = " + amount + ", address = " + adddress);
    
    cbdcHufContract.methods.transfer(address,amount).send({from: account}).on('error',console.error);    
}

function transferCbdcYuan() {
    amount = $("#transfer_cbdc_yuan_amount").val();
    address = $("#transfer_cbdc_yuan_target_address").val();
    console.log("Transfer CDBC amount = " + amount + ", address = " + adddress);
    
    cbdcYuanContract.methods.transfer(address,amount).send({from: account}).on('error',console.error);    
}

function transferDcmbHuf() {
    amount = $("#transfer_dcmb_huf_amount").val();
    address = $("#transfer_dcmb_huf_target_address").val();
    console.log("Transfer DCMB amount = " + amount + ", address = " + adddress);
    
    dcmbHufContract.methods.transfer(address,amount).send({from: account}).on('error',console.error);    
}

function transferDcmbYuan() {
    amount = $("#transfer_dcmb_yuan_amount").val();
    address = $("#transfer_dcmb_yuan_target_address").val();
    console.log("Transfer DCMB amount = " + amount + ", address = " + adddress);
    
    dcmbYuanContract.methods.transfer(address,amount).send({from: account}).on('error',console.error);    
}

function approveSwapCbdcHuf() {
    amount = $("#approve_swap_cbdc_huf").val();    
    console.log("Approve amount = " + amount);
    
    cbdcHufContract.methods.approve(PvPManagerContractAddress,amount).send({from: account}).on('error',console.error);    
}

function approveSwapCbdcYuan() {
    amount = $("#approve_swap_cbdc_yuan").val();    
    console.log("Approve amount = " + amount);
    
    cbdcYuanContract.methods.approve(PvPManagerContractAddress,amount).send({from: account}).on('error',console.error);    
}

function proposeSwapCbdcHuf() {
    swapid = $("#swap_id_otp").val();    
    fromAmount = $("#propose_swap_cbdc_huf_from_amount").val();
    toAmount = $("#propose_swap_cbdc_huf_to_amount").val();
    toAddress = $("#propose_swap_cbdc_huf_to_address").val();
    console.log("Propose Swap HUF->YUAN: from amount = " + fromAmount + ", to amount = " + toAmount + ", swapid = " + swapid);
    
    PvPManagerContract.methods.proposeSwap(swapid,
                                           cbdcHufContract,commbankOtpAddress,toAddress,fromAmount,
                                           cbdcYuanContract,toAddress,commbankOtpAddress,toAmount).send({from: account}).on('error',console.error);    
}

function proposeSwapCbdcYuan() {
    swapid = $("#swap_id_alibaba").val();    
    fromAmount = $("#propose_swap_cbdc_yuan_from_amount").val();
    toAmount = $("#propose_swap_cbdc_yuan_to_amount").val();
    toAddress = $("#propose_swap_cbdc_yuan_to_address").val();
    console.log("Propose Swap YUAN->HUF: from amount = " + fromAmount + ", to amount = " + toAmount + ", swapid = " + swapid);
    
    PvPManagerContract.methods.proposeSwap(swapid,
                                           cbdcYuanContract,commbankAlibabaAddress,toAddress,fromAmount,
                                           cbdcOtpContract,toAddress,commbankAlibabaAddress,toAmount).send({from: account}).on('error',console.error);    
}

function doSwapOtp() {
    swapid = $("#do_swapid_otp").val();
    console.log("Do swap " + swapid);
    
    PvPManagerContract.methods.doSwap(swapid).send({from: account}).on('error',console.error);
}

function doSwapAlibaba() {
    swapid = $("#do_swapid_alibaba").val();
    console.log("Do swap " + swapid);
    
    PvPManagerContract.methods.doSwap(swapid).send({from: account}).on('error',console.error);
}



function queryBalance() {
  
    cbdcHufContract.methods.balanceOf(commbankOtpAddress).call({from: account}, (err, res) => {
        if(err) {
            console.log(err);            
        }
        else {
            console.log(res);
			$("#balance_otp_cbdc_huf").html("CBDC eHUF Balance = " + res);
        }
    });

    cbdcYuanContract.methods.balanceOf(commbankOtpAddress).call({from: account}, (err, res) => {
        if(err) {
            console.log(err);            
        }
        else {
            console.log(res);
			$("#balance_otp_cbdc_yuan").html("CBDC eYUAN Balance = " + res);
        }
    });
    
    cbdcYuanContract.methods.balanceOf(commbankAlibabaAddress).call({from: account}, (err, res) => {
        if(err) {
            console.log(err);            
        }
        else {
            console.log(res);
			$("#balance_alibaba_cbdc_yuan").html("CBDC eYUAN Balance = " + res);
        }
    });
    
    cbdcHufContract.methods.balanceOf(commbankAlibabaAddress).call({from: account}, (err, res) => {
        if(err) {
            console.log(err);            
        }
        else {
            console.log(res);
			$("#balance_alibaba_cbdc_huf").html("CBDC eYUAN Balance = " + res);
        }
    });
    
    dcmbHufContract.methods.balanceOf(commbankOtpAddress).call({from: account}, (err, res) => {
        if(err) {
            console.log(err);            
        }
        else {
            console.log(res);
			$("#balance_otp_dcmb_huf").html("DCMB eHUF Balance = " + res);
        }
    });

    dcmbYuanContract.methods.balanceOf(commbankOtpAddress).call({from: account}, (err, res) => {
        if(err) {
            console.log(err);            
        }
        else {
            console.log(res);
			$("#balance_otp_dcmb_yuan").html("DCMB eYUAN Balance = " + res);
        }
    });
    
    dcmbYuanContract.methods.balanceOf(commbankAlibabaAddress).call({from: account}, (err, res) => {
        if(err) {
            console.log(err);            
        }
        else {
            console.log(res);
			$("#balance_alibaba_dcmb_yuan").html("DCMB eYUAN Balance = " + res);
        }
    });
    
    dcmbHufContract.methods.balanceOf(commbankAlibabaAddress).call({from: account}, (err, res) => {
        if(err) {
            console.log(err);            
        }
        else {
            console.log(res);
			$("#balance_alibaba_dcmb_huf").html("DCMB eYUAN Balance = " + res);
        }
    });
}
var balanceQueryInterval = setInterval(queryBalance, 3000);


$(document).ready(function() {
 
    window.ethereum.request({ method: "eth_requestAccounts" }).then(() => {
        web3.eth.getAccounts().then(e => {
            account = e[0];
            console.log("account = " + account);
        
            if(account == "0xb5DCc851A61F6a428C9369A9D611343e597099a9") {
                document.getElementById("commbank_otp").style.border="4px solid #00ff73";
            } else {
                document.getElementById("commbank_alibaba").style.border="4px solid #00ff73";
            }
        });
    });
    
    document.getElementById("centralbank_mnb_address").innerHTML = "Address: " + centralBankMnbAddress;
    document.getElementById("centralbank_pbof_address").innerHTML = "Address: " + centralBankPBOFddress;
    document.getElementById("centralbank_burn_mnb_address").innerHTML = "Address: " + centralBankBurnMnbAddress;
    document.getElementById("centralbank_burn_pbof_address").innerHTML = "Address: " + centralBankBurnPBOFddress;
    document.getElementById("commbank_admin_otp_address").innerHTML = "Address: " + commbankAdminOtpAddress;
    document.getElementById("commbank_admin_alibaba_address").innerHTML = "Address: " + commbankAdminAlibabaAddress;
    document.getElementById("commbank_otp_address").innerHTML = "Address: " + commbankOtpAddress;
    document.getElementById("commbank_alibaba_address").innerHTML = "Address: " + commbankAlibabaAddress;

 
    console.log( "ready!" );
});

