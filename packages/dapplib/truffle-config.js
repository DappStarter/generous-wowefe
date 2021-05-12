require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remind unknown jazz clinic off giggle'; 
let testAccounts = [
"0xccc185623ce64ce24becc1775906779d249461c6f67ec9b98a9202aaa1c5c401",
"0x411d59eefe4454dbff910ca8a729d31faefb5927b09bd46d7900c71463988471",
"0x33e1e23c213438643f7ca8cdf12632cadb403514094f30cc37358cdb647e0c9a",
"0x1977762787e0d05bd91a9f1ee52f09e4f7318d70b01423323f5455f29eb91fbc",
"0xebab805daa5e12ea9664cbb5bb433554179c94df77dfc4cd540c4dd7fff01678",
"0x0353aab6c051fdd20f5f4c03b196000dd81b31eda875946a594ee9ee23d77878",
"0x79cb1d401686caa5dfe76071eafe3f224d3a4617ac06ad8a6f2bb9282591a71a",
"0xa6c6c14fdfba0f15aa9086ee7fb63311773af90bd9cc057cd698410ecbe7876d",
"0x34f89d3352d1e33c4f14da70d3f602b00e40f784b637e4fe4d1517e8343c332d",
"0x7ccdd7d309ccf127b705cc3526c5551e9f601fbc58ff507e02ddb4070032760d"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
