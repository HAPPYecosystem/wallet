(this.webpackJsonpuniverseworldcup = this.webpackJsonpuniverseworldcup || []).push([
    [0], {
        128: function(e) {
            e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_feeTransfer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_feeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"antiBotEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"blackList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"feeTransfer","type":"uint256"}],"name":"changeFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"feeWallet","type":"address"}],"name":"changeFeeWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_pmintable","type":"bool"}],"name":"enableMint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"geUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isBlackList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromBot","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromPool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedToFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"newWhiteList","type":"address[]"},{"internalType":"address[]","name":"removedWhiteList","type":"address[]"}],"name":"modifyBlackList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"newWhiteList","type":"address[]"},{"internalType":"address[]","name":"removedWhiteList","type":"address[]"}],"name":"modifyWhiteListBot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"newWhiteList","type":"address[]"},{"internalType":"address[]","name":"removedWhiteList","type":"address[]"}],"name":"modifyWhiteListPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"newWhiteList","type":"address[]"},{"internalType":"address[]","name":"removedWhiteList","type":"address[]"}],"name":"modifyWhiteListReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"newWhiteList","type":"address[]"},{"internalType":"address[]","name":"removedWhiteList","type":"address[]"}],"name":"modifyWhiteListSender","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enable","type":"bool"}],"name":"setAntiBot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enable","type":"bool"}],"name":"setSwapWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapWhiteList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"coinAddress","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address payable","name":"to","type":"address"}],"name":"transferToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whiteListBot","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whiteListPool","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whiteListReceiver","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whiteListSender","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]')
        },
        22: function(e, n, t) {
            "use strict";
            t.d(n, "n", (function() {
                return i
            })), t.d(n, "u", (function() {
                return r
            })), t.d(n, "t", (function() {
                return s
            })), t.d(n, "v", (function() {
                return o
            })), t.d(n, "y", (function() {
                return c
            })), t.d(n, "j", (function() {
                return l
            })), t.d(n, "f", (function() {
                return u
            })), t.d(n, "g", (function() {
                return p
            })), t.d(n, "k", (function() {
                return d
            })), t.d(n, "l", (function() {
                return m
            })), t.d(n, "h", (function() {
                return b
            })), t.d(n, "i", (function() {
                return y
            })), t.d(n, "m", (function() {
                return f
            })), t.d(n, "s", (function() {
                return h
            })), t.d(n, "w", (function() {
                return x
            })), t.d(n, "z", (function() {
                return j
            })), t.d(n, "x", (function() {
                return g
            })), t.d(n, "b", (function() {
                return T
            })), t.d(n, "c", (function() {
                return O
            })), t.d(n, "a", (function() {
                return v
            })), t.d(n, "o", (function() {
                return w
            })), t.d(n, "p", (function() {
                return A
            })), t.d(n, "q", (function() {
                return _
            })), t.d(n, "d", (function() {
                return C
            })), t.d(n, "r", (function() {
                return k
            })), t.d(n, "e", (function() {
                return E
            }));
            var a = t(97),
                i = "https://bscscan.com",
                r = "https://api.bscscan.com",
                s = "https://bsc-dataseed.binance.org/",
                o = "0xffc4c02C6BB187cE473Fb00458EF6CF80503D189",
                c = "",
                l = Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                    REACT_APP_FIREBASE_DATABASE_URL: "",
                    REACT_APP_FIREBASE_MESSAGING_SENDER_ID: "",
                    REACT_APP_PANCAKE_ROUTE: "0x10ed43c718714eb63d5aa57b78b54704e256024e",
                    REACT_APP_TOKEN_USDT: "0x55d398326f99059fF775485246999027B3197955",
                    REACT_APP_ORGANIZATION: "",
                    REACT_APP_CONTRACT_STAKING: "0x457bDD9cD161538EdB0B6d83127c328bA8713E6C",
                    REACT_APP_API: "https://api.bscscan.com",
                    REACT_APP_BNB_BUSD_PAIR: "0x58f876857a02d6762e0101bb5c46a8c1ed44dc16",
                    REACT_APP_TOKEN_BNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                    REACT_APP_BINANCE_API: "https://api.binance.com",
                    REACT_APP_FIREBASE_STORAGE_BUCKET: "",
                    REACT_APP_FIREBASE_MEASUREMENT_ID: "",
                    REACT_APP_DOMAIN_SWAP: "",
                    REACT_APP_FIREBASE_AUTH_DOMAIN: "",
                    REACT_APP_TOKEN: "0xffc4c02C6BB187cE473Fb00458EF6CF80503D189",
                    REACT_APP_NETWORK_URL: "https://bsc-dataseed.binance.org/",
                    REACT_APP_DOMAIN_NETWORK: "https://bscscan.com",
                    REACT_APP_BOT_ID: "",
                    REACT_APP_ENV: "production",
                    REACT_APP_PANCAKE_FACTORY: "0xca143ce32fe78f1f7019d7d551a6402fc5350c73",
                    REACT_APP_TOKEN_BUSD: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
                    REACT_APP_FIREBASE_APP_ID: "",
                    REACT_APP_REPOS: "",
                    REACT_APP_ROOT_FOLDER: "root",
                    REACT_APP_API_TIMEOUT: "20000",
                    REACT_APP_CHAIN_ID: "56",
                    REACT_APP_BOT_TOKEN: "",
                    REACT_APP_GITHUB_PRIVATE_KEY: "",
                    REACT_APP_FIREBASE_API_KEY: "",
                    REACT_APP_API_CONFIG: "",
                    REACT_APP_TOKEN_NFT: "",
                    REACT_APP_DOMAIN: "https://universeworldcup.com"
                }).REACT_APP_CONTRACT_MARKETPLACE,
                u = Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                    REACT_APP_FIREBASE_DATABASE_URL: "",
                    REACT_APP_FIREBASE_MESSAGING_SENDER_ID: "",
                    REACT_APP_PANCAKE_ROUTE: "0x10ed43c718714eb63d5aa57b78b54704e256024e",
                    REACT_APP_TOKEN_USDT: "0x55d398326f99059fF775485246999027B3197955",
                    REACT_APP_ORGANIZATION: "",
                    REACT_APP_CONTRACT_STAKING: "0x457bDD9cD161538EdB0B6d83127c328bA8713E6C",
                    REACT_APP_API: "https://api.bscscan.com",
                    REACT_APP_BNB_BUSD_PAIR: "0x58f876857a02d6762e0101bb5c46a8c1ed44dc16",
                    REACT_APP_TOKEN_BNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                    REACT_APP_BINANCE_API: "https://api.binance.com",
                    REACT_APP_FIREBASE_STORAGE_BUCKET: "",
                    REACT_APP_FIREBASE_MEASUREMENT_ID: "",
                    REACT_APP_DOMAIN_SWAP: "",
                    REACT_APP_FIREBASE_AUTH_DOMAIN: "",
                    REACT_APP_TOKEN: "0xffc4c02C6BB187cE473Fb00458EF6CF80503D189",
                    REACT_APP_NETWORK_URL: "https://bsc-dataseed.binance.org/",
                    REACT_APP_DOMAIN_NETWORK: "https://bscscan.com",
                    REACT_APP_BOT_ID: "",
                    REACT_APP_ENV: "production",
                    REACT_APP_PANCAKE_FACTORY: "0xca143ce32fe78f1f7019d7d551a6402fc5350c73",
                    REACT_APP_TOKEN_BUSD: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
                    REACT_APP_FIREBASE_APP_ID: "",
                    REACT_APP_REPOS: "",
                    REACT_APP_ROOT_FOLDER: "root",
                    REACT_APP_API_TIMEOUT: "20000",
                    REACT_APP_CHAIN_ID: "56",
                    REACT_APP_BOT_TOKEN: "",
                    REACT_APP_GITHUB_PRIVATE_KEY: "",
                    REACT_APP_FIREBASE_API_KEY: "",
                    REACT_APP_API_CONFIG: "",
                    REACT_APP_TOKEN_NFT: "",
                    REACT_APP_DOMAIN: "https://universeworldcup.com"
                }).REACT_APP_CONTRACT_AUCTION,
                p = Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                    REACT_APP_FIREBASE_DATABASE_URL: "",
                    REACT_APP_FIREBASE_MESSAGING_SENDER_ID: "",
                    REACT_APP_PANCAKE_ROUTE: "0x10ed43c718714eb63d5aa57b78b54704e256024e",
                    REACT_APP_TOKEN_USDT: "0x55d398326f99059fF775485246999027B3197955",
                    REACT_APP_ORGANIZATION: "",
                    REACT_APP_CONTRACT_STAKING: "0x457bDD9cD161538EdB0B6d83127c328bA8713E6C",
                    REACT_APP_API: "https://api.bscscan.com",
                    REACT_APP_BNB_BUSD_PAIR: "0x58f876857a02d6762e0101bb5c46a8c1ed44dc16",
                    REACT_APP_TOKEN_BNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                    REACT_APP_BINANCE_API: "https://api.binance.com",
                    REACT_APP_FIREBASE_STORAGE_BUCKET: "",
                    REACT_APP_FIREBASE_MEASUREMENT_ID: "",
                    REACT_APP_DOMAIN_SWAP: "",
                    REACT_APP_FIREBASE_AUTH_DOMAIN: "",
                    REACT_APP_TOKEN: "0xffc4c02C6BB187cE473Fb00458EF6CF80503D189",
                    REACT_APP_NETWORK_URL: "https://bsc-dataseed.binance.org/",
                    REACT_APP_DOMAIN_NETWORK: "https://bscscan.com",
                    REACT_APP_BOT_ID: "",
                    REACT_APP_ENV: "production",
                    REACT_APP_PANCAKE_FACTORY: "0xca143ce32fe78f1f7019d7d551a6402fc5350c73",
                    REACT_APP_TOKEN_BUSD: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
                    REACT_APP_FIREBASE_APP_ID: "",
                    REACT_APP_REPOS: "",
                    REACT_APP_ROOT_FOLDER: "root",
                    REACT_APP_API_TIMEOUT: "20000",
                    REACT_APP_CHAIN_ID: "56",
                    REACT_APP_BOT_TOKEN: "",
                    REACT_APP_GITHUB_PRIVATE_KEY: "",
                    REACT_APP_FIREBASE_API_KEY: "",
                    REACT_APP_API_CONFIG: "",
                    REACT_APP_TOKEN_NFT: "",
                    REACT_APP_DOMAIN: "https://universeworldcup.com"
                }).REACT_APP_CONTRACT_CLAIM_BOX,
                d = Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                    REACT_APP_FIREBASE_DATABASE_URL: "",
                    REACT_APP_FIREBASE_MESSAGING_SENDER_ID: "",
                    REACT_APP_PANCAKE_ROUTE: "0x10ed43c718714eb63d5aa57b78b54704e256024e",
                    REACT_APP_TOKEN_USDT: "0x55d398326f99059fF775485246999027B3197955",
                    REACT_APP_ORGANIZATION: "",
                    REACT_APP_CONTRACT_STAKING: "0x457bDD9cD161538EdB0B6d83127c328bA8713E6C",
                    REACT_APP_API: "https://api.bscscan.com",
                    REACT_APP_BNB_BUSD_PAIR: "0x58f876857a02d6762e0101bb5c46a8c1ed44dc16",
                    REACT_APP_TOKEN_BNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                    REACT_APP_BINANCE_API: "https://api.binance.com",
                    REACT_APP_FIREBASE_STORAGE_BUCKET: "",
                    REACT_APP_FIREBASE_MEASUREMENT_ID: "",
                    REACT_APP_DOMAIN_SWAP: "",
                    REACT_APP_FIREBASE_AUTH_DOMAIN: "",
                    REACT_APP_TOKEN: "0xffc4c02C6BB187cE473Fb00458EF6CF80503D189",
                    REACT_APP_NETWORK_URL: "https://bsc-dataseed.binance.org/",
                    REACT_APP_DOMAIN_NETWORK: "https://bscscan.com",
                    REACT_APP_BOT_ID: "",
                    REACT_APP_ENV: "production",
                    REACT_APP_PANCAKE_FACTORY: "0xca143ce32fe78f1f7019d7d551a6402fc5350c73",
                    REACT_APP_TOKEN_BUSD: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
                    REACT_APP_FIREBASE_APP_ID: "",
                    REACT_APP_REPOS: "",
                    REACT_APP_ROOT_FOLDER: "root",
                    REACT_APP_API_TIMEOUT: "20000",
                    REACT_APP_CHAIN_ID: "56",
                    REACT_APP_BOT_TOKEN: "",
                    REACT_APP_GITHUB_PRIVATE_KEY: "",
                    REACT_APP_FIREBASE_API_KEY: "",
                    REACT_APP_API_CONFIG: "",
                    REACT_APP_TOKEN_NFT: "",
                    REACT_APP_DOMAIN: "https://universeworldcup.com"
                }).REACT_APP_CONTRACT_SHOP,
                m = "0x457bDD9cD161538EdB0B6d83127c328bA8713E6C",
                b = Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                    REACT_APP_FIREBASE_DATABASE_URL: "",
                    REACT_APP_FIREBASE_MESSAGING_SENDER_ID: "",
                    REACT_APP_PANCAKE_ROUTE: "0x10ed43c718714eb63d5aa57b78b54704e256024e",
                    REACT_APP_TOKEN_USDT: "0x55d398326f99059fF775485246999027B3197955",
                    REACT_APP_ORGANIZATION: "",
                    REACT_APP_CONTRACT_STAKING: "0x457bDD9cD161538EdB0B6d83127c328bA8713E6C",
                    REACT_APP_API: "https://api.bscscan.com",
                    REACT_APP_BNB_BUSD_PAIR: "0x58f876857a02d6762e0101bb5c46a8c1ed44dc16",
                    REACT_APP_TOKEN_BNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                    REACT_APP_BINANCE_API: "https://api.binance.com",
                    REACT_APP_FIREBASE_STORAGE_BUCKET: "",
                    REACT_APP_FIREBASE_MEASUREMENT_ID: "",
                    REACT_APP_DOMAIN_SWAP: "",
                    REACT_APP_FIREBASE_AUTH_DOMAIN: "",
                    REACT_APP_TOKEN: "0xffc4c02C6BB187cE473Fb00458EF6CF80503D189",
                    REACT_APP_NETWORK_URL: "https://bsc-dataseed.binance.org/",
                    REACT_APP_DOMAIN_NETWORK: "https://bscscan.com",
                    REACT_APP_BOT_ID: "",
                    REACT_APP_ENV: "production",
                    REACT_APP_PANCAKE_FACTORY: "0xca143ce32fe78f1f7019d7d551a6402fc5350c73",
                    REACT_APP_TOKEN_BUSD: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
                    REACT_APP_FIREBASE_APP_ID: "",
                    REACT_APP_REPOS: "",
                    REACT_APP_ROOT_FOLDER: "root",
                    REACT_APP_API_TIMEOUT: "20000",
                    REACT_APP_CHAIN_ID: "56",
                    REACT_APP_BOT_TOKEN: "",
                    REACT_APP_GITHUB_PRIVATE_KEY: "",
                    REACT_APP_FIREBASE_API_KEY: "",
                    REACT_APP_API_CONFIG: "",
                    REACT_APP_TOKEN_NFT: "",
                    REACT_APP_DOMAIN: "https://universeworldcup.com"
                }).REACT_APP_CONTRACT_INO,
                y = Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                    REACT_APP_FIREBASE_DATABASE_URL: "",
                    REACT_APP_FIREBASE_MESSAGING_SENDER_ID: "",
                    REACT_APP_PANCAKE_ROUTE: "0x10ed43c718714eb63d5aa57b78b54704e256024e",
                    REACT_APP_TOKEN_USDT: "0x55d398326f99059fF775485246999027B3197955",
                    REACT_APP_ORGANIZATION: "",
                    REACT_APP_CONTRACT_STAKING: "0x457bDD9cD161538EdB0B6d83127c328bA8713E6C",
                    REACT_APP_API: "https://api.bscscan.com",
                    REACT_APP_BNB_BUSD_PAIR: "0x58f876857a02d6762e0101bb5c46a8c1ed44dc16",
                    REACT_APP_TOKEN_BNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                    REACT_APP_BINANCE_API: "https://api.binance.com",
                    REACT_APP_FIREBASE_STORAGE_BUCKET: "",
                    REACT_APP_FIREBASE_MEASUREMENT_ID: "",
                    REACT_APP_DOMAIN_SWAP: "",
                    REACT_APP_FIREBASE_AUTH_DOMAIN: "",
                    REACT_APP_TOKEN: "0xffc4c02C6BB187cE473Fb00458EF6CF80503D189",
                    REACT_APP_NETWORK_URL: "https://bsc-dataseed.binance.org/",
                    REACT_APP_DOMAIN_NETWORK: "https://bscscan.com",
                    REACT_APP_BOT_ID: "",
                    REACT_APP_ENV: "production",
                    REACT_APP_PANCAKE_FACTORY: "0xca143ce32fe78f1f7019d7d551a6402fc5350c73",
                    REACT_APP_TOKEN_BUSD: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
                    REACT_APP_FIREBASE_APP_ID: "",
                    REACT_APP_REPOS: "",
                    REACT_APP_ROOT_FOLDER: "root",
                    REACT_APP_API_TIMEOUT: "20000",
                    REACT_APP_CHAIN_ID: "56",
                    REACT_APP_BOT_TOKEN: "",
                    REACT_APP_GITHUB_PRIVATE_KEY: "",
                    REACT_APP_FIREBASE_API_KEY: "",
                    REACT_APP_API_CONFIG: "",
                    REACT_APP_TOKEN_NFT: "",
                    REACT_APP_DOMAIN: "https://universeworldcup.com"
                }).REACT_APP_CONTRACT_KILL_BOSS,
                f = Object({
                    NODE_ENV: "production",
                    PUBLIC_URL: "",
                    WDS_SOCKET_HOST: void 0,
                    WDS_SOCKET_PATH: void 0,
                    WDS_SOCKET_PORT: void 0,
                    FAST_REFRESH: !0,
                    REACT_APP_FIREBASE_DATABASE_URL: "",
                    REACT_APP_FIREBASE_MESSAGING_SENDER_ID: "",
                    REACT_APP_PANCAKE_ROUTE: "0x10ed43c718714eb63d5aa57b78b54704e256024e",
                    REACT_APP_TOKEN_USDT: "0x55d398326f99059fF775485246999027B3197955",
                    REACT_APP_ORGANIZATION: "",
                    REACT_APP_CONTRACT_STAKING: "0x457bDD9cD161538EdB0B6d83127c328bA8713E6C",
                    REACT_APP_API: "https://api.bscscan.com",
                    REACT_APP_BNB_BUSD_PAIR: "0x58f876857a02d6762e0101bb5c46a8c1ed44dc16",
                    REACT_APP_TOKEN_BNB: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                    REACT_APP_BINANCE_API: "https://api.binance.com",
                    REACT_APP_FIREBASE_STORAGE_BUCKET: "",
                    REACT_APP_FIREBASE_MEASUREMENT_ID: "",
                    REACT_APP_DOMAIN_SWAP: "",
                    REACT_APP_FIREBASE_AUTH_DOMAIN: "",
                    REACT_APP_TOKEN: "0xffc4c02C6BB187cE473Fb00458EF6CF80503D189",
                    REACT_APP_NETWORK_URL: "https://bsc-dataseed.binance.org/",
                    REACT_APP_DOMAIN_NETWORK: "https://bscscan.com",
                    REACT_APP_BOT_ID: "",
                    REACT_APP_ENV: "production",
                    REACT_APP_PANCAKE_FACTORY: "0xca143ce32fe78f1f7019d7d551a6402fc5350c73",
                    REACT_APP_TOKEN_BUSD: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
                    REACT_APP_FIREBASE_APP_ID: "",
                    REACT_APP_REPOS: "",
                    REACT_APP_ROOT_FOLDER: "root",
                    REACT_APP_API_TIMEOUT: "20000",
                    REACT_APP_CHAIN_ID: "56",
                    REACT_APP_BOT_TOKEN: "",
                    REACT_APP_GITHUB_PRIVATE_KEY: "",
                    REACT_APP_FIREBASE_API_KEY: "",
                    REACT_APP_API_CONFIG: "",
                    REACT_APP_TOKEN_NFT: "",
                    REACT_APP_DOMAIN: "https://universeworldcup.com"
                }).REACT_APP_CONTRACT_UPGRADE_BOSS,
                h = "0xca143ce32fe78f1f7019d7d551a6402fc5350c73",
                x = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
                j = "0x55d398326f99059fF775485246999027B3197955",
                g = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
                T = new a.b(a.a.MAINNET, o, 18, "UWC", "UWC Token"),
                O = (new a.b(a.a.MAINNET, x, 18, "BNB", "Wrapper BNB"), new a.b(a.a.MAINNET, j, 18, "USDT", "USDT Token")),
                v = new a.b(a.a.MAINNET, g, 18, "BUSD", "BUSD Token"),
                w = "",
                A = "",
                _ = "root",
                C = "auth",
                k = "NETWORK",
                E = ["#01FFA3", "#0AFAEB", "#0165FC", "#6D40F0", "#FF8AF3", "#151A20"]
        },
        227: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"contract IERC20","name":"_cake","type":"address"},{"internalType":"uint256","name":"_cakePerBlock","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"LeaveStaking","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"BONUS_MULTIPLIER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UNSTAKE_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WIHDRAW_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WIHDRAW_FEE_BNB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_lpToken","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_startBlock","type":"uint256"},{"internalType":"uint256","name":"_endBlock","type":"uint256"},{"internalType":"bool","name":"_isLocked","type":"bool"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"addressList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cake","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cakePerBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"commissionWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"getMultiplier","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"coinAddress","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address payable","name":"to","type":"address"}],"name":"handleForfeitedBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"leaveStaking","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingCake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"lpToken","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardBlock","type":"uint256"},{"internalType":"uint256","name":"accCakePerShare","type":"uint256"},{"internalType":"uint256","name":"startBlock","type":"uint256"},{"internalType":"uint256","name":"endBlock","type":"uint256"},{"internalType":"uint256","name":"totalLpSupply","type":"uint256"},{"internalType":"bool","name":"isLocked","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"bool","name":"_withUpdate","type":"bool"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setCakePerBlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_addr","type":"address"}],"name":"setCommissionsWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setUnStakeFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setWithdrawFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setWithdrawFeeBnb","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"multiplierNumber","type":"uint256"}],"name":"updateMultiplier","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]')
        },
        439: function(e) {
            e.exports = JSON.parse('{"Home":"Home"}')
        },
        440: function(e) {
            e.exports = JSON.parse('{"Home":"Home"}')
        },
        443: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address payable","name":"_feeWallet","type":"address"},{"internalType":"address","name":"_nft","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"}],"name":"CancelOrder","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"FeeSale","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"}],"name":"FillOrder","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"}],"name":"PlaceOrder","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"},{"indexed":false,"internalType":"uint256","name":"newPrice","type":"uint256"}],"name":"UpdatePrice","type":"event"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"address","name":"_token","type":"address"}],"name":"cancelOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"}],"name":"cancelOrderOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeMarket","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"address","name":"_token","type":"address"}],"name":"fillOrder","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getSale","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"token","type":"address"}],"internalType":"struct NFTMarket.ItemSale","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"coinAddress","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address payable","name":"to","type":"address"}],"name":"handleForfeitedBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"marketsSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"migrateIds","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nft","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftCore","outputs":[{"internalType":"contract INFTCore","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_seller","type":"address"}],"name":"orders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"address","name":"_token","type":"address"}],"name":"placeOrder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setFeeMarket","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_wallet","type":"address"}],"name":"setFeeWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenSaleByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_seller","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenSaleOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"address","name":"_token","type":"address"}],"name":"updatePrice","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        444: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_nftAddr","type":"address"},{"internalType":"uint256","name":"_cut","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"winner","type":"address"}],"name":"AuctionClaimedNFT","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"AuctionClaimedToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"startingPrice","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"duration","type":"uint256"},{"indexed":false,"internalType":"address","name":"currentBidder","type":"address"},{"indexed":false,"internalType":"uint256","name":"startAt","type":"uint256"},{"indexed":false,"internalType":"address","name":"seller","type":"address"}],"name":"AuctionCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalPrice","type":"uint256"},{"indexed":false,"internalType":"address","name":"bidder","type":"address"}],"name":"AuctionSuccessful","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_bidder","type":"address"}],"name":"bid","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"}],"name":"cancelAuctionOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cut","type":"uint256"}],"name":"changeCut","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"claimAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"claimNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_startingPrice","type":"uint256"},{"internalType":"uint256","name":"_duration","type":"uint256"},{"internalType":"address","name":"_seller","type":"address"}],"name":"createAuction","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feeBid","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getAuction","outputs":[{"components":[{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint256","name":"startingPrice","type":"uint256"},{"internalType":"uint256","name":"endingPrice","type":"uint256"},{"internalType":"uint64","name":"duration","type":"uint64"},{"internalType":"uint256","name":"startAt","type":"uint256"},{"internalType":"address","name":"currentBidder","type":"address"},{"internalType":"bool","name":"claimNFT","type":"bool"},{"internalType":"bool","name":"claimToken","type":"bool"}],"internalType":"struct ClockAuctionBase.Auction","name":"auction","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getCurrentPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getHistories","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"components":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"timeBid","type":"uint256"}],"internalType":"struct ClockAuctionBase.Bidder[]","name":"bidders","type":"tuple[]"}],"internalType":"struct ClockAuctionBase.History","name":"history","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"histories","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isSaleClockAuction","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minAuctionPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nonFungibleContract","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ownerCut","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setFeeBid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_feeWallet","type":"address"}],"name":"setFeeWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setMinAuctionPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setNFTToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_percent","type":"uint256"}],"name":"setStepBid","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenIdToAuction","outputs":[{"internalType":"address","name":"seller","type":"address"},{"internalType":"uint256","name":"startingPrice","type":"uint256"},{"internalType":"uint256","name":"endingPrice","type":"uint256"},{"internalType":"uint64","name":"duration","type":"uint64"},{"internalType":"uint256","name":"startAt","type":"uint256"},{"internalType":"address","name":"currentBidder","type":"address"},{"internalType":"bool","name":"claimNFT","type":"bool"},{"internalType":"bool","name":"claimToken","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawBalance","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        445: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address payable","name":"_feeWallet","type":"address"},{"internalType":"address payable","name":"_saleWallet","type":"address"},{"internalType":"address","name":"_nft","type":"address"},{"internalType":"contract IERC20","name":"_nftToken","type":"address"},{"internalType":"address","name":"_randManager","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"FeeSale","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"boxId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"typeBox","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"dogeId","type":"uint256"}],"name":"OpenBox","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"typeBox","type":"uint256"},{"indexed":false,"internalType":"bool","name":"success","type":"bool"}],"name":"Sale","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"inputs":[],"name":"CURRENT_BOX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_OPEN","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LIMIT_ADDRESS_BOX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_BOX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimNormal","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimNormals","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimWithFee","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"claimWithoutFee","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"deadAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_typeBox","type":"uint256"}],"name":"getNFTPrice","outputs":[{"internalType":"uint256","name":"priceSale","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_typeBox","type":"uint256"}],"name":"getSaleStore","outputs":[{"components":[{"internalType":"uint256","name":"typeBox","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"startSale","type":"uint256"},{"internalType":"uint256","name":"endSale","type":"uint256"},{"internalType":"uint256","name":"fourRarePercent","type":"uint256"},{"internalType":"uint256","name":"thirdRarePercent","type":"uint256"},{"internalType":"uint256","name":"secondRarePercent","type":"uint256"},{"internalType":"uint256","name":"successPercent","type":"uint256"}],"internalType":"struct NFTClaimBox.SaleBox","name":"_saleStore","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"coinAddress","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address payable","name":"to","type":"address"}],"name":"handleForfeitedBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"limitDoges","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"limitRares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nft","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftCore","outputs":[{"internalType":"contract INFTCore","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"boxId","type":"uint256"},{"internalType":"uint256","name":"nftCommonId","type":"uint256"}],"name":"openBox","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"openBoxs","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"randManager","outputs":[{"internalType":"contract RandInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"saleBoxs","outputs":[{"internalType":"uint256","name":"typeBox","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"uint256","name":"startSale","type":"uint256"},{"internalType":"uint256","name":"endSale","type":"uint256"},{"internalType":"uint256","name":"fourRarePercent","type":"uint256"},{"internalType":"uint256","name":"thirdRarePercent","type":"uint256"},{"internalType":"uint256","name":"secondRarePercent","type":"uint256"},{"internalType":"uint256","name":"successPercent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"saleWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"typeBox","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"}],"name":"setEndSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setFeeOpen","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setFeeSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_wallet","type":"address"}],"name":"setFeeWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_box","type":"uint256"}],"name":"setLimitBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"rare","type":"uint256"},{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"setLimitRare","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_address","type":"address"}],"name":"setNFTToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"typeBox","type":"uint256"},{"internalType":"uint256","name":"fourRarePercent","type":"uint256"},{"internalType":"uint256","name":"thirdRarePercent","type":"uint256"},{"internalType":"uint256","name":"secondRarePercent","type":"uint256"}],"name":"setPercentBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"typeBox","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"name":"setPriceBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_wallet","type":"address"}],"name":"setSaleWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"typeBox","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"}],"name":"setStartSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_time","type":"uint256"}],"name":"setTimeStep","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_box","type":"uint256"}],"name":"setTotalBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"lastClaim","type":"uint256"},{"internalType":"uint256","name":"totalClaim","type":"uint256"}],"internalType":"struct NFTClaimBox.UserInfo","name":"userInfo","type":"tuple"},{"internalType":"address","name":"userAddress","type":"address"}],"name":"setUserInfo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfos","outputs":[{"internalType":"uint256","name":"lastClaim","type":"uint256"},{"internalType":"uint256","name":"totalClaim","type":"uint256"}],"stateMutability":"view","type":"function"}]')
        },
        446: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address payable","name":"_feeWallet","type":"address"},{"internalType":"address payable","name":"_saleWallet","type":"address"},{"internalType":"address","name":"_nft","type":"address"},{"internalType":"address","name":"_nftToken","type":"address"},{"internalType":"address","name":"_randManager","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"FeeSale","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"typeBox","type":"uint256"}],"name":"Sale","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"inputs":[],"name":"CURRENT_BOX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_BOX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"token","type":"address"}],"name":"buyBox","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"feeSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_typeBox","type":"uint256"},{"internalType":"address","name":"token","type":"address"}],"name":"getNFTPrice","outputs":[{"internalType":"uint256","name":"priceSale","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_typeBox","type":"uint256"}],"name":"getSaleStore","outputs":[{"components":[{"internalType":"uint256","name":"typeBox","type":"uint256"},{"internalType":"uint256","name":"startSale","type":"uint256"},{"internalType":"uint256","name":"endSale","type":"uint256"},{"internalType":"uint256","name":"fourRarePercent","type":"uint256"},{"internalType":"uint256","name":"thirdRarePercent","type":"uint256"},{"internalType":"uint256","name":"secondRarePercent","type":"uint256"}],"internalType":"struct NFTBox.SaleBox","name":"_saleStore","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"coinAddress","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address payable","name":"to","type":"address"}],"name":"handleForfeitedBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nft","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftCore","outputs":[{"internalType":"contract INFTCore","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"randManager","outputs":[{"internalType":"contract RandInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"removeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"saleBoxTokenPrices","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"saleBoxs","outputs":[{"internalType":"uint256","name":"typeBox","type":"uint256"},{"internalType":"uint256","name":"startSale","type":"uint256"},{"internalType":"uint256","name":"endSale","type":"uint256"},{"internalType":"uint256","name":"fourRarePercent","type":"uint256"},{"internalType":"uint256","name":"thirdRarePercent","type":"uint256"},{"internalType":"uint256","name":"secondRarePercent","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"saleTokens","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"saleWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"typeBox","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"}],"name":"setEndSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setFeeSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_wallet","type":"address"}],"name":"setFeeWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"typeBox","type":"uint256"},{"internalType":"uint256","name":"fourRarePercent","type":"uint256"},{"internalType":"uint256","name":"thirdRarePercent","type":"uint256"},{"internalType":"uint256","name":"secondRarePercent","type":"uint256"}],"name":"setPercentBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"typeBox","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"address","name":"token","type":"address"}],"name":"setPriceBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_wallet","type":"address"}],"name":"setSaleWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"typeBox","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"}],"name":"setStartSale","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_box","type":"uint256"}],"name":"setTotalBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')
        },
        447: function(e) {
            e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalAmount","type":"uint256"}],"name":"FeePayed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint8","name":"plan","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"finish","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"NewDeposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"NewDepositNFT","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"registerTime","type":"uint256"}],"name":"Newbie","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"UnStake","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"UnlockNFT","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"start","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"PROJECT_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"TIME_STAKE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"TIME_STEP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"TOTAL_CLAIMED","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"TOTAL_LOCKED","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"TOTAL_STAKED","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"UNLOCK_FEE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"commissionWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"nft","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"nftCore","outputs":[{"internalType":"contract INFTCore","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"rares","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"stakingToken","outputs":[{"internalType":"contract IERC20Upgradeable","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"timePlans","outputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"finish","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_saleWallet","type":"address"},{"internalType":"address","name":"_nft","type":"address"},{"internalType":"contract IERC20Upgradeable","name":"_nftToken","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"invest","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"depositNFT","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"unlockNFT","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"uint256","name":"start","type":"uint256"}],"name":"unStake","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"uint256","name":"start","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function","payable":true},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"start","type":"uint256"}],"name":"calculateStake","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setFeeSystem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_nft","type":"address"}],"name":"setNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setUnlockFeeSystem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timeStep","type":"uint256"}],"name":"setTime_Step","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_timeStake","type":"uint256"}],"name":"setTime_Stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_addr","type":"address"}],"name":"setCommissionsWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"planId","type":"uint256"},{"components":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"percentBlock","type":"uint256"},{"internalType":"uint256","name":"totalAmountStake","type":"uint256"}],"internalType":"struct NFTStaking.Plan","name":"plan","type":"tuple"}],"name":"updatePlan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"planId","type":"uint256"},{"components":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"finish","type":"uint256"}],"internalType":"struct NFTStaking.TimePlan","name":"plan","type":"tuple"}],"name":"updateTimePlan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"rare","type":"uint256"},{"internalType":"uint256","name":"percent","type":"uint256"}],"name":"updateRares","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_totalLocked","type":"uint256"}],"name":"setTotalLocked","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"coinAddress","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address payable","name":"to","type":"address"}],"name":"handleForfeitedBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"plan","type":"uint8"}],"name":"getResult","outputs":[{"internalType":"uint256","name":"finish","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserInfo","outputs":[{"components":[{"components":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"rare","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"finish","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"bool","name":"isUnStake","type":"bool"},{"internalType":"uint256","name":"checkpoint","type":"uint256"}],"internalType":"struct NFTStaking.Deposit[]","name":"deposits","type":"tuple[]"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"checkpoint","type":"uint256"},{"internalType":"uint256","name":"registerTime","type":"uint256"},{"internalType":"uint256","name":"lastStake","type":"uint256"}],"internalType":"struct NFTStaking.User","name":"userInfo","type":"tuple"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserTotalDeposits","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"planId","type":"uint8"}],"name":"getPlanInfo","outputs":[{"components":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"percentBlock","type":"uint256"},{"internalType":"uint256","name":"totalAmountStake","type":"uint256"}],"internalType":"struct NFTStaking.Plan","name":"plan","type":"tuple"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint8","name":"planId","type":"uint8"}],"name":"getTimePlanInfo","outputs":[{"components":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"finish","type":"uint256"}],"internalType":"struct NFTStaking.TimePlan","name":"plan","type":"tuple"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"start","type":"uint256"}],"name":"isUnStake","outputs":[{"internalType":"bool","name":"_isUnStake","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"userAddress","type":"address"}],"name":"getAllDepositsByAddress","outputs":[{"components":[{"internalType":"uint8","name":"plan","type":"uint8"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"rare","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"finish","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"},{"internalType":"uint256","name":"fee","type":"uint256"},{"internalType":"bool","name":"isUnStake","type":"bool"},{"internalType":"uint256","name":"checkpoint","type":"uint256"}],"internalType":"struct NFTStaking.Deposit[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function","constant":true}]')
        },
        448: function(e) {
            e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"class","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rare","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"}],"name":"Sale","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"BUY_TOKEN","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"CURRENT_BOX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"END_SALE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"LIMIT_BOX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"SALE_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"SALE_WALLET","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"START_SALE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"TOTAL_BOX","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"nftCore","outputs":[{"internalType":"contract INFTCore","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"nftRates","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"class","type":"uint256"},{"internalType":"uint256","name":"rare","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"description","type":"string"},{"internalType":"uint256","name":"bornTime","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"quantityBox","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"tierRates","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function","constant":true},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_saleWallet","type":"address"},{"internalType":"address","name":"_nft","type":"address"},{"internalType":"address","name":"_buyToken","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_box","type":"uint256"}],"name":"setTotalBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_buyToken","type":"address"}],"name":"setBuyToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_saleWallet","type":"address"}],"name":"setSaleWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"setSalePrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_box","type":"uint256"}],"name":"setLimitBox","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"buyBox","outputs":[],"stateMutability":"payable","type":"function","payable":true}]')
        },
        449: function(e) {
            e.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"damage","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"typeBoss","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bossId","type":"uint256"}],"name":"Attack","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"userAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"FeeClaim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"inputs":[],"name":"ATTACK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ATTACK_MISSION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CLAIM_FEE_ADV","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CLAIM_FEE_NOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_ATTACK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_TOKEN","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_NOT_DIE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REWARD_TOKEN","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SALE_WALLET","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bossId","type":"uint256"},{"internalType":"uint256[]","name":"heros","type":"uint256[]"}],"name":"attackBoss","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"attackCounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bossId","type":"uint256"}],"name":"bossInfo","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"typeBoss","type":"uint256"},{"internalType":"uint256","name":"blood","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"minHero","type":"uint256"},{"internalType":"uint256","name":"maxHero","type":"uint256"},{"internalType":"bool","name":"died","type":"bool"},{"internalType":"uint256","name":"currentDamage","type":"uint256"},{"internalType":"uint256","name":"totalReward","type":"uint256"}],"internalType":"struct AttachBoss.Boss","name":"boss","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"bossId","type":"uint256"}],"name":"claimReward","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"bossId","type":"uint256"},{"internalType":"address","name":"userAddress","type":"address"}],"name":"getUserInfo","outputs":[{"components":[{"internalType":"uint256","name":"damage","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"internalType":"struct AttachBoss.UserInfo","name":"user","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"coinAddress","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address payable","name":"to","type":"address"}],"name":"handleForfeitedBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"typeBoss","type":"uint256"},{"internalType":"uint256","name":"blood","type":"uint256"},{"internalType":"uint256","name":"startTime","type":"uint256"},{"internalType":"uint256","name":"endTime","type":"uint256"},{"internalType":"uint256","name":"minHero","type":"uint256"},{"internalType":"uint256","name":"maxHero","type":"uint256"},{"internalType":"bool","name":"died","type":"bool"},{"internalType":"uint256","name":"currentDamage","type":"uint256"},{"internalType":"uint256","name":"totalReward","type":"uint256"}],"internalType":"struct AttachBoss.Boss[]","name":"bossArr","type":"tuple[]"}],"name":"modifyBoss","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"newAddr","type":"address[]"},{"internalType":"address[]","name":"removedAddr","type":"address[]"}],"name":"modifyWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nft","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftCore","outputs":[{"internalType":"contract INFTCore","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"attack","type":"uint256"}],"name":"setAttack","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"mission","type":"uint256"}],"name":"setAttackMission","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setClaimFeeAdv","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setClaimFeeNor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setFeeAttack","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setFeeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"reward","type":"uint256"}],"name":"setRewardNoDie","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setRewardToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_address","type":"address"}],"name":"setSaleWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfos","outputs":[{"internalType":"uint256","name":"damage","type":"uint256"},{"internalType":"bool","name":"claimed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whiteList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]')
        },
        450: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address payable","name":"_feeWallet","type":"address"},{"internalType":"address","name":"_nft","type":"address"},{"internalType":"contract IERC20","name":"_nftToken","type":"address"},{"internalType":"address","name":"_randManager","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"buyer","type":"address"},{"indexed":false,"internalType":"uint256","name":"fee","type":"uint256"}],"name":"FeeSale","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"merger","type":"address"},{"indexed":false,"internalType":"bool","name":"isSuccess","type":"bool"}],"name":"Merge","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"inputs":[],"name":"BOSST_RATE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FEE_MERGE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_DOGE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_DOGE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENTS_DIVIDER","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENT_ADD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PERCENT_BOOST","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deadAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeWallet","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"coinAddress","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"address payable","name":"to","type":"address"}],"name":"handleForfeitedBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"},{"internalType":"bool","name":"isBoost","type":"bool"}],"name":"mergeNFT","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"nft","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftCore","outputs":[{"internalType":"contract INFTCore","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"randManager","outputs":[{"internalType":"contract RandInterface","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_min","type":"uint256"},{"internalType":"uint256","name":"_max","type":"uint256"}],"name":"setDoge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fee","type":"uint256"}],"name":"setFeeMerge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_wallet","type":"address"}],"name":"setFeeWallet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"setNFT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_address","type":"address"}],"name":"setNFTToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_add","type":"uint256"},{"internalType":"uint256","name":"_boost","type":"uint256"}],"name":"setPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')
        },
        451: function(e) {
            e.exports = JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"owner","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"operator","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]')
        },
        456: function(e, n, t) {
            "use strict";
            (function(e) {
                var a = t(20),
                    i = t(9),
                    r = t(10),
                    s = t(6),
                    o = t.n(s),
                    c = t(302),
                    l = t.n(c),
                    u = t(22),
                    p = "https://api.github.com",
                    d = u.q,
                    m = u.o,
                    b = u.p,
                    y = function() {
                        function n() {
                            Object(i.a)(this, n), this.repos = [], this.tree = []
                        }
                        return Object(r.a)(n, [{
                            key: "getRepoTreeAtOrgan",
                            value: function() {
                                var e = Object(a.a)(o.a.mark((function e() {
                                    var n, t, i, r, s = this,
                                        c = arguments;
                                    return o.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return n = c.length > 0 && void 0 !== c[0] ? c[0] : m, t = c.length > 1 && void 0 !== c[1] ? c[1] : b, i = c.length > 2 && void 0 !== c[2] ? c[2] : null, r = i ? "".concat(p, "/repos/").concat(n, "/").concat(t, "/git/trees/main?access_token=").concat(i, "&recursive=1") : "".concat(p, "/repos/").concat(n, "/").concat(t, "/git/trees/main?recursive=1"), e.abrupt("return", new Promise((function(e, n) {
                                                    Object(a.a)(o.a.mark((function t() {
                                                        return o.a.wrap((function(t) {
                                                            for (;;) switch (t.prev = t.next) {
                                                                case 0:
                                                                    return t.prev = 0, t.next = 3, l()({
                                                                        method: "get",
                                                                        url: r,
                                                                        headers: {
                                                                            "content-type": "application/json;charset=UTF-8",
                                                                            Accept: "application/vnd.github.v3+json"
                                                                        }
                                                                    }).then((function(t) {
                                                                        200 === t.status && (s.tree = t.data.tree, e(t.data.tree)), n(new Error("Error!!!"))
                                                                    }));
                                                                case 3:
                                                                    n(new Error("Error!!!")), t.next = 9;
                                                                    break;
                                                                case 6:
                                                                    t.prev = 6, t.t0 = t.catch(0), n(new Error("Error!!!"));
                                                                case 9:
                                                                case "end":
                                                                    return t.stop()
                                                            }
                                                        }), t, null, [
                                                            [0, 6]
                                                        ])
                                                    })))()
                                                })));
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }, {
                            key: "getFileData",
                            value: function() {
                                var n = Object(a.a)(o.a.mark((function n(t) {
                                    var i, r = this,
                                        s = arguments;
                                    return o.a.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return i = s.length > 1 && void 0 !== s[1] ? s[1] : null, n.abrupt("return", new Promise((function(n, s) {
                                                    Object(a.a)(o.a.mark((function a() {
                                                        var c, u, p, m, b;
                                                        return o.a.wrap((function(a) {
                                                            for (;;) switch (a.prev = a.next) {
                                                                case 0:
                                                                    if (a.prev = 0, u = "".concat(d, "/").concat(t), null, void 0 !== c) {
                                                                        a.next = 14;
                                                                        break
                                                                    }
                                                                    if (!(m = null === (p = r.tree) || void 0 === p ? void 0 : p.find((function(e) {
                                                                            return e.path.toLowerCase() === u.toLowerCase()
                                                                        }))) || !m.url) {
                                                                        a.next = 13;
                                                                        break
                                                                    }
                                                                    return a.next = 9, l()({
                                                                        method: "get",
                                                                        url: "".concat(m.url).concat(i ? "?access_token=".concat(i) : ""),
                                                                        headers: {
                                                                            "content-type": "application/json;charset=UTF-8",
                                                                            Accept: "application/vnd.github.v3+json"
                                                                        }
                                                                    });
                                                                case 9:
                                                                    200 === (b = a.sent).status ? c = JSON.parse(e.from(b.data.content, "base64").toString("ascii")) : s(new Error("An error occurred!")), a.next = 14;
                                                                    break;
                                                                case 13:
                                                                    s(new Error("Path file is not correct!"));
                                                                case 14:
                                                                    n(c), a.next = 20;
                                                                    break;
                                                                case 17:
                                                                    a.prev = 17, a.t0 = a.catch(0), s(a.t0.message);
                                                                case 20:
                                                                case "end":
                                                                    return a.stop()
                                                            }
                                                        }), a, null, [
                                                            [0, 17]
                                                        ])
                                                    })))()
                                                })));
                                            case 2:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })));
                                return function(e) {
                                    return n.apply(this, arguments)
                                }
                            }()
                        }]), n
                    }();
                n.a = y
            }).call(this, t(23).Buffer)
        },
        458: function(e) {
            e.exports = JSON.parse('[{"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token0","type":"address"},{"indexed":true,"internalType":"address","name":"token1","type":"address"},{"indexed":false,"internalType":"address","name":"pair","type":"address"},{"indexed":false,"internalType":"uint256","name":"","type":"uint256"}],"name":"PairCreated","type":"event"},{"constant":true,"inputs":[],"name":"INIT_CODE_PAIR_HASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"allPairs","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"allPairsLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"createPair","outputs":[{"internalType":"address","name":"pair","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"feeTo","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"feeToSetter","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"getPair","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeTo","type":"address"}],"name":"setFeeTo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_feeToSetter","type":"address"}],"name":"setFeeToSetter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]')
        },
        494: function(e, n) {},
        516: function(e, n) {},
        519: function(e, n) {},
        523: function(e, n) {},
        542: function(e, n) {},
        544: function(e, n) {},
        553: function(e, n) {},
        555: function(e, n) {},
        565: function(e, n) {},
        567: function(e, n) {},
        681: function(e, n) {},
        683: function(e, n) {},
        690: function(e, n) {},
        691: function(e, n) {},
        827: function(e, n, t) {},
        941: function(e, n, t) {
            "use strict";
            t.r(n);
            var a, i, r = t(0),
                s = t.n(r),
                o = t(53),
                c = t.n(o),
                l = t(957),
                u = t(469),
                p = t(470),
                d = t(18),
                m = t(17),
                b = Object(m.b)(a || (a = Object(d.a)(['\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var, \n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video { \n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: middle;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  } \n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: "";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role="button"] {\n    cursor: pointer;\n  }\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n']))),
                y = Object(m.b)(i || (i = Object(d.a)([" \n  * {\n    /* font-family: SpaceGrotesk; */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; \n  } \n  *, \n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n\n  /* Scrollbar */\n  /* ::-webkit-scrollbar , ::-webkit-scrollbar:horizontal{ \n    width: 5px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  } */\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px #FFF1C1; \n    border-radius: 10px;\n  }\n\n  /**  SCROLLBAR STYLE */\n  *::-webkit-scrollbar-track {\n    border-radius: 10px;\n    /* background: #fbfbfb; */\n    /* background: transparent; */\n  }\n\n  *::-webkit-scrollbar-thumb {\n    /* border-radius: 10px;\n  /* background: #f2f2f2; */\n    /* linear-gradient(left, #fff, #e4e4e4); */\n    /* border: 1px solid #d1d1d1; */\n    border-radius: 10px;\n    background: #c1c1c1 !important;\n    border: 1px solid #d1d1d1;\n  }\n\n  *::-webkit-scrollbar-thumb:active {\n    background: linear-gradient(to left, #22add4, #1e98ba);\n  }\n  *::-webkit-scrollbar {\n    width: 9px;\n    height: 7px;\n    /* background-color: #F5F5F5; */\n  }\n\n  html {\n    scroll-behavior: smooth;\n  }\n\n  body {\n    color:#fff; \n    line-height: 1;\n    font-size: 16px;\n    font-family: SpaceGrotesk;\n    overflow-x: hidden;\n\n    \n    @media (max-width: 576px) {\n      width: 100% !important; \n    } \n\n    & > iframe {\n      display: none; \n    }\n\n    img {\n      height: auto;\n      /* max-width: 100%; */\n\n      image-rendering: -moz-crisp-edges;\n      image-rendering: -o-crisp-edges;\n      image-rendering: -webkit-optimize-contrast;\n      image-rendering: crisp-edges;\n      -ms-interpolation-mode: nearest-neighbor;\n    }\n  }\n\n  .Toastify__toast-body {\n    font-family: 'Helvetica';\n  }\n\n  .box-error {\n    color: red;\n    font-family: 'Helvetica';\n    font-size: 12px;\n    padding: 5px;\n    /* text-align:center; */\n  }\n \n  .modal-confirm {\n    width: 448px !important;\n    max-width: 100% !important;\n    .ant-modal-body {\n      padding: 0 !important;\n    }\n\n    .ant-modal-content {\n      border: none;\n    }\n  }\n\n  .ant-modal-content {\n    background-color: #030303;\n    overflow: hidden;\n    border: 1px solid #ffffff;\n    \n\n    .ant-modal-close {\n      top: 14px;\n      right: 20px;\n      ", " {\n        top: 20px;\n        right: 20px;\n      }\n      img {\n        width: 26px;\n        ", " {\n          width: 36px;\n        }\n      }\n    }\n    .ant-modal-header {\n      background-color: unset;\n      border-bottom: unset;\n      padding-top: 32px;\n      padding-left: 34px;\n \n      .ant-modal-title {\n        color: #fff; \n        font-weight: 500;\n        font-size: 20px;\n        line-height: 22px;\n        letter-spacing: 0.04em;\n        text-shadow: 1px 7px 4px rgba(111, 27, 47, 0.35), 0px -1px 0px #B64034;\n        ", " {\n          font-size: 32px;\n          line-height: 100%;\n        }\n      }\n    }\n    .ant-modal-body {\n      padding: 0 32px 0;\n    }\n\n    .ant-empty-description {\n      color: #fff;\n    }\n  } \n  \n\n  // ant select dropdown\n  .ant-form-item {\n    margin: 0;\n  }\n  .ant-select-dropdown {\n    padding: 0; \n    background: #0C131F; \n    border-radius: 4px; \n    overflow: hidden;\n  }\n  .ant-select-item {\n    color: rgb(230 247 255); \n  }\n  .ant-select-item-option-active:not(.ant-select-item-option-disabled) {\n    color: rgb(230 247 255); \n    background: #83ccf045; \n  }\n  .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {\n    color: #fff; \n    background: #83ccf045; \n  }\n  .ant-select-arrow {\n    img {\n      transform: rotate(180deg);\n    }\n  }\n  .ant-select-open .ant-select-arrow {\n    img {\n      transform: rotate(0deg);\n    }\n  }\n\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n\n  input[type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  .public-layout{\n    overflow: hidden;\n  }\n\n  .underline {\n    position: absolute;\n    top: calc(100% + 2px);\n    left: 0;\n    background: linear-gradient(99.46deg, #fa00ff -10.9%, #00e0ff 97.13%, #2ad4f9 97.14%);\n    height: 2px;\n    width: 100%;\n  }\n\n  .rotate {\n    transform: rotate(180deg);\n  }\n\n  .error {\n    font-size: 12px;\n    color: #FF4842;\n  }\n"])), (function(e) {
                    return e.theme.colors.primary
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                f = t(30),
                h = t(42),
                x = t(20),
                j = t(2),
                g = t(5),
                T = t(6),
                O = t.n(T),
                v = {
                    locale: "en-US",
                    language: "English",
                    code: "en"
                },
                w = {
                    locale: "vi-VN",
                    language: "Ti\u1ebfng Vi\u1ec7t",
                    code: "vi"
                },
                A = {
                    "ar-SA": {
                        locale: "ar-SA",
                        language: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
                        code: "ar"
                    },
                    "bn-BD": {
                        locale: "bn-BD",
                        language: "\u09ac\u09be\u0982\u09b2\u09be",
                        code: "bn"
                    },
                    "en-US": v,
                    "de-DE": {
                        locale: "de-DE",
                        language: "Deutsch",
                        code: "de"
                    },
                    "el-GR": {
                        locale: "el-GR",
                        language: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
                        code: "el"
                    },
                    "es-ES": {
                        locale: "es-ES",
                        language: "Espa\xf1ol",
                        code: "es-ES"
                    },
                    "fi-FI": {
                        locale: "fi-FI",
                        language: "Suomalainen",
                        code: "fi"
                    },
                    "fil-PH": {
                        locale: "fil-PH",
                        language: "Filipino",
                        code: "fil"
                    },
                    "fr-FR": {
                        locale: "fr-FR",
                        language: "Fran\xe7ais",
                        code: "fr"
                    },
                    "hi-IN": {
                        locale: "hi-IN",
                        language: "\u0939\u093f\u0902\u0926\u0940",
                        code: "hi"
                    },
                    "hu-HU": {
                        locale: "hu-HU",
                        language: "Magyar",
                        code: "hu"
                    },
                    "id-ID": {
                        locale: "id-ID",
                        language: "Bahasa Indonesia",
                        code: "id"
                    },
                    "it-IT": {
                        locale: "it-IT",
                        language: "Italiano",
                        code: "it"
                    },
                    "ja-JP": {
                        locale: "ja-JP",
                        language: "\u65e5\u672c\u8a9e",
                        code: "ja"
                    },
                    "ko-KR": {
                        locale: "ko-KR",
                        language: "\ud55c\uad6d\uc5b4",
                        code: "ko"
                    },
                    "nl-NL": {
                        locale: "nl-NL",
                        language: "Nederlands",
                        code: "nl"
                    },
                    "pl-PL": {
                        locale: "pl-PL",
                        language: "Polski",
                        code: "pl"
                    },
                    "pt-BR": {
                        locale: "pt-BR",
                        language: "Portugu\xeas (Brazil)",
                        code: "pt-br"
                    },
                    "pt-PT": {
                        locale: "pt-PT",
                        language: "Portugu\xeas",
                        code: "pt-pt"
                    },
                    "ro-RO": {
                        locale: "ro-RO",
                        language: "Rom\xe2n\u0103",
                        code: "ro"
                    },
                    "ru-RU": {
                        locale: "ru-RU",
                        language: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
                        code: "ru"
                    },
                    "sv-SE": {
                        locale: "sv-SE",
                        language: "Svenska",
                        code: "sv"
                    },
                    "ta-IN": {
                        locale: "ta-IN",
                        language: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",
                        code: "ta"
                    },
                    "tr-TR": {
                        locale: "tr-TR",
                        language: "T\xfcrk\xe7e",
                        code: "tr"
                    },
                    "uk-UA": {
                        locale: "uk-UA",
                        language: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
                        code: "uk"
                    },
                    "vi-VN": w,
                    "zh-CN": {
                        locale: "zh-CN",
                        language: "\u7b80\u4f53\u4e2d\u6587",
                        code: "zh-cn"
                    },
                    "zh-TW": {
                        locale: "zh-TW",
                        language: "\u7e41\u9ad4\u4e2d\u6587",
                        code: "zh-tw"
                    }
                },
                _ = (Object.values(A), "app_language"),
                C = t(439),
                k = t(440),
                E = t(1),
                P = {
                    currentLanguage: w
                },
                S = new Map;
            S.set(v.locale, C), S.set(w.locale, k);
            var R = Object(r.createContext)(void 0),
                M = function(e) {
                    var n = e.children,
                        t = Object(r.useState)((function() {
                            var e = function() {
                                try {
                                    return localStorage.getItem(_) || v.locale
                                } catch (e) {
                                    return v.locale
                                }
                            }();
                            return Object(j.a)(Object(j.a)({}, P), {}, {
                                currentLanguage: A[e]
                            })
                        })),
                        a = Object(g.a)(t, 2),
                        i = a[0],
                        s = a[1],
                        o = i.currentLanguage,
                        c = Object(r.useCallback)(function() {
                            var e = Object(x.a)(O.a.mark((function e(n) {
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            S.has(n.locale), localStorage.setItem(_, n.locale), s((function(e) {
                                                return Object(j.a)(Object(j.a)({}, e), {}, {
                                                    currentLanguage: n
                                                })
                                            }));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }(), []),
                        l = Object(r.useCallback)((function(e, n) {
                            var t, a = S.has(o.locale) ? S.get(o.locale) : S.get(v.locale);
                            if (a && ((t = a[e] || e).match(/%\S+?%/gm) && n)) {
                                var i = t;
                                return Object.keys(n).forEach((function(e) {
                                    var t = new RegExp("%".concat(e, "%"), "g");
                                    i = i.replace(t, n[e].toString())
                                })), i
                            }
                            return t
                        }), [o]);
                    return Object(E.jsx)(R.Provider, {
                        value: Object(j.a)(Object(j.a)({}, i), {}, {
                            setLanguage: c,
                            t: l
                        }),
                        children: n
                    })
                },
                I = function() {
                    var e = Object(r.useContext)(R);
                    if (void 0 === e) throw new Error("Language context is undefined");
                    return e
                },
                B = t(22),
                N = t(13),
                D = t(31),
                L = t(298),
                F = "IS_DARK";
            var W = Object(D.b)("global/updateVersion"),
                z = Object(D.b)("global/setGithubConfig"),
                U = {
                    githubConfig: {
                        airdropToken: void 0,
                        whiteListAirdropToken: {}
                    }
                },
                K = Object(D.c)(U, (function(e) {
                    return e.addCase(z, (function(e, n) {
                        var t = n.payload;
                        e.githubConfig = t
                    }))
                })),
                H = Object(D.b)("market/setNFTMarketToState"),
                V = Object(D.c)({
                    nftMarket: {
                        data: [],
                        total: 0,
                        page: 0
                    }
                }, (function(e) {
                    return e.addCase(H, (function(e, n) {
                        var t = n.payload;
                        e.nftMarket = t
                    }))
                })),
                Z = Object(D.b)("market/setModalConnect"),
                G = Object(D.c)({
                    modalConnect: {
                        toggle: !1,
                        dataModal: null
                    }
                }, (function(e) {
                    return e.addCase(Z, (function(e, n) {
                        var t = n.payload;
                        e.modalConnect = t
                    }))
                })),
                Y = Object(D.b)("market/setNFTMarketToState"),
                X = Object(D.b)("assets/deleteItemMarket"),
                q = {
                    nftMarket: {
                        data: void 0,
                        total: 0,
                        page: 0
                    }
                },
                J = Object(D.c)(q, (function(e) {
                    return e.addCase(Y, (function(e, n) {
                        var t = n.payload;
                        e.nftMarket = t
                    })).addCase(X, (function(e, n) {
                        var t = n.payload;
                        if (e.nftMarket.data && t) {
                            var a = "object" === typeof(null === t || void 0 === t ? void 0 : t.items) ? t.items : [(null === t || void 0 === t ? void 0 : t.items) || t];
                            e.nftMarket = Object(j.a)(Object(j.a)({}, e.nftMarket), {}, {
                                data: e.nftMarket.data.filter((function(e) {
                                    return !a.includes(e.id)
                                }))
                            })
                        }
                    }))
                })),
                $ = Object(D.b)("market/setAuctionListToState"),
                Q = Object(D.b)("assets/deleteItemAuction"),
                ee = {
                    lists: {
                        data: void 0,
                        total: 0,
                        page: 0
                    }
                },
                ne = Object(D.c)(ee, (function(e) {
                    return e.addCase($, (function(e, n) {
                        var t = n.payload;
                        e.lists = t
                    })).addCase(Q, (function(e, n) {
                        var t = n.payload;
                        if (e.lists.data && t) {
                            var a = "object" === typeof(null === t || void 0 === t ? void 0 : t.items) ? t.items : [(null === t || void 0 === t ? void 0 : t.items) || t];
                            e.lists = Object(j.a)(Object(j.a)({}, e.lists), {}, {
                                data: e.lists.data.filter((function(e) {
                                    return !a.includes(e.id)
                                }))
                            })
                        }
                    }))
                })),
                te = Object(D.b)("assets/setAssetsListToStore"),
                ae = Object(D.b)("assets/deleteItemAsset"),
                ie = {
                    lists: {
                        data: void 0,
                        total: 0,
                        page: 0
                    }
                },
                re = Object(D.c)(ie, (function(e) {
                    return e.addCase(te, (function(e, n) {
                        var t = n.payload;
                        e.lists = t
                    })).addCase(ae, (function(e, n) {
                        var t = n.payload;
                        if (e.lists.data && t) {
                            var a = "object" === typeof(null === t || void 0 === t ? void 0 : t.items) ? t.items : [(null === t || void 0 === t ? void 0 : t.items) || t];
                            e.lists = Object(j.a)(Object(j.a)({}, e.lists), {}, {
                                data: e.lists.data.filter((function(e) {
                                    return !a.includes(e.id)
                                }))
                            })
                        }
                    }))
                })),
                se = Object(D.b)("wallet/setProfileWalletToState"),
                oe = {
                    walletInfo: void 0
                },
                ce = Object(D.c)(oe, (function(e) {
                    return e.addCase(se, (function(e, n) {
                        var t = n.payload;
                        e.walletInfo = t
                    }))
                })),
                le = Object(D.b)("transactions/setTransactionHistoryData"),
                ue = Object(D.c)({
                    txHistory: {
                        data: [],
                        page: 0,
                        total: 0
                    }
                }, (function(e) {
                    return e.addCase(le, (function(e, n) {
                        var t = n.payload;
                        e.txHistory = t
                    }))
                })),
                pe = Object(D.b)("balances/setBalanceData"),
                de = Object(D.c)({
                    balances: {
                        data: []
                    }
                }, (function(e) {
                    return e.addCase(pe, (function(e, n) {
                        var t = n.payload;
                        e.balances = t
                    }))
                })),
                me = ["user"],
                be = Object(L.load)({
                    states: me
                });
            be.user && (be.user.userDarkMode = function() {
                var e = null;
                try {
                    var n = localStorage.getItem(F);
                    n && (e = JSON.parse(n))
                } catch (t) {
                    console.error("E0003", t)
                }
                return e
            }());
            var ye = Object(D.a)({
                reducer: {
                    global: K,
                    user: V,
                    modal: G,
                    market: J,
                    auction: ne,
                    assets: re,
                    wallet: ce,
                    transactions: ue,
                    balances: de
                },
                middleware: [].concat(Object(N.a)(Object(D.d)({
                    thunk: !1
                })), [Object(L.save)({
                    states: me
                })]),
                preloadedState: be
            });
            ye.dispatch(W());
            var fe = ye,
                he = t(959);

            function xe(e) {
                var n = new he.a(e);
                return n.pollingInterval = 15e3, n
            }
            var je = {
                    xs: 370,
                    sm: 576,
                    md: 768,
                    lg: 992,
                    xl: 1200,
                    xxl: 1600
                },
                ge = {
                    siteWidth: 1200,
                    breakpoints: Object.values(je).map((function(e) {
                        return "".concat(e, "px")
                    })),
                    mediaQueries: {
                        xs: "@media screen and (min-width: ".concat(je.xs, "px)"),
                        sm: "@media screen and (min-width: ".concat(je.sm, "px)"),
                        md: "@media screen and (min-width: ".concat(je.md, "px)"),
                        lg: "@media screen and (min-width: ".concat(je.lg, "px)"),
                        xl: "@media screen and (min-width: ".concat(je.xl, "px)"),
                        xxl: "@media screen and (min-width: ".concat(je.xxl, "px)")
                    },
                    spacing: [0, 4, 8, 16, 24, 32, 48, 64],
                    shadows: {
                        level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
                        active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
                        success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
                        warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
                        focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
                        inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)"
                    },
                    radii: {
                        small: "4px",
                        default: "16px",
                        card: "32px",
                        circle: "50%"
                    },
                    zIndices: {
                        dropdown: 10,
                        modal: 100
                    }
                },
                Te = {
                    failure: "#ED4B9E",
                    primary: "#ffffff",
                    primaryBright: "#53DEE9",
                    primaryDark: "#BDCADB",
                    secondary: "#B8BED9",
                    success: "#31D0AA",
                    warning: "#ff4d4f"
                },
                Oe = {
                    binance: "#F0B90B"
                },
                ve = Object(j.a)(Object(j.a)(Object(j.a)({}, Te), Oe), {}, {
                    background: "#10183D",
                    backgroundDisabled: "#CDECF8",
                    contrast: "#191326",
                    invertedContrast: "#FFFFFF",
                    input: "#CDECF8",
                    inputSecondary: "#d7caec",
                    tertiary: "#EFF4F5",
                    text: "#ffffff",
                    textGradient: "linear-gradient(190deg,#50E3C2 0%,#17B4EB 100%)",
                    textDisabled: "#BDC2C4",
                    textSubtle: "#B1AFCD",
                    borderColor: "#E9EAEB",
                    card: "#b3c7ff",
                    gradient: "linear-gradient(90deg,#384cff 0%,#2486f9 0.01%,#3ddcec 100%)",
                    gradients: {
                        common: "#ffffff",
                        bubblegum: "linear-gradient(139.73deg,#9df978 0%,#d5e8cd 100%)"
                    },
                    buy: "#00E39A",
                    sell: "#FF4842"
                }),
                we = Object(j.a)(Object(j.a)(Object(j.a)({}, Te), Oe), {}, {
                    secondary: "#9A6AFF",
                    background: "#10183D",
                    backgroundDisabled: "#3c3742",
                    contrast: "#FFFFFF",
                    invertedContrast: "#191326",
                    input: "#483f5a",
                    inputSecondary: "#66578D",
                    primaryDark: "#0098A1",
                    tertiary: "#353547",
                    text: "#EAE2FC",
                    textGradient: "linear-gradient(190deg,#16B4EB 0%,#23E73C 100%)",
                    textDisabled: "#666171",
                    textSubtle: "#B1AFCD",
                    borderColor: "#524B63",
                    card: "#27262c",
                    gradient: "linear-gradient(90deg,#384cff 0%,#2486f9 0.01%,#3ddcec 100%)",
                    gradients: {
                        common: "linear-gradient(90deg,#384cff 0%,#2486f9 0.01%,#3ddcec 100%)",
                        bubblegum: "linear-gradient(90deg,#384cff 0%,#2486f9 0.01%,#3ddcec 100%)"
                    },
                    buy: "#00E39A",
                    sell: "#FF4842"
                }),
                Ae = {
                    handleBackground: ve.card
                },
                _e = {
                    handleBackground: we.card
                },
                Ce = Object(j.a)(Object(j.a)({}, ge), {}, {
                    isDark: !0,
                    colors: we,
                    radio: Ae
                }),
                ke = Object(j.a)(Object(j.a)({}, ge), {}, {
                    isDark: !1,
                    colors: ve,
                    radio: _e
                }),
                Ee = "IS_DARK",
                Pe = s.a.createContext({
                    isDark: !1,
                    toggleTheme: function() {
                        return null
                    }
                }),
                Se = function(e) {
                    var n = e.children,
                        t = Object(r.useState)((function() {
                            var e = localStorage.getItem(Ee);
                            return !!e && JSON.parse(e)
                        })),
                        a = Object(g.a)(t, 2),
                        i = a[0],
                        s = a[1];
                    return Object(E.jsx)(Pe.Provider, {
                        value: {
                            isDark: i,
                            toggleTheme: function() {
                                s((function(e) {
                                    return localStorage.setItem(Ee, JSON.stringify(!e)), !e
                                }))
                            }
                        },
                        children: Object(E.jsx)(m.a, {
                            theme: i ? Ce : ke,
                            children: n
                        })
                    })
                },
                Re = Object(f.c)(B.r),
                Me = function(e) {
                    var n = e.children;
                    return Object(E.jsx)(f.b, {
                        getLibrary: xe,
                        children: Object(E.jsx)(Re, {
                            getLibrary: xe,
                            children: Object(E.jsx)(h.a, {
                                store: fe,
                                children: Object(E.jsx)(Se, {
                                    children: Object(E.jsx)(M, {
                                        children: n
                                    })
                                })
                            })
                        })
                    })
                },
                Ie = t(16),
                Be = t(58),
                Ne = t(76),
                De = t(50),
                Le = t(442),
                Fe = t.n(Le),
                We = t(116),
                ze = t.n(We),
                Ue = t(73),
                Ke = t.n(Ue),
                He = (t(443), t(444), t(445), t(446), t(227)),
                Ve = (t(447), t(448), t(449), t(450), t(128));
            t(451);

            function Ze() {
                return Ge.apply(this, arguments)
            }

            function Ge() {
                return (Ge = Object(x.a)(O.a.mark((function e() {
                    return O.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!window.ethereum) {
                                    e.next = 3;
                                    break
                                }
                                return window.web3 = new Ke.a(window.ethereum), e.abrupt("return", !0);
                            case 3:
                                if (!window.web3) {
                                    e.next = 6;
                                    break
                                }
                                return window.web3 = new Ke.a(window.web3.currentProvider), e.abrupt("return", !0);
                            case 6:
                                if (!window.BinanceChain) {
                                    e.next = 9;
                                    break
                                }
                                return window.web3 = new Ke.a(window.BinanceChain), e.abrupt("return", !0);
                            case 9:
                                return e.abrupt("return", null);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function Ye(e) {
                return Xe.apply(this, arguments)
            }

            function Xe() {
                return (Xe = Object(x.a)(O.a.mark((function e(n) {
                    var t, a, i, r;
                    return O.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = window, a = t.web3, e.next = 3, a.eth.getBalance(n);
                            case 3:
                                return i = e.sent, e.next = 6, a.eth.net.getId();
                            case 6:
                                return r = e.sent, 18, e.abrupt("return", {
                                    name: "BNB Token",
                                    symbol: "BNB",
                                    address: n,
                                    balance: i,
                                    chainId: r,
                                    decimals: 18
                                });
                            case 9:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function qe(e, n) {
                var t = window.web3;
                return Object(r.useMemo)((function() {
                    if (null === t || void 0 === t || !t.eth || !e || !n) return null;
                    try {
                        return new t.eth.Contract(n, e)
                    } catch (a) {
                        return console.error("Failed to get contract", a), null
                    }
                }), [t, e, n])
            }

            function Je(e, n) {
                return qe(e || B.v, n || Ve)
            }
            var $e = function(e) {
                return new Promise((function(n) {
                    return setTimeout(n, e)
                }))
            };

            function Qe(e, n, t) {
                return en.apply(this, arguments)
            }

            function en() {
                return (en = Object(x.a)(O.a.mark((function e(n, t, a) {
                    return O.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return a || (a = {}), e.abrupt("return", new Promise((function(e, i) {
                                    Object(x.a)(O.a.mark((function r() {
                                        var s, o, c;
                                        return O.a.wrap((function(r) {
                                            for (;;) switch (r.prev = r.next) {
                                                case 0:
                                                    if (!n) {
                                                        r.next = 11;
                                                        break
                                                    }
                                                    return r.next = 3, n.methods.balanceOf(t).call();
                                                case 3:
                                                    return s = r.sent, r.next = 6, n.methods.decimals().call();
                                                case 6:
                                                    o = r.sent, c = new We.BigNumber(s).shiftedBy(-o).toNumber(), e(Object(j.a)({
                                                        balance: c
                                                    }, a)), r.next = 12;
                                                    break;
                                                case 11:
                                                    i(new Error("Cannot read contract, please try again later."));
                                                case 12:
                                                case "end":
                                                    return r.stop()
                                            }
                                        }), r)
                                    })))()
                                })));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function nn(e, n) {
                return tn.apply(this, arguments)
            }

            function tn() {
                return (tn = Object(x.a)(O.a.mark((function e(n, t) {
                    return O.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new Promise((function(e, a) {
                                    Object(x.a)(O.a.mark((function i() {
                                        return O.a.wrap((function(i) {
                                            for (;;) switch (i.prev = i.next) {
                                                case 0:
                                                    if (!n) {
                                                        i.next = 5;
                                                        break
                                                    }
                                                    return i.next = 3, Promise.all([n.methods.balanceOf(t).call(), n.methods.symbol().call(), n.methods.name().call(), n.methods.decimals().call()]).then((function(t) {
                                                        var a = Object(g.a)(t, 4),
                                                            i = a[0],
                                                            r = a[1],
                                                            s = a[2],
                                                            o = a[3],
                                                            c = {
                                                                name: s,
                                                                symbol: r,
                                                                decimals: o,
                                                                chainId: 56,
                                                                balance: new We.BigNumber(i).shiftedBy(-o).toNumber(),
                                                                address: n._address
                                                            };
                                                        e(c)
                                                    })).catch(a);
                                                case 3:
                                                    i.next = 6;
                                                    break;
                                                case 5:
                                                    a(new Error("Cannot read contract, please try again later."));
                                                case 6:
                                                case "end":
                                                    return i.stop()
                                            }
                                        }), i)
                                    })))()
                                })));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function an() {
                var e = Object(h.b)(),
                    n = Object(f.d)().account,
                    t = Object(r.useReducer)((function(e) {
                        return e + 1
                    }), 0),
                    a = Object(g.a)(t, 2)[1],
                    i = Object(r.useState)(!1),
                    s = Object(g.a)(i, 2),
                    o = s[0],
                    c = s[1],
                    l = Je(B.b.address),
                    u = Je(B.c.address),
                    p = Je(B.a.address),
                    d = Object(r.useCallback)(Object(x.a)(O.a.mark((function t() {
                        var i, r, s, o, c;
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (null !== l && void 0 !== l && l.methods) {
                                        t.next = 4;
                                        break
                                    }
                                    return a(), t.next = 4, $e(1e3);
                                case 4:
                                    if (!n || !l) {
                                        t.next = 25;
                                        break
                                    }
                                    return t.prev = 5, t.next = 8, Ye(n);
                                case 8:
                                    return i = t.sent, t.next = 11, nn(l, n);
                                case 11:
                                    return r = t.sent, t.next = 14, Qe(u, n, B.c);
                                case 14:
                                    return s = t.sent, t.next = 17, Qe(p, n, B.a);
                                case 17:
                                    o = t.sent, c = Object(j.a)(Object(j.a)({}, i), {}, {
                                        balance: new We.BigNumber(i.balance).shiftedBy(-18).toNumber(),
                                        baseToken: r,
                                        assets: [r, s, o]
                                    }), e(se(c)), t.next = 25;
                                    break;
                                case 22:
                                    t.prev = 22, t.t0 = t.catch(5), console.error("E0001", t.t0);
                                case 25:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [5, 22]
                        ])
                    }))), [n, l, p, u, e]),
                    m = Object(r.useCallback)(Object(x.a)(O.a.mark((function e() {
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (Ze()) {
                                        e.next = 7;
                                        break
                                    }
                                    return a(), e.next = 5, $e(1e3);
                                case 5:
                                    e.next = 8;
                                    break;
                                case 7:
                                    c(!0);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), []);
                Object(r.useEffect)((function() {
                        o ? d() : m()
                    }), [m, o]),
                    function(e, n) {
                        var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            a = Object(r.useRef)();
                        Object(r.useEffect)((function() {
                            a.current = e
                        }), [e]), Object(r.useEffect)((function() {
                            function e() {
                                var e = a.current;
                                e && e()
                            }
                            if (null !== n) {
                                t && e();
                                var i = setInterval(e, n);
                                return function() {
                                    return clearInterval(i)
                                }
                            }
                        }), [n, t])
                    }(Object(x.a)(O.a.mark((function e() {
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    o && d();
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))), 7e3)
            }
            var rn, sn, on = t(3),
                cn = t(192),
                ln = t(193),
                un = t(452),
                pn = t(228),
                dn = t(117),
                mn = t(10),
                bn = t(9),
                yn = t(14),
                fn = t(15),
                hn = t(244),
                xn = t(111),
                jn = t(51),
                gn = function(e) {
                    Object(yn.a)(t, e);
                    var n = Object(fn.a)(t);

                    function t(e, a, i) {
                        var r;
                        return Object(bn.a)(this, t), (r = n.call(this, e)).code = a, r.data = i, r
                    }
                    return Object(mn.a)(t)
                }(Object(hn.a)(Error)),
                Tn = Object(mn.a)((function e(n, t, a) {
                    var i = this;
                    Object(bn.a)(this, e), this.isMetaMask = !1, this.chainId = void 0, this.url = void 0, this.host = void 0, this.path = void 0, this.batchWaitTimeMs = void 0, this.nextId = 1, this.batchTimeoutId = null, this.batch = [], this.clearBatch = Object(x.a)(O.a.mark((function e() {
                        var n, t, a, r, s, o, c, l, u, p, d, m, b, y;
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = i.batch, i.batch = [], i.batchTimeoutId = null, e.prev = 3, e.next = 6, fetch(i.url, {
                                        method: "POST",
                                        headers: {
                                            "content-type": "application/json",
                                            accept: "application/json"
                                        },
                                        body: JSON.stringify(n.map((function(e) {
                                            return e.request
                                        })))
                                    });
                                case 6:
                                    t = e.sent, e.next = 13;
                                    break;
                                case 9:
                                    return e.prev = 9, e.t0 = e.catch(3), n.forEach((function(e) {
                                        return (0, e.reject)(new Error("Failed to send batch call"))
                                    })), e.abrupt("return");
                                case 13:
                                    if (t.ok) {
                                        e.next = 16;
                                        break
                                    }
                                    return n.forEach((function(e) {
                                        return (0, e.reject)(new gn("".concat(t.status, ": ").concat(t.statusText), -32e3))
                                    })), e.abrupt("return");
                                case 16:
                                    return e.prev = 16, e.next = 19, t.json();
                                case 19:
                                    a = e.sent, e.next = 26;
                                    break;
                                case 22:
                                    return e.prev = 22, e.t1 = e.catch(16), n.forEach((function(e) {
                                        return (0, e.reject)(new Error("Failed to parse JSON response"))
                                    })), e.abrupt("return");
                                case 26:
                                    r = n.reduce((function(e, n) {
                                        return e[n.request.id] = n, e
                                    }), {}), s = Object(dn.a)(a);
                                    try {
                                        for (s.s(); !(o = s.n()).done;) c = o.value, l = r[c.id], u = l.resolve, p = l.reject, d = l.request.method, "error" in c ? p(new gn(null === c || void 0 === c || null === (m = c.error) || void 0 === m ? void 0 : m.message, null === c || void 0 === c || null === (b = c.error) || void 0 === b ? void 0 : b.code, null === c || void 0 === c || null === (y = c.error) || void 0 === y ? void 0 : y.data)) : "result" in c ? u(c.result) : p(new gn("Received unexpected JSON-RPC response to ".concat(d, " request."), -32e3, c))
                                    } catch (f) {
                                        s.e(f)
                                    } finally {
                                        s.f()
                                    }
                                case 29:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 9],
                            [16, 22]
                        ])
                    }))), this.sendAsync = function(e, n) {
                        i.request(e.method, e.params).then((function(t) {
                            return n(null, {
                                jsonrpc: "2.0",
                                id: e.id,
                                result: t
                            })
                        })).catch((function(e) {
                            return n(e, null)
                        }))
                    }, this.request = function() {
                        var e = Object(x.a)(O.a.mark((function e(n, t) {
                            var a, r;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("string" === typeof n) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", i.request(n.method, n.params));
                                    case 2:
                                        if ("eth_chainId" !== n) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.abrupt("return", "0x".concat(i.chainId.toString(16)));
                                    case 4:
                                        return r = new Promise((function(e, a) {
                                            i.batch.push({
                                                request: {
                                                    jsonrpc: "2.0",
                                                    id: i.nextId++,
                                                    method: n,
                                                    params: t
                                                },
                                                resolve: e,
                                                reject: a
                                            })
                                        })), i.batchTimeoutId = null !== (a = i.batchTimeoutId) && void 0 !== a ? a : setTimeout(i.clearBatch, i.batchWaitTimeMs), e.abrupt("return", r);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n, t) {
                            return e.apply(this, arguments)
                        }
                    }(), this.chainId = n, this.url = t;
                    var r = new URL(t);
                    this.host = r.host, this.path = r.pathname, this.batchWaitTimeMs = null !== a && void 0 !== a ? a : 50
                })),
                On = function(e) {
                    Object(yn.a)(t, e);
                    var n = Object(fn.a)(t);

                    function t(e) {
                        var a, i = e.urls,
                            r = e.defaultChainId;
                        return Object(bn.a)(this, t), Object(jn.a)(r || 1 === Object.keys(i).length, "defaultChainId is a required argument with >1 url"), (a = n.call(this, {
                            supportedChainIds: Object.keys(i).map((function(e) {
                                return Number(e)
                            }))
                        })).providers = void 0, a.currentChainId = void 0, a.currentChainId = r || Number(Object.keys(i)[0]), a.providers = Object.keys(i).reduce((function(e, n) {
                            return e[Number(n)] = new Tn(Number(n), i[Number(n)]), e
                        }), {}), a
                    }
                    return Object(mn.a)(t, [{
                        key: "provider",
                        get: function() {
                            return this.providers[this.currentChainId]
                        }
                    }, {
                        key: "activate",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", {
                                                provider: this.providers[this.currentChainId],
                                                chainId: this.currentChainId,
                                                account: null
                                            });
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getProvider",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.providers[this.currentChainId]);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getChainId",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", this.currentChainId);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getAccount",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", null);
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "deactivate",
                        value: function() {
                            return null
                        }
                    }]), t
                }(xn.AbstractConnector),
                vn = "connecterId";
            ! function(e) {
                e.Injected = "injected", e.WalletConnect = "walletconnect", e.BSC = "bsc"
            }(sn || (sn = {}));
            var wn = "https://bsc-dataseed.binance.org/",
                An = parseInt(("56", "56"));
            var _n = new On({
                urls: Object(on.a)({}, An, wn)
            });
            var Cn = new cn.a({
                    supportedChainIds: [56, 97]
                }),
                kn = new pn.BscConnector({
                    supportedChainIds: [56]
                }),
                En = new ln.b({
                    rpc: Object(on.a)({}, An, wn),
                    bridge: "https://bridge.walletconnect.org",
                    qrcode: !0
                }),
                Pn = (new un.a({
                    url: wn,
                    appName: "Uniswap",
                    appLogoUrl: "https://mpng.pngfly.com/20181202/bex/kisspng-emoji-domain-unicorn-pin-badges-sticker-unicorn-tumblr-emoji-unicorn-iphoneemoji-5c046729264a77.5671679315437924251569.jpg"
                }), rn = {}, Object(on.a)(rn, sn.Injected, Cn), Object(on.a)(rn, sn.WalletConnect, En), Object(on.a)(rn, sn.BSC, kn), rn),
                Sn = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 575,
                        n = Object(r.useState)((function() {
                            return window.matchMedia("(max-width: ".concat(e, "px)")).matches
                        })),
                        t = Object(g.a)(n, 2),
                        a = t[0],
                        i = t[1];
                    return Object(r.useEffect)((function() {
                        function n() {
                            var n = window.matchMedia("(max-width: ".concat(e, "px)")),
                                t = function(e) {
                                    i(e.matches)
                                };
                            return n.addEventListener && n.addEventListener("change", t),
                                function() {
                                    n.removeEventListener && n.removeEventListener("change", t)
                                }
                        }
                        return n(),
                            function() {
                                n()
                            }
                    }), [e]), a
                };
            var Rn, Mn, In, Bn, Nn = ["size", "stroke"],
                Dn = Object(m.e)(Rn || (Rn = Object(d.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]))),
                Ln = m.d.svg(Mn || (Mn = Object(d.a)(["\n  animation: 2s ", " linear infinite;\n  height: ", ";\n  width: ", ";\n  path {\n    stroke: ", ";\n  }\n"])), Dn, (function(e) {
                    return e.size
                }), (function(e) {
                    return e.size
                }), (function(e) {
                    var n = e.stroke,
                        t = e.theme;
                    return null !== n && void 0 !== n ? n : t.colors.primary
                }));

            function Fn(e) {
                var n = e.size,
                    t = void 0 === n ? "16px" : n,
                    a = e.stroke,
                    i = Object(Ie.a)(e, Nn);
                return Object(E.jsx)(Ln, Object(j.a)(Object(j.a)({
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    size: t,
                    stroke: a
                }, i), {}, {
                    children: Object(E.jsx)("path", {
                        d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
                        strokeWidth: "2.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    })
                }))
            }
            var Wn = m.d.div(In || (In = Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20rem;\n"]))),
                zn = m.d.h2(Bn || (Bn = Object(d.a)(["\n  color: ", ";\n"])), (function(e) {
                    return e.theme.colors.primaryDark
                }));

            function Un(e) {
                var n = e.children,
                    t = I().t,
                    a = Object(f.d)().active,
                    i = Object(f.d)(B.r),
                    s = i.active,
                    o = i.error,
                    c = i.activate,
                    l = function() {
                        var e = Object(f.d)(),
                            n = e.activate,
                            t = e.active,
                            a = Sn(),
                            i = Object(r.useState)(!1),
                            s = Object(g.a)(i, 2),
                            o = s[0],
                            c = s[1];
                        return Object(r.useEffect)((function() {
                            Cn.isAuthorized().then((function(e) {
                                var t = window.localStorage.getItem(vn);
                                e && t || a && window.ethereum && t ? n(Cn, void 0, !0).catch((function() {
                                    c(!0)
                                })) : c(!0)
                            }))
                        }), [n, a]), Object(r.useEffect)((function() {
                            t && c(!0)
                        }), [t]), o
                    }();
                Object(r.useEffect)((function() {
                        !l || s || o || a || c(_n)
                    }), [l, s, o, c, a]),
                    function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            n = Object(f.d)(),
                            t = n.active,
                            a = n.error,
                            i = n.activate;
                        Object(r.useEffect)((function() {
                            var n = window.ethereum;
                            if (n && n.on && !t && !a && !e) {
                                var r = function() {
                                        i(Cn, void 0, !0).catch((function(e) {
                                            console.error("Failed to activate after chain changed", e)
                                        }))
                                    },
                                    s = function(e) {
                                        e.length > 0 && i(Cn, void 0, !0).catch((function(e) {
                                            console.error("Failed to activate after accounts changed", e)
                                        }))
                                    };
                                return n.on("chainChanged", r), n.on("accountsChanged", s),
                                    function() {
                                        n.removeListener && (n.removeListener("chainChanged", r), n.removeListener("accountsChanged", s))
                                    }
                            }
                        }), [t, a, e, i])
                    }(!l);
                var u = Object(r.useState)(!1),
                    p = Object(g.a)(u, 2),
                    d = p[0],
                    m = p[1];
                return Object(r.useEffect)((function() {
                    var e = setTimeout((function() {
                        m(!0)
                    }), 600);
                    return function() {
                        clearTimeout(e)
                    }
                }), []), l ? !a && o ? Object(E.jsx)(Wn, {
                    children: Object(E.jsx)(zn, {
                        children: t("unknownError")
                    })
                }) : a || s ? n : d ? Object(E.jsx)(Wn, {
                    children: Object(E.jsx)(Fn, {})
                }) : null : null
            }
            var Kn, Hn = t(961),
                Vn = t(953),
                Zn = t(954),
                Gn = function() {
                    var e = Object(f.d)(),
                        n = e.activate,
                        t = e.deactivate,
                        a = Object(r.useCallback)((function(e) {
                            var t = Pn[e];
                            t ? n(t, function() {
                                var e = Object(x.a)(O.a.mark((function e(n) {
                                    return O.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                window.localStorage.removeItem(vn), n instanceof f.a ? De.b.error("Unsupported Chain Id") : n instanceof cn.b || n instanceof pn.NoBscProviderError ? De.b.error("Provider Error, No provider was found") : n instanceof cn.c || n instanceof ln.a ? (t instanceof ln.b && (t.walletConnectProvider = void 0), De.b.error("Authorization Error, Please authorize to access your account")) : De.b.error(n.name + n.message);
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(n) {
                                    return e.apply(this, arguments)
                                }
                            }()) : De.b.error("Can't find connector, The connector config is wrong")
                        }), []);
                    return {
                        login: a,
                        logout: Object(r.useCallback)((function() {
                            window.localStorage.removeItem(vn), t()
                        }), [t])
                    }
                },
                Yn = t(453),
                Xn = ["loading", "disabled", "background", "borderRadius", "width", "onClick", "disableHover", "children"],
                qn = m.d.button(Kn || (Kn = Object(d.a)(["\n  border: unset;\n  cursor: pointer;\n  background: ", ";\n  border-radius: ", ";\n  position: relative;\n  font-size: 14px;\n  ", "\n\n  &:disabled {\n    /* filter: grayscale(100%); */\n    background-color: #262b34;\n  }\n\n  & > div {\n    font-style: normal;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 150%;\n    color: #ffffff;\n    display: flex;\n    justify-content: center;\n\n    @media (min-width: 991px) {\n      font-size: 16px;\n      line-height: 24px;\n    }\n  }\n\n  &[data-hover='true'],\n  &[data-loading='true'] {\n    cursor: default;\n  }\n\n  .ant-spin {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  &[disabled],\n  &[disabled='true'] {\n    cursor: not-allowed;\n  }\n"])), (function(e) {
                    return e.background || "linear-gradient(267.59deg, #00FFA3 12.14%, #DC1FFF 110.58%)"
                }), (function(e) {
                    return e.borderRadius || "10px"
                }), (function(e) {
                    var n = e.width;
                    return n ? "\n        padding: 10px 0px;\n        width: ".concat(n, ";\n      ") : "\n      padding: 10px 24px;\n    "
                })),
                Jn = function(e) {
                    var n = e.loading,
                        t = e.disabled,
                        a = e.background,
                        i = e.borderRadius,
                        r = e.width,
                        s = e.onClick,
                        o = e.disableHover,
                        c = e.children,
                        l = Object(Ie.a)(e, Xn);
                    return Object(E.jsxs)(qn, Object(j.a)(Object(j.a)({
                        type: "button",
                        background: a,
                        borderRadius: i,
                        width: r,
                        "data-loading": n.toString(),
                        "data-hover": o.toString(),
                        disabled: t,
                        onClick: function() {
                            n || t || !s || s()
                        }
                    }, l), {}, {
                        children: [Object(E.jsx)("div", {
                            children: c
                        }), n && Object(E.jsx)(Yn.a, {
                            spinning: !0
                        })]
                    }))
                };
            Jn.defaultProps = {
                loading: !1,
                disabled: !1,
                disableHover: !1
            };
            var $n, Qn, et, nt = Jn,
                tt = t(57),
                at = m.d.div($n || ($n = Object(d.a)(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), tt.a, tt.b, tt.c, tt.e, tt.f, tt.g),
                it = ["children"],
                rt = Object(m.d)(at)(Qn || (Qn = Object(d.a)(["\n  ", "\n"])), tt.d),
                st = function(e) {
                    var n = e.children,
                        t = Object(Ie.a)(e, it),
                        a = t.display;
                    return Object(E.jsx)(rt, Object(j.a)(Object(j.a)({}, t), {}, {
                        style: a ? {} : {
                            display: "flex"
                        },
                        children: n
                    }))
                },
                ot = "sm",
                ct = "md",
                lt = function(e) {
                    return e.scale === ot ? "24px" : "28px"
                },
                ut = m.d.input.attrs({
                    border: 1,
                    checkedWidth: 4,
                    type: "checkbox"
                })(et || (et = Object(d.a)(["\n  appearance: none;\n  display: flex;\n  align-items: center;\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  min-height: 24px;\n\n  position: relative;\n  padding: 30% 2em;\n  box-sizing: border-box;\n\n  color: #fff;\n  background: #19183e;\n  background-clip: padding-box;\n  border: ", "px solid transparent;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.2s ease-in-out;\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: -1;\n    margin: -", "px;\n    border-radius: inherit;\n    background: #424082;\n  }\n\n  &:after {\n    content: '';\n    position: absolute;\n    border-bottom: ", "px solid;\n    border-left: ", "px solid;\n    border-color: transparent;\n    top: 27%;\n    left: 2%;\n    right: 0;\n    width: 60%;\n    height: 36%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:checked {\n    &:before {\n      background: ", ";\n    }\n    &:after {\n      border-color: #51fbff;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n\n  ", " {\n    width: ", ";\n    height: ", ";\n    min-width: ", ";\n    min-height: ", ";\n  }\n"])), (function(e) {
                    return e.border
                }), (function(e) {
                    return e.border
                }), (function(e) {
                    return e.checkedWidth
                }), (function(e) {
                    return e.checkedWidth
                }), (function(e) {
                    return e.theme.colors.textGradient
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                }), lt, lt, lt, lt);
            ut.defaultProps = {
                scale: ct
            };
            var pt, dt = "sm",
                mt = "md",
                bt = function(e) {
                    return e.scale === dt ? "24px" : "32px"
                },
                yt = function(e) {
                    return e.scale === dt ? "12px" : "20px"
                },
                ft = m.d.input.attrs({
                    type: "radio"
                })(pt || (pt = Object(d.a)(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: '';\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), bt, bt, (function(e) {
                    return e.theme.colors.input
                }), (function(e) {
                    return e.theme.shadows.inset
                }), yt, yt, (function(e) {
                    return e.theme.shadows.focus
                }), (function(e) {
                    return e.theme.shadows.focus
                }), (function(e) {
                    return e.theme.colors.success
                }), (function(e) {
                    return e.theme.radio.handleBackground
                }), tt.g);
            ft.defaultProps = {
                scale: mt,
                m: 0
            };
            var ht, xt, jt, gt = t(297),
                Tt = t.n(gt),
                Ot = function(e, n) {
                    return function(t) {
                        return Tt()(t, e, n)
                    }
                },
                vt = Object(m.e)(ht || (ht = Object(d.a)(["\n  from {\n    transform: rotate(0deg);\n  } \n  to {\n    transform: rotate(360deg);\n  }\n"]))),
                wt = Object(m.c)(xt || (xt = Object(d.a)(["\n  animation: ", " 2s linear infinite;\n"])), vt),
                At = m.d.svg(jt || (jt = Object(d.a)(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), (function(e) {
                    var n = e.theme,
                        t = e.color;
                    return Ot("colors.".concat(t), t)(n)
                }), (function(e) {
                    return e.spin && wt
                }), tt.g);
            At.defaultProps = {
                color: "text",
                width: "20px",
                xmlns: "http://www.w3.org/2000/svg",
                spin: !1
            };
            var _t, Ct = At,
                kt = ["fill"],
                Et = function(e) {
                    var n = e.fill,
                        t = Object(Ie.a)(e, kt);
                    return Object(E.jsx)(Ct, Object(j.a)(Object(j.a)({
                        viewBox: "0 0 22 23",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none"
                    }, t), {}, {
                        children: Object(E.jsx)("path", {
                            d: "M21.2209 20.2639L21.2207 20.2637L18.2577 17.3068C19.7942 15.5498 20.7268 13.2507 20.7268 10.738C20.7268 5.22993 16.2468 0.75 10.7388 0.75C5.23072 0.75 0.749756 5.2299 0.749756 10.738C0.749756 16.2461 5.23069 20.727 10.7388 20.727C13.0142 20.727 15.1146 19.962 16.7956 18.6761L19.8076 21.6797L19.808 21.6801C20.0035 21.8743 20.2596 21.9717 20.5142 21.9717C20.769 21.9717 21.027 21.8747 21.2225 21.6769C21.613 21.2858 21.6109 20.6539 21.2209 20.2639ZM2.74976 10.738C2.74976 6.33311 6.33379 2.75 10.7388 2.75C15.1427 2.75 18.7268 6.33309 18.7268 10.738C18.7268 15.1429 15.1427 18.727 10.7388 18.727C6.33383 18.727 2.74976 15.1429 2.74976 10.738Z",
                            fill: n || "#919EAB",
                            stroke: n || "#919EAB",
                            strokeWidth: "0.5"
                        })
                    }))
                },
                Pt = m.d.div(_t || (_t = Object(d.a)(["\n  color: ", ";\n  ", "\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n  ", "\n  white-space:  ", ";\n"])), (function(e) {
                    var n = e.color,
                        t = e.theme;
                    return Ot("colors.".concat(n), n)(t)
                }), (function(e) {
                    return e.small ? "\n      font-size: 14px;\n      " : ""
                }), (function(e) {
                    return e.bold ? 600 : 400
                }), (function(e) {
                    var n = e.textTransform;
                    return n && "text-transform: ".concat(n, ";")
                }), tt.g, tt.h, (function(e) {
                    return e.nowrap ? "nowrap" : "unset"
                }));
            Pt.defaultProps = {
                color: "text",
                small: !1
            };
            var St, Rt = Pt,
                Mt = m.d.div(St || (St = Object(d.a)(["\n  background-image: ", ";\n  background-size: 100%;\n  background-repeat: repeat;\n  -webkit-background-clip: text;\n  -moz-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  -moz-text-fill-color: transparent;\n\n  font-size: ", ";\n  font-weight: ", ";\n  margin: auto 0;\n  line-height: 120%;\n\n  ", "\n  ", "\n  ", "\n"])), (function(e) {
                    var n = e.color,
                        t = e.theme;
                    return Ot("colors.".concat(n), n)(t)
                }), (function(e) {
                    var n = e.fontSize;
                    return e.small ? "14px" : n || "16px"
                }), (function(e) {
                    return e.bold ? 600 : 400
                }), (function(e) {
                    var n = e.textTransform;
                    return n && "text-transform: ".concat(n, ";")
                }), tt.g, tt.h);
            Mt.defaultProps = {
                color: "textGradient",
                small: !1
            };
            var It, Bt, Nt, Dt, Lt, Ft, Wt, zt, Ut, Kt, Ht, Vt, Zt, Gt, Yt, Xt, qt, Jt, $t, Qt, ea, na, ta, aa, ia, ra, sa, oa = function() {
                    return {
                        target: "_blank",
                        rel: "noreferrer noopener"
                    }
                },
                ca = ["external", "href"],
                la = ["href"],
                ua = Object(m.d)(Rt)(It || (It = Object(d.a)(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"]))),
                pa = function(e) {
                    var n = e.external,
                        t = e.href,
                        a = Object(Ie.a)(e, ca),
                        i = n || null !== t && void 0 !== t && t.startsWith("http") ? oa() : {};
                    return Object(E.jsx)(ua, Object(j.a)(Object(j.a)({
                        as: "a",
                        bold: !0,
                        href: t
                    }, i), a))
                },
                da = function(e) {
                    var n = e.href,
                        t = Object(Ie.a)(e, la),
                        a = null === n || void 0 === n ? void 0 : n.startsWith("http"),
                        i = a ? "a" : Ne.c,
                        r = a ? {
                            href: n
                        } : {
                            to: n
                        };
                    return Object(E.jsx)(i, Object(j.a)(Object(j.a)({}, r), t))
                },
                ma = "circle",
                ba = Object(m.e)(Bt || (Bt = Object(d.a)(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"]))),
                ya = Object(m.e)(Nt || (Nt = Object(d.a)(["\n  0% {\n    opacity: 1;\n  } \n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"]))),
                fa = m.d.div(Dt || (Dt = Object(d.a)(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), (function(e) {
                    return e.theme.colors.backgroundDisabled
                }), (function(e) {
                    var n = e.variant,
                        t = e.theme;
                    return n === ma ? t.radii.circle : t.radii.small
                }), tt.e, tt.g),
                ha = (Object(m.d)(fa)(Lt || (Lt = Object(d.a)(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), ya), Object(m.d)(fa)(Ft || (Ft = Object(d.a)(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: '';\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), ba), "sm"),
                xa = "md",
                ja = "lg",
                ga = ["className", "icon", "value", "border"],
                Ta = function(e) {
                    var n = e.scale;
                    switch (void 0 === n ? xa : n) {
                        case ha:
                            return "20px";
                        case xa:
                            return "28px";
                        case ja:
                            return "42px";
                        default:
                            return "28px"
                    }
                },
                Oa = m.d.div(Wt || (Wt = Object(d.a)(["\n  font-size: 16px;\n  color: ", ";\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex-wrap: nowrap;\n\n  width: 100%;\n  padding: 4px 12px;\n  border: ", ";\n  border-radius: 5px;\n  box-shadow: ", ";\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n\n  input {\n    color: #ffffff;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 100%;\n    letter-spacing: 0.04em;\n    // text-shadow: 1px 7px 4px rgba(111, 27, 47, 0.35), 0px -1px 0px #b64034;\n\n    flex: 1 0 auto;\n    height: ", ";\n\n    background: transparent;\n    border: unset;\n    outline: unset;\n    &:hover,\n    &:focus {\n      border: unset;\n      outline: unset;\n    }\n\n    &::placeholder {\n      color: #fff;\n      font-size: 12px;\n      font-family: 'Helvetica';\n    }\n  }\n\n  .prefix {\n    height: 100%;\n    flex: 0 0 auto;\n    display: flex;\n    align-items: center;\n    & > div {\n      color: #ffffff;\n      font-weight: 500;\n      font-size: 16px;\n      line-height: 100%;\n      letter-spacing: 0.04em;\n      text-shadow: 1px 7px 4px rgba(111, 27, 47, 0.35), 0px -1px 0px #b64034;\n      margin-right: 8px;\n    }\n    img {\n      width: auto;\n      height: calc(", " - 2px);\n    }\n  }\n"])), (function(e) {
                    return e.theme.colors.text
                }), (function(e) {
                    var n = e.border;
                    return n || "1px solid #262b34"
                }), (function(e) {
                    var n = e.isSuccess,
                        t = void 0 !== n && n,
                        a = e.isWarning,
                        i = void 0 !== a && a,
                        r = e.theme;
                    return i ? r.shadows.warning : t ? r.shadows.success : "unset"
                }), (function(e) {
                    return e.theme.colors.textSubtle
                }), (function(e) {
                    return e.theme.colors.backgroundDisabled
                }), (function(e) {
                    return e.theme.colors.textDisabled
                }), (function(e) {
                    return e.theme.shadows.focus
                }), Ta, Ta),
                va = function(e) {
                    var n = e.className,
                        t = e.icon,
                        a = e.value,
                        i = e.border,
                        r = Object(Ie.a)(e, ga);
                    return Object(E.jsxs)(Oa, {
                        icon: t,
                        className: n,
                        border: i,
                        children: [Object(E.jsx)("input", Object(j.a)({
                            value: a
                        }, r)), Object(E.jsx)("div", {
                            className: "prefix",
                            children: t && Object(E.jsx)(E.Fragment, {
                                children: Object(E.jsx)("img", {
                                    src: t,
                                    title: "UKDog",
                                    alt: "UKDog"
                                })
                            })
                        })]
                    })
                },
                wa = ["title", "value", "height", "children"],
                Aa = m.d.div(zt || (zt = Object(d.a)([""]))),
                _a = Object(m.d)(Rt).attrs({
                    role: "button"
                })(Ut || (Ut = Object(d.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n\n  padding: 5px 10px;\n  border-radius: 6px;\n  /* background-color: rgba(255, 255, 255, 0.1); */\n  font-size: 20px;\n  font-weight: 300;\n"])), (function(e) {
                    return e.theme.colors.primary
                })),
                Ca = m.d.div(Kt || (Kt = Object(d.a)(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), (function(e) {
                    return e.isTooltipDisplayed ? "block" : "none"
                }), (function(e) {
                    return e.theme.colors.contrast
                }), (function(e) {
                    return e.theme.colors.invertedContrast
                })),
                ka = Object(m.d)(Rt)(Ht || (Ht = Object(d.a)(["\n  font-size: 20px;\n"]))),
                Ea = m.d.span(Vt || (Vt = Object(d.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n"]))),
                Pa = m.d.div(Zt || (Zt = Object(d.a)(["\n  font-family: 'Helvetica';\n  font-size: 16px;\n  font-weight: bold;\n  white-space: nowrap;\n  overflow: hidden;\n"]))),
                Sa = function(e) {
                    var n = e.title,
                        t = e.value,
                        a = (e.height, e.children),
                        i = Object(Ie.a)(e, wa),
                        s = Object(r.useState)(!1),
                        o = Object(g.a)(s, 2),
                        c = o[0],
                        l = o[1];
                    return Object(E.jsxs)(Aa, {
                        children: [Object(E.jsx)(ka, {
                            children: n
                        }), Object(E.jsxs)(_a, Object(j.a)(Object(j.a)({
                            small: !0,
                            bold: !0,
                            onClick: function() {
                                navigator.clipboard && (navigator.clipboard.writeText(t), l(!0), setTimeout((function() {
                                    l(!1)
                                }), 1e3))
                            },
                            title: t
                        }, i), {}, {
                            children: [Object(E.jsx)(Pa, {
                                children: a
                            }), Object(E.jsx)(Ea, {
                                children: Object(E.jsx)(at, {
                                    background: "#00E39A1A",
                                    ml: "1rem",
                                    p: "1px 8px",
                                    borderRadius: "8px",
                                    children: Object(E.jsx)("img", {
                                        src: "/images/icons/copy.png",
                                        width: "16",
                                        alt: ""
                                    })
                                })
                            }), Object(E.jsx)(Ca, {
                                isTooltipDisplayed: c,
                                children: "Copied"
                            })]
                        }))]
                    })
                },
                Ra = function(e) {
                    return Object(E.jsxs)(Ct, Object(j.a)(Object(j.a)({
                        viewBox: "0 0 96 96"
                    }, e), {}, {
                        children: [Object(E.jsx)("circle", {
                            cx: "48",
                            cy: "48",
                            r: "48",
                            fill: "white"
                        }), Object(E.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z",
                            fill: "#1D222A"
                        })]
                    }))
                },
                Ma = function(e) {
                    return Object(E.jsxs)(Ct, Object(j.a)(Object(j.a)({
                        viewBox: "0 0 96 96"
                    }, e), {}, {
                        children: [Object(E.jsx)("circle", {
                            cx: "48",
                            cy: "48",
                            r: "48",
                            fill: "white"
                        }), Object(E.jsx)("path", {
                            d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z",
                            fill: "#29AEFF"
                        }), Object(E.jsx)("path", {
                            d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z",
                            fill: "#2761E7"
                        })]
                    }))
                },
                Ia = function(e) {
                    return Object(E.jsxs)(Ct, Object(j.a)(Object(j.a)({
                        viewBox: "0 0 96 96"
                    }, e), {}, {
                        children: [Object(E.jsxs)("g", {
                            clipPath: "url(#clip0)",
                            children: [Object(E.jsx)("path", {
                                d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z",
                                fill: "#3375BB"
                            }), Object(E.jsx)("path", {
                                d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z",
                                fill: "white"
                            })]
                        }), Object(E.jsx)("defs", {
                            children: Object(E.jsx)("clipPath", {
                                id: "clip0",
                                children: Object(E.jsx)("rect", {
                                    width: "96",
                                    height: "96",
                                    fill: "white"
                                })
                            })
                        })]
                    }))
                },
                Ba = function(e) {
                    return Object(E.jsxs)(Ct, Object(j.a)(Object(j.a)({
                        viewBox: "0 0 96 96"
                    }, e), {}, {
                        children: [Object(E.jsx)("path", {
                            d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z",
                            fill: "#3389FB"
                        }), Object(E.jsx)("path", {
                            d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z",
                            fill: "white"
                        })]
                    }))
                },
                Na = function(e) {
                    return Object(E.jsxs)(Ct, Object(j.a)(Object(j.a)({
                        viewBox: "0 0 32 32"
                    }, e), {}, {
                        children: [Object(E.jsx)("path", {
                            d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z",
                            fill: "#1E2026"
                        }), Object(E.jsx)("path", {
                            d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z",
                            fill: "#F0B90B"
                        }), Object(E.jsx)("path", {
                            d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z",
                            fill: "#F0B90B"
                        }), Object(E.jsx)("path", {
                            d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z",
                            fill: "#F0B90B"
                        }), Object(E.jsx)("path", {
                            d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z",
                            fill: "#F0B90B"
                        }), Object(E.jsx)("path", {
                            d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z",
                            fill: "#F0B90B"
                        }), Object(E.jsx)("path", {
                            d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z",
                            fill: "#F0B90B"
                        }), Object(E.jsx)("path", {
                            d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z",
                            fill: "#F0B90B"
                        }), Object(E.jsx)("path", {
                            d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z",
                            fill: "#F0B90B"
                        }), Object(E.jsx)("path", {
                            d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z",
                            fill: "#F0B90B"
                        }), Object(E.jsx)("path", {
                            d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z",
                            fill: "#F0B90B"
                        })]
                    }))
                },
                Da = [{
                    title: "Metamask",
                    icon: function(e) {
                        return Object(E.jsxs)(Ct, Object(j.a)(Object(j.a)({
                            viewBox: "0 0 96 96"
                        }, e), {}, {
                            children: [Object(E.jsx)("circle", {
                                cx: "48",
                                cy: "48",
                                r: "48",
                                fill: "white"
                            }), Object(E.jsx)("path", {
                                d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z",
                                fill: "#E17726"
                            }), Object(E.jsx)("path", {
                                d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z",
                                fill: "#E27625"
                            }), Object(E.jsx)("path", {
                                d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z",
                                fill: "#E27625"
                            }), Object(E.jsx)("path", {
                                d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z",
                                fill: "#E27625"
                            }), Object(E.jsx)("path", {
                                d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z",
                                fill: "#E27625"
                            }), Object(E.jsx)("path", {
                                d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z",
                                fill: "#E27625"
                            }), Object(E.jsx)("path", {
                                d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z",
                                fill: "#E27625"
                            }), Object(E.jsx)("path", {
                                d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z",
                                fill: "#E27625"
                            }), Object(E.jsx)("path", {
                                d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z",
                                fill: "#D5BFB2"
                            }), Object(E.jsx)("path", {
                                d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z",
                                fill: "#D5BFB2"
                            }), Object(E.jsx)("path", {
                                d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z",
                                fill: "#233447"
                            }), Object(E.jsx)("path", {
                                d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z",
                                fill: "#233447"
                            }), Object(E.jsx)("path", {
                                d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z",
                                fill: "#CC6228"
                            }), Object(E.jsx)("path", {
                                d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z",
                                fill: "#CC6228"
                            }), Object(E.jsx)("path", {
                                d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z",
                                fill: "#CC6228"
                            }), Object(E.jsx)("path", {
                                d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z",
                                fill: "#CC6228"
                            }), Object(E.jsx)("path", {
                                d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z",
                                fill: "#E27525"
                            }), Object(E.jsx)("path", {
                                d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z",
                                fill: "#E27525"
                            }), Object(E.jsx)("path", {
                                d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z",
                                fill: "#E27525"
                            }), Object(E.jsx)("path", {
                                d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z",
                                fill: "#E27525"
                            }), Object(E.jsx)("path", {
                                d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z",
                                fill: "#F5841F"
                            }), Object(E.jsx)("path", {
                                d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z",
                                fill: "#F5841F"
                            }), Object(E.jsx)("path", {
                                d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z",
                                fill: "#C0AC9D"
                            }), Object(E.jsx)("path", {
                                d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z",
                                fill: "#161616"
                            }), Object(E.jsx)("path", {
                                d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z",
                                fill: "#763E1A"
                            }), Object(E.jsx)("path", {
                                d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z",
                                fill: "#763E1A"
                            }), Object(E.jsx)("path", {
                                d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z",
                                fill: "#F5841F"
                            }), Object(E.jsx)("path", {
                                d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z",
                                fill: "#F5841F"
                            }), Object(E.jsx)("path", {
                                d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z",
                                fill: "#F5841F"
                            })]
                        }))
                    },
                    connectorId: sn.Injected
                }, {
                    title: "TrustWallet",
                    icon: Ia,
                    connectorId: sn.Injected
                }, {
                    title: "MathWallet",
                    icon: Ra,
                    connectorId: sn.Injected
                }, {
                    title: "TokenPocket",
                    icon: Ma,
                    connectorId: sn.Injected
                }, {
                    title: "WalletConnect",
                    icon: Ba,
                    connectorId: sn.WalletConnect
                }, {
                    title: "Binance Chain Wallet",
                    icon: Na,
                    connectorId: sn.BSC
                }],
                La = m.d.div(Gt || (Gt = Object(d.a)(["\n  display: flex;\n  /* flex-direction: column; */\n  align-items: center;\n  /* justify-content: center; */\n  row-gap: 6px;\n  width: 100%;\n  /* height: 114px; */\n  padding: 10px 2rem;\n  border-radius: 10px;\n  cursor: pointer;\n  background: rgba(255, 255, 255, 0.1);\n\n  .modal-title {\n    color: #fff;\n    font-weight: 500;\n    font-size: 13px;\n    line-height: 20px;\n    letter-spacing: 0.04em;\n    text-shadow: 1px 7px 4px rgb(111 27 47 / 35%), 0px -1px 0px #b64034;\n    text-align: center;\n    transition: 0.3s ease;\n    margin-left: 2rem;\n  }\n  svg {\n    transition: 0.3s ease;\n  }\n\n  &:hover {\n    .modal-title {\n      font-size: 15px;\n    }\n    svg {\n      width: 42px;\n    }\n  }\n\n  ", " {\n    .modal-title {\n      font-size: 16px;\n      line-height: 100%;\n    }\n\n    &:hover {\n      .modal-title {\n        font-size: 18px;\n      }\n      svg {\n        width: 42px;\n      }\n    }\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                Fa = function(e) {
                    var n = e.login,
                        t = e.walletConfig,
                        a = e.onDismiss,
                        i = t.title,
                        r = t.icon;
                    return Object(E.jsxs)(La, {
                        id: "wallet-connect-".concat(i.toLocaleLowerCase()),
                        onClick: function() {
                            n(t.connectorId), window.localStorage.setItem(vn, t.connectorId), a()
                        },
                        children: [Object(E.jsx)(r, {
                            width: "40px"
                        }), Object(E.jsx)("div", {
                            className: "modal-title",
                            children: i
                        })]
                    })
                },
                Wa = m.d.div(Yt || (Yt = Object(d.a)(["\n  padding: 30px 0px 40px;\n  ", " {\n    padding: 40px 14px 60px;\n  }\n\n  .title {\n    font-family: 'SpaceGrotesk';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 32px;\n    /* identical to box height, or 152% */\n    color: #fcfcfd;\n    margin-bottom: 32px;\n    ", " {\n      font-size: 21px;\n      line-height: 100%;\n    }\n  }\n\n  .description {\n    font-style: normal;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 16px;\n    text-align: center;\n    color: #f1f1f1;\n    margin-bottom: 32px;\n\n    a {\n      color: #3772ff;\n    }\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.sm
                }), (function(e) {
                    return e.theme.mediaQueries.sm
                })),
                za = m.d.div(Xt || (Xt = Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 20px;\n  .btn-logout {\n    width: fit-content;\n    margin: 0 auto;\n  }\n"]))),
                Ua = function() {
                    var e = Object(h.b)(),
                        n = Gn(),
                        t = n.login,
                        a = n.logout,
                        i = Object(f.d)().account,
                        r = Object(h.c)((function(e) {
                            return e.modal.modalConnect
                        })).toggle,
                        s = function() {
                            e(Z({
                                toggle: !1
                            }))
                        };
                    return Object(E.jsx)(Hn.a, {
                        visible: r,
                        centered: !0,
                        width: 530,
                        footer: null,
                        closeIcon: Object(E.jsx)("img", {
                            src: "/images/icons/close.png",
                            alt: ""
                        }),
                        onCancel: s,
                        children: Object(E.jsx)(Wa, {
                            children: i ? Object(E.jsxs)(za, {
                                children: [Object(E.jsx)("div", {
                                    className: "title",
                                    children: "YOUR WALLET"
                                }), Object(E.jsx)(Sa, {
                                    title: "Your address",
                                    value: i,
                                    height: "44px",
                                    children: i
                                }), Object(E.jsx)(nt, {
                                    className: "btn-logout",
                                    onClick: function() {
                                        a(), s()
                                    },
                                    children: "Logout"
                                })]
                            }) : Object(E.jsxs)(E.Fragment, {
                                children: [Object(E.jsx)("div", {
                                    className: "title",
                                    children: "Connect to a Wallet"
                                }), Object(E.jsxs)("div", {
                                    className: "description",
                                    children: ["By connecting a wallet, you agree to ", Object(E.jsx)("a", {
                                        children: "Terms of Service"
                                    }), " and acknowledge that you have read and understand the", " ", Object(E.jsx)("a", {
                                        children: "disclaimer"
                                    }), "."]
                                }), Object(E.jsx)(Vn.a, {
                                    gutter: [24, 24],
                                    children: Da.map((function(e) {
                                        return Object(E.jsx)(Zn.a, {
                                            span: 12,
                                            children: Object(E.jsx)(Fa, {
                                                walletConfig: e,
                                                login: t,
                                                onDismiss: s
                                            }, e.title)
                                        }, e.title)
                                    }))
                                })]
                            })
                        })
                    }, "modal-connect")
                },
                Ka = s.a.memo(Ua),
                Ha = (t(827), t(955)),
                Va = t(243),
                Za = ["href", "target"],
                Ga = function(e) {
                    var n = e.href,
                        t = e.target,
                        a = Object(Ie.a)(e, Za),
                        i = null === n || void 0 === n ? void 0 : n.startsWith("http"),
                        r = i || !n ? "a" : Ne.b,
                        s = i ? {
                            href: n,
                            target: t
                        } : {
                            to: n
                        };
                    return Object(E.jsx)(r, Object(j.a)(Object(j.a)({}, s), a))
                },
                Ya = m.d.div(qt || (qt = Object(d.a)(["\n  padding-top: 8px;\n  padding-bottom: 8px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  &.active a {\n    color: #ffffff;\n  }\n\n  button {\n    min-height: 70px;\n    min-width: 170px;\n  }\n"]))),
                Xa = m.d.div(Jt || (Jt = Object(d.a)(["\n  padding-bottom: 10px;\n\n  &.active a {\n    color: #ffffff;\n  }\n"]))),
                qa = Object(m.d)(Ga)($t || ($t = Object(d.a)(["\n  display: inline-block;\n  font-family: SpaceGrotesk;\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 26px;\n  letter-spacing: 0.04em;\n  color: #fff;\n  padding: 4px 0;\n\n  &:hover {\n    color: #ffffff;\n  }\n"]))),
                Ja = m.d.div(Qt || (Qt = Object(d.a)([""]))),
                $a = m.d.div(ea || (ea = Object(d.a)(["\n  max-height: ", ";\n  transition: 0.3s ease-out;\n  border-color: ", ";\n\n  background: linear-gradient(90deg, rgb(195, 194, 27, 30%) 0%, rgb(216, 233, 13, 73%) 0.01%, rgb(254, 223, 10, 73%) 100%);\n  box-shadow: ", ";\n  opacity: ", ";\n\n  overflow: hidden;\n\n  & > div {\n    padding-left: 20px;\n    padding-top: 10px;\n  }\n"])), (function(e) {
                    return e.isOpen ? "".concat(200, "px") : 0
                }), (function(e) {
                    return e.isOpen ? "rgba(133, 133, 133, 0.1)" : "transparent"
                }), (function(e) {
                    return e.isOpen ? "-2px 2px 6px #2a5e6f" : "none"
                }), (function(e) {
                    return e.isOpen ? "1" : "0"
                })),
                Qa = function(e) {
                    var n = e.label,
                        t = e.isActive,
                        a = e.initialOpenState,
                        i = void 0 !== a && a,
                        s = e.children,
                        o = Object(r.useState)(i),
                        c = Object(g.a)(o, 2),
                        l = c[0],
                        u = c[1];
                    return Object(E.jsxs)(Ja, {
                        children: [Object(E.jsx)(Ya, {
                            className: t ? "active" : "",
                            onClick: function() {
                                u((function(e) {
                                    return !e
                                }))
                            },
                            children: Object(E.jsx)(qa, {
                                children: n
                            })
                        }, n), Object(E.jsx)($a, {
                            isOpen: l,
                            children: Object(E.jsx)("div", {
                                children: s
                            })
                        })]
                    })
                },
                ei = m.d.div(na || (na = Object(d.a)(["\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  padding: 128px 60px;\n  z-index: 9;\n  overflow: auto;\n  transition: 0.25s;\n  transform: ", ";\n  background: #000000;\n"])), (function(e) {
                    return e.visible ? "translateX(0)" : "translateX(100%)"
                })),
                ni = m.d.div(ta || (ta = Object(d.a)(["\n  width: fit-content;\n  margin-top: 30px;\n  position: relative;\n\n  .btn-connect {\n    width: 240px;\n    height: auto;\n    background: unset;\n    border: unset;\n    position: relative;\n    cursor: pointer;\n\n    & > div {\n      color: #ffffff;\n      font-weight: 500;\n      font-size: 24px;\n      line-height: 100%;\n      letter-spacing: 0.04em;\n\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n  }\n  .btn-swap {\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    transform: translateX(-50%);\n\n    width: 100%;\n    max-width: 130px;\n    background: unset;\n    border: unset;\n    cursor: pointer;\n  }\n"]))),
                ti = function(e) {
                    var n = e.visible,
                        t = e.links,
                        a = e.accountEllipsis,
                        i = (e.toggleWallet, e.toggleMenu),
                        r = Object(Be.g)();
                    return Object(E.jsxs)(ei, {
                        visible: n,
                        children: [Object(E.jsx)("ul", {
                            children: t.map((function(e) {
                                var n = location.pathname.split("/").map((function(e) {
                                        return "/".concat(e)
                                    })),
                                    t = e.actives.includes(n[1]);
                                return e.items ? Object(E.jsx)(Qa, {
                                    label: e.label,
                                    isActive: t,
                                    children: e.items.map((function(e) {
                                        return Object(E.jsx)(Xa, {
                                            className: n.includes(e.href || "") ? "active" : "",
                                            onClick: i,
                                            children: Object(E.jsx)(qa, {
                                                href: e.href,
                                                children: e.label
                                            })
                                        }, "sub-".concat(e.label))
                                    }))
                                }, "menu-".concat(e.label)) : Object(E.jsx)(Ya, {
                                    className: n.includes(e.href || "") ? "active" : "",
                                    onClick: i,
                                    children: Object(E.jsx)(qa, {
                                        href: e.href,
                                        children: e.label
                                    })
                                }, "menu-".concat(e.label))
                            }))
                        }), Object(E.jsx)(ni, {
                            children: Object(E.jsx)(nt, {
                                onClick: function() {
                                    r.push("/connect")
                                },
                                children: Object(E.jsx)("div", {
                                    children: a || "CONNECT WALLET"
                                })
                            })
                        })]
                    })
                },
                ai = m.d.div(aa || (aa = Object(d.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  -moz-user-select: none !important;\n  -webkit-touch-callout: none !important;\n  -webkit-user-select: none !important;\n  -khtml-user-select: none !important;\n  -moz-user-select: none !important;\n  -ms-user-select: none !important;\n  user-select: none !important;\n\n  img {\n    width: 100%;\n    max-width: 48px;\n    opacity: 0;\n  }\n\n  &.active {\n    span {\n      &:nth-child(1) {\n        &::before {\n          transform: translate(-50%, -50%) rotate(45deg);\n        }\n      }\n\n      &:nth-child(2) {\n        &::before {\n          content: unset;\n        }\n      }\n\n      &:nth-child(3) {\n        &::before {\n          transform: translate(-50%, -50%) rotate(-45deg);\n        }\n      }\n    }\n  }\n\n  span {\n    &::before {\n      content: '';\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      width: 30px;\n      height: 3px;\n      background-image: url('/images/header/icon-menu-child.png');\n      background-size: 100% 100%;\n      transition: 0.1s;\n    }\n\n    &:nth-child(1) {\n      &::before {\n        transform: translate(-50%, -300%);\n      }\n    }\n\n    &:nth-child(3) {\n      &::before {\n        transform: translate(-50%, 230%);\n      }\n    }\n  }\n"]))),
                ii = function(e) {
                    var n = e.active,
                        t = e.toggleMenu;
                    return Object(E.jsxs)(ai, {
                        className: n ? "active" : "",
                        onClick: t,
                        children: [Object(E.jsx)("span", {}), Object(E.jsx)("span", {}), Object(E.jsx)("span", {}), Object(E.jsx)("img", {
                            src: "/images/header/icon-menu.png",
                            alt: ""
                        })]
                    })
                },
                ri = [{
                    label: "Dashboard",
                    icon: "dashboard.svg",
                    href: "/dashboard",
                    actives: ["/dashboard"]
                }, {
                    label: "History",
                    icon: "history.svg",
                    href: "/history",
                    actives: ["/history"]
                }],
                si = (m.d.header(ia || (ia = Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 35px;\n  padding: 6px 15px;\n  background: #5868e9;\n  text-align: center;\n  display: none;\n\n  @media (min-width: 991px) {\n    display: block;\n  }\n\n  p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 22px;\n  }\n"]))), m.d.header(ra || (ra = Object(d.a)(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  min-height: 100px;\n  transition: 0.25s;\n\n  background: ", ";\n  z-index: 10;\n\n  .content {\n    position: relative;\n    max-width: 1300px;\n    padding: 0 14px;\n    margin: 0 auto;\n    width: 100%;\n\n    display: flex;\n    justify-content: space-between;\n\n    .menu-left {\n      display: flex;\n      align-items: center;\n      width: 50%;\n      justify-content: space-between;\n\n      img {\n        width: 153px;\n        min-width: 153px;\n      }\n\n      .menu-list {\n        position: absolute;\n        left: 50%;\n        transform: translateX(-50%);\n        display: flex;\n        align-items: center;\n        list-style: none;\n        margin: 0 15px;\n\n        li {\n          &:not(:last-child) {\n            margin-right: 30px;\n          }\n\n          a {\n            font-weight: 400;\n            font-size: 16px;\n            line-height: 24px;\n            color: #bdcadb;\n            display: block;\n\n            &:hover {\n              color: #fff;\n            }\n          }\n\n          &.active a {\n            font-weight: 600;\n            color: #fff;\n          }\n        }\n      }\n    }\n\n    .menu-right {\n      display: flex;\n      align-items: center;\n      margin-right: 15px;\n\n      .notify-icon {\n        width: 30px;\n        position: relative;\n        margin-right: 16px;\n        cursor: pointer;\n\n        span {\n          position: absolute;\n          top: 2px;\n          right: -3px;\n          width: 18px;\n          height: 18px;\n          background: #f41706;\n          border-radius: 50%;\n\n          display: flex;\n          align-items: center;\n          justify-content: center;\n        }\n        img {\n          width: 100%;\n        }\n      }\n\n      .menu-actions-desktop {\n        position: relative;\n\n        button {\n          &:not(:last-child) {\n            margin-right: 13px;\n          }\n        }\n      }\n    }\n  }\n"])), (function(e) {
                    return e.background
                }))),
                oi = m.d.div(sa || (sa = Object(d.a)(["\n  padding-top: 12px;\n  ul {\n    display: flex;\n    flex-direction: column;\n    row-gap: 12px;\n\n    position: relative;\n    padding: 20px;\n    background: #eab962;\n    list-style: none;\n\n    &::before {\n      content: '';\n\n      width: 0;\n      height: 0;\n      border-left: 8px solid transparent;\n      border-right: 8px solid transparent;\n      border-bottom: 8px solid #eab962;\n      z-index: 2;\n\n      position: absolute;\n      left: 24px;\n      bottom: 100%;\n    }\n  }\n\n  li {\n    margin-right: 30px;\n\n    a {\n      color: #fff;\n      font-weight: 500;\n      font-size: 24px;\n      line-height: 26px;\n      letter-spacing: 0.04em;\n      text-shadow: 1px 7px 4px rgba(111, 27, 47, 0.35), 0px -1px 0px #b64034;\n      display: block;\n\n      &:hover {\n        color: #fff;\n      }\n    }\n\n    &.active a {\n      color: #fff;\n    }\n  }\n"]))),
                ci = function(e) {
                    var n = e.links,
                        t = e.hasSider,
                        a = void 0 !== t && t,
                        i = (window.ethereum, Object(Be.g)()),
                        s = Object(h.b)(),
                        o = Object(Be.h)(),
                        c = Sn(1024),
                        l = Object(f.d)().account,
                        u = Object(r.useState)(!1),
                        p = Object(g.a)(u, 2),
                        d = p[0],
                        m = p[1],
                        b = function() {
                            m((function(e) {
                                return !e
                            }))
                        },
                        y = l ? "".concat(l.substring(0, 4), "...").concat(l.substring(l.length - 4)) : void 0,
                        x = o.pathname.split("/").map((function(e) {
                            return "/".concat(e)
                        }));
                    return Object(E.jsxs)(E.Fragment, {
                        children: [Object(E.jsx)(si, {
                            background: a ? "transparent" : "#000000",
                            children: Object(E.jsxs)("div", {
                                className: "content",
                                children: [a ? Object(E.jsx)("div", {}) : Object(E.jsxs)("div", {
                                    className: "menu-left",
                                    children: [Object(E.jsx)(Ga, {
                                        href: "/",
                                        children: Object(E.jsx)("img", {
                                            src: "/images/logo.svg",
                                            alt: ""
                                        })
                                    }), !c && Object(E.jsx)("ul", {
                                        className: "menu-list",
                                        children: n.map((function(e) {
                                            var n = e.actives.includes(x[1]);
                                            return e.items ? Object(E.jsx)(Va.a, {
                                                overlay: Object(E.jsx)(oi, {
                                                    children: Object(E.jsx)("ul", {
                                                        children: e.items.map((function(n) {
                                                            var t = n.actives.includes(x[1]);
                                                            return Object(E.jsx)("li", {
                                                                className: t ? "active" : "",
                                                                children: Object(E.jsx)(Ga, {
                                                                    href: n.href,
                                                                    target: e.target,
                                                                    children: n.label
                                                                })
                                                            }, n.label)
                                                        }))
                                                    })
                                                }),
                                                children: Object(E.jsx)("li", {
                                                    className: n ? "active" : "",
                                                    children: Object(E.jsx)("a", {
                                                        children: e.label
                                                    })
                                                }, e.label)
                                            }, e.label) : Object(E.jsx)("li", {
                                                className: x.includes(e.href || "") ? "active" : "",
                                                children: Object(E.jsx)(Ga, {
                                                    href: e.href,
                                                    target: e.target,
                                                    children: e.label
                                                })
                                            }, e.label)
                                        }))
                                    })]
                                }), Object(E.jsx)("div", {
                                    className: "menu-right",
                                    children: c ? Object(E.jsx)(ii, {
                                        active: d,
                                        toggleMenu: b
                                    }) : Object(E.jsx)("div", {
                                        className: "menu-actions-desktop",
                                        children: Object(E.jsx)(nt, {
                                            onClick: function() {
                                                return i.push("/connect")
                                            },
                                            children: Object(E.jsx)("div", {
                                                children: y || "CONNECT WALLET"
                                            })
                                        })
                                    })
                                })]
                            })
                        }), c && Object(E.jsx)(ti, {
                            visible: d,
                            links: ri,
                            accountEllipsis: y,
                            toggleWallet: function() {
                                s(Z({
                                    toggle: !0
                                }))
                            },
                            toggleMenu: b
                        })]
                    })
                },
                li = function(e) {
                    var n = e.hasSider,
                        t = void 0 !== n && n;
                    return Object(E.jsx)(ci, {
                        links: ri,
                        hasSider: t
                    })
                },
                ui = ["fill"];
            var pi = function(e) {
                    var n = e.fill,
                        t = Object(Ie.a)(e, ui);
                    return Object(E.jsx)("svg", Object(j.a)(Object(j.a)({
                        viewBox: "0 0 32 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, t), {}, {
                        children: Object(E.jsx)("path", {
                            d: "M12.1796 27.6976V23.6207C12.1796 22.5799 13.0295 21.7362 14.0778 21.7362H17.9101C18.4135 21.7362 18.8963 21.9348 19.2523 22.2882C19.6083 22.6416 19.8083 23.1209 19.8083 23.6207V27.6976C19.8051 28.1303 19.976 28.5463 20.2831 28.8534C20.5902 29.1605 21.008 29.3332 21.4438 29.3332H24.0584C25.2794 29.3363 26.4516 28.857 27.3161 28.0009C28.1807 27.1449 28.6666 25.9825 28.6666 24.7703V13.1556C28.6666 12.1765 28.2293 11.2476 27.4727 10.6194L18.5786 3.56766C17.0315 2.33125 14.8147 2.37117 13.3138 3.66248L4.6226 10.6194C3.83024 11.2291 3.35666 12.1607 3.33325 13.1556V24.7584C3.33325 27.285 5.39643 29.3332 7.94148 29.3332H10.4963C11.4016 29.3332 12.1372 28.6081 12.1438 27.7095L12.1796 27.6976Z",
                            fill: n || "#B8BED9"
                        })
                    }))
                },
                di = ["fill"];
            var mi = function(e) {
                    var n = e.fill,
                        t = Object(Ie.a)(e, di);
                    return Object(E.jsx)("svg", Object(j.a)(Object(j.a)({
                        viewBox: "0 0 32 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, t), {}, {
                        children: Object(E.jsx)("path", {
                            d: "M20.5996 5.04024C20.5463 5.37357 20.5196 5.7069 20.5196 6.04024C20.5196 9.04024 22.9463 11.4656 25.9329 11.4656C26.2663 11.4656 26.5863 11.4269 26.9196 11.3736V22.1322C26.9196 26.6536 24.2529 29.3336 19.7196 29.3336H9.86759C5.33293 29.3336 2.66626 26.6536 2.66626 22.1322V12.2669C2.66626 7.73357 5.33293 5.04024 9.86759 5.04024H20.5996ZM20.8676 13.1469C20.5063 13.1069 20.1476 13.2669 19.9329 13.5602L16.7076 17.7336L13.0129 14.8269C12.7863 14.6536 12.5196 14.5856 12.2529 14.6136C11.9876 14.6536 11.7476 14.7989 11.5863 15.0122L7.64093 20.1469L7.55959 20.2669C7.33293 20.6922 7.43959 21.2389 7.83959 21.5336C8.02626 21.6536 8.22626 21.7336 8.45293 21.7336C8.76093 21.7469 9.05293 21.5856 9.23959 21.3336L12.5863 17.0256L16.3863 19.8802L16.5063 19.9589C16.9329 20.1856 17.4663 20.0802 17.7729 19.6789L21.6263 14.7069L21.5729 14.7336C21.7863 14.4402 21.8263 14.0669 21.6796 13.7336C21.5343 13.4002 21.2129 13.1736 20.8676 13.1469ZM26.1197 2.6665C27.8931 2.6665 29.3331 4.1065 29.3331 5.87984C29.3331 7.65317 27.8931 9.09317 26.1197 9.09317C24.3464 9.09317 22.9064 7.65317 22.9064 5.87984C22.9064 4.1065 24.3464 2.6665 26.1197 2.6665Z",
                            fill: n || "#B8BED9"
                        })
                    }))
                },
                bi = ["fill"];
            var yi, fi, hi = function(e) {
                    var n = e.fill,
                        t = Object(Ie.a)(e, bi);
                    return Object(E.jsx)("svg", Object(j.a)(Object(j.a)({
                        width: "32",
                        height: "32",
                        viewBox: "0 0 32 32",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, t), {}, {
                        children: Object(E.jsx)("path", {
                            d: "M15.3236 2.6665C18.6337 2.6665 21.3333 5.31984 21.3333 8.5865V14.9732H13.1938C12.6104 14.9732 12.1492 15.4265 12.1492 15.9998C12.1492 16.5598 12.6104 17.0265 13.1938 17.0265H21.3333V23.3998C21.3333 26.6665 18.6337 29.3332 15.2965 29.3332H8.68988C5.36624 29.3332 2.66663 26.6798 2.66663 23.4132V8.59984C2.66663 5.31984 5.3798 2.6665 8.70345 2.6665H15.3236ZM24.7202 11.4001C25.1202 10.9868 25.7736 10.9868 26.1736 11.3868L30.0669 15.2668C30.2669 15.4668 30.3736 15.7201 30.3736 16.0001C30.3736 16.2668 30.2669 16.5334 30.0669 16.7201L26.1736 20.6001C25.9736 20.8001 25.7069 20.9068 25.4536 20.9068C25.1869 20.9068 24.9202 20.8001 24.7202 20.6001C24.3202 20.2001 24.3202 19.5468 24.7202 19.1468L26.8536 17.0268H21.3336V14.9734H26.8536L24.7202 12.8534C24.3202 12.4534 24.3202 11.8001 24.7202 11.4001Z",
                            fill: n || "#FF4842"
                        })
                    }))
                },
                xi = (m.d.header(yi || (yi = Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 35px;\n  padding: 6px 15px;\n  background: #5868e9;\n  text-align: center;\n  display: none;\n  height: 100%;\n\n  @media (min-width: 991px) {\n    display: block;\n  }\n\n  p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 22px;\n  }\n"]))), m.d.div(fi || (fi = Object(d.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  /* padding: 2rem; */\n  .logo {\n    display: flex;\n    justify-content: center;\n  }\n\n  ul {\n    list-style-type: none;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n  }\n\n  .menu-list {\n    margin-top: 3rem;\n  }\n\n  .menu-item {\n    margin-top: 2rem;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    &.active a {\n      color: #ffffff;\n    }\n    a {\n      flex: 1;\n      display: flex;\n      align-items: center;\n      color: #b8bed9;\n      .label {\n        margin-left: 1rem;\n        position: relative;\n      }\n    }\n    button {\n      background-color: unset;\n      cursor: pointer;\n      border: none;\n\n      .arrow-down {\n        transform: rotate(180deg);\n      }\n    }\n  }\n\n  .sub-menu-item {\n    margin-top: 1.5rem;\n    padding-left: 2.5rem;\n  }\n"])))),
                ji = function(e) {
                    var n, t, a = e.entry,
                        i = e.paths,
                        s = e.onClick,
                        o = void 0 === s ? function() {} : s,
                        c = Object(r.useState)(!1),
                        l = Object(g.a)(c, 2),
                        u = l[0],
                        p = l[1],
                        d = i.includes(a.href || ""),
                        m = a.icon;
                    return Object(E.jsxs)("li", {
                        children: [Object(E.jsx)(Ga, {
                            href: a.href,
                            onClick: o,
                            children: Object(E.jsxs)(st, {
                                children: [Object(E.jsx)(at, {
                                    width: "12px",
                                    borderRadius: "0px 16px 16px 0px",
                                    background: d ? "#232323" : "transparent"
                                }), Object(E.jsxs)(st, {
                                    flex: 1,
                                    mr: "1rem",
                                    ml: "1.5rem",
                                    background: d ? "#232323" : "transparent",
                                    p: "1rem 1.5rem",
                                    borderRadius: "16px",
                                    alignItems: "center",
                                    children: [a.icon && Object(E.jsx)(m, {
                                        fill: a.color || (d ? "#FFFFFF" : "#B8BED9"),
                                        width: "32px"
                                    }), Object(E.jsx)(Rt, {
                                        color: a.color || (d ? "#FFFFFF" : "#B8BED9"),
                                        pl: "1rem",
                                        children: a.label
                                    })]
                                }), !(null === a || void 0 === a || null === (n = a.items) || void 0 === n || !n.length) && Object(E.jsx)("button", {
                                    onClick: function() {
                                        return p((function(e) {
                                            return !e
                                        }))
                                    },
                                    children: Object(E.jsx)("img", {
                                        src: "/images/icons/arrow-up.png",
                                        alt: "",
                                        className: u ? "" : "arrow-down"
                                    })
                                })]
                            })
                        }), u && Object(E.jsx)("ul", {
                            className: "",
                            children: null === a || void 0 === a || null === (t = a.items) || void 0 === t ? void 0 : t.map((function(e, n) {
                                return Object(E.jsx)("li", {
                                    className: "sub-menu-item",
                                    children: Object(E.jsx)(Ga, {
                                        href: e.href,
                                        children: Object(E.jsx)("p", {
                                            children: e.label
                                        })
                                    })
                                }, n)
                            }))
                        })]
                    })
                },
                gi = function(e) {
                    e.links, window.ethereum;
                    var n = Gn(),
                        t = (n.login, n.logout),
                        a = (Object(h.b)(), Object(Be.h)()),
                        i = Sn(1024),
                        s = Object(f.d)().account,
                        o = Object(r.useState)(!1),
                        c = Object(g.a)(o, 2),
                        l = (c[0], c[1], s && "".concat(s.substring(0, 4), "...").concat(s.substring(s.length - 4)), a.pathname.split("/").map((function(e) {
                            return "/".concat(e)
                        })));
                    return Object(E.jsxs)(xi, {
                        children: [Object(E.jsx)(at, {
                            p: "2rem",
                            className: "logo",
                            children: Object(E.jsx)(Ga, {
                                href: "/",
                                children: Object(E.jsx)("img", {
                                    src: "/images/logo.svg",
                                    alt: ""
                                })
                            })
                        }), !i && Object(E.jsxs)("ul", {
                            className: "menu-list",
                            children: [
                                [{
                                    label: "Dashboard",
                                    icon: pi,
                                    href: "/dashboard",
                                    actives: ["/dashboard"]
                                }, {
                                    label: "History",
                                    icon: mi,
                                    href: "/history",
                                    actives: ["/history"]
                                }].map((function(e) {
                                    e.actives.includes(l[1]);
                                    return Object(E.jsx)(ji, {
                                        entry: e,
                                        paths: l
                                    }, e.label)
                                })), Object(E.jsx)(at, {
                                    mt: "auto",
                                    mb: "2rem",
                                    children: Object(E.jsx)(ji, {
                                        entry: {
                                            label: "Logout",
                                            icon: hi,
                                            actives: ["/logout"],
                                            color: "#FF4842"
                                        },
                                        paths: l,
                                        onClick: function() {
                                            return t()
                                        }
                                    })
                                })
                            ]
                        })]
                    })
                },
                Ti = t(69),
                Oi = t.n(Ti),
                vi = t(102),
                wi = t.n(vi),
                Ai = (t(472), t(47));
            t(952), t(136), t(97);

            function _i(e) {
                try {
                    return Object(Ai.a)(e)
                } catch (n) {
                    return !1
                }
            }

            function Ci(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4,
                    t = _i(e);
                if (!t) throw Error("Invalid 'address' parameter '".concat(e, "'."));
                return "".concat(t.substring(0, n + 2), "...").concat(t.substring(42 - n))
            }

            function ki(e) {
                return e.toLocaleString("fullwide", {
                    useGrouping: !1
                })
            }
            var Ei = function(e) {
                    return void 0 === e || isNaN(e) ? 0 : Math.abs(e) > 999 ? Math.round(e) : Math.abs(e) > 99 ? Math.round(10 * e) / 10 : Math.abs(e) > 1.09 ? Math.round(100 * e) / 100 : Math.abs(e) > .001 ? Math.round(1e4 * e) / 1e4 : +Number.parseFloat(e).toPrecision(2)
                },
                Pi = function(e, n) {
                    return e && Math.abs(e) > 0 ? Ei(e * Math.pow(10, -n)) : 0
                },
                Si = function(e, n, t) {
                    return e && n && Math.abs(e * n) > 0 ? Pi(e * n, t) : 0
                },
                Ri = ["width", "fill"],
                Mi = function(e) {
                    var n = e.width,
                        t = e.fill,
                        a = Object(Ie.a)(e, Ri);
                    return Object(E.jsx)(Ct, Object(j.a)(Object(j.a)({
                        width: n || "8px",
                        viewBox: "0 0 9 8",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, a), {}, {
                        children: Object(E.jsx)("path", {
                            d: "M3.5937 7.08703C3.55283 7.04936 3.37806 6.90713 3.23431 6.77464C2.3302 5.99789 0.850368 3.97159 0.398666 2.91102C0.326084 2.74996 0.172463 2.34275 0.162598 2.12518C0.162598 1.91671 0.213335 1.71797 0.316218 1.52833C0.459974 1.29193 0.686177 1.10229 0.953251 0.998376C1.13858 0.931482 1.69317 0.827569 1.70303 0.827569C2.30977 0.723656 3.29562 0.666504 4.38506 0.666504C5.42305 0.666504 6.36874 0.723656 6.98463 0.808735C6.99449 0.818477 7.68367 0.92239 7.91974 1.03604C8.35101 1.24452 8.61879 1.65173 8.61879 2.08751V2.12518C8.60822 2.40899 8.34044 3.00584 8.33057 3.00584C7.87817 4.00925 6.47092 5.9888 5.5358 6.78438C5.5358 6.78438 5.29551 7.00844 5.14541 7.10586C4.92978 7.25783 4.6627 7.33317 4.39563 7.33317C4.09754 7.33317 3.8199 7.24809 3.5937 7.08703Z",
                            fill: t || "#FFFFFF"
                        })
                    }))
                };
            Oi.a.extend(wi.a);
            var Ii, Bi = function() {
                    var e = Object(f.d)().account,
                        n = Object(Be.g)(),
                        t = Object(h.c)((function(e) {
                            return e.transactions.txHistory
                        })).data,
                        a = Object(h.c)((function(e) {
                            return e.balances.balances
                        })),
                        i = Object(r.useMemo)((function() {
                            return a.data.reduce((function(e, n) {
                                var t = Object(j.a)({}, e);
                                return t.totalBalance = (t.totalBalance || 0) + n.value, t.totalChange = (t.totalChange || 0) + (n.value ? (n.priceChangePercentage || 0) * n.value / 100 : 0), t.balanceRef = t.balanceRef || {}, t.balanceRef[n.tokenSymbol] = n, t
                            }), {})
                        }), [a.data]),
                        s = i.totalBalance,
                        o = i.totalChange,
                        c = i.balanceRef,
                        l = e ? "".concat(e.substring(0, 4), "...").concat(e.substring(e.length - 4)) : void 0,
                        u = o >= 0;
                    return Object(E.jsxs)(at, {
                        p: "2rem",
                        children: [Object(E.jsxs)(st, {
                            justifyContent: "space-between",
                            alignItems: "center",
                            children: [Object(E.jsx)(at, {
                                children: Object(E.jsx)("img", {
                                    src: "/images/sidebar-right/Notification.png",
                                    width: "32",
                                    alt: ""
                                })
                            }), Object(E.jsx)(nt, {
                                onClick: function() {
                                    return n.push("/connect")
                                },
                                children: Object(E.jsx)("div", {
                                    children: l || "CONNECT WALLET"
                                })
                            })]
                        }), Object(E.jsxs)(at, {
                            mt: "3rem",
                            children: [Object(E.jsx)(Rt, {
                                fontSize: "24px",
                                bold: !0,
                                children: "Accounts"
                            }), Object(E.jsxs)(at, {
                                position: "relative",
                                mt: "1rem",
                                children: [Object(E.jsx)("img", {
                                    src: "/images/sidebar-right/bg.png",
                                    alt: ""
                                }), Object(E.jsxs)(st, {
                                    flexDirection: "column",
                                    alignItems: "center",
                                    position: "absolute",
                                    top: "33%",
                                    width: "100%",
                                    children: [Object(E.jsxs)(Rt, {
                                        bold: !0,
                                        fontSize: "24px",
                                        children: ["$", Ei(s)]
                                    }), Object(E.jsxs)(st, {
                                        background: "#B04CED",
                                        borderRadius: "26px",
                                        p: "0.25rem 0.5rem",
                                        mt: "0.5rem",
                                        children: [Object(E.jsx)(Mi, {
                                            className: u ? "rotate" : ""
                                        }), Object(E.jsxs)(Rt, {
                                            bold: !0,
                                            fontSize: "12px",
                                            pl: "0.25rem",
                                            children: ["$", Ei(Math.abs(o)), " (", Ei(Math.abs(o / (s - o) * 100)), "%)"]
                                        })]
                                    })]
                                })]
                            }), Object(E.jsxs)(st, {
                                justifyContent: "space-between",
                                mt: "1rem",
                                children: [Object(E.jsx)(nt, {
                                    background: "#00E39A",
                                    borderRadius: "16px",
                                    onClick: function() {
                                        return n.push("/deposit")
                                    },
                                    children: Object(E.jsxs)(st, {
                                        alignItems: "center",
                                        children: [Object(E.jsx)(at, {
                                            children: Object(E.jsx)("img", {
                                                src: "/images/icons/deposit.png",
                                                alt: ""
                                            })
                                        }), Object(E.jsx)(Rt, {
                                            pl: "0.5rem",
                                            bold: !0,
                                            small: !0,
                                            children: "Deposit"
                                        })]
                                    })
                                }), Object(E.jsx)(nt, {
                                    background: "#232323",
                                    borderRadius: "16px",
                                    onClick: function() {
                                        return n.push("/withdraw")
                                    },
                                    children: Object(E.jsxs)(st, {
                                        alignItems: "center",
                                        children: [Object(E.jsx)(at, {
                                            className: "rotate",
                                            children: Object(E.jsx)("img", {
                                                src: "/images/icons/deposit.png",
                                                alt: ""
                                            })
                                        }), Object(E.jsx)(Rt, {
                                            pl: "0.5rem",
                                            bold: !0,
                                            small: !0,
                                            children: "Withdraw"
                                        })]
                                    })
                                })]
                            })]
                        }), Object(E.jsxs)(at, {
                            mt: "3rem",
                            children: [Object(E.jsx)(Rt, {
                                fontSize: "24px",
                                bold: !0,
                                children: "Recent Transactions"
                            }), Object(E.jsx)(at, {
                                mt: "1rem",
                                children: t.slice(0, 10).map((function(n) {
                                    var t, a = !n.to || null !== e && void 0 !== e && null !== (t = e.toLowerCase()) && void 0 !== t && t.includes(n.to.toLowerCase()) ? n.to !== n.from ? "+" : "" : "-";
                                    return {
                                        time: Oi.a.unix(n.timeStamp).fromNow(),
                                        action: "-" === a ? "Sell" : "+" === a ? "Buy" : "-",
                                        network: "BSC",
                                        token: n.tokenSymbol,
                                        amount: Pi(n.value, n.tokenDecimal),
                                        TxID: Ci("+" === a ? n.from : n.to),
                                        sign: a
                                    }
                                })).map((function(e, n) {
                                    var t;
                                    return Object(E.jsxs)(st, {
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        mt: "1rem",
                                        children: [Object(E.jsxs)(st, {
                                            alignItems: "center",
                                            children: [Object(E.jsx)(at, {
                                                children: Object(E.jsx)("img", {
                                                    src: (null === c || void 0 === c || null === (t = c[e.token]) || void 0 === t ? void 0 : t.icon) || "/images/none_logo.png",
                                                    width: "49px",
                                                    alt: ""
                                                })
                                            }), Object(E.jsxs)(at, {
                                                ml: "1rem",
                                                children: [Object(E.jsxs)(Rt, {
                                                    bold: !0,
                                                    small: !0,
                                                    children: [e.token, " ", e.action]
                                                }), Object(E.jsx)(Rt, {
                                                    color: "secondary",
                                                    fontSize: "12px",
                                                    children: e.time
                                                })]
                                            })]
                                        }), Object(E.jsxs)(Rt, {
                                            color: "+" === e.sign ? "buy" : "sell",
                                            bold: !0,
                                            small: !0,
                                            children: [e.sign, e.amount, " ", e.token]
                                        })]
                                    }, n)
                                }))
                            })]
                        })]
                    })
                },
                Ni = ["className", "onClick"],
                Di = m.d.div(Ii || (Ii = Object(d.a)(["\n  position: relative;\n  /* width: fit-content;\n  height: fit-content; */\n\n  .bg {\n    height: 50px;\n    img {\n      height: 100%;\n    }\n  }\n  .content {\n    /* position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; */\n\n    /* padding-right: 22px; */\n    padding: 12px 30px;\n\n    input {\n      color: #fff;\n      width: 100%;\n      height: 100%;\n      background: transparent;\n      outline: unset;\n      border: unset;\n      padding: 5px 20px;\n    }\n\n    svg {\n      position: absolute;\n      top: 50%;\n      left: 18px;\n      transform: translateY(-50%);\n    }\n  }\n"])));

            function Li(e) {
                var n = e.className,
                    t = e.onClick,
                    a = Object(Ie.a)(e, Ni);
                return Object(E.jsx)(Di, {
                    className: n,
                    children: Object(E.jsxs)("div", {
                        className: "content",
                        children: [Object(E.jsx)("input", Object(j.a)({}, a)), Object(E.jsx)(Et, {
                            onClick: t,
                            fill: "#919EAB"
                        })]
                    })
                })
            }
            Li.defaultProps = {
                className: "",
                onClick: function() {
                    return null
                }
            };
            var Fi = Li;
            var Wi, zi = function(e) {
                    return Object(E.jsx)(at, {
                        background: "#000000",
                        my: "1rem",
                        borderRadius: "16px",
                        boxShadow: "0px 0px 40px rgba(48, 73, 191, 0.05)",
                        children: Object(E.jsx)(Fi, {
                            placeholder: "Search"
                        })
                    })
                },
                Ui = Ha.a.Header,
                Ki = (Ha.a.Footer, Ha.a.Sider),
                Hi = Ha.a.Content,
                Vi = (m.d.header(Wi || (Wi = Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  min-height: 35px;\n  padding: 6px 15px;\n  background: #5868e9;\n  text-align: center;\n  display: none;\n\n  @media (min-width: 991px) {\n    display: block;\n  }\n\n  p {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 22px;\n  }\n"]))), function(e) {
                    var n = e.children,
                        t = e.hasSider,
                        a = void 0 !== t && t,
                        i = Sn(1024);
                    return a && !i ? Object(E.jsxs)(Ha.a, {
                        style: {
                            background: "#000000",
                            position: "relative"
                        },
                        hasSider: !0,
                        children: [Object(E.jsx)(Ki, {
                            width: "270",
                            style: {
                                overflow: "auto",
                                height: "calc(100vh)",
                                position: "sticky",
                                left: 0,
                                top: 0,
                                bottom: 0,
                                backgroundColor: "transparent"
                            },
                            children: Object(E.jsx)(gi, {
                                links: ri
                            })
                        }), Object(E.jsxs)(Ha.a, {
                            style: {
                                background: "transparent"
                            },
                            hasSider: !0,
                            children: [Object(E.jsxs)(Ha.a, {
                                style: {
                                    background: "#111111"
                                },
                                children: [Object(E.jsx)(Ui, {
                                    style: {
                                        background: "transparent",
                                        paddingLeft: "24px",
                                        paddingRight: "24px",
                                        height: "auto",
                                        lineHeight: "unset"
                                    },
                                    children: Object(E.jsx)(zi, {})
                                }), Object(E.jsx)(Hi, {
                                    children: Object(E.jsx)("div", {
                                        children: n
                                    })
                                })]
                            }), Object(E.jsx)(Ki, {
                                width: "340",
                                style: {
                                    overflow: "auto",
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    backgroundColor: "#111111",
                                    marginLeft: "1rem"
                                },
                                children: Object(E.jsx)(Bi, {})
                            })]
                        })]
                    }) : Object(E.jsxs)(Ha.a, {
                        className: "public-layout",
                        style: {
                            background: "#000000",
                            minHeight: "100vh"
                        },
                        children: [a && Object(E.jsx)(li, {}), Object(E.jsx)("div", {
                            children: n
                        })]
                    })
                }),
                Zi = t(456),
                Gi = new Zi.a;
            var Yi, Xi, qi, Ji = t(958),
                $i = ["options", "activeKey", "onChange", "minWidth", "height"],
                Qi = m.d.div(Yi || (Yi = Object(d.a)(["\n  font-family: 'SpaceGrotesk' !important;\n  font-style: normal;\n  font-weight: 400;\n  .ant-tabs-nav {\n    margin: 0;\n    &::before {\n      border: unset !important;\n    }\n  }\n  .ant-tabs-nav-wrap {\n    color: #6f6a79;\n\n    padding: 2px;\n\n    background: rgba(16, 13, 31, 0.3);\n    /* border: 2px solid #0e1e69; */\n    /* border-radius: 30px; */\n    box-sizing: border-box;\n  }\n  .ant-tabs-nav-list {\n    /* width: 100%; */\n    display: flex;\n    /* justify-content: space-between; */\n  }\n  // item tabs\n  .ant-tabs-tab {\n    min-width: ", ";\n    height: calc(", " - 8px);\n    padding: 0;\n    margin: 0;\n    margin-right: 3rem;\n\n    display: flex;\n    text-align: center;\n    justify-content: center;\n\n    &:hover,\n    &:active {\n      color: $primary-color;\n    }\n  }\n  .ant-tabs-tab-btn {\n    * {\n      font-family: 'SpaceGrotesk' !important;\n    }\n    position: relative !important;\n    /* font-weight: bold; */\n    font-size: 12px;\n    /* line-height: 20px; */\n    white-space: pre-wrap;\n  }\n  .ant-tabs-tab-active {\n    /* .ant-tabs-tab-btn {\n      color: #776bff !important;\n      text-shadow: unset;\n      span {\n        color: white;\n      }\n    } */\n  }\n  // animation\n  .ant-tabs-ink-bar {\n    background: transparent;\n    border-radius: 80px;\n    height: 100% !important;\n    z-index: -1;\n  }\n\n  @media screen and (min-width: 992px) {\n    .ant-tabs-content-holder {\n      padding: 0 24px;\n    }\n  }\n"])), (function(e) {
                    return e.minWidth || "unset"
                }), (function(e) {
                    return e.height || "45px"
                })),
                er = Ji.a.TabPane,
                nr = function(e) {
                    var n = e.options,
                        t = e.activeKey,
                        a = e.onChange,
                        i = e.minWidth,
                        r = e.height,
                        s = Object(Ie.a)(e, $i);
                    return Object(E.jsx)(Qi, Object(j.a)(Object(j.a)({
                        height: r,
                        minWidth: i
                    }, s), {}, {
                        children: Object(E.jsx)(Ji.a, {
                            activeKey: t,
                            centered: !0,
                            onChange: a,
                            children: n.map((function(e) {
                                var n = e.id,
                                    a = e.title,
                                    i = e.content,
                                    r = e.render,
                                    s = t === n;
                                return Object(E.jsx)(er, {
                                    tab: Object(E.jsxs)("div", {
                                        style: {
                                            fontFamily: "SpaceGrotesk"
                                        },
                                        children: [a || r({
                                            isActive: s
                                        }), s && Object(E.jsx)("div", {
                                            className: "underline"
                                        })]
                                    }),
                                    children: i
                                }, n)
                            }))
                        })
                    }))
                },
                tr = t(960),
                ar = t(201),
                ir = t(106),
                rr = ["name", "label", "rules", "options", "optionProps", "formItemProps", "showSearch", "allowClear", "className", "placeholder"],
                sr = tr.a.Item,
                or = ar.a.Option,
                cr = Object(m.d)(sr)(Xi || (Xi = Object(d.a)(["\n  width: 100%;\n  max-width: ", ";\n  margin-left: auto;\n\n  .ant-select {\n    color: #fff;\n  }\n\n  .ant-select:not(.ant-select-customize-input) .ant-select-selector,\n  .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector {\n    height: 100%;\n    height: 40px;\n\n    padding: 4px 12px;\n    background: ", ";\n    border: ", ";\n    border-radius: 8px;\n  }\n\n  .ant-select-single:not(.ant-select-customize-input) .ant-select-selector .ant-select-selection-search-input {\n    height: 100%;\n    height: 40px;\n  }\n  .ant-select-selection-item {\n    line-height: 32px;\n    display: flex;\n    align-items: center;\n  }\n"])), (function(e) {
                    var n = e.maxWidth;
                    return n || "160px"
                }), (function(e) {
                    return e.background || "transparent"
                }), (function(e) {
                    var n = e.border;
                    return n || "1px solid #3d424c"
                })),
                lr = function(e) {
                    var n = Object(r.useState)(!1),
                        t = Object(g.a)(n, 2),
                        a = (t[0], t[1], e.name),
                        i = void 0 === a ? "" : a,
                        s = e.label,
                        o = void 0 === s ? "" : s,
                        c = e.rules,
                        l = void 0 === c ? [] : c,
                        u = e.options,
                        p = void 0 === u ? [] : u,
                        d = e.optionProps,
                        m = void 0 === d ? {} : d,
                        b = e.formItemProps,
                        y = void 0 === b ? {} : b,
                        f = e.showSearch,
                        h = void 0 === f || f,
                        x = e.allowClear,
                        T = void 0 !== x && x,
                        O = e.className,
                        v = void 0 === O ? "" : O,
                        w = e.placeholder,
                        A = void 0 === w ? "All" : w,
                        _ = Object(Ie.a)(e, rr),
                        C = Object(r.useMemo)((function() {
                            return p && Object(ir.get)(p, "length") > 0 ? Object(ir.map)(p, (function(e, n) {
                                return Object(r.createElement)(or, Object(j.a)(Object(j.a)({}, m), {}, {
                                    key: "select-".concat(i, "-").concat(n),
                                    value: Object(ir.get)(e, "value")
                                }), Object(ir.get)(e, "label"))
                            })) : Object(E.jsx)(E.Fragment, {})
                        }), [p, i, m]);
                    return Object(E.jsx)(cr, Object(j.a)(Object(j.a)({
                        name: i,
                        label: o,
                        rules: l
                    }, y), {}, {
                        children: Object(E.jsx)(ar.a, Object(j.a)(Object(j.a)({
                            suffixIcon: Object(E.jsx)("img", {
                                alt: "",
                                src: "/images/icons/arrow-up.png"
                            }),
                            allowClear: T,
                            showSearch: h,
                            placeholder: A,
                            optionFilterProp: "children",
                            className: "form-select ".concat(v),
                            showArrow: !0
                        }, _), {}, {
                            children: C
                        }))
                    }))
                },
                ur = Object(mn.a)((function e(n, t) {
                    Object(bn.a)(this, e), this.address = void 0, this.web3 = void 0, this.contract = void 0, this.address = n, this.web3 = new Ke.a(new Ke.a.providers.HttpProvider(B.t)), this.contract = new this.web3.eth.Contract(t, n)
                })),
                pr = function() {
                    function e(n, t) {
                        Object(bn.a)(this, e), this.address = void 0, this.web3 = void 0, this.contract = void 0, this.address = n, this.web3 = new Ke.a(new Ke.a.providers.HttpProvider(B.t)), this.contract = new this.web3.eth.Contract(t || Ve, n)
                    }
                    return Object(mn.a)(e, [{
                        key: "getInfo",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e(n) {
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.contract.methods[n]().call();
                                        case 3:
                                            return e.abrupt("return", e.sent);
                                        case 6:
                                            return e.prev = 6, e.t0 = e.catch(0), console.error("getInfo", e.t0), e.abrupt("return", !1);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 6]
                                ])
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "symbol",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                var n;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.contract.methods.symbol().call();
                                        case 2:
                                            return n = e.sent, e.abrupt("return", n);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "decimals",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                var n;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.contract.methods.decimals().call();
                                        case 2:
                                            return n = e.sent, e.abrupt("return", n);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "balanceOf",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e(n) {
                                var t;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.contract.methods.balanceOf(n).call();
                                        case 2:
                                            return t = e.sent, e.abrupt("return", t);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getFullInfo",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                var n = this;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.t0 = Promise, e.next = 3, this.symbol();
                                        case 3:
                                            return e.t1 = e.sent, e.next = 6, this.decimals();
                                        case 6:
                                            return e.t2 = e.sent, e.t3 = [e.t1, e.t2], e.abrupt("return", e.t0.all.call(e.t0, e.t3).then((function(e) {
                                                var t = Object(g.a)(e, 2),
                                                    a = t[0],
                                                    i = t[1];
                                                return {
                                                    address: n.address,
                                                    symbol: a,
                                                    decimals: i
                                                }
                                            })).catch((function(e) {
                                                return console.error("E0089", e), null
                                            })));
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "totalSupply",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                var n, t;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, this.decimals();
                                        case 2:
                                            return n = e.sent, e.next = 5, this.contract.methods.totalSupply().call();
                                        case 5:
                                            return e.t0 = e.sent, e.t1 = Math.pow(10, n), t = e.t0 / e.t1, e.abrupt("return", t);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getLastedBlockNumber",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e() {
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.web3.eth.getBlockNumber();
                                        case 3:
                                            return e.abrupt("return", e.sent);
                                        case 6:
                                            return e.prev = 6, e.t0 = e.catch(0), e.abrupt("return", !1);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 6]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "getEventLogContract",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e(n, t, a) {
                                var i;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, i = this.contract.events[n], e.next = 4, this.contract.getPastEvents(n, {
                                                fromBlock: t,
                                                toBlock: a,
                                                topic: i
                                            });
                                        case 4:
                                            return e.abrupt("return", e.sent);
                                        case 7:
                                            return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", !1);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 7]
                                ])
                            })));
                            return function(n, t, a) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), e
                }(),
                dr = pr,
                mr = t(458),
                br = function() {
                    function e(n, t) {
                        Object(bn.a)(this, e), this.address = void 0, this.web3 = void 0, this.contract = void 0, this.web3 = new Ke.a(B.t), this.address = n, this.contract = new this.web3.eth.Contract(t || mr, n)
                    }
                    return Object(mn.a)(e, [{
                        key: "getPair",
                        value: function() {
                            var e = Object(x.a)(O.a.mark((function e(n, t) {
                                var a;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, this.contract.methods.getPair(n, t).call();
                                        case 3:
                                            return a = e.sent, e.abrupt("return", a);
                                        case 7:
                                            return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", !1);
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, this, [
                                    [0, 7]
                                ])
                            })));
                            return function(n, t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }]), e
                }(),
                yr = br,
                fr = function(e, n) {
                    var t = Object(r.useState)(0),
                        a = Object(g.a)(t, 2),
                        i = a[0],
                        s = a[1];
                    return [i, Object(r.useCallback)(Object(x.a)(O.a.mark((function t() {
                        var a, i, r, o, c, l, u, p, d, m, b, y;
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!_i(e) || !_i(n) || e === n) {
                                        t.next = 55;
                                        break
                                    }
                                    return a = new yr(B.s), i = new dr(n), t.next = 5, a.getPair(e, n);
                                case 5:
                                    if ("0x0000000000000000000000000000000000000000" === (r = t.sent)) {
                                        t.next = 52;
                                        break
                                    }
                                    return t.next = 9, i.balanceOf(r);
                                case 9:
                                    return t.t0 = t.sent, t.t1 = Math, t.next = 13, i.decimals();
                                case 13:
                                    if (t.t2 = t.sent, t.t3 = t.t1.pow.call(t.t1, 10, t.t2), o = t.t0 / t.t3, c = 2 * o, n.toLowerCase() === B.x.toLowerCase() || n.toLowerCase() === B.z.toLowerCase()) {
                                        t.next = 44;
                                        break
                                    }
                                    return t.next = 20, a.getPair(n, B.z);
                                case 20:
                                    if (l = t.sent, !r) {
                                        t.next = 44;
                                        break
                                    }
                                    return u = new dr(n), p = new dr(B.z), t.next = 26, u.balanceOf(l);
                                case 26:
                                    return t.t4 = t.sent, t.t5 = Math, t.next = 30, u.decimals();
                                case 30:
                                    return t.t6 = t.sent, t.t7 = t.t5.pow.call(t.t5, 10, t.t6), d = t.t4 / t.t7, t.next = 35, p.balanceOf(l);
                                case 35:
                                    return t.t8 = t.sent, t.t9 = Math, t.next = 39, p.decimals();
                                case 39:
                                    t.t10 = t.sent, t.t11 = t.t9.pow.call(t.t9, 10, t.t10), m = t.t8 / t.t11, c /= d / m;
                                case 44:
                                    return b = new dr(r), t.next = 47, b.totalSupply();
                                case 47:
                                    y = t.sent, s(c / y), t.next = 53;
                                    break;
                                case 52:
                                    s(void 0);
                                case 53:
                                    t.next = 56;
                                    break;
                                case 55:
                                    s(void 0);
                                case 56:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))), [e, n])]
                },
                hr = function(e, n) {
                    var t = Object(r.useState)(void 0),
                        a = Object(g.a)(t, 2),
                        i = a[0],
                        s = a[1];
                    return [i, Object(r.useCallback)(Object(x.a)(O.a.mark((function t() {
                        var a, i, r, o, c, l, u, p, d, m, b, y;
                        return O.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (!e || !n) {
                                        t.next = 54;
                                        break
                                    }
                                    return a = new yr(B.s), i = new dr(e), r = new dr(n), t.next = 6, a.getPair(e, n);
                                case 6:
                                    if (!(o = t.sent) || "0x0000000000000000000000000000000000000000" === o) {
                                        t.next = 54;
                                        break
                                    }
                                    return t.next = 10, i.balanceOf(o);
                                case 10:
                                    return t.t0 = t.sent, t.t1 = Math, t.next = 14, i.decimals();
                                case 14:
                                    return t.t2 = t.sent, t.t3 = t.t1.pow.call(t.t1, 10, t.t2), c = t.t0 / t.t3, t.next = 19, r.balanceOf(o);
                                case 19:
                                    return t.t4 = t.sent, t.t5 = Math, t.next = 23, r.decimals();
                                case 23:
                                    if (t.t6 = t.sent, t.t7 = t.t5.pow.call(t.t5, 10, t.t6), l = t.t4 / t.t7, u = l / c, n.toLowerCase() === B.x.toLowerCase() || n.toLowerCase() === B.z.toLowerCase()) {
                                        t.next = 53;
                                        break
                                    }
                                    return t.next = 30, a.getPair(n, B.z);
                                case 30:
                                    return p = t.sent, d = new dr(n), m = new dr(B.z), t.next = 35, d.balanceOf(p);
                                case 35:
                                    return t.t8 = t.sent, t.t9 = Math, t.next = 39, d.decimals();
                                case 39:
                                    return t.t10 = t.sent, t.t11 = t.t9.pow.call(t.t9, 10, t.t10), b = t.t8 / t.t11, t.next = 44, m.balanceOf(p);
                                case 44:
                                    return t.t12 = t.sent, t.t13 = Math, t.next = 48, m.decimals();
                                case 48:
                                    t.t14 = t.sent, t.t15 = t.t13.pow.call(t.t13, 10, t.t14), y = t.t12 / t.t15, u /= b / y;
                                case 53:
                                    s(u);
                                case 54:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))), [e, n])]
                },
                xr = function(e, n, t) {
                    var a, i, s, o = Object(r.useState)(void 0),
                        c = Object(g.a)(o, 2),
                        l = c[0],
                        u = c[1],
                        p = Object(r.useState)(void 0),
                        d = Object(g.a)(p, 2),
                        m = d[0],
                        b = d[1],
                        y = Object(r.useState)(0),
                        f = Object(g.a)(y, 2),
                        h = f[0],
                        j = f[1],
                        T = fr(null === n || void 0 === n || null === (a = n[t]) || void 0 === a ? void 0 : a.tokenAddress1, null === n || void 0 === n || null === (i = n[t]) || void 0 === i ? void 0 : i.tokenAddress2),
                        v = Object(g.a)(T, 2),
                        w = v[0],
                        A = v[1],
                        _ = hr(null === n || void 0 === n || null === (s = n[t]) || void 0 === s ? void 0 : s.tokenAddress1, B.w),
                        C = Object(g.a)(_, 2),
                        k = C[0],
                        E = C[1],
                        P = Object(r.useCallback)(Object(x.a)(O.a.mark((function a() {
                            var i, r, s, o, c, l, p, d, m, y, f, h, x, T, v, w, A, _, C, k, E, P, S, R, M, I, B;
                            return O.a.wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        if (null === n || void 0 === n || !n[t]) {
                                            a.next = 60;
                                            break
                                        }
                                        if (i = null === n || void 0 === n ? void 0 : n[t], r = i.contractAddress, s = i.symbol1, o = i.tokenAddress1, c = i.logo1, l = i.symbol2, p = i.tokenAddress2, d = i.logo2, m = i.name, y = i.lpTokenAddress, !(f = new ur(r, He)).contract) {
                                            a.next = 50;
                                            break
                                        }
                                        return h = f.contract, a.prev = 5, a.next = 8, h.methods.poolLength().call();
                                    case 8:
                                        x = a.sent, T = [], v = 0, w = 0;
                                    case 12:
                                        if (!(w < +x)) {
                                            a.next = 43;
                                            break
                                        }
                                        return a.next = 15, h.methods.poolInfo("".concat(w)).call();
                                    case 15:
                                        if (A = a.sent, _ = (new Date).getTime(), C = 1e3 * A.startBlock, k = 1e3 * A.endBlock, E = {
                                                accCakePerShare: A.accCakePerShare,
                                                allocPoint: A.allocPoint / 1e18,
                                                startBlock: C,
                                                endBlock: k,
                                                lastRewardBlock: A.lastRewardBlock,
                                                lpToken: A.lpToken,
                                                totalLpSupply: A.totalLpSupply / 1e18,
                                                isLocked: A.isLocked
                                            }, P = void 0, !e) {
                                            a.next = 38;
                                            break
                                        }
                                        return S = void 0, a.prev = 23, a.next = 26, h.methods.pendingCake("".concat(w), e).call();
                                    case 26:
                                        S = a.sent, S /= 1e18, a.next = 33;
                                        break;
                                    case 30:
                                        a.prev = 30, a.t0 = a.catch(23), console.info("pendingCake: ".concat(w, " - ").concat(e), a.t0);
                                    case 33:
                                        return v += S, a.next = 36, h.methods.userInfo("".concat(w), e).call();
                                    case 36:
                                        R = a.sent, P = {
                                            amount: R.amount / 1e18,
                                            rewardDebt: R.rewardDebt,
                                            tmpTotalUserDividendsAllPool: v,
                                            userDividends: S
                                        };
                                    case 38:
                                        M = {
                                            poolId: w,
                                            name: m,
                                            symbol1: s,
                                            symbol2: l,
                                            logo1: c,
                                            logo2: d,
                                            tokenAddress1: o,
                                            tokenAddress2: p,
                                            contract: r,
                                            lpToken: y,
                                            startTime: C,
                                            endTime: k,
                                            poolEnded: _ >= k,
                                            poolStatus: _ >= k ? "finished" : "live",
                                            dailyRewards: E.allocPoint / ((A.endBlock - A.startBlock) / 86400),
                                            userInfo: P,
                                            poolInfo: E
                                        }, T.push(M);
                                    case 40:
                                        w++, a.next = 12;
                                        break;
                                    case 43:
                                        u(T), j(v), a.next = 50;
                                        break;
                                    case 47:
                                        a.prev = 47, a.t1 = a.catch(5), console.error("useGetListPools", a.t1);
                                    case 50:
                                        if (!e || !y) {
                                            a.next = 60;
                                            break
                                        }
                                        return I = new dr(y, Ve), B = I.contract, a.prev = 52, a.next = 55, Promise.all([B.methods.balanceOf(e).call(), B.methods.symbol().call(), B.methods.name().call(), B.methods.decimals().call()]).then((function(e) {
                                            var n = Object(g.a)(e, 4),
                                                t = n[0],
                                                a = n[1],
                                                i = n[2],
                                                r = n[3];
                                            b({
                                                balance: t / Math.pow(10, r),
                                                symbol: a,
                                                name: i,
                                                decimals: r,
                                                address: B._address
                                            })
                                        }));
                                    case 55:
                                        a.next = 60;
                                        break;
                                    case 57:
                                        a.prev = 57, a.t2 = a.catch(52), console.error("error", a.t2);
                                    case 60:
                                    case "end":
                                        return a.stop()
                                }
                            }), a, null, [
                                [5, 47],
                                [23, 30],
                                [52, 57]
                            ])
                        }))), [e, n, t]);
                    return Object(r.useEffect)((function() {
                        function e() {
                            P(), E(), A()
                        }
                        e();
                        var n = setInterval((function() {
                            e()
                        }), 1e4);
                        return function() {
                            return clearInterval(n)
                        }
                    }), [P, E, A]), {
                        listPools: l,
                        infoTokenLPs: m,
                        totalUserDividendsAllPool: h,
                        priceTokenLPs: w,
                        priceToken: k
                    }
                },
                jr = m.d.span(qi || (qi = Object(d.a)(["\n  &::after {\n    display: inline-block;\n    animation: ellipsis 1.25s infinite;\n    content: '.';\n    width: 1em;\n    text-align: left;\n  }\n  @keyframes ellipsis {\n    0% {\n      content: '.';\n    }\n    33% {\n      content: '..';\n    }\n    66% {\n      content: '...';\n    }\n  }\n"]))),
                gr = function(e) {
                    var n = e.children;
                    return Object(E.jsx)(jr, {
                        children: n
                    })
                },
                Tr = t(198),
                Or = t.n(Tr),
                vr = t(459),
                wr = t.n(vr),
                Ar = function(e, n) {
                    var t = n || {
                            notation: "compact"
                        },
                        a = t.notation,
                        i = void 0 === a ? "compact" : a,
                        r = t.displayThreshold,
                        s = t.tokenPrecision,
                        o = t.isInteger,
                        c = t.roundUp;
                    if (0 === e) return o ? "0" : "0.00";
                    if (!e) return "--";
                    if (r && e < r) return "<".concat(r);
                    if (e < 1 && !s) return e.toFixed(9).match(/^-?\d*\.?0*\d{0,2}/)[0];
                    var l = e > 1e3 ? 1 : e > 1e5 ? 2 : 0;
                    s && (l = e < 1 ? 3 : 2);
                    var u = "0,0.".concat("0".repeat(l), "a");
                    if ("standard" === i && (u = "0,0.".concat("0".repeat(l))), o && e < 1e3 && (u = "0"), e > 999 && !c) {
                        var p = Math.trunc(e).toString(),
                            d = Math.floor(Math.log(e) / Math.log(1e3)),
                            m = Math.floor(e / Math.pow(1e3, d)).toString().length + l;
                        e = Number(p.substring(0, m) + "0".repeat(p.substring(m, p.length).length))
                    }
                    var b = parseFloat(e.toFixed(l));
                    return wr()(b).format(u).toUpperCase()
                },
                _r = (t(460), 1e6),
                Cr = function(e) {
                    var n = parseFloat(e / _r).toFixed(2).toString(),
                        t = n.indexOf(".");
                    return (n = n.substring(0, t + 3)) + "M"
                };

            function kr(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                    t = arguments.length > 2 ? arguments[2] : void 0;
                if (!e) return 0;
                if (e >= _r && t) return Cr(e);
                var a = "number" !== typeof + e ? 0 : parseFloat(e);
                if (("" + a).includes("e")) {
                    var i = ("" + a).split("e"),
                        r = "";
                    return +i[1] + n > 0 && (r = "+"), +(Math.floor(+i[0] + "e" + r + (+i[1] + n)) + "e-" + n)
                }
                return +(Math.floor(a + "e+" + n) + "e-" + n)
            }
            var Er, Pr = function(e) {
                var n = Object(r.useState)(void 0),
                    t = Object(g.a)(n, 2),
                    a = t[0],
                    i = t[1],
                    s = Object(r.useCallback)(Object(x.a)(O.a.mark((function n() {
                        var t;
                        return O.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    if (null === e || void 0 === e || !e.methods) {
                                        n.next = 11;
                                        break
                                    }
                                    return n.prev = 1, n.next = 4, e.methods.WIHDRAW_FEE_BNB().call();
                                case 4:
                                    t = n.sent, i(t / 1e18), n.next = 11;
                                    break;
                                case 8:
                                    n.prev = 8, n.t0 = n.catch(1), console.error("useGetWithdrawFeeBnbFarming", n.t0);
                                case 11:
                                case "end":
                                    return n.stop()
                            }
                        }), n, null, [
                            [1, 8]
                        ])
                    }))), [e]);
                return Object(r.useEffect)((function() {
                    s()
                }), [s]), [a]
            };
            ! function(e) {
                e[e.UNKNOWN = 0] = "UNKNOWN", e[e.NOT_APPROVED = 1] = "NOT_APPROVED", e[e.PENDING = 2] = "PENDING", e[e.APPROVED = 3] = "APPROVED"
            }(Er || (Er = {}));
            var Sr, Rr, Mr, Ir = function() {
                    var e = Object(x.a)(O.a.mark((function e(n, t, a, i, r, s, o) {
                        var c;
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (null !== n && void 0 !== n && n.methods) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", s("Contract is not defined!!!"));
                                case 2:
                                    return e.prev = 2, e.next = 5, n.methods.approve(a, o ? "115792089237316195423570985008687907853269984665640564039457584007913129639935" : i).send({
                                        from: t
                                    }).on("error", (function(e) {
                                        var n = Object(ir.get)(e, "message", "");
                                        n.length > 100 && (n = "Occurred approve error!!!"), s(n)
                                    })).on("receipt", function() {
                                        var e = Object(x.a)(O.a.mark((function e(n) {
                                            return O.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, $e(200);
                                                    case 2:
                                                        r(n);
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(n) {
                                            return e.apply(this, arguments)
                                        }
                                    }());
                                case 5:
                                    return e.abrupt("return", e.sent);
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(2), console.error("approve error", Ir), (c = Object(ir.get)(e.t0, "message", "")).length > 100 && (c = "Occurred approve error!!!"), e.abrupt("return", s(c));
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })));
                    return function(n, t, a, i, r, s, o) {
                        return e.apply(this, arguments)
                    }
                }(),
                Br = function() {
                    var e = Object(x.a)(O.a.mark((function e(n, t, a, i, r) {
                        var s;
                        return O.a.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (null !== n && void 0 !== n && n.methods) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", r("Contract is not defined!!!"));
                                case 2:
                                    return e.prev = 2, e.next = 5, n.methods.setApprovalForAll(a, !0).send({
                                        from: t
                                    }).on("error", (function(e) {
                                        var n = Object(ir.get)(e, "message", "");
                                        n.length > 100 && (n = "Occurred approve error!!!"), r(n)
                                    })).on("receipt", function() {
                                        var e = Object(x.a)(O.a.mark((function e(n) {
                                            return O.a.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, $e(200);
                                                    case 2:
                                                        i(n);
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(n) {
                                            return e.apply(this, arguments)
                                        }
                                    }());
                                case 5:
                                    return e.abrupt("return", e.sent);
                                case 8:
                                    return e.prev = 8, e.t0 = e.catch(2), console.error("approve error", Ir), (s = Object(ir.get)(e.t0, "message", "")).length > 100 && (s = "Occurred approve error!!!"), e.abrupt("return", r(s));
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 8]
                        ])
                    })));
                    return function(n, t, a, i, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                Nr = function() {
                    var e = Object(r.useCallback)(function() {
                            var e = Object(x.a)(O.a.mark((function e(n, t, a, i, r, s) {
                                var o, c, l = arguments;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return o = l.length > 6 && void 0 !== l[6] && l[6], e.next = 3, n.methods.allowance(t, a).call();
                                        case 3:
                                            if (c = e.sent, !new ze.a(+c).isLessThan(+i)) {
                                                e.next = 7;
                                                break
                                            }
                                            return e.abrupt("return", Ir(n, t, a, i, r, s, o));
                                        case 7:
                                            return e.abrupt("return", r("Approved"));
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n, t, a, i, r, s) {
                                return e.apply(this, arguments)
                            }
                        }(), []),
                        n = Object(r.useCallback)(function() {
                            var e = Object(x.a)(O.a.mark((function e(n, t, a, i, r, s) {
                                var o, c = arguments;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return o = c.length > 6 && void 0 !== c[6] && c[6], e.abrupt("return", Ir(n, t, a, i, r, s, o));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n, t, a, i, r, s) {
                                return e.apply(this, arguments)
                            }
                        }(), []),
                        t = Object(r.useCallback)(function() {
                            var e = Object(x.a)(O.a.mark((function e(n, t, a, i, r) {
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, n.methods.isApprovedForAll(t, a).call();
                                        case 2:
                                            if (e.sent) {
                                                e.next = 5;
                                                break
                                            }
                                            return e.abrupt("return", Br(n, t, a, i, r));
                                        case 5:
                                            return e.abrupt("return", i("Approved"));
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n, t, a, i, r) {
                                return e.apply(this, arguments)
                            }
                        }(), []);
                    return [e, n, t]
                },
                Dr = ["children"],
                Lr = function(e) {
                    var n = e.children,
                        t = Object(Ie.a)(e, Dr),
                        a = Object(h.b)();
                    return Object(E.jsx)(nt, Object(j.a)(Object(j.a)({
                        type: "button",
                        onClick: function() {
                            a(Z({
                                toggle: !0
                            }))
                        }
                    }, t), {}, {
                        children: n || "Connect Wallet"
                    }))
                },
                Fr = "0xfBd215C7d9eDB2D1e18cB98D2644Eca21C48c5EB",
                Wr = "0xfb58e26dfccd6f235513e31073b55e49ee6864b3",
                zr = {
                    "KRP-BNB": {
                        ZPPrice: "1",
                        contractAddress: Wr,
                        symbol1: "KRP",
                        tokenAddress1: Fr,
                        logo1: "",
                        symbol2: "BNB",
                        tokenAddress2: B.w,
                        logo2: "",
                        name: "KRP-BNB LP",
                        lpTokenAddress: Fr
                    },
                    "KRP-USDT": {
                        ZPPrice: "1",
                        contractAddress: Wr,
                        symbol1: "KRP",
                        tokenAddress1: Fr,
                        logo1: "",
                        symbol2: "USDT",
                        tokenAddress2: B.z,
                        logo2: "",
                        name: "KRP-USDT LP",
                        lpTokenAddress: Fr
                    },
                    "KRP-BUSD": {
                        ZPPrice: "1",
                        contractAddress: Wr,
                        symbol1: "KRP",
                        tokenAddress1: Fr,
                        logo1: "",
                        symbol2: "BUSD",
                        tokenAddress2: B.x,
                        logo2: "",
                        name: "KRP-BUSD LP",
                        lpTokenAddress: Fr
                    }
                },
                Ur = ["filterBy", "infoPool", "infoTokenLPs", "priceToken", "priceTokenLPs"],
                Kr = m.d.div(Sr || (Sr = Object(d.a)(["\n  background: #101724;\n\n  @media (min-width: 1024px) {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n\n  .container {\n    width: 100%;\n    max-width: 1164px;\n    margin: auto;\n    padding: 1rem 2rem;\n  }\n\n  .section-title {\n    font-family: 'SpaceGrotesk';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 24px;\n    line-height: 150%;\n    color: #f0f6ff;\n\n    @media (min-width: 991px) {\n      font-size: 32px;\n      line-height: 48px;\n    }\n  }\n\n  div {\n    &.blinking {\n      @media (min-width: 991px) {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 37%;\n        height: 73%;\n        animation: 5s ease 0s infinite normal none running blinking;\n        background: linear-gradient(99.46deg, #fa00ff -10.9%, #00e0ff 97.13%, #2ad4f9 97.14%);\n        border-radius: 87px;\n        transform: rotate(25.82deg);\n      }\n    }\n  }\n\n  .section-container {\n    background: #0c131f;\n    margin-top: 1.5rem;\n  }\n\n  .section-1 {\n    padding: 20px 0;\n\n    /* @media (min-width: 991px) {\n      padding: 120px 0 30px 0;\n    } */\n\n    .content-left {\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      .section-title {\n        margin-bottom: 20px;\n      }\n\n      p {\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 150%;\n        color: #bdcadb;\n        margin-bottom: 48px;\n\n        @media (min-width: 991px) {\n          font-size: 14px;\n          line-height: 22px;\n        }\n      }\n    }\n\n    .content-right {\n      display: flex;\n      justify-content: end;\n      .wrap-image {\n        max-width: 350px;\n        position: relative;\n\n        @media (min-width: 991px) {\n          top: -20px;\n        }\n\n        img {\n          &:not(.background) {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n          }\n\n          &.background {\n            width: 100%;\n            opacity: 0;\n          }\n\n          &.bg {\n            width: 53%;\n          }\n\n          &.bg-linear {\n            width: 100%;\n            animation: linerShowHide 5s infinite;\n          }\n\n          &.animal {\n            top: 57%;\n            width: 67.038023%;\n            left: 45%;\n            z-index: 2;\n          }\n\n          &.coin-1 {\n            width: 15%;\n            z-index: 2;\n            transform: translate(-233%, -269%);\n            --transformX: -233%;\n            --transformY: -269%;\n            animation: upAndDown 5s infinite;\n          }\n\n          &.coin-2 {\n            width: 28%;\n            z-index: 2;\n            transform: translate(64%, -110%);\n            --transformX: 64%;\n            --transformY: -110%;\n            animation: upAndDown 2s infinite;\n          }\n\n          &.coin-3 {\n            width: 30%;\n            z-index: 2;\n            transform: translate(-147%, 23%);\n            --transformX: -147%;\n            --transformY: 23%;\n            animation: upAndDown 10s infinite;\n          }\n\n          &.coin-4 {\n            width: 15%;\n            z-index: 2;\n            transform: translate(153%, 123%);\n            --transformX: 153%;\n            --transformY: 123%;\n            animation: upAndDown 3s infinite;\n          }\n\n          &.elip-1 {\n            width: 90%;\n            transform: translate(-50%, -40%);\n          }\n\n          &.elip-2 {\n            width: 90%;\n            transform: translate(-50%, -60%);\n          }\n        }\n      }\n    }\n  }\n\n  .f_table {\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: 10px;\n    overflow-x: auto;\n\n    .f_row {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      padding: 0rem 1rem;\n      border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n\n      .f_cell {\n        padding: 1rem 0.5rem;\n\n        h2 {\n          color: #f0f6ff;\n          font-family: 'SpaceGrotesk';\n        }\n        & p {\n          font-size: 14px;\n          color: #bdcadb;\n          margin-bottom: 10px;\n        }\n        &:nth-child(2) {\n          p {\n            margin-bottom: 0px;\n            margin-top: 10px;\n          }\n        }\n        .expand-btn {\n          background: transparent;\n          border: 1px solid #3d424c;\n          border-radius: 5px;\n          width: 27px;\n          height: 27px;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          cursor: pointer;\n          transition: all 300ms;\n\n          &.active {\n            background: #776bff;\n            transform: rotate(180deg);\n          }\n        }\n      }\n    }\n    .f_row:last-child {\n      border-bottom: none;\n    }\n  }\n\n  .detail {\n    background: #101724;\n    display: flex;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n\n    .detail-left {\n      padding: 1rem;\n      border-right: 1px solid rgba(255, 255, 255, 0.1);\n      a {\n        display: flex;\n        align-items: center;\n        color: #776bff;\n        margin-top: 10px;\n        & > div {\n          width: 40px;\n        }\n        p {\n          /* margin-left: 1rem; */\n        }\n      }\n      a:first-child {\n        margin-top: 0;\n      }\n    }\n\n    .detail-right {\n      display: flex;\n      flex: 1;\n\n      .small {\n        font-size: 14px;\n      }\n\n      h2 {\n        color: #f0f6ff;\n      }\n\n      .deposit {\n        padding: 1rem;\n        width: 50%;\n        border-right: 1px solid rgba(255, 255, 255, 0.1);\n\n        .flex-between {\n          display: flex;\n          justify-content: space-between;\n\n          .your-earn {\n            h2 {\n              color: #776bff;\n            }\n          }\n        }\n      }\n      .farming {\n        padding: 1rem;\n        width: 50%;\n      }\n    }\n  }\n\n  .transition-all {\n    transition: all 0.7s;\n  }\n"]))),
                Hr = m.d.div(Rr || (Rr = Object(d.a)(["\n  text-align: center;\n\n  width: 100%;\n  height: 100%;\n  min-height: 400px;\n  padding: 0 8px 40px;\n\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n\n  z-index: 1;\n\n  .empty-text {\n    color: #5f440f91;\n    font-family: iCiel Cadena;\n    font-size: 5vw;\n    font-weight: 900;\n    white-space: nowrap;\n\n    ", " {\n      font-size: 3vw;\n    }\n  }\n\n  button {\n    margin-top: 28px;\n    border-radius: 13px;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.md
                })),
                Vr = [{
                    label: "All",
                    value: "all"
                }, {
                    label: "Live",
                    value: "live"
                }, {
                    label: "Finished",
                    value: "finished"
                }, {
                    label: "Participated",
                    value: "participated"
                }],
                Zr = [{
                    label: "BNB Chain",
                    value: "KRP-BNB",
                    icon: "BNB.png"
                }, {
                    label: "USDT",
                    value: "KRP-USDT",
                    icon: "USDT.png"
                }, {
                    label: "BUSD",
                    value: "KRP-BUSD",
                    icon: "BUSD.png"
                }],
                Gr = function(e) {
                    e.filterBy;
                    var n, t, a, i, s, o, c, l, u, p, d = e.infoPool,
                        m = e.infoTokenLPs,
                        b = e.priceToken,
                        y = e.priceTokenLPs,
                        h = (Object(Ie.a)(e, Ur), Object(f.d)().account),
                        j = Object(r.useState)(!1),
                        T = Object(g.a)(j, 2),
                        v = T[0],
                        w = T[1],
                        A = Object(r.useState)(0),
                        _ = Object(g.a)(A, 2),
                        C = _[0],
                        k = _[1],
                        P = Object(r.useState)(0),
                        S = Object(g.a)(P, 2),
                        R = (S[0], S[1]),
                        M = Object(r.useState)(!1),
                        I = Object(g.a)(M, 2),
                        B = I[0],
                        N = I[1],
                        D = Object(r.useState)(!1),
                        L = Object(g.a)(D, 2),
                        F = L[0],
                        W = L[1],
                        z = Object(r.useState)(0),
                        U = Object(g.a)(z, 2),
                        K = U[0],
                        H = U[1],
                        V = Object(r.useState)(""),
                        Z = Object(g.a)(V, 2),
                        G = Z[0],
                        Y = Z[1],
                        X = qe(null === d || void 0 === d ? void 0 : d.contract, p || He),
                        q = Nr(),
                        J = Object(g.a)(q, 1)[0],
                        $ = Je(null === d || void 0 === d ? void 0 : d.lpToken),
                        Q = Pr(X),
                        ee = Object(g.a)(Q, 1)[0],
                        ne = Object(r.useCallback)(function() {
                            var e = Object(x.a)(O.a.mark((function e(n) {
                                var t;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            X && n && void 0 !== ee ? (t = ki(1e18 * ee), W(!0), X.methods.withdraw(n.poolId).send({
                                                from: h,
                                                value: t
                                            }).on("receipt", (function() {
                                                De.b.success("Successfully"), W(!1)
                                            })).on("error", (function(e) {
                                                var n = (null === e || void 0 === e ? void 0 : e.message) || "";
                                                n.length > 100 && (n = "Occurred an error. Please try again later"), De.b.error(n), W(!1)
                                            }))) : (De.b.error("Occurred an error. Please try again later"), W(!1));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }(), [h, X, ee]);
                    Object(r.useEffect)((function() {
                        "finished" === d.poolStatus && k(1)
                    }), [d.poolStatus]);
                    var te = Object(r.useMemo)((function() {
                            if (d) {
                                var e, n = d.dailyRewards,
                                    t = null === d || void 0 === d || null === (e = d.poolInfo) || void 0 === e ? void 0 : e.totalLpSupply,
                                    a = n / 86400 * b * 86400 * 365,
                                    i = t * (y || b),
                                    r = Math.round(a / (i > 0 ? i : 1) * 100);
                                return t <= 0 ? void 0 : r
                            }
                        }), [d, b, y]),
                        ae = Object(r.useCallback)(function() {
                            var e = Object(x.a)(O.a.mark((function e(n, t) {
                                var a;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(X && X && n && m)) {
                                                e.next = 16;
                                                break
                                            }
                                            if (!(t && t < 0)) {
                                                e.next = 4;
                                                break
                                            }
                                            return t = t.replace("-", ""), e.abrupt("return", null);
                                        case 4:
                                            if (t) {
                                                e.next = 7;
                                                break
                                            }
                                            return Y("Please input amount"), e.abrupt("return", null);
                                        case 7:
                                            if (!(t > m.balance)) {
                                                e.next = 10;
                                                break
                                            }
                                            return Y("".concat(n.name, " is not enough.")), e.abrupt("return", null);
                                        case 10:
                                            Y(""), N(!0), a = "".concat(ki(t * Math.pow(10, m.decimals))), J($, h, X._address, a, (function() {
                                                X.methods.deposit(n.poolId, a).send({
                                                    from: h
                                                }).on("receipt", (function() {
                                                    De.b.success("Successfully"), N(!1)
                                                })).on("error", (function(e) {
                                                    var n = (null === e || void 0 === e ? void 0 : e.message) || "";
                                                    n.length > 100 && (n = "Occurred an error!!!"), De.b.error(n), N(!1)
                                                }))
                                            }), (function(e) {
                                                De.b.error(e), N(!1)
                                            })), e.next = 18;
                                            break;
                                        case 16:
                                            De.b.error("Occurred an error. Please try again later"), N(!1);
                                        case 18:
                                            return e.abrupt("return", null);
                                        case 19:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n, t) {
                                return e.apply(this, arguments)
                            }
                        }(), [h, J, X, $, m]),
                        ie = Object(r.useCallback)((function(e) {
                            var n;
                            if (null === d || void 0 === d || null === (n = d.userInfo) || void 0 === n || !n.amount) return Y("".concat(null === d || void 0 === d ? void 0 : d.name, " is not enough."));
                            if (X && e && void 0 !== ee) {
                                N(!0);
                                var t = ki(1e18 * ee);
                                X.methods.leaveStaking(e.poolId).send({
                                    from: h,
                                    value: t
                                }).on("receipt", (function() {
                                    De.b.success("Successfully"), N(!1)
                                })).on("error", (function(e) {
                                    var n = (null === e || void 0 === e ? void 0 : e.message) || "";
                                    n.length > 100 && (n = "Occurred an error. Please try again later"), De.b.error(n), N(!1)
                                }))
                            } else De.b.error("Occurred an error. Please try again later"), N(!1)
                        }), [h, X, ee, null === d || void 0 === d ? void 0 : d.name, null === d || void 0 === d || null === (n = d.userInfo) || void 0 === n ? void 0 : n.amount]);
                    return Object(E.jsxs)(E.Fragment, {
                        children: [Object(E.jsxs)(st, {
                            flexWrap: ["wrap", "wrap", "nowrap", "nowrap"],
                            className: "f_row",
                            children: [Object(E.jsxs)("div", {
                                style: {
                                    display: "flex"
                                },
                                className: "f_cell",
                                children: [Object(E.jsx)(at, {
                                    zIndex: "1",
                                    children: Object(E.jsx)("img", {
                                        src: "/images/symbols/".concat(d.symbol1, ".png"),
                                        alt: ""
                                    })
                                }), Object(E.jsx)(at, {
                                    marginLeft: "-8px",
                                    zIndex: "0",
                                    children: Object(E.jsx)("img", {
                                        src: "/images/symbols/".concat(d.symbol2, ".png"),
                                        alt: "",
                                        width: "50",
                                        style: {
                                            maxHeight: "50px"
                                        }
                                    })
                                })]
                            }), Object(E.jsxs)("div", {
                                className: "f_cell",
                                children: [Object(E.jsx)("h2", {
                                    children: "Earn KRP"
                                }), Object(E.jsx)("p", {
                                    children: d.name
                                })]
                            }), Object(E.jsxs)("div", {
                                className: "f_cell",
                                children: [Object(E.jsx)("p", {
                                    children: "KRP Earn"
                                }), Object(E.jsxs)("h2", {
                                    children: [Ar(null === d || void 0 === d || null === (t = d.userInfo) || void 0 === t ? void 0 : t.userDividends), " KRP"]
                                })]
                            }), Object(E.jsxs)("div", {
                                className: "f_cell",
                                children: [Object(E.jsx)("p", {
                                    children: "APR"
                                }), Object(E.jsx)("h2", {
                                    children: void 0 === te || isNaN(te) ? "--" : "".concat(te.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"), "%")
                                })]
                            }), Object(E.jsxs)("div", {
                                className: "f_cell",
                                children: [Object(E.jsx)("p", {
                                    children: "Total Stacked"
                                }), Object(E.jsxs)("h2", {
                                    children: ["$", Ar(d.poolInfo.totalLpSupply), " LP"]
                                })]
                            }), Object(E.jsxs)("div", {
                                className: "f_cell",
                                children: [Object(E.jsx)("p", {
                                    children: "Period"
                                }), Object(E.jsxs)("h2", {
                                    children: [Or()(d.poolInfo.endBlock).diff(d.poolInfo.startBlock, "day"), " days"]
                                })]
                            }), Object(E.jsxs)("div", {
                                className: "f_cell",
                                children: [Object(E.jsx)("p", {
                                    children: "Start In"
                                }), Object(E.jsx)("h2", {
                                    children: Or()(d.poolInfo.startBlock).format("MMM DD, YYYY")
                                })]
                            }), Object(E.jsx)("div", {
                                className: "f_cell",
                                children: Object(E.jsx)("button", {
                                    className: ["expand-btn", v ? "active" : ""].join(" "),
                                    onClick: function() {
                                        return w((function(e) {
                                            return !e
                                        }))
                                    },
                                    children: Object(E.jsx)("img", {
                                        src: "/images/icons/arrow-down.png",
                                        alt: ""
                                    })
                                })
                            })]
                        }), Object(E.jsxs)(st, {
                            display: ["block", "block", "flex", "flex"],
                            borderBottom: v ? "1px solid #242B35" : "unset",
                            maxHeight: v ? ["1000px", "1000px", "500px", "500px"] : "0",
                            overflowY: "hidden",
                            className: "transition-all",
                            children: [Object(E.jsx)(at, {
                                className: "",
                                p: "2rem",
                                borderRight: "1px solid #242B35",
                                children: [{
                                    icon: "farming-rules.png",
                                    title: "Farming Rules",
                                    href: "/farming-rules"
                                }, {
                                    icon: "contract-pool.png",
                                    title: "View contract Pool",
                                    href: "/farming-rules"
                                }, {
                                    icon: "contract-lp.png",
                                    title: "View contract LP",
                                    href: "/farming-rules"
                                }, {
                                    icon: "get-lp.png",
                                    title: "Get KRP-BNB LP",
                                    href: "/farming-rules"
                                }].map((function(e, n) {
                                    return Object(E.jsx)(at, {
                                        mt: 0 === n ? 0 : "1rem",
                                        children: Object(E.jsx)(Ga, {
                                            href: e.href,
                                            className: "",
                                            children: Object(E.jsxs)(st, {
                                                alignItems: "center",
                                                children: [Object(E.jsx)(at, {
                                                    width: "30px",
                                                    children: Object(E.jsx)("img", {
                                                        src: "/images/farming/".concat(e.icon),
                                                        alt: ""
                                                    })
                                                }), Object(E.jsx)(Rt, {
                                                    color: "secondary",
                                                    children: e.title
                                                })]
                                            })
                                        })
                                    }, n)
                                }))
                            }), Object(E.jsxs)(st, {
                                flex: "1",
                                display: ["block", "block", "flex", "flex"],
                                children: [Object(E.jsxs)(at, {
                                    p: "2rem",
                                    borderRight: "1px solid #242B35",
                                    width: ["100%", "100%", "50%", "50%"],
                                    children: [Object(E.jsx)(Rt, {
                                        fontFamily: "SpaceGrotesk",
                                        children: "Your participation"
                                    }), Object(E.jsxs)(at, {
                                        mt: "1.5rem",
                                        children: [Object(E.jsx)(Rt, {
                                            small: !0,
                                            color: "primaryDark",
                                            children: "Total Deposits"
                                        }), Object(E.jsxs)(Rt, {
                                            mt: "0.25rem",
                                            fontFamily: "SpaceGrotesk",
                                            children: ["$", kr(null === d || void 0 === d || null === (a = d.userInfo) || void 0 === a ? void 0 : a.amount, 3, !0), " LP"]
                                        })]
                                    }), Object(E.jsxs)(st, {
                                        justifyContent: "space-between",
                                        mt: "1.5rem",
                                        children: [Object(E.jsxs)("div", {
                                            className: "your-earn",
                                            children: [Object(E.jsx)(Rt, {
                                                small: !0,
                                                color: "primaryDark",
                                                children: "Your earn"
                                            }), Object(E.jsxs)(Rt, {
                                                color: "secondary",
                                                fontFamily: "SpaceGrotesk",
                                                children: [Ar(null === d || void 0 === d || null === (i = d.userInfo) || void 0 === i ? void 0 : i.userDividends), " KRP"]
                                            })]
                                        }), Object(E.jsx)("div", {
                                            children: Object(E.jsx)(nt, {
                                                background: "#776BFF",
                                                loading: F,
                                                disabled: !(null !== d && void 0 !== d && null !== (s = d.userInfo) && void 0 !== s && s.userDividends),
                                                onClick: function() {
                                                    return ne(d)
                                                },
                                                children: "Harvest"
                                            })
                                        })]
                                    })]
                                }), Object(E.jsxs)(at, {
                                    p: "2rem",
                                    width: ["100%", "100%", "50%", "50%"],
                                    children: [1 === C ? Object(E.jsxs)(E.Fragment, {
                                        children: [Object(E.jsx)(Rt, {
                                            fontFamily: "SpaceGrotesk",
                                            children: "Your Farming"
                                        }), Object(E.jsxs)(at, {
                                            mt: "1.5rem",
                                            children: [Object(E.jsxs)(st, {
                                                justifyContent: "space-between",
                                                children: [Object(E.jsx)(Rt, {
                                                    small: !0,
                                                    color: "primaryDark",
                                                    children: "Total Deposits"
                                                }), Object(E.jsxs)(Rt, {
                                                    small: !0,
                                                    color: "secondary",
                                                    children: ["$", kr(null === d || void 0 === d || null === (o = d.userInfo) || void 0 === o ? void 0 : o.amount, 3, !0), " LP"]
                                                })]
                                            }), Object(E.jsxs)(st, {
                                                justifyContent: "space-between",
                                                mt: "0.25rem",
                                                children: [Object(E.jsx)(Rt, {
                                                    small: !0,
                                                    color: "primaryDark",
                                                    children: "Your earn"
                                                }), Object(E.jsxs)(Rt, {
                                                    small: !0,
                                                    color: "secondary",
                                                    children: [Ar(null === d || void 0 === d || null === (c = d.userInfo) || void 0 === c ? void 0 : c.userDividends), " KRP"]
                                                })]
                                            })]
                                        })]
                                    }) : Object(E.jsxs)(E.Fragment, {
                                        children: [Object(E.jsx)(Rt, {
                                            fontFamily: "SpaceGrotesk",
                                            children: "Start Farming"
                                        }), Object(E.jsxs)(at, {
                                            mt: "1.5rem",
                                            children: [Object(E.jsxs)(st, {
                                                justifyContent: "space-between",
                                                children: [Object(E.jsxs)(Rt, {
                                                    small: !0,
                                                    color: "primaryDark",
                                                    children: ["Amount: ", Ar(0 === C ? null === m || void 0 === m ? void 0 : m.balance : null === d || void 0 === d || null === (l = d.userInfo) || void 0 === l ? void 0 : l.amount)]
                                                }), Object(E.jsx)(at, {
                                                    onClick: function() {
                                                        ! function(e) {
                                                            if (m) {
                                                                var n = (null === m || void 0 === m ? void 0 : m.balance) || 0;
                                                                R(e), H(n * e / 100)
                                                            } else De.b.error("An occurred error. Please try again later")
                                                        }(100)
                                                    },
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    children: Object(E.jsx)(Rt, {
                                                        small: !0,
                                                        color: "secondary",
                                                        children: "Max"
                                                    })
                                                })]
                                            }), Object(E.jsx)(at, {
                                                mt: "0.25px",
                                                children: Object(E.jsx)(va, {
                                                    type: 0 === C ? "number" : "text",
                                                    value: 0 === C ? K : kr(null === d || void 0 === d || null === (u = d.userInfo) || void 0 === u ? void 0 : u.amount, 3, !0),
                                                    readOnly: 0 != C,
                                                    onChange: function(e) {
                                                        H(+e.target.value)
                                                    }
                                                })
                                            })]
                                        })]
                                    }), Object(E.jsxs)(at, {
                                        mt: "1rem",
                                        children: [h ? 1 === C ? Object(E.jsx)(nt, {
                                            onClick: function() {
                                                ie(d)
                                            },
                                            loading: B,
                                            disabled: !(null !== d && void 0 !== d && d.poolEnded),
                                            children: "Withdraw"
                                        }) : Object(E.jsxs)(st, {
                                            alignItems: "center",
                                            children: [Object(E.jsx)("div", {
                                                children: Object(E.jsx)(nt, {
                                                    onClick: function() {
                                                        ae(d, K)
                                                    },
                                                    loading: B,
                                                    children: "Deposit"
                                                })
                                            }), Object(E.jsx)(at, {
                                                pl: "1rem",
                                                children: Object(E.jsx)(Rt, {
                                                    small: !0,
                                                    color: "primaryDark",
                                                    children: "You can withdraw after the pool time end"
                                                })
                                            })]
                                        }) : Object(E.jsx)(Lr, {
                                            children: "Connect"
                                        }), Object(E.jsx)("div", {
                                            className: "box-error",
                                            style: {
                                                marginTop: "12px"
                                            },
                                            children: G
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                Yr = function() {
                    var e, n = Object(f.d)().account,
                        t = Object(r.useState)(Zr[0].value),
                        a = Object(g.a)(t, 2),
                        i = a[0],
                        s = a[1],
                        o = Object(r.useState)({}),
                        c = Object(g.a)(o, 2),
                        l = c[0],
                        u = c[1],
                        p = Object(r.useState)({
                            v: Vr[0].value,
                            m: "false"
                        }),
                        d = Object(g.a)(p, 2),
                        m = d[0],
                        b = d[1],
                        y = xr(n, l, i),
                        h = y.listPools,
                        x = y.infoTokenLPs,
                        T = y.priceTokenLPs,
                        O = y.priceToken,
                        v = Object(r.useState)(null),
                        w = Object(g.a)(v, 2),
                        A = w[0],
                        _ = w[1];
                    Object(r.useEffect)((function() {
                        h && h.length > 0 && _({
                            all: h,
                            live: h.filter((function(e) {
                                return "live" === e.poolStatus
                            })),
                            finished: h.filter((function(e) {
                                return "finished" === e.poolStatus
                            })),
                            participated: h.filter((function(e) {
                                var n;
                                return +(null === e || void 0 === e || null === (n = e.userInfo) || void 0 === n ? void 0 : n.userDividends) > 0
                            }))
                        }), null === h && _(null)
                    }), [m, h]), Object(r.useEffect)((function() {
                        i && u((function(e) {
                            return Object(j.a)(Object(j.a)({}, e), {}, Object(on.a)({}, i, zr[i]))
                        }))
                    }), [i]);
                    var C = Zr.map((function(e) {
                        return {
                            value: e.value,
                            label: Object(E.jsxs)(st, {
                                alignItems: "center",
                                children: [e.icon && Object(E.jsx)("div", {
                                    children: Object(E.jsx)("img", {
                                        alt: "",
                                        src: "/images/symbols/".concat(e.icon),
                                        width: "16"
                                    })
                                }), Object(E.jsx)(Rt, {
                                    ml: "8px",
                                    children: e.label
                                })]
                            })
                        }
                    }));
                    return Object(E.jsxs)(Kr, {
                        children: [Object(E.jsx)("section", {
                            className: "section-container section-1",
                            style: {
                                marginTop: 0
                            },
                            children: Object(E.jsx)("div", {
                                className: "container",
                                children: Object(E.jsxs)(Vn.a, {
                                    gutter: 24,
                                    children: [Object(E.jsx)(Zn.a, {
                                        span: 24,
                                        lg: {
                                            span: 12
                                        },
                                        children: Object(E.jsxs)("div", {
                                            className: "content-left",
                                            children: [Object(E.jsx)("h1", {
                                                className: "section-title",
                                                children: "Increase Your Assets By Potential Projects Selected By KrakenPad"
                                            }), Object(E.jsx)("p", {
                                                children: "Yield Farming is a suitable investment channel to help investors increase their assets by maximizing the reward that the project offers."
                                            })]
                                        })
                                    }), Object(E.jsx)(Zn.a, {
                                        span: 24,
                                        lg: {
                                            span: 12
                                        },
                                        children: Object(E.jsx)("div", {
                                            className: "content-right",
                                            children: Object(E.jsxs)("div", {
                                                className: "wrap-image",
                                                children: [Object(E.jsx)("img", {
                                                    className: "background",
                                                    src: "/images/section-1/bg-transparent.png",
                                                    alt: ""
                                                }), Object(E.jsx)("div", {
                                                    className: "blinking"
                                                }), Object(E.jsx)("img", {
                                                    className: "bg",
                                                    src: "/images/section-1/bg.png",
                                                    alt: ""
                                                }), Object(E.jsx)("img", {
                                                    className: "bg-linear",
                                                    src: "/images/section-1/bg-linear.png",
                                                    alt: ""
                                                }), Object(E.jsx)("img", {
                                                    className: "coin-1",
                                                    src: "/images/section-1/coin-1.1.png",
                                                    alt: ""
                                                }), Object(E.jsx)("img", {
                                                    className: "coin-2",
                                                    src: "/images/section-1/coin-2.1.png",
                                                    alt: ""
                                                }), Object(E.jsx)("img", {
                                                    className: "coin-3",
                                                    src: "/images/section-1/coin-3.1.png",
                                                    alt: ""
                                                }), Object(E.jsx)("img", {
                                                    className: "coin-4",
                                                    src: "/images/section-1/coin-4.1.png",
                                                    alt: ""
                                                }), Object(E.jsx)("img", {
                                                    className: "elip-1",
                                                    src: "/images/section-1/elip.png",
                                                    alt: ""
                                                }), Object(E.jsx)("img", {
                                                    className: "elip-2",
                                                    src: "/images/section-1/elip.png",
                                                    alt: ""
                                                }), Object(E.jsx)("img", {
                                                    className: "animal",
                                                    src: "/images/section-1/animal-2.png",
                                                    alt: ""
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })
                        }), Object(E.jsx)("section", {
                            className: "section-container",
                            children: Object(E.jsx)("div", {
                                className: "container",
                                children: Object(E.jsxs)(st, {
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    display: ["block", "block", "flex", "flex"],
                                    children: [Object(E.jsx)(nr, {
                                        options: Vr.map((function(e) {
                                            return {
                                                id: e.value,
                                                render: function(n) {
                                                    var t;
                                                    n.isActive;
                                                    return Object(E.jsxs)(st, {
                                                        children: [Object(E.jsx)(Rt, {
                                                            color: "",
                                                            fontSize: "12px",
                                                            children: e.label
                                                        }), " ", Object(E.jsxs)(Rt, {
                                                            ml: "0.5rem",
                                                            fontSize: "12px",
                                                            children: ["(", (null === A || void 0 === A || null === (t = A[e.value]) || void 0 === t ? void 0 : t.length) || "0", ")"]
                                                        })]
                                                    })
                                                }
                                            }
                                        })),
                                        activeKey: m.v,
                                        onChange: function(e) {
                                            b((function(n) {
                                                return Object(j.a)(Object(j.a)({}, n), {}, {
                                                    v: e
                                                })
                                            }))
                                        }
                                    }), Object(E.jsx)(st, {
                                        flex: 1,
                                        justifyContent: "end",
                                        children: Object(E.jsx)(lr, {
                                            options: C,
                                            onChange: function(e) {
                                                return s(e)
                                            },
                                            defaultValue: C[0]
                                        })
                                    })]
                                })
                            })
                        }), Object(E.jsx)("section", {
                            className: "section-container f_table",
                            children: A ? (null === (e = A[m.v]) || void 0 === e ? void 0 : e.length) > 0 ? A[m.v].map((function(e, n) {
                                return Object(E.jsx)(Gr, {
                                    filterBy: m,
                                    infoPool: e,
                                    infoTokenLPs: x,
                                    priceToken: O,
                                    priceTokenLPs: T
                                }, n)
                            })) : Object(E.jsx)(Hr, {
                                children: "No data"
                            }) : Object(E.jsxs)(Hr, {
                                children: [Object(E.jsx)(gr, {
                                    children: "loading"
                                }), " "]
                            })
                        })]
                    })
                },
                Xr = t(956),
                qr = m.d.div(Mr || (Mr = Object(d.a)(["\n  .ant-table {\n    background: transparent;\n    color: #ffffff;\n    font-size: 16px;\n  }\n  .ant-table-thead > tr > th {\n    background: transparent;\n    color: #919eab;\n    font-size: 16px;\n    font-weight: 600;\n  }\n  .ant-table-tbody > tr.ant-table-row:hover > td,\n  .ant-table-tbody > tr > td.ant-table-cell-row-hover {\n    background: transparent;\n  }\n\n  .ant-table-tbody > tr > td {\n    border: none;\n  }\n\n  .ant-table-thead > tr > th {\n    border-bottom: 1px solid #34384c;\n  }\n"])));
            var Jr = function(e) {
                    var n = e.columns,
                        t = e.dataSource;
                    return Object(E.jsx)(qr, {
                        children: Object(E.jsx)(Xr.a, {
                            dataSource: t,
                            columns: n,
                            pagination: !1,
                            scroll: {
                                x: !0
                            }
                        })
                    })
                },
                $r = t(169),
                Qr = t.n($r),
                es = t(238),
                ns = t.n(es),
                ts = t(461),
                as = ["height", "data"];
            t.n(ts)()(Qr.a);
            var is, rs, ss = function(e) {
                    var n = e.height,
                        t = void 0 === n ? "300px" : n,
                        a = e.data,
                        i = void 0 === a ? [] : a;
                    Object(Ie.a)(e, as), console.log(i);
                    var s = Object(r.useRef)(),
                        o = {
                            chart: {
                                type: "variablepie",
                                backgroundColor: "transparent",
                                plotShadow: !1,
                                plotBorderWidth: null
                            },
                            title: {
                                text: ""
                            },
                            tooltip: {
                                headerFormat: "",
                                pointFormat: '<span style="color:{point.color}">\u25cf</span> <b> {point.name}</b> <b>${point.y}</b><br/>'
                            },
                            plotOptions: {
                                variablepie: {
                                    allowPointSelect: !0,
                                    cursor: "pointer",
                                    dataLabels: {
                                        enabled: !1
                                    },
                                    showInLegend: !1
                                }
                            },
                            series: [{
                                minPointSize: 10,
                                innerSize: "50%",
                                zMin: 0,
                                name: "countries",
                                data: i.map((function(e, n) {
                                    return {
                                        name: e.tokenSymbol,
                                        y: e.value,
                                        z: 200 - 30 * n
                                    }
                                }))
                            }],
                            credits: {
                                enabled: !1
                            },
                            colors: B.e
                        };
                    return Object(E.jsx)("div", {
                        children: Object(E.jsx)(ns.a, {
                            ref: s,
                            highcharts: Qr.a,
                            options: o,
                            containerProps: {
                                style: {
                                    height: t
                                }
                            }
                        })
                    })
                },
                os = m.d.div(is || (is = Object(d.a)(["\n  /* background: #101724; */\n  padding-bottom: 2rem;\n\n  /* @media (min-width: 1024px) { */\n  padding-left: 24px;\n  padding-right: 24px;\n  /* } */\n\n  .container {\n    width: 100%;\n    max-width: 1164px;\n    margin: auto;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    @media (min-width: 1024px) {\n      padding-left: 2rem;\n      padding-right: 2rem;\n    }\n  }\n\n  .section-title {\n    font-family: 'SpaceGrotesk';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 36px;\n    line-height: 150%;\n    color: #ffffff;\n\n    @media (min-width: 991px) {\n      font-size: 32px;\n      line-height: 48px;\n    }\n  }\n\n  div {\n    &.blinking {\n      @media (min-width: 991px) {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 37%;\n        height: 73%;\n        animation: 5s ease 0s infinite normal none running blinking;\n        background: linear-gradient(99.46deg, #fa00ff -10.9%, #00e0ff 97.13%, #2ad4f9 97.14%);\n        border-radius: 87px;\n        transform: rotate(25.82deg);\n      }\n    }\n  }\n\n  .section-container {\n    background: #000000;\n    margin-top: 1.5rem;\n    border-radius: 24px;\n  }\n\n  .section-1 {\n    /* @media (min-width: 991px) {\n      padding: 120px 0 30px 0;\n    } */\n\n    .content-left {\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      .section-title {\n        margin-bottom: 20px;\n      }\n\n      p {\n        font-weight: 700;\n        font-size: 14px;\n        line-height: 150%;\n        text-transform: uppercase;\n\n        background: linear-gradient(249.52deg, #00ffa3 2.69%, #dc1fff 122.97%);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        background-clip: text;\n        text-fill-color: transparent;\n      }\n    }\n\n    .content-right {\n      display: flex;\n      justify-content: end;\n      .wrap-image {\n        max-width: 350px;\n        position: relative;\n\n        @media (min-width: 991px) {\n          top: -20px;\n        }\n\n        img {\n          &:not(.background) {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n          }\n\n          &.background {\n            width: 100%;\n            opacity: 0;\n          }\n\n          &.bg {\n            width: 53%;\n          }\n\n          &.bg-linear {\n            width: 75%;\n            animation: linerShowHide 5s infinite;\n          }\n\n          &.animal {\n            top: 53%;\n            width: 45%;\n            left: 56%;\n            z-index: 2;\n          }\n\n          &.coin-1 {\n            width: 15%;\n            z-index: 2;\n            transform: translate(-233%, -269%);\n            --transformX: -233%;\n            --transformY: -269%;\n            animation: upAndDown 5s infinite;\n          }\n\n          &.coin-2 {\n            width: 28%;\n            z-index: 2;\n            transform: translate(94%, -85%);\n            --transformX: 94%;\n            --transformY: -85%;\n            animation: upAndDown 2s infinite;\n          }\n\n          &.coin-3 {\n            width: 22%;\n            z-index: 2;\n            transform: translate(-175%, 23%);\n            --transformX: -175%;\n            --transformY: 23%;\n            animation: upAndDown 10s infinite;\n          }\n\n          &.coin-4 {\n            width: 15%;\n            z-index: 2;\n            transform: translate(153%, 123%);\n            --transformX: 153%;\n            --transformY: 123%;\n            animation: upAndDown 3s infinite;\n          }\n\n          &.elip-1 {\n            width: 90%;\n            transform: translate(-50%, -40%);\n          }\n\n          &.elip-2 {\n            width: 90%;\n            transform: translate(-50%, -60%);\n          }\n        }\n      }\n    }\n  }\n\n  .transition-all {\n    transition: all 0.7s;\n  }\n"]))),
                cs = (m.d.div(rs || (rs = Object(d.a)(["\n  text-align: center;\n\n  width: 100%;\n  height: 100%;\n  min-height: 400px;\n  padding: 0 8px 40px;\n\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n\n  z-index: 1;\n\n  .empty-text {\n    color: #5f440f91;\n    font-family: iCiel Cadena;\n    font-size: 5vw;\n    font-weight: 900;\n    white-space: nowrap;\n\n    ", " {\n      font-size: 3vw;\n    }\n  }\n\n  button {\n    margin-top: 28px;\n    border-radius: 13px;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.md
                })), [{
                    label: "Daily",
                    value: "1-week"
                }, {
                    label: "Weekly",
                    value: "1-month"
                }, {
                    label: "Monthly",
                    value: "1-year"
                }]),
                ls = function(e) {
                    var n = e.color,
                        t = e.data;
                    return Object(E.jsxs)(st, {
                        alignItems: "center",
                        children: [Object(E.jsx)(at, {
                            height: "13px",
                            width: "27px",
                            background: n,
                            borderRadius: "100px"
                        }), Object(E.jsx)(Rt, {
                            bold: !0,
                            fontSize: "18px",
                            ml: "1rem",
                            children: t.tokenSymbol
                        })]
                    })
                },
                us = function() {
                    var e = Object(Be.g)(),
                        n = Object(r.useState)(cs[0].value),
                        t = Object(g.a)(n, 2),
                        a = (t[0], t[1], Object(f.d)().account),
                        i = Object(h.c)((function(e) {
                            return e.balances.balances
                        })),
                        s = (cs.map((function(e) {
                            return {
                                value: e.value,
                                label: Object(E.jsx)(Rt, {
                                    ml: "8px",
                                    children: e.label
                                })
                            }
                        })), Object(r.useMemo)((function() {
                            return (i.data || []).filter((function(e) {
                                return e.balance && e.value
                            })).sort((function(e, n) {
                                return e.balance > n.balance ? -1 : 1
                            }))
                        }), [i.data])),
                        o = Object(r.useMemo)((function() {
                            return i.data.reduce((function(e, n) {
                                var t = Object(j.a)({}, e);
                                return t.totalBalance = (t.totalBalance || 0) + n.value, t.totalChange = (t.totalChange || 0) + (n.value ? (n.priceChangePercentage || 0) * n.value / 100 : 0), t.balanceRef = t.balanceRef || {}, t.balanceRef[n.tokenSymbol] = n, t
                            }), {})
                        }), [i.data]),
                        c = o.totalBalance,
                        l = o.totalChange,
                        u = (o.balanceRef, a && "".concat(a.substring(0, 4), "...").concat(a.substring(a.length - 4)), l >= 0);
                    return Object(E.jsxs)(os, {
                        children: [Object(E.jsx)("section", {
                            className: "section-container section-1",
                            style: {
                                marginTop: 0
                            },
                            children: Object(E.jsx)("div", {
                                className: "container",
                                children: Object(E.jsxs)(Vn.a, {
                                    gutter: 24,
                                    children: [Object(E.jsx)(Zn.a, {
                                        span: 24,
                                        lg: {
                                            span: 12
                                        },
                                        children: Object(E.jsxs)("div", {
                                            className: "content-left",
                                            children: [Object(E.jsx)("p", {
                                                children: "web3.0 wallet application"
                                            }), Object(E.jsx)("h1", {
                                                className: "section-title",
                                                children: "HAPPYwallet V1"
                                            }), Object(E.jsx)(st, {
                                                children: Object(E.jsx)(nt, {
                                                    children: "Exchange"
                                                })
                                            })]
                                        })
                                    }), Object(E.jsx)(Zn.a, {
                                        span: 24,
                                        lg: {
                                            span: 12
                                        },
                                        children: Object(E.jsx)("div", {
                                            className: "content-right",
                                            children: Object(E.jsxs)("div", {
                                                className: "wrap-image",
                                                children: [Object(E.jsx)("img", {
                                                    className: "background",
                                                    src: "/images/section-1/bg-transparent.png",
                                                    alt: ""
                                                }), Object(E.jsx)("img", {
                                                    className: "bg-linear",
                                                    src: "/images/section-1/bg-linear.png",
                                                    alt: ""
                                                }), Object(E.jsx)("img", {
                                                    className: "coin-2",
                                                    src: "/images/section-1/coin-2.1.png",
                                                    alt: ""
                                                }), Object(E.jsx)("img", {
                                                    className: "coin-3",
                                                    src: "/images/section-1/coin-3.1.png",
                                                    alt: ""
                                                }), Object(E.jsx)("img", {
                                                    className: "animal",
                                                    src: "/images/section-1/animal-2.png",
                                                    alt: ""
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })
                        }), Object(E.jsx)("section", {
                            className: "section-container",
                            children: Object(E.jsxs)("div", {
                                className: "container",
                                children: [Object(E.jsx)(st, {
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    display: ["block", "block", "flex", "flex"],
                                    children: Object(E.jsx)(Rt, {
                                        bold: !0,
                                        fontSize: "24px",
                                        children: "Portfolio Overview"
                                    })
                                }), Object(E.jsx)(at, {
                                    mt: "2rem",
                                    children: Object(E.jsxs)(Vn.a, {
                                        children: [Object(E.jsx)(Zn.a, {
                                            span: 24,
                                            lg: {
                                                span: 12
                                            },
                                            children: Object(E.jsxs)(at, {
                                                position: "relative",
                                                children: [Object(E.jsx)(at, {
                                                    position: "relative",
                                                    zIndex: "1",
                                                    children: Object(E.jsx)(ss, {
                                                        data: s
                                                    })
                                                }), Object(E.jsx)("img", {
                                                    src: "/images/chart/head-mask.png",
                                                    alt: "",
                                                    width: "20%",
                                                    style: {
                                                        position: "absolute",
                                                        top: "50%",
                                                        left: "50%",
                                                        transform: "translate(-50%, -50%)",
                                                        zIndex: 0
                                                    }
                                                })]
                                            })
                                        }), Object(E.jsxs)(Zn.a, {
                                            span: 24,
                                            lg: {
                                                span: 12
                                            },
                                            children: [Object(E.jsx)(Rt, {
                                                children: "Total balance:"
                                            }), Object(E.jsxs)(st, {
                                                alignItems: "center",
                                                mt: "1rem",
                                                children: [Object(E.jsxs)(Rt, {
                                                    color: "#01FFA3",
                                                    bold: !0,
                                                    fontSize: "24px",
                                                    children: ["$", Ei(c)]
                                                }), Object(E.jsxs)(st, {
                                                    ml: "2rem",
                                                    alignItems: "center",
                                                    children: [Object(E.jsx)(Mi, {
                                                        className: u ? "rotate" : "",
                                                        fill: u ? "#00E39A" : "#FF4842"
                                                    }), Object(E.jsxs)(Rt, {
                                                        bold: !0,
                                                        fontSize: "12px",
                                                        pl: "0.25rem",
                                                        children: ["$", Ei(Math.abs(l)), " (", Ei(Math.abs(l / (c - l) * 100)), "%)"]
                                                    })]
                                                })]
                                            }), Object(E.jsx)(at, {
                                                mt: "2rem",
                                                children: Object(E.jsx)(Vn.a, {
                                                    gutter: 12,
                                                    children: s.map((function(e, n) {
                                                        return Object(E.jsx)(Zn.a, {
                                                            span: 24,
                                                            lg: {
                                                                span: 12
                                                            },
                                                            children: Object(E.jsx)(ls, {
                                                                color: B.e[n % B.e.length],
                                                                data: e
                                                            })
                                                        }, n)
                                                    }))
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })
                        }), Object(E.jsxs)("section", {
                            style: {
                                marginTop: "1rem"
                            },
                            children: [Object(E.jsx)(Rt, {
                                bold: !0,
                                fontSize: "24px",
                                children: "My Portfolio"
                            }), Object(E.jsx)(Jr, {
                                dataSource: (null === i || void 0 === i ? void 0 : i.data) || [],
                                columns: [{
                                    title: "Coin",
                                    dataIndex: "Coin",
                                    key: "Coin",
                                    render: function(e, n) {
                                        return Object(E.jsxs)(st, {
                                            alignItems: "center",
                                            children: [Object(E.jsx)("img", {
                                                src: n.icon || "/images/none_logo.png",
                                                width: "49",
                                                alt: ""
                                            }), Object(E.jsxs)(at, {
                                                ml: "0.5rem",
                                                children: [Object(E.jsxs)(st, {
                                                    children: [Object(E.jsx)(Rt, {
                                                        bold: !0,
                                                        fontSize: "18px",
                                                        children: n.tokenSymbol
                                                    }), Object(E.jsx)(Rt, {
                                                        bold: !0,
                                                        fontSize: "18px",
                                                        color: "secondary",
                                                        children: "/USDT"
                                                    })]
                                                }), Object(E.jsx)(Rt, {
                                                    small: !0,
                                                    children: n.tokenName
                                                })]
                                            })]
                                        })
                                    }
                                }, {
                                    title: "Value",
                                    dataIndex: "Value",
                                    key: "Value",
                                    align: "right",
                                    render: function(e, n) {
                                        return Object(E.jsxs)(Rt, {
                                            bold: !0,
                                            fontSize: "18px",
                                            children: ["$", Ei(null === n || void 0 === n ? void 0 : n.value)]
                                        })
                                    }
                                }, {
                                    title: "Current price",
                                    dataIndex: "price",
                                    key: "price",
                                    align: "right",
                                    render: function(e, n) {
                                        var t = null !== n && void 0 !== n && n.priceChange ? (null === n || void 0 === n ? void 0 : n.priceChange) > 0 : null;
                                        return Object(E.jsxs)(st, {
                                            flexDirection: "column",
                                            alignItems: "end",
                                            children: [Object(E.jsx)(Rt, {
                                                bold: !0,
                                                fontSize: "18px",
                                                children: n.price ? "$".concat(Ei(n.price)) : "-"
                                            }), null !== t && Object(E.jsxs)(st, {
                                                children: [Object(E.jsx)(Mi, {
                                                    fill: t ? "#00E39A" : "#FF4842",
                                                    className: t ? "rotate" : ""
                                                }), Object(E.jsxs)(Rt, {
                                                    color: t ? "buy" : "sell",
                                                    ml: "0.25rem",
                                                    fontSize: "12px",
                                                    nowrap: !0,
                                                    children: ["$", Math.abs(Ei(null === n || void 0 === n ? void 0 : n.priceChange)), " (", Math.abs(Ei(null === n || void 0 === n ? void 0 : n.priceChangePercentage)), "%)"]
                                                })]
                                            })]
                                        })
                                    }
                                }, {
                                    title: "Amount",
                                    dataIndex: "Amount",
                                    key: "Amount",
                                    align: "right",
                                    render: function(e, n) {
                                        return Object(E.jsx)(Rt, {
                                            bold: !0,
                                            fontSize: "18px",
                                            children: Ei(null === n || void 0 === n ? void 0 : n.balance)
                                        })
                                    }
                                }, {
                                    title: "Action",
                                    dataIndex: "Action",
                                    key: "Action",
                                    render: function(n, t) {
                                        return Object(E.jsxs)(st, {
                                            children: [Object(E.jsx)(at, {
                                                children: Object(E.jsx)(nt, {
                                                    background: "#00E39A",
                                                    borderRadius: "5px",
                                                    width: "107px",
                                                    onClick: function() {
                                                        e.push({
                                                            pathname: "/deposit",
                                                            state: {
                                                                token: null === t || void 0 === t ? void 0 : t.tokenSymbol
                                                            }
                                                        })
                                                    },
                                                    children: Object(E.jsxs)(st, {
                                                        alignItems: "center",
                                                        children: [Object(E.jsx)(at, {
                                                            children: Object(E.jsx)("img", {
                                                                src: "/images/icons/deposit.png",
                                                                alt: ""
                                                            })
                                                        }), Object(E.jsx)(Rt, {
                                                            pl: "0.5rem",
                                                            bold: !0,
                                                            small: !0,
                                                            children: "Deposit"
                                                        })]
                                                    })
                                                })
                                            }), Object(E.jsx)(at, {
                                                ml: "0.5rem",
                                                children: Object(E.jsx)(nt, {
                                                    background: "#232323",
                                                    borderRadius: "5px",
                                                    width: "107px",
                                                    onClick: function() {
                                                        e.push({
                                                            pathname: "/withdraw",
                                                            state: {
                                                                token: null === t || void 0 === t ? void 0 : t.tokenSymbol
                                                            }
                                                        })
                                                    },
                                                    children: Object(E.jsxs)(st, {
                                                        alignItems: "center",
                                                        children: [Object(E.jsx)(at, {
                                                            className: "rotate",
                                                            children: Object(E.jsx)("img", {
                                                                src: "/images/icons/deposit.png",
                                                                alt: ""
                                                            })
                                                        }), Object(E.jsx)(Rt, {
                                                            pl: "0.5rem",
                                                            bold: !0,
                                                            small: !0,
                                                            children: "Withdraw"
                                                        })]
                                                    })
                                                })
                                            })]
                                        })
                                    }
                                }]
                            })]
                        })]
                    })
                },
                ps = ["getData", "scrollable", "children"];
            var ds = function(e) {
                var n = e.getData,
                    t = e.scrollable,
                    a = void 0 !== t && t,
                    i = e.children,
                    s = Object(Ie.a)(e, ps),
                    o = Object(r.useState)(!0),
                    c = Object(g.a)(o, 2),
                    l = c[0],
                    u = c[1],
                    p = Object(r.useCallback)((function(e) {
                        e && n && n()
                    }), [n]);
                return Object(r.useEffect)((function() {
                    p(l), u(!1)
                }), [p, l]), Object(r.useEffect)((function() {
                    var e = document.getElementById("list");
                    e && (a ? e.addEventListener("scroll", (function(e) {
                        var n = e.target;
                        n && n.scrollTop + n.clientHeight === n.scrollHeight && u(!0)
                    })) : window.addEventListener("scroll", (function() {
                        window.scrollY + window.innerHeight === e.clientHeight + e.offsetTop && u(!0)
                    })))
                }), [a]), Object(r.useEffect)((function() {
                    var e = document.getElementById("list");
                    e && e.clientHeight <= window.innerHeight && e.clientHeight && u(!0)
                }), [s.state]), Object(E.jsx)("div", {
                    id: "list",
                    children: i
                })
            };
            Oi.a.extend(wi.a);
            var ms, bs, ys = function(e) {
                var n = e.columns,
                    t = void 0 === n ? null : n,
                    a = e.limit,
                    i = void 0 === a ? 1e3 : a,
                    s = Object(h.c)((function(e) {
                        return e.transactions.txHistory
                    })).data,
                    o = Object(f.d)().account,
                    c = Object(h.c)((function(e) {
                        return e.balances.balances
                    })),
                    l = Object(r.useMemo)((function() {
                        return c.data.reduce((function(e, n) {
                            return Object(j.a)(Object(j.a)({}, e), {}, Object(on.a)({}, n.tokenSymbol, n))
                        }), {})
                    }), [c.data]);
                return Object(E.jsx)(Jr, {
                    dataSource: s.slice(0, i).map((function(e) {
                        var n, t = !e.to || null !== o && void 0 !== o && null !== (n = o.toLowerCase()) && void 0 !== n && n.includes(e.to.toLowerCase()) ? e.to !== e.from ? "+" : "" : "-";
                        return {
                            key: e.tokenSymbol,
                            time: Oi.a.unix(e.timeStamp).fromNow(),
                            action: "-" === t ? "Sell" : "+" === t ? "Buy" : "-",
                            network: "BSC",
                            token: e.tokenSymbol,
                            amount: Pi(e.value, e.tokenDecimal),
                            TxID: Ci("+" === t ? e.from : e.to),
                            hash: e.hash
                        }
                    })),
                    columns: t || [{
                        title: "Time",
                        dataIndex: "time",
                        key: "time"
                    }, {
                        title: "Action",
                        dataIndex: "action",
                        key: "action",
                        align: "center"
                    }, {
                        title: "Network",
                        dataIndex: "network",
                        key: "network",
                        align: "center"
                    }, {
                        title: "Token",
                        dataIndex: "token",
                        key: "token",
                        render: function(e) {
                            var n;
                            return Object(E.jsxs)(st, {
                                alignItems: "center",
                                children: [Object(E.jsx)("img", {
                                    src: (null === (n = l[e]) || void 0 === n ? void 0 : n.icon) || "/images/none_logo.png",
                                    width: "21",
                                    alt: ""
                                }), Object(E.jsx)(at, {
                                    ml: "0.5rem",
                                    children: Object(E.jsx)(Rt, {
                                        children: e || "SF"
                                    })
                                })]
                            })
                        }
                    }, {
                        title: "Amount",
                        dataIndex: "amount",
                        key: "amount",
                        align: "center"
                    }, {
                        title: "TxID",
                        dataIndex: "TxID",
                        key: "TxID",
                        align: "center",
                        render: function(e, n) {
                            return Object(E.jsxs)(st, {
                                alignItems: "center",
                                children: [Object(E.jsx)(at, {
                                    mr: "0.5rem",
                                    children: Object(E.jsx)(Rt, {
                                        children: e
                                    })
                                }), Object(E.jsx)(pa, {
                                    href: "".concat(B.n, "/tx/").concat(n.hash),
                                    children: Object(E.jsx)("img", {
                                        src: "/images/icons/external.png",
                                        width: "12",
                                        alt: ""
                                    })
                                })]
                            })
                        }
                    }, {
                        title: "Status",
                        dataIndex: "Status",
                        key: "Status",
                        render: function() {
                            return Object(E.jsx)(nt, {
                                background: "#D5F3E9",
                                borderRadius: "5px",
                                width: "95px",
                                children: Object(E.jsx)(Rt, {
                                    color: "#44C99C",
                                    bold: !0,
                                    fontSize: "12px",
                                    children: "Completed"
                                })
                            })
                        }
                    }]
                })
            };
            Oi.a.extend(wi.a);
            var fs = m.d.div(ms || (ms = Object(d.a)(["\n  /* background: #101724; */\n  padding-bottom: 2rem;\n  padding-left: 24px;\n  padding-right: 24px;\n\n  .container {\n    width: 100%;\n    max-width: 1164px;\n    margin: auto;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    @media (min-width: 1024px) {\n      padding-left: 2rem;\n      padding-right: 2rem;\n    }\n  }\n\n  .section-title {\n    font-family: 'SpaceGrotesk';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 36px;\n    line-height: 150%;\n    color: #ffffff;\n\n    @media (min-width: 991px) {\n      font-size: 32px;\n      line-height: 48px;\n    }\n  }\n\n  div {\n    &.blinking {\n      @media (min-width: 991px) {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 37%;\n        height: 73%;\n        animation: 5s ease 0s infinite normal none running blinking;\n        background: linear-gradient(99.46deg, #fa00ff -10.9%, #00e0ff 97.13%, #2ad4f9 97.14%);\n        border-radius: 87px;\n        transform: rotate(25.82deg);\n      }\n    }\n  }\n\n  .section-container {\n    background: #000000;\n    margin-top: 1.5rem;\n    border-radius: 24px;\n  }\n\n  .section-1 {\n    /* @media (min-width: 991px) {\n      padding: 120px 0 30px 0;\n    } */\n\n    .content-left {\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      .section-title {\n        margin-bottom: 20px;\n      }\n\n      p {\n        font-weight: 700;\n        font-size: 14px;\n        line-height: 150%;\n        text-transform: uppercase;\n\n        background: linear-gradient(249.52deg, #00ffa3 2.69%, #dc1fff 122.97%);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        background-clip: text;\n        text-fill-color: transparent;\n      }\n    }\n\n    .content-right {\n      display: flex;\n      justify-content: end;\n      .wrap-image {\n        max-width: 350px;\n        position: relative;\n\n        @media (min-width: 991px) {\n          top: -20px;\n        }\n\n        img {\n          &:not(.background) {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n          }\n\n          &.background {\n            width: 100%;\n            opacity: 0;\n          }\n\n          &.bg {\n            width: 53%;\n          }\n\n          &.bg-linear {\n            width: 75%;\n            animation: linerShowHide 5s infinite;\n          }\n\n          &.animal {\n            top: 53%;\n            width: 45%;\n            left: 56%;\n            z-index: 2;\n          }\n\n          &.coin-1 {\n            width: 15%;\n            z-index: 2;\n            transform: translate(-233%, -269%);\n            --transformX: -233%;\n            --transformY: -269%;\n            animation: upAndDown 5s infinite;\n          }\n\n          &.coin-2 {\n            width: 28%;\n            z-index: 2;\n            transform: translate(94%, -85%);\n            --transformX: 94%;\n            --transformY: -85%;\n            animation: upAndDown 2s infinite;\n          }\n\n          &.coin-3 {\n            width: 22%;\n            z-index: 2;\n            transform: translate(-175%, 23%);\n            --transformX: -175%;\n            --transformY: 23%;\n            animation: upAndDown 10s infinite;\n          }\n\n          &.coin-4 {\n            width: 15%;\n            z-index: 2;\n            transform: translate(153%, 123%);\n            --transformX: 153%;\n            --transformY: 123%;\n            animation: upAndDown 3s infinite;\n          }\n\n          &.elip-1 {\n            width: 90%;\n            transform: translate(-50%, -40%);\n          }\n\n          &.elip-2 {\n            width: 90%;\n            transform: translate(-50%, -60%);\n          }\n        }\n      }\n    }\n  }\n\n  .transition-all {\n    transition: all 0.7s;\n  }\n"]))),
                hs = (m.d.div(bs || (bs = Object(d.a)(["\n  text-align: center;\n\n  width: 100%;\n  height: 100%;\n  min-height: 400px;\n  padding: 0 8px 40px;\n\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n\n  z-index: 1;\n\n  .empty-text {\n    color: #5f440f91;\n    font-family: iCiel Cadena;\n    font-size: 5vw;\n    font-weight: 900;\n    white-space: nowrap;\n\n    ", " {\n      font-size: 3vw;\n    }\n  }\n\n  button {\n    margin-top: 28px;\n    border-radius: 13px;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.md
                })), [{
                    label: "All",
                    value: "all"
                }]),
                xs = function() {
                    var e = Object(r.useState)(hs[0].value),
                        n = Object(g.a)(e, 2),
                        t = (n[0], n[1]),
                        a = Object(f.d)().account,
                        i = Object(r.useState)({
                            module: "account",
                            action: "tokentx",
                            page: 1,
                            offset: 10,
                            address: void 0,
                            startblock: 0,
                            sort: "desc"
                        }),
                        s = Object(g.a)(i, 2),
                        o = (s[0], s[1]);
                    Object(r.useEffect)((function() {
                        a && o((function(e) {
                            return Object(j.a)(Object(j.a)({}, e), {}, {
                                address: a
                            })
                        }))
                    }), [a]);
                    var c = hs.map((function(e) {
                        return {
                            value: e.value,
                            label: Object(E.jsx)(Rt, {
                                ml: "8px",
                                children: e.label
                            })
                        }
                    }));
                    return Object(E.jsx)(fs, {
                        children: Object(E.jsxs)("section", {
                            style: {
                                marginTop: "1rem"
                            },
                            children: [Object(E.jsxs)(st, {
                                justifyContent: "space-between",
                                alignItems: "center",
                                children: [Object(E.jsx)(Rt, {
                                    bold: !0,
                                    fontSize: "24px",
                                    children: "History"
                                }), Object(E.jsx)(st, {
                                    flex: 1,
                                    justifyContent: "end",
                                    children: Object(E.jsx)(lr, {
                                        options: c,
                                        onChange: function(e) {
                                            return t(e)
                                        },
                                        defaultValue: c[0]
                                    })
                                })]
                            }), Object(E.jsx)(ds, {
                                getData: function() {},
                                children: Object(E.jsx)(ys, {})
                            })]
                        })
                    })
                };

            function js(e) {
                return gs.apply(this, arguments)
            }

            function gs() {
                return (gs = Object(x.a)(O.a.mark((function e(n) {
                    var t, a;
                    return O.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = n.split("-"), a = Math.round(Oi()().diff(Oi()().subtract(t[0], t[1]), "hours") / 24), e.abrupt("return", fetch("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=".concat(a, "&interval=daily")).then((function(e) {
                                    return e.json()
                                })).then((function(e) {
                                    return e
                                })).catch((function() {})));
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var Ts = function(e) {
                    var n = Object(r.useState)(),
                        t = Object(g.a)(n, 2),
                        a = t[0],
                        i = t[1],
                        s = Object(r.useCallback)(Object(x.a)(O.a.mark((function n() {
                            var t;
                            return O.a.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, js(e);
                                    case 2:
                                        t = n.sent, i(t);
                                    case 4:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        }))), [e]);
                    return Object(r.useEffect)((function() {
                        s()
                    }), [s]), a
                },
                Os = ["height", "range"];
            var vs, ws, As, _s = function(e) {
                    var n = e.height,
                        t = void 0 === n ? "200px" : n,
                        a = e.range,
                        i = void 0 === a ? "1-month" : a,
                        r = (Object(Ie.a)(e, Os), Ts(i)),
                        s = {
                            chart: {
                                zoomType: "x",
                                backgroundColor: "transparent"
                            },
                            title: {
                                text: ""
                            },
                            xAxis: {
                                type: "datetime"
                            },
                            yAxis: {
                                title: {
                                    text: ""
                                },
                                gridLineWidth: 0
                            },
                            legend: {
                                enabled: !1
                            },
                            plotOptions: {
                                areaspline: {
                                    fillColor: {
                                        linearGradient: {
                                            x1: 0,
                                            y1: 0,
                                            x2: 0,
                                            y2: 1
                                        },
                                        stops: [
                                            [0, "rgba(64, 186, 255, 0.17)"],
                                            [1, "rgba(64, 186, 255, 0)"]
                                        ]
                                    },
                                    marker: {
                                        enabled: !1,
                                        radius: 7
                                    },
                                    lineWidth: 2,
                                    states: {
                                        hover: {
                                            enabled: !0
                                        }
                                    },
                                    threshold: null,
                                    lineColor: "#00E39A",
                                    color: "#00E39A"
                                }
                            },
                            series: [{
                                type: "areaspline",
                                name: "BTC to USD",
                                data: (null === r || void 0 === r ? void 0 : r.prices) || []
                            }],
                            credits: {
                                enabled: !1
                            }
                        };
                    return Object(E.jsx)("div", {
                        children: Object(E.jsx)(ns.a, {
                            highcharts: Qr.a,
                            options: s,
                            containerProps: {
                                style: {
                                    height: t
                                }
                            }
                        })
                    })
                },
                Cs = m.d.div(vs || (vs = Object(d.a)(["\n  /* background: #101724; */\n  padding-bottom: 2rem;\n\n  padding-left: 24px;\n  padding-right: 24px;\n\n  .container {\n    width: 100%;\n    max-width: 1164px;\n    margin: auto;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    @media (min-width: 1024px) {\n      padding-left: 2rem;\n      padding-right: 2rem;\n    }\n  }\n\n  .section-title {\n    font-family: 'SpaceGrotesk';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 36px;\n    line-height: 150%;\n    color: #ffffff;\n\n    @media (min-width: 991px) {\n      font-size: 32px;\n      line-height: 48px;\n    }\n  }\n\n  div {\n    &.blinking {\n      @media (min-width: 991px) {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 37%;\n        height: 73%;\n        animation: 5s ease 0s infinite normal none running blinking;\n        background: linear-gradient(99.46deg, #fa00ff -10.9%, #00e0ff 97.13%, #2ad4f9 97.14%);\n        border-radius: 87px;\n        transform: rotate(25.82deg);\n      }\n    }\n  }\n\n  .section-container {\n    background: #000000;\n    margin-top: 1.5rem;\n    border-radius: 24px;\n  }\n\n  .section-1 {\n    /* @media (min-width: 991px) {\n      padding: 120px 0 30px 0;\n    } */\n\n    .content-left {\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      .section-title {\n        margin-bottom: 20px;\n      }\n\n      p {\n        font-weight: 700;\n        font-size: 14px;\n        line-height: 150%;\n        text-transform: uppercase;\n\n        background: linear-gradient(249.52deg, #00ffa3 2.69%, #dc1fff 122.97%);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        background-clip: text;\n        text-fill-color: transparent;\n      }\n    }\n\n    .content-right {\n      display: flex;\n      justify-content: end;\n      .wrap-image {\n        max-width: 350px;\n        position: relative;\n\n        @media (min-width: 991px) {\n          top: -20px;\n        }\n\n        img {\n          &:not(.background) {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n          }\n\n          &.background {\n            width: 100%;\n            opacity: 0;\n          }\n\n          &.bg {\n            width: 53%;\n          }\n\n          &.bg-linear {\n            width: 75%;\n            animation: linerShowHide 5s infinite;\n          }\n\n          &.animal {\n            top: 53%;\n            width: 45%;\n            left: 56%;\n            z-index: 2;\n          }\n\n          &.coin-1 {\n            width: 15%;\n            z-index: 2;\n            transform: translate(-233%, -269%);\n            --transformX: -233%;\n            --transformY: -269%;\n            animation: upAndDown 5s infinite;\n          }\n\n          &.coin-2 {\n            width: 28%;\n            z-index: 2;\n            transform: translate(94%, -85%);\n            --transformX: 94%;\n            --transformY: -85%;\n            animation: upAndDown 2s infinite;\n          }\n\n          &.coin-3 {\n            width: 22%;\n            z-index: 2;\n            transform: translate(-175%, 23%);\n            --transformX: -175%;\n            --transformY: 23%;\n            animation: upAndDown 10s infinite;\n          }\n\n          &.coin-4 {\n            width: 15%;\n            z-index: 2;\n            transform: translate(153%, 123%);\n            --transformX: 153%;\n            --transformY: 123%;\n            animation: upAndDown 3s infinite;\n          }\n\n          &.elip-1 {\n            width: 90%;\n            transform: translate(-50%, -40%);\n          }\n\n          &.elip-2 {\n            width: 90%;\n            transform: translate(-50%, -60%);\n          }\n        }\n      }\n    }\n  }\n\n  .transition-all {\n    transition: all 0.7s;\n  }\n"]))),
                ks = (m.d.div(ws || (ws = Object(d.a)(["\n  text-align: center;\n\n  width: 100%;\n  height: 100%;\n  min-height: 400px;\n  padding: 0 8px 40px;\n\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n\n  z-index: 1;\n\n  .empty-text {\n    color: #5f440f91;\n    font-family: iCiel Cadena;\n    font-size: 5vw;\n    font-weight: 900;\n    white-space: nowrap;\n\n    ", " {\n      font-size: 3vw;\n    }\n  }\n\n  button {\n    margin-top: 28px;\n    border-radius: 13px;\n  }\n"])), (function(e) {
                    return e.theme.mediaQueries.md
                })), [{
                    label: "BNB",
                    value: "BNB",
                    icon: "BNB.png"
                }, {
                    label: "USDT",
                    value: "USDT",
                    icon: "USDT.png"
                }, {
                    label: "BUSD",
                    value: "BUSD",
                    icon: "BUSD.png"
                }]),
                Es = function(e) {
                    var n = e.token,
                        t = void 0 === n ? null : n,
                        a = ks.map((function(e) {
                            return {
                                value: e.value,
                                label: Object(E.jsxs)(st, {
                                    alignItems: "center",
                                    children: [e.icon && Object(E.jsx)("div", {
                                        children: Object(E.jsx)("img", {
                                            alt: "",
                                            src: "/images/symbols/".concat(e.icon),
                                            width: "16"
                                        })
                                    }), Object(E.jsx)(Rt, {
                                        ml: "8px",
                                        children: e.label
                                    })]
                                })
                            }
                        }));
                    return Object(E.jsx)(at, {
                        borderBottom: "1px solid rgba(185, 193, 217, 0.2)",
                        pb: "0.15rem",
                        children: Object(E.jsxs)(st, {
                            children: [Object(E.jsx)(at, {
                                children: t ? Object(E.jsx)(E.Fragment, {
                                    children: ["SF" === t ? {
                                        label: "SF",
                                        value: "SF",
                                        logo: "/images/logo.png"
                                    } : ks.find((function(e) {
                                        return e.value === t
                                    }))].map((function(e) {
                                        return Object(E.jsxs)(st, {
                                            alignItems: "center",
                                            children: [Object(E.jsx)("div", {
                                                children: Object(E.jsx)("img", {
                                                    alt: "",
                                                    src: (null === e || void 0 === e ? void 0 : e.logo) || "/images/symbols/".concat(e.icon),
                                                    width: "16"
                                                })
                                            }), Object(E.jsx)(Rt, {
                                                ml: "8px",
                                                children: e.label
                                            })]
                                        }, e.value)
                                    }))
                                }) : Object(E.jsx)(lr, {
                                    options: a,
                                    defaultValue: a[0],
                                    formItemProps: {
                                        border: "none"
                                    }
                                })
                            }), Object(E.jsx)(st, {
                                flex: "1",
                                children: Object(E.jsx)(va, {
                                    border: "none",
                                    type: "number",
                                    onChange: function(e) {},
                                    style: {
                                        textAlign: "right"
                                    }
                                })
                            })]
                        })
                    })
                },
                Ps = function() {
                    var e = Object(r.useState)(ks[0].value),
                        n = Object(g.a)(e, 2),
                        t = (n[0], n[1]),
                        a = Object(f.d)().account;
                    return Object(E.jsxs)(Cs, {
                        children: [Object(E.jsx)("section", {
                            style: {
                                marginTop: "1rem"
                            },
                            children: Object(E.jsxs)(st, {
                                justifyContent: "space-between",
                                alignItems: "center",
                                children: [Object(E.jsx)(Rt, {
                                    bold: !0,
                                    fontSize: "24px",
                                    children: "Trading"
                                }), Object(E.jsx)(st, {
                                    flex: 1,
                                    justifyContent: "end",
                                    children: Object(E.jsx)("img", {
                                        src: "/images/icons/setting.png",
                                        alt: "",
                                        width: "20"
                                    })
                                })]
                            })
                        }), Object(E.jsx)("section", {
                            className: "section-container",
                            children: Object(E.jsxs)("div", {
                                className: "container",
                                children: [Object(E.jsxs)(st, {
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    display: ["block", "block", "flex", "flex"],
                                    mb: "1rem",
                                    children: [Object(E.jsxs)(st, {
                                        alignItems: "center",
                                        children: [Object(E.jsxs)(st, {
                                            alignItems: "center",
                                            children: [Object(E.jsx)("img", {
                                                src: "/images/logo.ico",
                                                width: "49",
                                                alt: ""
                                            }), Object(E.jsxs)(at, {
                                                ml: "0.5rem",
                                                children: [Object(E.jsxs)(st, {
                                                    children: [Object(E.jsx)(Rt, {
                                                        bold: !0,
                                                        fontSize: "18px",
                                                        children: "SF"
                                                    }), Object(E.jsx)(Rt, {
                                                        bold: !0,
                                                        fontSize: "18px",
                                                        color: "secondary",
                                                        children: "/USDT"
                                                    })]
                                                }), Object(E.jsx)(Rt, {
                                                    small: !0,
                                                    color: "secondary",
                                                    children: "HAPPYwallet"
                                                })]
                                            })]
                                        }), Object(E.jsxs)(st, {
                                            flexDirection: "column",
                                            alignItems: "end",
                                            ml: "2rem",
                                            children: [Object(E.jsx)(Rt, {
                                                bold: !0,
                                                fontSize: "18px",
                                                children: "$10,25"
                                            }), Object(E.jsxs)(st, {
                                                children: [Object(E.jsx)(Mi, {
                                                    fill: "#00E39A",
                                                    className: "rotate"
                                                }), Object(E.jsx)(Rt, {
                                                    color: "buy",
                                                    ml: "0.25rem",
                                                    fontSize: "12px",
                                                    nowrap: !0,
                                                    children: "$32 (2%)"
                                                })]
                                            })]
                                        })]
                                    }), Object(E.jsx)(st, {
                                        flex: 1,
                                        justifyContent: "end",
                                        children: Object(E.jsx)(lr, {
                                            options: [{
                                                value: "Weekly",
                                                label: "Weekly"
                                            }],
                                            onChange: function(e) {
                                                return t(e)
                                            }
                                        })
                                    })]
                                }), Object(E.jsx)(_s, {})]
                            })
                        }), Object(E.jsx)("section", {
                            className: "container",
                            style: {
                                marginTop: "1.5rem"
                            },
                            children: Object(E.jsxs)(Vn.a, {
                                gutter: [24, 24],
                                children: [Object(E.jsxs)(Zn.a, {
                                    xs: 24,
                                    md: 12,
                                    children: [Object(E.jsx)(Rt, {
                                        bold: !0,
                                        fontSize: "20px",
                                        children: "Buy"
                                    }), Object(E.jsxs)(at, {
                                        mt: "1.5rem",
                                        children: [Object(E.jsxs)(st, {
                                            justifyContent: "space-between",
                                            children: [Object(E.jsx)(Rt, {
                                                small: !0,
                                                color: "secondary",
                                                children: "From"
                                            }), Object(E.jsx)(st, {
                                                children: [25, 50, 100].map((function(e) {
                                                    return Object(E.jsx)(at, {
                                                        ml: "1rem",
                                                        children: Object(E.jsxs)(Rt, {
                                                            small: !0,
                                                            color: "secondary",
                                                            children: [e, "%"]
                                                        })
                                                    }, e)
                                                }))
                                            })]
                                        }), Object(E.jsx)(Es, {})]
                                    }), Object(E.jsxs)(at, {
                                        mt: "1.5rem",
                                        children: [Object(E.jsx)(st, {
                                            justifyContent: "space-between",
                                            children: Object(E.jsx)(Rt, {
                                                small: !0,
                                                color: "secondary",
                                                children: "To"
                                            })
                                        }), Object(E.jsx)(Es, {
                                            token: "SF"
                                        })]
                                    }), Object(E.jsx)(at, {
                                        mt: "1.5rem",
                                        children: a ? Object(E.jsx)(Lr, {}) : Object(E.jsx)(nt, {
                                            background: "#00E39A",
                                            width: "100%",
                                            children: "BUY"
                                        })
                                    })]
                                }), Object(E.jsxs)(Zn.a, {
                                    xs: 24,
                                    md: 12,
                                    children: [Object(E.jsx)(Rt, {
                                        bold: !0,
                                        fontSize: "20px",
                                        children: "Sell"
                                    }), Object(E.jsxs)(at, {
                                        mt: "1.5rem",
                                        children: [Object(E.jsxs)(st, {
                                            justifyContent: "space-between",
                                            children: [Object(E.jsx)(Rt, {
                                                small: !0,
                                                color: "secondary",
                                                children: "From"
                                            }), Object(E.jsx)(st, {
                                                children: [25, 50, 100].map((function(e) {
                                                    return Object(E.jsx)(at, {
                                                        ml: "1rem",
                                                        children: Object(E.jsxs)(Rt, {
                                                            small: !0,
                                                            color: "secondary",
                                                            children: [e, "%"]
                                                        })
                                                    }, e)
                                                }))
                                            })]
                                        }), Object(E.jsx)(Es, {
                                            token: "SF"
                                        })]
                                    }), Object(E.jsxs)(at, {
                                        mt: "1.5rem",
                                        children: [Object(E.jsx)(st, {
                                            justifyContent: "space-between",
                                            children: Object(E.jsx)(Rt, {
                                                small: !0,
                                                color: "secondary",
                                                children: "To"
                                            })
                                        }), Object(E.jsx)(Es, {
                                            token: "USDT"
                                        })]
                                    }), Object(E.jsx)(at, {
                                        mt: "1.5rem",
                                        children: Object(E.jsx)(nt, {
                                            background: "#E74A5D",
                                            width: "100%",
                                            children: "SELL"
                                        })
                                    })]
                                })]
                            })
                        }), Object(E.jsxs)("section", {
                            style: {
                                marginTop: "2rem"
                            },
                            children: [Object(E.jsx)(st, {
                                justifyContent: "space-between",
                                alignItems: "center",
                                display: ["block", "block", "flex", "flex"],
                                children: Object(E.jsx)(Rt, {
                                    bold: !0,
                                    fontSize: "24px",
                                    children: "Recent Transactions"
                                })
                            }), Object(E.jsx)(Jr, {
                                dataSource: [{
                                    time: "2 hours ago",
                                    action: "Sell",
                                    network: "BSC",
                                    amount: "600",
                                    TxID: "0xc4c16...b21a"
                                }],
                                columns: [{
                                    title: "Time",
                                    dataIndex: "time",
                                    key: "time"
                                }, {
                                    title: "Action",
                                    dataIndex: "action",
                                    key: "action",
                                    align: "center"
                                }, {
                                    title: "Network",
                                    dataIndex: "network",
                                    key: "network",
                                    align: "center"
                                }, {
                                    title: "Token",
                                    dataIndex: "Token",
                                    key: "Token",
                                    render: function() {
                                        return Object(E.jsxs)(st, {
                                            alignItems: "center",
                                            children: [Object(E.jsx)("img", {
                                                src: "/images/logo.png",
                                                width: "21",
                                                alt: ""
                                            }), Object(E.jsx)(at, {
                                                ml: "0.5rem",
                                                children: Object(E.jsx)(Rt, {
                                                    children: "SF"
                                                })
                                            })]
                                        })
                                    }
                                }, {
                                    title: "Amount",
                                    dataIndex: "amount",
                                    key: "amount",
                                    align: "center"
                                }, {
                                    title: "TxID",
                                    dataIndex: "TxID",
                                    key: "TxID",
                                    align: "center",
                                    render: function() {
                                        return Object(E.jsxs)(st, {
                                            alignItems: "center",
                                            children: [Object(E.jsx)(at, {
                                                mr: "0.5rem",
                                                children: Object(E.jsx)(Rt, {
                                                    children: "0xc4c16...b21a"
                                                })
                                            }), Object(E.jsx)("img", {
                                                src: "/images/icons/external.png",
                                                width: "12",
                                                alt: ""
                                            })]
                                        })
                                    }
                                }, {
                                    title: "Status",
                                    dataIndex: "Status",
                                    key: "Status",
                                    render: function() {
                                        return Object(E.jsx)(nt, {
                                            background: "#FFE6C8",
                                            borderRadius: "5px",
                                            width: "95px",
                                            children: Object(E.jsx)(Rt, {
                                                color: "#F9AA4B",
                                                bold: !0,
                                                fontSize: "12px",
                                                children: "Pending"
                                            })
                                        })
                                    }
                                }]
                            })]
                        })]
                    })
                },
                Ss = t(471),
                Rs = t(252);
            Oi.a.extend(wi.a);
            var Ms, Is, Bs, Ns = m.d.div(As || (As = Object(d.a)(["\n  /* background: #101724; */\n  padding-bottom: 2rem;\n  padding-left: 24px;\n  padding-right: 24px;\n\n  .container {\n    width: 100%;\n    max-width: 1164px;\n    margin: auto;\n    @media (min-width: 1024px) {\n      padding: 1rem 2rem;\n    }\n  }\n\n  .section-title {\n    font-family: 'SpaceGrotesk';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 36px;\n    line-height: 150%;\n    color: #ffffff;\n\n    @media (min-width: 991px) {\n      font-size: 32px;\n      line-height: 48px;\n    }\n  }\n\n  div {\n    &.blinking {\n      @media (min-width: 991px) {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        width: 37%;\n        height: 73%;\n        animation: 5s ease 0s infinite normal none running blinking;\n        background: linear-gradient(99.46deg, #fa00ff -10.9%, #00e0ff 97.13%, #2ad4f9 97.14%);\n        border-radius: 87px;\n        transform: rotate(25.82deg);\n      }\n    }\n  }\n\n  .section-container {\n    background: #000000;\n    margin-top: 1.5rem;\n    border-radius: 24px;\n  }\n\n  .section-1 {\n    /* @media (min-width: 991px) {\n      padding: 120px 0 30px 0;\n    } */\n\n    .content-left {\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      .section-title {\n        margin-bottom: 20px;\n      }\n\n      p {\n        font-weight: 700;\n        font-size: 14px;\n        line-height: 150%;\n        text-transform: uppercase;\n\n        background: linear-gradient(249.52deg, #00ffa3 2.69%, #dc1fff 122.97%);\n        -webkit-background-clip: text;\n        -webkit-text-fill-color: transparent;\n        background-clip: text;\n        text-fill-color: transparent;\n      }\n    }\n\n    .content-right {\n      display: flex;\n      justify-content: end;\n      .wrap-image {\n        max-width: 350px;\n        position: relative;\n\n        @media (min-width: 991px) {\n          top: -20px;\n        }\n\n        img {\n          &:not(.background) {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n          }\n\n          &.background {\n            width: 100%;\n            opacity: 0;\n          }\n\n          &.bg {\n            width: 53%;\n          }\n\n          &.bg-linear {\n            width: 75%;\n            animation: linerShowHide 5s infinite;\n          }\n\n          &.animal {\n            top: 53%;\n            width: 45%;\n            left: 56%;\n            z-index: 2;\n          }\n\n          &.coin-1 {\n            width: 15%;\n            z-index: 2;\n            transform: translate(-233%, -269%);\n            --transformX: -233%;\n            --transformY: -269%;\n            animation: upAndDown 5s infinite;\n          }\n\n          &.coin-2 {\n            width: 28%;\n            z-index: 2;\n            transform: translate(94%, -85%);\n            --transformX: 94%;\n            --transformY: -85%;\n            animation: upAndDown 2s infinite;\n          }\n\n          &.coin-3 {\n            width: 22%;\n            z-index: 2;\n            transform: translate(-175%, 23%);\n            --transformX: -175%;\n            --transformY: 23%;\n            animation: upAndDown 10s infinite;\n          }\n\n          &.coin-4 {\n            width: 15%;\n            z-index: 2;\n            transform: translate(153%, 123%);\n            --transformX: 153%;\n            --transformY: 123%;\n            animation: upAndDown 3s infinite;\n          }\n\n          &.elip-1 {\n            width: 90%;\n            transform: translate(-50%, -40%);\n          }\n\n          &.elip-2 {\n            width: 90%;\n            transform: translate(-50%, -60%);\n          }\n        }\n      }\n    }\n  }\n\n  .transition-all {\n    transition: all 0.7s;\n  }\n"]))),
                Ds = [{
                    label: "BEP20(BSC)",
                    value: "BEP20(BSC)"
                }],
                Ls = function() {
                    var e, n, t, a, i, s, o = Object(Be.g)(),
                        c = Object(h.c)((function(e) {
                            return e.balances.balances
                        })),
                        l = Object(h.c)((function(e) {
                            return e.transactions.txHistory
                        })),
                        u = l.data,
                        p = Object(f.d)().account,
                        d = Object(r.useState)(),
                        m = Object(g.a)(d, 2),
                        b = m[0],
                        y = m[1],
                        T = Object(r.useState)(""),
                        v = Object(g.a)(T, 2),
                        w = (v[0], v[1], Object(r.useState)("")),
                        A = Object(g.a)(w, 2),
                        _ = (A[0], A[1], Object(r.useState)()),
                        C = Object(g.a)(_, 2),
                        k = C[0],
                        P = C[1],
                        S = Object(r.useRef)(),
                        R = (Object(Be.h)().state || {}).token,
                        M = Object(Ss.a)({
                            initialValues: {
                                address: "",
                                amount: ""
                            },
                            validationSchema: Rs.a({
                                address: Rs.b().required("Please enter Receive address"),
                                amount: Rs.b().required("Please enter amount")
                            }),
                            onSubmit: function() {
                                var e = Object(x.a)(O.a.mark((function e(n) {
                                    return O.a.wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if ("BNB" !== k) {
                                                    e.next = 5;
                                                    break
                                                }
                                                return e.next = 3, D(n.address, n.amount);
                                            case 3:
                                                e.next = 7;
                                                break;
                                            case 5:
                                                return e.next = 7, L(n.address, n.amount);
                                            case 7:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(n) {
                                    return e.apply(this, arguments)
                                }
                            }()
                        }),
                        I = Object(r.useMemo)((function() {
                            return c.data.filter((function(e) {
                                return e.price && e.tokenSymbol || "SF" === e.tokenSymbol
                            })).map((function(e) {
                                return {
                                    label: e.tokenSymbol,
                                    value: e.tokenSymbol,
                                    contract_address: e.contractAddress,
                                    icon: e.icon
                                }
                            }))
                        }), [c.data]),
                        N = Object(r.useMemo)((function() {
                            return I.map((function(e) {
                                return Object(j.a)(Object(j.a)({}, e), {}, {
                                    value: e.value,
                                    label: Object(E.jsxs)(st, {
                                        alignItems: "center",
                                        children: [e.icon && Object(E.jsx)("div", {
                                            children: Object(E.jsx)("img", {
                                                alt: "",
                                                src: e.icon,
                                                width: "16"
                                            })
                                        }), Object(E.jsx)(Rt, {
                                            ml: "8px",
                                            children: e.label
                                        })]
                                    })
                                })
                            }))
                        }), [I]);
                    Object(r.useEffect)((function() {
                        !k && N.length && (R ? N.find((function(e) {
                            return e.value === R
                        })) && (S.current = R, P(R)) : (S.current = N[0].value, P(N[0].value)))
                    }), [N, k, R]), Object(r.useEffect)((function() {
                        var e = window.web3;
                        e.eth.getGasPrice().then((function(n) {
                            y(e.utils.fromWei(n, "gwei"))
                        }), (function(e) {}))
                    }), []);
                    var D = function() {
                            var e = Object(x.a)(O.a.mark((function e(n, t) {
                                var a;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            a = window, a.web3.eth.sendTransaction({
                                                from: p,
                                                to: n,
                                                value: new ze.a(t).shiftedBy(18).toNumber()
                                            }).on("receipt", Object(x.a)(O.a.mark((function e() {
                                                return O.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            De.b.success("Successfully");
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })))).on("error", (function(e) {
                                                var n = null === e || void 0 === e ? void 0 : e.message;
                                                De.b.error(n)
                                            }));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n, t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        L = function() {
                            var e = Object(x.a)(O.a.mark((function e(n, t) {
                                var a, i, r;
                                return O.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            i = window, r = i.web3, null !== (a = N.find((function(e) {
                                                return e.value === k
                                            }))) && void 0 !== a && a.contract_address || De.b.error("Please select token"), new r.eth.Contract(Ve, N.find((function(e) {
                                                return e.value === k
                                            })).contract_address).methods.transfer(n, new ze.a(t).shiftedBy(18).toString()).send({
                                                from: p,
                                                value: 0
                                            }).on("receipt", Object(x.a)(O.a.mark((function e() {
                                                return O.a.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            De.b.success("Successfully");
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })))).on("error", (function(e) {
                                                var n = null === e || void 0 === e ? void 0 : e.message;
                                                De.b.error(n)
                                            }));
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n, t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return Object(E.jsxs)(Ns, {
                        children: [Object(E.jsx)("section", {
                            style: {
                                marginTop: "1rem"
                            },
                            children: Object(E.jsxs)(st, {
                                justifyContent: "space-between",
                                alignItems: "center",
                                display: ["block", "block", "flex", "flex"],
                                children: [Object(E.jsxs)(st, {
                                    alignItems: "center",
                                    children: [Object(E.jsx)(at, {
                                        onClick: function() {
                                            o.goBack()
                                        },
                                        style: {
                                            cursor: "pointer"
                                        },
                                        children: Object(E.jsx)("img", {
                                            src: "/images/icons/arrow-left.png",
                                            alt: "",
                                            width: "22"
                                        })
                                    }), Object(E.jsx)(Rt, {
                                        bold: !0,
                                        fontSize: "24px",
                                        ml: "1rem",
                                        children: "Withdraw"
                                    })]
                                }), Object(E.jsx)(st, {
                                    flex: 1,
                                    justifyContent: "end",
                                    children: Object(E.jsx)("img", {
                                        src: "/images/icons/setting.png",
                                        alt: "",
                                        width: "20"
                                    })
                                })]
                            })
                        }), Object(E.jsxs)("section", {
                            style: {
                                marginTop: "1.5rem"
                            },
                            children: [Object(E.jsxs)(Vn.a, {
                                gutter: [24, 24],
                                children: [Object(E.jsxs)(Zn.a, {
                                    xs: 24,
                                    md: 12,
                                    children: [Object(E.jsx)(Rt, {
                                        bold: !0,
                                        fontSize: "20px",
                                        children: "Token"
                                    }), Object(E.jsxs)(at, {
                                        mt: "1.5rem",
                                        children: [Object(E.jsx)(lr, {
                                            options: N,
                                            onChange: function(e) {
                                                P(e)
                                            },
                                            defaultValue: N.find((function(e) {
                                                return e.value === S.current
                                            })),
                                            formItemProps: {
                                                maxWidth: "100%"
                                            },
                                            placeholder: "Select token"
                                        }, S.current), Object(E.jsx)(st, {
                                            mt: "1rem",
                                            flexWrap: "wrap",
                                            alignItems: "center",
                                            children: I.map((function(e, n) {
                                                return Object(E.jsxs)(st, {
                                                    minWidth: "100px",
                                                    alignItems: "center",
                                                    pr: "1rem",
                                                    children: [Object(E.jsx)(at, {
                                                        children: Object(E.jsx)("img", {
                                                            src: e.icon,
                                                            alt: "",
                                                            width: "26"
                                                        })
                                                    }), Object(E.jsx)(Rt, {
                                                        bold: !0,
                                                        ml: "0.5rem",
                                                        nowrap: !0,
                                                        children: e.label
                                                    })]
                                                }, n)
                                            }))
                                        })]
                                    })]
                                }), Object(E.jsxs)(Zn.a, {
                                    xs: 24,
                                    md: 12,
                                    children: [Object(E.jsx)(Rt, {
                                        bold: !0,
                                        fontSize: "20px",
                                        children: "Avaiable Network"
                                    }), Object(E.jsxs)(at, {
                                        mt: "1.5rem",
                                        children: [Object(E.jsx)(lr, {
                                            options: Ds,
                                            defaultValue: Ds[0],
                                            formItemProps: {
                                                maxWidth: "100%"
                                            }
                                        }), Object(E.jsx)(Rt, {
                                            mt: "1rem",
                                            fontSize: "12px",
                                            color: "secondary",
                                            children: "Please ensure the crypto network you have chosen on the other exchange platform matches the selected crypto network on this page."
                                        })]
                                    })]
                                })]
                            }), Object(E.jsx)(at, {
                                mt: "3rem",
                                children: Object(E.jsxs)(Vn.a, {
                                    gutter: [24, 24],
                                    children: [Object(E.jsxs)(Zn.a, {
                                        xs: 24,
                                        md: 12,
                                        children: [Object(E.jsx)(Rt, {
                                            bold: !0,
                                            fontSize: "20px",
                                            children: "Note"
                                        }), Object(E.jsxs)(at, {
                                            mt: "1.5rem",
                                            children: [Object(E.jsx)(Rt, {
                                                color: "#00E39A",
                                                bold: !0,
                                                fontSize: "12px",
                                                mt: "1rem",
                                                children: "For withdrawals to your HAPPY X-Wallet, transaction fees are waived and transaction speeds are increased."
                                            }), Object(E.jsx)(Rt, {
                                                color: "#00E39A",
                                                bold: !0,
                                                fontSize: "12px",
                                                mt: "1rem",
                                                children: "In response to the latest compliance rules launched by the Korean platforms, HAPPY X-Wallet is currently processing all related business matters. Until the process is completed, please do not make any withdrawals to Upbit, Bithumb or Coinone to avoid loss of assets."
                                            }), Object(E.jsx)(Rt, {
                                                color: "#5D6588",
                                                bold: !0,
                                                fontSize: "12px",
                                                mt: "1rem",
                                                children: "Please do not withdraw funds to an ICO address or for the purposes of crowdfunding. JOKER X-Wallet will not be responsible for distributing any future tokens you might receive."
                                            })]
                                        })]
                                    }), Object(E.jsx)(Zn.a, {
                                        xs: 24,
                                        md: 12,
                                        children: Object(E.jsxs)("form", {
                                            onSubmit: M.handleSubmit,
                                            children: [Object(E.jsx)(Rt, {
                                                bold: !0,
                                                fontSize: "20px",
                                                children: "Address"
                                            }), Object(E.jsxs)(at, {
                                                mt: "1.5rem",
                                                children: [Object(E.jsx)(va, {
                                                    placeholder: "Please enter your withdrawal address",
                                                    onChange: function(e) {
                                                        M.setFieldValue("address", e.target.value)
                                                    },
                                                    onBlur: function() {
                                                        M.setFieldTouched("address")
                                                    },
                                                    value: M.values.address
                                                }), null !== M && void 0 !== M && null !== (e = M.touched) && void 0 !== e && e.address && null !== M && void 0 !== M && null !== (n = M.errors) && void 0 !== n && n.address ? Object(E.jsx)(Rt, {
                                                    className: "error",
                                                    children: null === M || void 0 === M || null === (t = M.errors) || void 0 === t ? void 0 : t.address
                                                }) : null]
                                            }), Object(E.jsx)(Rt, {
                                                bold: !0,
                                                fontSize: "20px",
                                                mt: "1.5rem",
                                                children: "Amount"
                                            }), Object(E.jsxs)(at, {
                                                mt: "1.5rem",
                                                children: [Object(E.jsx)(va, {
                                                    placeholder: "Please enter amount",
                                                    onChange: function(e) {
                                                        M.setFieldValue("amount", e.target.value)
                                                    },
                                                    onBlur: function() {
                                                        M.setFieldTouched("amount")
                                                    },
                                                    value: M.values.amount
                                                }), null !== M && void 0 !== M && null !== (a = M.touched) && void 0 !== a && a.amount && null !== M && void 0 !== M && null !== (i = M.errors) && void 0 !== i && i.amount ? Object(E.jsx)(Rt, {
                                                    className: "error",
                                                    children: null === M || void 0 === M || null === (s = M.errors) || void 0 === s ? void 0 : s.amount
                                                }) : null]
                                            }), Object(E.jsxs)(Rt, {
                                                color: "secondary",
                                                mt: "1rem",
                                                children: ["Fee: ", b ? "".concat(b, " Gwei") : "--"]
                                            }), Object(E.jsx)(at, {
                                                mt: "1.5rem",
                                                children: Object(E.jsx)(nt, {
                                                    background: "#00E39A",
                                                    width: "100%",
                                                    type: "submit",
                                                    children: "Submit"
                                                })
                                            })]
                                        })
                                    })]
                                })
                            })]
                        }), Object(E.jsxs)("section", {
                            style: {
                                marginTop: "3rem"
                            },
                            children: [Object(E.jsx)(st, {
                                justifyContent: "space-between",
                                alignItems: "center",
                                display: ["block", "block", "flex", "flex"],
                                children: Object(E.jsx)(Rt, {
                                    bold: !0,
                                    fontSize: "24px",
                                    children: "Recent Withdraw"
                                })
                            }), Object(E.jsx)(Jr, {
                                dataSource: u.map((function(e) {
                                    var n, t, a = !e.to || null !== p && void 0 !== p && null !== (n = p.toLowerCase()) && void 0 !== n && n.includes(e.to.toLowerCase()) ? e.to !== e.from ? "+" : "" : "-";
                                    return {
                                        time: Oi.a.unix(e.timeStamp).fromNow(),
                                        action: "Withdraw",
                                        network: "BSC",
                                        token: e.tokenSymbol,
                                        amount: Pi(e.value, e.tokenDecimal),
                                        hash: e.hash,
                                        TxID: Ci("+" === a ? e.from : e.to),
                                        sign: a,
                                        icon: null === (t = c.data.find((function(n) {
                                            return n.tokenSymbol === e.tokenSymbol
                                        }))) || void 0 === t ? void 0 : t.icon
                                    }
                                })).filter((function(e) {
                                    return "-" === e.sign
                                })),
                                columns: [{
                                    title: "Time",
                                    dataIndex: "time",
                                    key: "time"
                                }, {
                                    title: "Action",
                                    dataIndex: "action",
                                    key: "action",
                                    align: "center"
                                }, {
                                    title: "Network",
                                    dataIndex: "network",
                                    key: "network",
                                    align: "center"
                                }, {
                                    title: "Token",
                                    dataIndex: "Token",
                                    key: "Token",
                                    render: function(e, n) {
                                        return Object(E.jsxs)(st, {
                                            alignItems: "center",
                                            children: [Object(E.jsx)("img", {
                                                src: n.icon || "/images/none_logo.png",
                                                width: "21",
                                                alt: ""
                                            }), Object(E.jsx)(at, {
                                                ml: "0.5rem",
                                                children: Object(E.jsx)(Rt, {
                                                    children: n.token
                                                })
                                            })]
                                        })
                                    }
                                }, {
                                    title: "Amount",
                                    dataIndex: "amount",
                                    key: "amount",
                                    align: "center"
                                }, {
                                    title: "TxID",
                                    dataIndex: "TxID",
                                    key: "TxID",
                                    align: "center",
                                    render: function(e, n) {
                                        return Object(E.jsxs)(st, {
                                            alignItems: "center",
                                            children: [Object(E.jsx)(at, {
                                                mr: "0.5rem",
                                                children: Object(E.jsx)(Rt, {
                                                    children: n.TxID
                                                })
                                            }), Object(E.jsx)(pa, {
                                                href: "".concat(B.n, "/tx/").concat(n.hash),
                                                children: Object(E.jsx)("img", {
                                                    src: "/images/icons/external.png",
                                                    width: "12",
                                                    alt: ""
                                                })
                                            })]
                                        })
                                    }
                                }, {
                                    title: "Status",
                                    dataIndex: "Status",
                                    key: "Status",
                                    render: function() {
                                        return Object(E.jsx)(nt, {
                                            background: "#D5F3E9",
                                            borderRadius: "5px",
                                            width: "95px",
                                            children: Object(E.jsx)(Rt, {
                                                color: "#44C99C",
                                                bold: !0,
                                                fontSize: "12px",
                                                children: "Completed"
                                            })
                                        })
                                    }
                                }]
                            })]
                        })]
                    })
                },
                Fs = m.d.div(Ms || (Ms = Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  row-gap: 20px;\n  .btn-logout {\n    width: fit-content;\n    margin: 0 auto;\n  }\n"]))),
                Ws = m.d.div(Is || (Is = Object(d.a)(["\n  /* background: #101724; */\n  min-height: 100vh;\n  padding-left: 24px;\n  padding-right: 24px;\n\n  .right-coin {\n    animation: upAndDown 2s infinite;\n    --transformX: 0%;\n    --transformY: 0%;\n  }\n\n  .left-coin {\n    animation: upAndDown 5s infinite;\n    --transformX: 0%;\n    --transformY: 0%;\n  }\n\n  .text-fill {\n    background: linear-gradient(249.52deg, #00ffa3 2.69%, #dc1fff 122.97%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    text-fill-color: transparent;\n  }\n"]))),
                zs = function() {
                    var e = Gn(),
                        n = e.login,
                        t = e.logout,
                        a = Object(f.d)().account,
                        i = Object(Be.g)();
                    return Object(E.jsxs)(Ws, {
                        children: [Object(E.jsx)(at, {
                            pt: "1rem",
                            children: Object(E.jsx)(da, {
                                href: "/dashboard",
                                children: Object(E.jsx)("img", {
                                    src: "/images/logo.svg",
                                    alt: ""
                                })
                            })
                        }), Object(E.jsx)(at, {
                            children: Object(E.jsxs)(Vn.a, {
                                gutter: [24, 24],
                                children: [Object(E.jsx)(Zn.a, {
                                    xs: 24,
                                    md: 12,
                                    children: Object(E.jsx)(at, {
                                        position: "relative",
                                        children: Object(E.jsxs)(at, {
                                            position: "relative",
                                            children: [Object(E.jsx)("img", {
                                                src: "/images/connect/bg.png",
                                                alt: "",
                                                style: {
                                                    animation: "linerShowHide 5s infinite"
                                                },
                                                width: "100%"
                                            }), Object(E.jsx)(at, {
                                                position: "absolute",
                                                top: "27%",
                                                left: "22%",
                                                width: "61%",
                                                children: Object(E.jsx)("img", {
                                                    src: "/images/connect/wallet.png",
                                                    alt: "",
                                                    width: "100%"
                                                })
                                            }), Object(E.jsx)(at, {
                                                position: "absolute",
                                                bottom: "2%",
                                                left: "7%",
                                                width: "21%",
                                                children: Object(E.jsx)("img", {
                                                    src: "/images/connect/left-coin.png",
                                                    alt: "",
                                                    className: "left-coin",
                                                    width: "100%"
                                                })
                                            }), Object(E.jsx)(at, {
                                                position: "absolute",
                                                top: "19%",
                                                right: "14%",
                                                width: "17%",
                                                children: Object(E.jsx)("img", {
                                                    src: "/images/connect/right-coin.png",
                                                    alt: "",
                                                    className: "right-coin",
                                                    width: "100%"
                                                })
                                            })]
                                        })
                                    })
                                }), Object(E.jsx)(Zn.a, {
                                    xs: 24,
                                    md: 12,
                                    children: Object(E.jsxs)(st, {
                                        height: "100%",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        children: [Object(E.jsxs)(st, {
                                            alignItems: "center",
                                            flexWrap: "wrap",
                                            children: [Object(E.jsx)(at, {
                                                children: Object(E.jsx)("img", {
                                                    src: "/images/logo.svg",
                                                    alt: ""
                                                })
                                            }), Object(E.jsx)(at, {
                                                height: "35px",
                                                borderLeft: "2px solid #FFFFFF",
                                                mx: "1rem"
                                            }), Object(E.jsx)(Rt, {
                                                className: "text-fill",
                                                bold: !0,
                                                fontSize: "24px",
                                                children: "Web 3.0 Application"
                                            })]
                                        }), Object(E.jsx)(Rt, {
                                            fontSize: "21px",
                                            mt: "1rem",
                                            children: "Connect by Web 3.0 Wallet"
                                        }), a ? Object(E.jsx)(at, {
                                            mt: "2rem",
                                            width: "100%",
                                            maxWidth: "468px",
                                            children: Object(E.jsxs)(Fs, {
                                                children: [Object(E.jsx)(Sa, {
                                                    title: "Your address",
                                                    value: a,
                                                    height: "44px",
                                                    children: a
                                                }), Object(E.jsx)(nt, {
                                                    className: "btn-logout",
                                                    onClick: function() {
                                                        t()
                                                    },
                                                    children: "Logout"
                                                })]
                                            })
                                        }) : Object(E.jsx)(at, {
                                            mt: "1rem",
                                            children: Da.map((function(e) {
                                                return Object(E.jsx)(at, {
                                                    mt: "1rem",
                                                    width: "100%",
                                                    maxWidth: "468px",
                                                    children: Object(E.jsx)(Fa, {
                                                        walletConfig: e,
                                                        login: n,
                                                        onDismiss: function() {
                                                            i.goBack()
                                                        }
                                                    }, e.title)
                                                }, e.title)
                                            }))
                                        })]
                                    })
                                })]
                            })
                        })]
                    })
                },
                Us = t(467),
                Ks = t.n(Us);
            Oi.a.extend(wi.a);
            var Hs = m.d.div(Bs || (Bs = Object(d.a)(["\n  /* background: #101724; */\n  padding-bottom: 2rem;\n  padding-left: 24px;\n  padding-right: 24px;\n\n  .container {\n    width: 100%;\n    max-width: 1164px;\n    margin: auto;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    @media (min-width: 1024px) {\n      padding-left: 2rem;\n      padding-right: 2rem;\n    }\n  }\n\n  .section-container {\n    background: #000000;\n    margin-top: 1.5rem;\n    border-radius: 24px;\n  }\n\n  .transition-all {\n    transition: all 0.7s;\n  }\n"]))),
                Vs = [{
                    label: "BEP20(BSC)",
                    value: "BEP20(BSC)"
                }],
                Zs = function() {
                    var e = Object(r.useState)(),
                        n = Object(g.a)(e, 2),
                        t = (n[0], n[1], Object(Be.g)()),
                        a = (Object(Be.i)(), Object(f.d)().account),
                        i = Object(h.c)((function(e) {
                            return e.balances.balances
                        })),
                        s = Object(h.c)((function(e) {
                            return e.transactions.txHistory
                        })).data,
                        o = Object(r.useMemo)((function() {
                            return i.data.filter((function(e) {
                                return e.price || "SF" === e.tokenSymbol
                            })).map((function(e) {
                                return {
                                    label: e.tokenSymbol,
                                    value: e.tokenSymbol,
                                    icon: e.icon
                                }
                            }))
                        }), [i.data]),
                        c = o.map((function(e) {
                            return {
                                value: e.value,
                                label: Object(E.jsxs)(st, {
                                    alignItems: "center",
                                    children: [e.icon && Object(E.jsx)("div", {
                                        children: Object(E.jsx)("img", {
                                            alt: "",
                                            src: e.icon,
                                            width: "16"
                                        })
                                    }), Object(E.jsx)(Rt, {
                                        ml: "8px",
                                        children: e.label
                                    })]
                                })
                            }
                        }));
                    return Object(r.useEffect)((function() {
                        Ks.a.toCanvas(document.getElementById("qr-code"), a, {
                            quality: .3,
                            margin: 0,
                            width: 100,
                            color: {
                                dark: "#ffffff",
                                light: "#000000"
                            }
                        }, (function(e) {
                            e && console.error(e)
                        }))
                    }), [a]), Object(E.jsxs)(Hs, {
                        children: [Object(E.jsx)("section", {
                            style: {
                                marginTop: "1rem"
                            },
                            children: Object(E.jsxs)(st, {
                                justifyContent: "space-between",
                                alignItems: "center",
                                children: [Object(E.jsxs)(st, {
                                    alignItems: "center",
                                    children: [Object(E.jsx)(at, {
                                        onClick: function() {
                                            t.goBack()
                                        },
                                        style: {
                                            cursor: "pointer"
                                        },
                                        children: Object(E.jsx)("img", {
                                            src: "/images/icons/arrow-left.png",
                                            alt: "",
                                            width: "22"
                                        })
                                    }), Object(E.jsx)(Rt, {
                                        bold: !0,
                                        fontSize: "24px",
                                        ml: "1rem",
                                        children: "Deposit"
                                    })]
                                }), Object(E.jsx)(st, {
                                    flex: 1,
                                    justifyContent: "end",
                                    children: Object(E.jsx)("img", {
                                        src: "/images/icons/setting.png",
                                        alt: "",
                                        width: "20"
                                    })
                                })]
                            })
                        }), Object(E.jsx)("section", {
                            style: {
                                marginTop: "1.5rem"
                            },
                            children: Object(E.jsxs)(Vn.a, {
                                gutter: [24, 24],
                                children: [Object(E.jsxs)(Zn.a, {
                                    xs: 24,
                                    md: 12,
                                    children: [Object(E.jsx)(Rt, {
                                        bold: !0,
                                        fontSize: "20px",
                                        children: "Token"
                                    }), Object(E.jsxs)(at, {
                                        mt: "1.5rem",
                                        children: [Object(E.jsx)(lr, {
                                            options: c,
                                            formItemProps: {
                                                maxWidth: "100%"
                                            },
                                            placeholder: "Select token"
                                        }), Object(E.jsx)(st, {
                                            mt: "1rem",
                                            flexWrap: "wrap",
                                            alignItems: "center",
                                            children: o.map((function(e, n) {
                                                return Object(E.jsxs)(st, {
                                                    minWidth: "100px",
                                                    alignItems: "center",
                                                    children: [Object(E.jsx)(at, {
                                                        children: Object(E.jsx)("img", {
                                                            src: e.icon,
                                                            alt: "",
                                                            width: "26"
                                                        })
                                                    }), Object(E.jsx)(Rt, {
                                                        bold: !0,
                                                        ml: "0.5rem",
                                                        nowrap: !0,
                                                        children: e.label
                                                    })]
                                                }, n)
                                            }))
                                        })]
                                    })]
                                }), Object(E.jsxs)(Zn.a, {
                                    xs: 24,
                                    md: 12,
                                    children: [Object(E.jsx)(Rt, {
                                        bold: !0,
                                        fontSize: "20px",
                                        children: "Avaiable Network"
                                    }), Object(E.jsxs)(at, {
                                        mt: "1.5rem",
                                        children: [Object(E.jsx)(lr, {
                                            options: Vs,
                                            defaultValue: Vs[0],
                                            formItemProps: {
                                                maxWidth: "100%"
                                            }
                                        }), Object(E.jsx)(Rt, {
                                            mt: "1rem",
                                            fontSize: "12px",
                                            color: "secondary",
                                            children: "Please ensure the crypto network you have chosen on the other exchange platform matches the selected crypto network on this page."
                                        })]
                                    })]
                                })]
                            })
                        }), Object(E.jsxs)("section", {
                            style: {
                                marginTop: "3rem"
                            },
                            children: [Object(E.jsx)(Rt, {
                                bold: !0,
                                fontSize: "20px",
                                children: "Address"
                            }), Object(E.jsxs)(st, {
                                className: "section-container",
                                flexDirection: "column",
                                alignItems: "center",
                                py: "2rem",
                                children: [Object(E.jsx)(Rt, {
                                    bold: !0,
                                    children: "BEP20(BSC) Address"
                                }), Object(E.jsx)(at, {
                                    mt: "1rem",
                                    children: Object(E.jsx)("canvas", {
                                        id: "qr-code"
                                    })
                                }), Object(E.jsx)(at, {
                                    mt: "1rem",
                                    border: "1px solid #252525",
                                    borderRadius: "10px",
                                    children: Object(E.jsx)(Sa, {
                                        title: "",
                                        height: "200",
                                        value: a || "",
                                        children: Object(E.jsx)(Rt, {
                                            color: "secondary",
                                            fontSize: ["12px", "10px", "16px"],
                                            children: a
                                        })
                                    })
                                })]
                            })]
                        }), Object(E.jsxs)("section", {
                            style: {
                                marginTop: "3rem"
                            },
                            children: [Object(E.jsx)(st, {
                                justifyContent: "space-between",
                                alignItems: "center",
                                display: ["block", "block", "flex", "flex"],
                                children: Object(E.jsx)(Rt, {
                                    bold: !0,
                                    fontSize: "24px",
                                    children: "Recent Deposits"
                                })
                            }), Object(E.jsx)(Jr, {
                                dataSource: s.map((function(e) {
                                    var n, t, r = !e.to || null !== a && void 0 !== a && null !== (n = a.toLowerCase()) && void 0 !== n && n.includes(e.to.toLowerCase()) ? e.to !== e.from ? "+" : "" : "-";
                                    return {
                                        time: Oi.a.unix(e.timeStamp).fromNow(),
                                        action: "Deposit",
                                        network: "BSC",
                                        token: e.tokenSymbol,
                                        amount: Pi(e.value, e.tokenDecimal),
                                        hash: e.hash,
                                        TxID: Ci("+" === r ? e.from : e.to),
                                        sign: r,
                                        icon: null === (t = i.data.find((function(n) {
                                            return n.tokenSymbol === e.tokenSymbol
                                        }))) || void 0 === t ? void 0 : t.icon
                                    }
                                })).filter((function(e) {
                                    return "+" === e.sign
                                })),
                                columns: [{
                                    title: "Time",
                                    dataIndex: "time",
                                    key: "time"
                                }, {
                                    title: "Action",
                                    dataIndex: "action",
                                    key: "action",
                                    align: "center"
                                }, {
                                    title: "Network",
                                    dataIndex: "network",
                                    key: "network",
                                    align: "center"
                                }, {
                                    title: "Token",
                                    dataIndex: "Token",
                                    key: "Token",
                                    render: function(e, n) {
                                        return Object(E.jsxs)(st, {
                                            alignItems: "center",
                                            children: [Object(E.jsx)("img", {
                                                src: n.icon || "/images/none_logo.png",
                                                width: "21",
                                                alt: ""
                                            }), Object(E.jsx)(at, {
                                                ml: "0.5rem",
                                                children: Object(E.jsx)(Rt, {
                                                    children: n.token
                                                })
                                            })]
                                        })
                                    }
                                }, {
                                    title: "Amount",
                                    dataIndex: "amount",
                                    key: "amount",
                                    align: "center"
                                }, {
                                    title: "TxID",
                                    dataIndex: "TxID",
                                    key: "TxID",
                                    align: "center",
                                    render: function(e, n) {
                                        return Object(E.jsxs)(st, {
                                            alignItems: "center",
                                            children: [Object(E.jsx)(at, {
                                                mr: "0.5rem",
                                                children: Object(E.jsx)(Rt, {
                                                    children: n.TxID
                                                })
                                            }), Object(E.jsx)(pa, {
                                                href: "".concat(B.n, "/tx/").concat(n.hash),
                                                children: Object(E.jsx)("img", {
                                                    src: "/images/icons/external.png",
                                                    width: "12",
                                                    alt: ""
                                                })
                                            })]
                                        })
                                    }
                                }, {
                                    title: "Status",
                                    dataIndex: "Status",
                                    key: "Status",
                                    render: function() {
                                        return Object(E.jsx)(nt, {
                                            background: "#D5F3E9",
                                            borderRadius: "5px",
                                            width: "95px",
                                            children: Object(E.jsx)(Rt, {
                                                color: "#44C99C",
                                                bold: !0,
                                                fontSize: "12px",
                                                children: "Completed"
                                            })
                                        })
                                    }
                                }]
                            })]
                        })]
                    })
                },
                Gs = window.location.href.includes("DexPairs.xyz".toLowerCase()) ? "https://api.dexpairs.xyz" : "",
                Ys = "charts",
                Xs = "wallet",
                qs = (window.location.href.toLowerCase().includes(Ys) || window.location.href.toLowerCase().includes(Xs), {
                    ETHEREUM: {
                        chainId: 1,
                        enum: "ETHEREUM",
                        name: "Ethereum",
                        shortName: "eth",
                        img: "/img/ethereum-icon.svg",
                        color: "#3a3a39",
                        rpc: "https://cloudflare-eth.com",
                        explorer: "https://etherscan.io/token/",
                        normaltx: "https://api.etherscan.io/api?module=account&action=txlist&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        tokentx: "https://api.etherscan.io/api?module=account&action=tokentx&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        erc721tx: "https://api.etherscan.io/api?module=account&action=tokennfttx&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        tokenbalance: "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=CONTRACT_ADDRESS&address=WALLET_ADDRESS&tag=latest",
                        url_data: Gs,
                        tokenContract: "0x0",
                        tokenSymbol: "ETH",
                        tokenName: "Ethereum",
                        tokenDecimal: 18,
                        tokenPriceContract: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
                        subgraph_url: "https://thegraph.com/hosted-service/subgraph/uniswap/uniswap-v3",
                        coingecko_name: "ethereum"
                    },
                    CRONOS: {
                        chainId: 25,
                        enum: "CRONOS",
                        name: "Cronos",
                        shortName: "cro",
                        img: "/img/cronos-icon.svg",
                        color: "#00296c",
                        rpc: "https://evm-cronos.crypto.org",
                        explorer: "https://cronos.crypto.org/explorer/token/",
                        normaltx: "https://cronos.crypto.org/explorer/api?module=account&action=txlist&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        tokentx: "https://cronos.crypto.org/explorer/api?module=account&action=tokentx&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        erc721tx: null,
                        tokenbalance: "https://cronos.crypto.org/explorer/api?module=account&action=tokenbalance&contractaddress=CONTRACT_ADDRESS&address=WALLET_ADDRESS&tag=latest",
                        url_data: "",
                        tokenContract: "0x0",
                        tokenSymbol: "CRO",
                        tokenName: "Crypto.org Coin",
                        tokenDecimal: 18,
                        tokenPriceContract: "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
                        subgraph_url: "",
                        coingecko_name: "cronos"
                    },
                    BSC: {
                        chainId: 56,
                        enum: "BSC",
                        name: "Binance Smart Chain",
                        shortName: "bnb",
                        img: "/img/bsc-icon.svg",
                        color: "#f0b931",
                        rpc: "https://bsc-dataseed.binance.org",
                        explorer: "https://bscscan.com/token/",
                        normaltx: "https://api.bscscan.com/api?module=account&action=txlist&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        tokentx: "https://api.bscscan.com/api?module=account&action=tokentx&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        erc721tx: "https://api.bscscan.com/api?module=account&action=tokennfttx&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        tokenbalance: "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=CONTRACT_ADDRESS&address=WALLET_ADDRESS&tag=latest",
                        url_data: Gs + "/pancake",
                        tokenContract: "0x0",
                        tokenSymbol: "BNB",
                        tokenName: "BNB",
                        tokenDecimal: 18,
                        tokenPriceContract: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
                        subgraph_url: "https://bsc.streamingfast.io/subgraphs/name/pancakeswap/exchange-v2/graphql",
                        coingecko_name: "binance-smart-chain"
                    },
                    XDAI: {
                        chainId: 100,
                        enum: "XDAI",
                        name: "Gnosis Chain (formerly xDai)",
                        shortName: "gno",
                        img: "/img/xdai-icon.svg",
                        color: "#4ea8a6",
                        rpc: "https://rpc.gnosischain.com",
                        explorer: "https://blockscout.com/xdai/mainnet/tokens/",
                        normaltx: "https://blockscout.com/xdai/mainnet/api?module=account&action=txlist&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        tokentx: "https://blockscout.com/xdai/mainnet/api?module=account&action=tokentx&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        erc721tx: null,
                        tokenbalance: "https://blockscout.com/xdai/mainnet/api?module=account&action=tokenbalance&contractaddress=CONTRACT_ADDRESS&address=WALLET_ADDRESS&tag=latest",
                        url_data: Gs + "/honeyswap",
                        tokenContract: "0x0",
                        tokenSymbol: "XDAI",
                        tokenName: "xDai",
                        tokenDecimal: 18,
                        tokenPriceContract: "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d",
                        subgraph_url: "https://thegraph.com/hosted-service/subgraph/kirkins/honeyswap",
                        coingecko_name: "xdai"
                    },
                    POLYGON: {
                        chainId: 137,
                        enum: "POLYGON",
                        name: "Polygon/Matic",
                        shortName: "MATIC",
                        img: "/img/polygon-icon.svg",
                        color: "#8249e5",
                        rpc: "https://polygon-rpc.com",
                        explorer: "https://polygonscan.com/token/",
                        normaltx: "https://api.polygonscan.com/api?module=account&action=txlist&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        tokentx: "https://api.polygonscan.com/api?module=account&action=tokentx&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        erc721tx: "https://api.polygonscan.com/api?module=account&action=tokennfttx&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        tokenbalance: "https://api.polygonscan.com/api?module=account&action=tokenbalance&contractaddress=CONTRACT_ADDRESS&address=WALLET_ADDRESS&tag=latest",
                        url_data: Gs + "/quickswap",
                        tokenContract: "0x0",
                        tokenSymbol: "MATIC",
                        tokenName: "Matic",
                        tokenDecimal: 18,
                        tokenPriceContract: "0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
                        subgraph_url: "https://thegraph.com/hosted-service/subgraph/henrydapp/quickswap",
                        coingecko_name: "polygon-pos"
                    },
                    FANTOM: {
                        chainId: 250,
                        enum: "FANTOM",
                        name: "Fantom Opera",
                        shortName: "ftm",
                        img: "/img/fantom-icon.svg",
                        color: "#1c68fb",
                        rpc: "https://rpcapi.fantom.network",
                        explorer: "https://ftmscan.com/token/",
                        normaltx: "https://api.ftmscan.com/api?module=account&action=txlist&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        tokentx: "https://api.ftmscan.com/api?module=account&action=tokentx&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        erc721tx: "https://api.ftmscan.com/api?module=account&action=tokennfttx&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        tokenbalance: "https://api.ftmscan.com/api?module=account&action=tokenbalance&contractaddress=CONTRACT_ADDRESS&address=WALLET_ADDRESS&tag=latest",
                        url_data: Gs + "/spiritswap",
                        tokenContract: "0x0",
                        tokenSymbol: "FTM",
                        tokenName: "Fantom",
                        tokenDecimal: 18,
                        tokenPriceContract: "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
                        subgraph_url: "https://thegraph.com/hosted-service/subgraph/layer3org/spiritswap-analytics",
                        coingecko_name: "fantom"
                    },
                    ARBITRUM_ONE: {
                        chainId: 42161,
                        enum: "ARBITRUM_ONE",
                        name: "Arbitrum One",
                        shortName: "arb1",
                        img: "/img/arbitrum-icon.svg",
                        color: "#3aa0f0",
                        rpc: "https://arb1.arbitrum.io/rpc",
                        explorer: "https://arbiscan.io/token/",
                        normaltx: "https://api.arbiscan.io/api?module=account&action=txlist&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        tokentx: "https://api.arbiscan.io/api?module=account&action=tokentx&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        erc721tx: "https://api.arbiscan.io/api?module=account&action=tokennfttx&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        tokenbalance: "https://api.arbiscan.io/api?module=account&action=tokenbalance&contractaddress=CONTRACT_ADDRESS&address=WALLET_ADDRESS&tag=latest",
                        url_data: "",
                        tokenContract: "0x0",
                        tokenSymbol: "AETH",
                        tokenName: "Ether",
                        tokenDecimal: 18,
                        tokenPriceContract: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
                        subgraph_url: "https://thegraph.com/hosted-service/subgraph/ianlapham/arbitrum-minimal",
                        coingecko_name: "arbitrum-one"
                    },
                    CELO: {
                        chainId: 42220,
                        enum: "CELO",
                        name: "Celo",
                        shortName: "CELO",
                        img: "/img/celo-icon.svg",
                        color: "#6ad181",
                        rpc: "https://forno.celo.org",
                        explorer: "https://explorer.celo.org/token/",
                        normaltx: "https://explorer.celo.org/api?module=account&action=txlist&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        tokentx: "https://explorer.celo.org/api?module=account&action=tokentx&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        erc721tx: null,
                        tokenbalance: "https://explorer.celo.org/api?module=account&action=tokenbalance&contractaddress=CONTRACT_ADDRESS&address=WALLET_ADDRESS&tag=latest",
                        url_data: "",
                        tokenContract: "0x0",
                        tokenSymbol: "CELO",
                        tokenName: "CELO",
                        tokenDecimal: 18,
                        tokenPriceContract: "0x471ece3750da237f93b8e339c536989b8978a438",
                        subgraph_url: "https://thegraph.com/hosted-service/subgraph/ubeswap/ubeswap",
                        coingecko_name: "celo"
                    },
                    AVALANCHE: {
                        chainId: 43114,
                        enum: "AVALANCHE",
                        name: "Avalanche",
                        shortName: "Avalanche",
                        img: "/img/avalanche-icon.svg",
                        color: "#e84142",
                        rpc: "https://api.avax.network/ext/bc/C/rpc",
                        explorer: "https://snowtrace.io/token/",
                        normaltx: "https://api.snowtrace.io/api?module=account&action=txlist&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        tokentx: "https://api.snowtrace.io/api?module=account&action=tokentx&address=WALLET_ADDRESS&startblock=START_BLOCK&sort=asc",
                        erc721tx: null,
                        tokenbalance: "https://api.snowtrace.io/api?module=account&action=tokenbalance&contractaddress=CONTRACT_ADDRESS&address=WALLET_ADDRESS&tag=latest",
                        url_data: "",
                        tokenContract: "0x0",
                        tokenSymbol: "AVAX",
                        tokenName: "Avalanche",
                        tokenDecimal: 18,
                        tokenPriceContract: "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
                        subgraph_url: "https://thegraph.com/hosted-service/subgraph/traderjoe-xyz/exchange",
                        coingecko_name: "avalanche"
                    }
                });
            var Js, $s, Qs, eo = t(468),
                no = 0,
                to = [],
                ao = function() {
                    var e = Object(h.b)(),
                        n = Object(f.d)().account,
                        t = Object(r.useCallback)(Object(x.a)(O.a.mark((function a() {
                            var i, r, s;
                            return O.a.wrap((function(a) {
                                for (;;) switch (a.prev = a.next) {
                                    case 0:
                                        return i = eo.stringify({
                                            module: "account",
                                            action: "tokentx",
                                            page: 1,
                                            offset: 10,
                                            sort: "desc",
                                            address: n,
                                            startblock: no
                                        }), clearTimeout(Js), Js = setTimeout((function() {
                                            return t()
                                        }), 2600), a.prev = 3, a.next = 6, fetch("".concat(B.u, "/api?").concat(i));
                                    case 6:
                                        return a.next = 8, a.sent.json();
                                    case 8:
                                        if ("0" !== (null === (s = a.sent) || void 0 === s ? void 0 : s.status) || "string" !== typeof(null === s || void 0 === s ? void 0 : s.result) || null === s || void 0 === s || null === (r = s.result) || void 0 === r || !r.includes("Max rate limit reached")) {
                                            a.next = 11;
                                            break
                                        }
                                        return a.abrupt("return");
                                    case 11:
                                        "1" === (null === s || void 0 === s ? void 0 : s.status) && (no = +s.result.at(0).blockNumber + 1, to = to.concat(s.result), e(le({
                                            data: Object(N.a)(to)
                                        }))), a.next = 18;
                                        break;
                                    case 14:
                                        a.prev = 14, a.t0 = a.catch(3), e(le({
                                            data: null,
                                            page: 1,
                                            total: 0
                                        })), console.error("Unable to fetch price data:", a.t0);
                                    case 18:
                                    case "end":
                                        return a.stop()
                                }
                            }), a, null, [
                                [3, 14]
                            ])
                        }))), [n, e]);
                    return Object(r.useEffect)((function() {
                        to = [], t()
                    }), [t]), [to, t]
                },
                io = ["balance", "tokenDecimal", "price"],
                ro = [{
                    constant: !0,
                    inputs: [{
                        name: "_owner",
                        type: "address"
                    }],
                    name: "balanceOf",
                    outputs: [{
                        name: "balance",
                        type: "uint256"
                    }],
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [],
                    name: "decimals",
                    outputs: [{
                        name: "",
                        type: "uint8"
                    }],
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        name: "owner",
                        type: "address"
                    }, {
                        name: "spender",
                        type: "address"
                    }],
                    name: "allowance",
                    outputs: [{
                        name: "amount",
                        type: "uint256"
                    }],
                    type: "function"
                }, {
                    constant: !0,
                    inputs: [{
                        name: "spender",
                        type: "address"
                    }, {
                        name: "amount",
                        type: "uint256"
                    }],
                    name: "approve",
                    outputs: [{
                        name: "",
                        type: "bool"
                    }],
                    type: "function"
                }];

            function so(e) {
                return oo.apply(this, arguments)
            }

            function oo() {
                return (oo = Object(x.a)(O.a.mark((function e(n) {
                    return O.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = n.toLowerCase(), e.abrupt("return", fetch("https://api.coingecko.com/api/v3/coins/binance-smart-chain/contract/".concat(n)).then((function(e) {
                                    return e.json()
                                })).then((function(e) {
                                    return e
                                })).catch((function() {})));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var co = function(e, n) {
                    var t;
                    if (e.price && n.price) {
                        if (e.value * e.price > n.value * n.price) return -1;
                        if (e.value * e.price < n.value * n.price) return 1
                    }
                    return !e.price && n.price ? 1 : e.price && !n.price ? -1 : null === e || void 0 === e || null === (t = e.tokenName) || void 0 === t ? void 0 : t.localeCompare(null === n || void 0 === n ? void 0 : n.tokenName)
                },
                lo = function(e) {
                    var n = e.balance,
                        t = e.tokenDecimal,
                        a = e.price,
                        i = Object(Ie.a)(e, io);
                    try {
                        return Object(j.a)(Object(j.a)({}, i), {}, {
                            _balance: n,
                            _value: null === i || void 0 === i ? void 0 : i.value,
                            price: a,
                            balance: Pi(n, t),
                            value: Si(n, a, t)
                        })
                    } catch (r) {
                        return e
                    }
                },
                uo = function() {
                    return Object.values(Object(j.a)({}, Qs)).sort(co)
                },
                po = function() {
                    var e = Object(f.d)().account,
                        n = Object(h.b)(),
                        t = ao(),
                        a = Object(g.a)(t, 1)[0],
                        i = Object(h.c)((function(e) {
                            return e.balances.balances
                        })),
                        s = Object(r.useCallback)(Object(x.a)(O.a.mark((function e() {
                            var t, a, i, r, s, o, c, l, u;
                            return O.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return l = qs.BSC, e.next = 3, so(l.tokenPriceContract);
                                    case 3:
                                        u = e.sent, Qs[l.tokenPriceContract] = lo(Object(j.a)(Object(j.a)({}, Qs[l.tokenPriceContract] || {}), u ? {
                                            contract_address: null === u || void 0 === u ? void 0 : u.contract_address,
                                            price: null === u || void 0 === u || null === (t = u.market_data) || void 0 === t || null === (a = t.current_price) || void 0 === a ? void 0 : a.usd,
                                            icon: null === u || void 0 === u || null === (i = u.image) || void 0 === i ? void 0 : i.small,
                                            priceChange: null === u || void 0 === u || null === (r = u.market_data) || void 0 === r || null === (s = r.price_change_24h_in_currency) || void 0 === s ? void 0 : s.usd,
                                            priceChangePercentage: null === u || void 0 === u || null === (o = u.market_data) || void 0 === o || null === (c = o.price_change_percentage_24h_in_currency) || void 0 === c ? void 0 : c.usd
                                        } : {})), n(pe({
                                            data: uo()
                                        }));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [n]),
                        o = Object(r.useCallback)(Object(x.a)(O.a.mark((function t() {
                            var a;
                            return O.a.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        try {
                                            a = qs.BSC, new Ke.a(B.t).eth.getBalance(e).then((function(e) {
                                                e && (Qs[a.tokenPriceContract] = lo(Object(j.a)(Object(j.a)(Object(j.a)({}, a), Qs[a.tokenPriceContract] || {}), {}, {
                                                    balance: e
                                                })), n(pe({
                                                    data: uo()
                                                }))), clearTimeout($s), $s = setTimeout((function() {
                                                    return o()
                                                }), 1e4)
                                            }), (function(e) {
                                                clearTimeout($s), $s = setTimeout((function() {
                                                    return o()
                                                }), 1e4)
                                            }))
                                        } catch (i) {}
                                    case 1:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), [e, n]);
                    return Object(r.useEffect)((function() {
                        e && (Qs = {
                            "0xc3cca60bdf643eca0dc1e4943a41296ffbc5d4c8": {
                                tokenSymbol: "HAPPY",
                                tokenName: "HAPPY",
                                balance: 0,
                                value: 0,
                                icon: "/images/logo.ico"
                            }
                        }, s(), o())
                    }), [e, o, s]), Object(r.useEffect)((function() {
                        e && a.forEach(function() {
                            var t = Object(x.a)(O.a.mark((function t(a) {
                                var i, r, s, o, c, l, u, p, d, m, b, y;
                                return O.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (t.prev = 0, !a.contractAddress) {
                                                t.next = 12;
                                                break
                                            }
                                            if (!(i = new(new Ke.a(B.t || "https://bsc-dataseed.binance.org").eth.Contract)(ro, a.contractAddress))) {
                                                t.next = 12;
                                                break
                                            }
                                            return t.next = 6, i.methods.balanceOf(e).call();
                                        case 6:
                                            return s = t.sent, o = s, t.next = 10, so(a.contractAddress);
                                        case 10:
                                            c = t.sent, o !== (null === (r = Qs[a.contractAddress]) || void 0 === r ? void 0 : r._balance) && (Qs[a.contractAddress] = lo(Object(j.a)(Object(j.a)({
                                                balance: o
                                            }, a), c ? {
                                                contract_address: null === c || void 0 === c ? void 0 : c.contract_address,
                                                price: null === c || void 0 === c || null === (l = c.market_data) || void 0 === l || null === (u = l.current_price) || void 0 === u ? void 0 : u.usd,
                                                icon: null === c || void 0 === c || null === (p = c.image) || void 0 === p ? void 0 : p.small,
                                                priceChange: null === c || void 0 === c || null === (d = c.market_data) || void 0 === d || null === (m = d.price_change_24h_in_currency) || void 0 === m ? void 0 : m.usd,
                                                priceChangePercentage: null === c || void 0 === c || null === (b = c.market_data) || void 0 === b || null === (y = b.price_change_percentage_24h_in_currency) || void 0 === y ? void 0 : y.usd
                                            } : {})), n(pe({
                                                data: uo()
                                            })));
                                        case 12:
                                            t.next = 17;
                                            break;
                                        case 14:
                                            return t.prev = 14, t.t0 = t.catch(0), t.abrupt("return");
                                        case 17:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 14]
                                ])
                            })));
                            return function(e) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }), [e, a, n]), Object(r.useEffect)((function() {
                        e || (Qs = {}, n(pe({
                            data: []
                        })))
                    }), [e, n]), Object(r.useMemo)((function() {
                        return i.data
                    }), [i.data])
                },
                mo = ["component"],
                bo = function() {
                    var e = Fe.a.get(B.d);
                    return Boolean(e)
                },
                yo = function(e) {
                    var n = e.component,
                        t = Object(Ie.a)(e, mo);
                    return Object(E.jsx)(Be.b, Object(j.a)(Object(j.a)({}, t), {}, {
                        render: function(e) {
                            return bo() ? Object(E.jsx)(Be.a, {
                                to: {
                                    pathname: "/",
                                    state: {
                                        from: e.location
                                    }
                                }
                            }) : Object(E.jsx)(Vi, Object(j.a)(Object(j.a)({}, t), {}, {
                                children: Object(E.jsx)(n, Object(j.a)({}, e))
                            }))
                        }
                    }))
                };
            var fo = function() {
                    return an(),
                        function() {
                            var e = Object(h.b)(),
                                n = Object(r.useCallback)(Object(x.a)(O.a.mark((function n() {
                                    return O.a.wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.next = 2, Gi.getRepoTreeAtOrgan().then(Object(x.a)(O.a.mark((function n() {
                                                    return O.a.wrap((function(n) {
                                                        for (;;) switch (n.prev = n.next) {
                                                            case 0:
                                                                Promise.all([Gi.getFileData("airdropToken/config.json"), Gi.getFileData("airdropToken/whiteList1.json")]).then((function(n) {
                                                                    var t = Object(g.a)(n, 2),
                                                                        a = {
                                                                            airdropToken: t[0],
                                                                            whiteListAirdropToken: t[1]
                                                                        };
                                                                    window.localStorage.setItem("u:g:c", JSON.stringify(a)), e(z(a))
                                                                })).catch(console.error);
                                                            case 1:
                                                            case "end":
                                                                return n.stop()
                                                        }
                                                    }), n)
                                                })))).catch(console.error);
                                            case 2:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                }))), [e]);
                            Object(r.useEffect)((function() {
                                n()
                            }), [n])
                        }(), po(), Object(E.jsx)(r.Suspense, {
                            fallback: null,
                            children: Object(E.jsxs)(Ne.a, {
                                children: [Object(E.jsx)(De.a, {}), Object(E.jsx)(Un, {
                                    children: Object(E.jsxs)(Be.d, {
                                        children: [Object(E.jsx)(yo, {
                                            exact: !0,
                                            path: "/farming",
                                            component: Yr,
                                            hasSider: !0
                                        }), Object(E.jsx)(yo, {
                                            exact: !0,
                                            path: "/dashboard",
                                            component: us,
                                            hasSider: !0
                                        }), Object(E.jsx)(yo, {
                                            exact: !0,
                                            path: "/history",
                                            component: xs,
                                            hasSider: !0
                                        }), Object(E.jsx)(yo, {
                                            exact: !0,
                                            path: "/exchange",
                                            component: Ps,
                                            hasSider: !0
                                        }), Object(E.jsx)(yo, {
                                            exact: !0,
                                            path: "/withdraw",
                                            component: Ls,
                                            hasSider: !0
                                        }), Object(E.jsx)(yo, {
                                            exact: !0,
                                            path: "/deposit",
                                            component: Zs,
                                            hasSider: !0
                                        }), Object(E.jsx)(yo, {
                                            exact: !0,
                                            path: "/connect",
                                            component: zs
                                        }), Object(E.jsx)(Be.b, {
                                            path: "*",
                                            component: function() {
                                                return Object(E.jsx)(Be.a, {
                                                    to: "/dashboard"
                                                })
                                            }
                                        })]
                                    })
                                }), Object(E.jsx)(Ka, {})]
                            })
                        })
                },
                ho = function(e) {
                    e && e instanceof Function && t.e(6).then(t.bind(null, 1223)).then((function(n) {
                        var t = n.getCLS,
                            a = n.getFID,
                            i = n.getFCP,
                            r = n.getLCP,
                            s = n.getTTFB;
                        t(e), a(e), i(e), r(e), s(e)
                    }))
                };
            t(939), t(940);
            "ethereum" in window && (window.ethereum.autoRefreshOnNetworkChange = !1), l.a.addDefaultLocale(u), l.a.addLocale(p), window.addEventListener("error", (function() {
                var e;
                null === (e = localStorage) || void 0 === e || e.removeItem("redux_localstorage_simple_lists")
            })), c.a.render(Object(E.jsx)(s.a.StrictMode, {
                children: Object(E.jsxs)(Me, {
                    children: [Object(E.jsx)(b, {}), Object(E.jsx)(y, {}), Object(E.jsx)(fo, {})]
                })
            }), document.getElementById("root")), ho()
        },
        97: function(e, n, t) {
            "use strict";
            t.d(n, "a", (function() {
                return a
            })), t.d(n, "b", (function() {
                return s
            }));
            var a, i = t(10),
                r = t(9);
            ! function(e) {
                e[e.MAINNET = 56] = "MAINNET", e[e.TESTNET = 97] = "TESTNET"
            }(a || (a = {}));
            var s = Object(i.a)((function e(n, t, a, i, s, o) {
                Object(r.a)(this, e), this.chainId = void 0, this.address = void 0, this.decimals = void 0, this.name = void 0, this.symbol = void 0, this.projectLink = void 0, this.chainId = n, this.address = t, this.decimals = a, this.symbol = i, this.name = s, this.projectLink = o
            }))
        }
    },
    [
        [941, 1, 2]
    ]
]);
