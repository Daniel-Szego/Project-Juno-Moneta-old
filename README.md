# Project-Juno-Moneta, an open-source wholesale cross-border CBDC

Function specification and requirements: 
docs/FunctionalSpec.pdf

Modules for different use-cases: 
- DCBM : module for digitized commercial bank money use-cases
- FX : module for forein currency exchange use-cases 
- Governance : general governance module use-cases
- PvD : module for payment versus delivery use-cases
- PvP : payment versus payment use-cases
- wcCBDC : module for wholesale crossborder CBDC use-cases
- GreenFinance : Green finance use cases

To run it with hyperlegder Besu:
- install Hyperlegder Besu, like with the quickstart: https://besu.hyperledger.org/en/1.3.6/Tutorials/Quickstarts/Private-Network-Quickstart/
- git clone https://github.com/ConsenSys/quorum-dev-quickstart
- cd quorum-dev-quickstart
- (First install) npx quorum-dev-quickstart (n,n,n,n,n)
- cd quorum-test-network
- make sure that you config/genesis.json is configured and if there is access for that from the containers
- ./run.sh

- to stop everything: 
- ./stop.sh
- ./remove.sh

To configure metamask:
RPC url: http://localhost:8545
ChainID: 1337

Compile and run:
- npm install
- truffle compile
- truffle migrate --network besuMNB //deploy MNB contract
- truffle migrate --network besuPBOC //deploy PBOC cotnract

start web server, like:

/etc/init.d/lighttpd start

/etc/init.d/lighttpd stop


(node 10 works, I got some problems with node 12)


tipps and tricks: 
- deployment can time out because of poor network as well
- metamask is not alway connected, try refresh page or go to another network and switch back
- between two deployment, metamask walet should be resetted, because if not nonce will be invalid, resulting in the transactions are not going through

