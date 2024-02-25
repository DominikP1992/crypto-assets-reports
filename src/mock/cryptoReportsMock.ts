const mockedCrypto = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    id: 'btc-bitcoin-btc',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    id: 'eth-ethereum-eth',
  },
  {
    name: 'Tether',
    symbol: 'USDT',
    id: 'usdt-tether-usdt',
  },
  {
    name: 'BNB',
    symbol: 'BNB',
    id: 'bnb-bnb-bnb',
  },
  {
    name: 'Solana',
    symbol: 'SOL',
    id: 'sol-solana-sol',
  },
  {
    name: 'XRP',
    symbol: 'XRP',
    id: 'xrp-xrp-xrp',
  },
  {
    name: 'Lido Staked Ether',
    symbol: 'STETH',
    id: 'steth-lido-staked-ether-steth',
  },
  {
    name: 'USDC',
    symbol: 'USDC',
    id: 'usdc-usdc-usdc',
  },
  {
    name: 'Cardano',
    symbol: 'ADA',
    id: 'ada-cardano-ada',
  },
  {
    name: 'Avalanche',
    symbol: 'AVAX',
    id: 'avax-avalanche-avax',
  },
  {
    name: 'Dogecoin',
    symbol: 'DOGE',
    id: 'doge-dogecoin-doge',
  },
  {
    name: 'TRON',
    symbol: 'TRX',
    id: 'trx-tron-trx',
  },
  {
    name: 'Chainlink',
    symbol: 'LINK',
    id: 'link-chainlink-link',
  },
  {
    name: 'Polkadot',
    symbol: 'DOT',
    id: 'dot-polkadot-dot',
  },
  {
    name: 'Polygon',
    symbol: 'MATIC',
    id: 'matic-polygon-matic',
  },
  {
    name: 'Uniswap',
    symbol: 'UNI',
    id: 'uni-uniswap-uni',
  },
  {
    name: 'Wrapped Bitcoin',
    symbol: 'WBTC',
    id: 'wbtc-wrapped-bitcoin-wbtc',
  },
  {
    name: 'Toncoin',
    symbol: 'TON',
    id: 'ton-toncoin-ton',
  },
  {
    name: 'Internet Computer',
    symbol: 'ICP',
    id: 'icp-internet-computer-icp',
  },
  {
    name: 'Shiba Inu',
    symbol: 'SHIB',
    id: 'shib-shiba-inu-shib',
  },
  {
    name: 'Bitcoin Cash',
    symbol: 'BCH',
    id: 'bch-bitcoin-cash-bch',
  },
  {
    name: 'Litecoin',
    symbol: 'LTC',
    id: 'ltc-litecoin-ltc',
  },
  {
    name: 'Dai',
    symbol: 'DAI',
    id: 'dai-dai-dai',
  },
  {
    name: 'Immutable',
    symbol: 'IMX',
    id: 'imx-immutable-imx',
  },
  {
    name: 'Filecoin',
    symbol: 'FIL',
    id: 'fil-filecoin-fil',
  },
  {
    name: 'Cosmos Hub',
    symbol: 'ATOM',
    id: 'atom-cosmos-hub-atom',
  },
  {
    name: 'LEO Token',
    symbol: 'LEO',
    id: 'leo-leo-token-leo',
  },
  {
    name: 'Kaspa',
    symbol: 'KAS',
    id: 'kas-kaspa-kas',
  },
  {
    name: 'Ethereum Classic',
    symbol: 'ETC',
    id: 'etc-ethereum-classic-etc',
  },
  {
    name: 'NEAR Protocol',
    symbol: 'NEAR',
    id: 'near-near-protocol-near',
  },
  {
    name: 'Hedera',
    symbol: 'HBAR',
    id: 'hbar-hedera-hbar',
  },
  {
    name: 'Stacks',
    symbol: 'STX',
    id: 'stx-stacks-stx',
  },
  {
    name: 'Optimism',
    symbol: 'OP',
    id: 'op-optimism-op',
  },
  {
    name: 'Aptos',
    symbol: 'APT',
    id: 'apt-aptos-apt',
  },
  {
    name: 'Stellar',
    symbol: 'XLM',
    id: 'xlm-stellar-xlm',
  },
  {
    name: 'VeChain',
    symbol: 'VET',
    id: 'vet-vechain-vet',
  },
  {
    name: 'OKB',
    symbol: 'OKB',
    id: 'okb-okb-okb',
  },
  {
    name: 'Injective',
    symbol: 'INJ',
    id: 'inj-injective-inj',
  },
  {
    name: 'Lido DAO',
    symbol: 'LDO',
    id: 'ldo-lido-dao-ldo',
  },
  {
    name: 'Celestia',
    symbol: 'TIA',
    id: 'tia-celestia-tia',
  },
  {
    name: 'Render',
    symbol: 'RNDR',
    id: 'rndr-render-rndr',
  },
  {
    name: 'The Graph',
    symbol: 'GRT',
    id: 'grt-the-graph-grt',
  },
  {
    name: 'Mantle',
    symbol: 'MNT',
    id: 'mnt-mantle-mnt',
  },
  {
    name: 'Cronos',
    symbol: 'CRO',
    id: 'cro-cronos-cro',
  },
  {
    name: 'Arbitrum',
    symbol: 'ARB',
    id: 'arb-arbitrum-arb',
  },
  {
    name: 'Monero',
    symbol: 'XMR',
    id: 'xmr-monero-xmr',
  },
  {
    name: 'Sei',
    symbol: 'SEI',
    id: 'sei-sei-sei',
  },
  {
    name: 'Maker',
    symbol: 'MKR',
    id: 'mkr-maker-mkr',
  },
  {
    name: 'Sui',
    symbol: 'SUI',
    id: 'sui-sui-sui',
  },
  {
    name: 'Rocket Pool ETH',
    symbol: 'RETH',
    id: 'reth-rocket-pool-eth-reth',
  },
  {
    name: 'Beam',
    symbol: 'BEAM',
    id: 'beam-beam-beam',
  },
  {
    name: 'THORChain',
    symbol: 'RUNE',
    id: 'rune-thorchain-rune',
  },
  {
    name: 'dYdX',
    symbol: 'DYDX',
    id: 'dydx-dydx-dydx',
  },
  {
    name: 'Algorand',
    symbol: 'ALGO',
    id: 'algo-algorand-algo',
  },
  {
    name: 'Mantle Staked Ether',
    symbol: 'METH',
    id: 'meth-mantle-staked-ether-meth',
  },
  {
    name: 'Flow',
    symbol: 'FLOW',
    id: 'flow-flow-flow',
  },
  {
    name: 'MultiversX',
    symbol: 'EGLD',
    id: 'egld-multiversx-egld',
  },
  {
    name: 'Quant',
    symbol: 'QNT',
    id: 'qnt-quant-qnt',
  },
  {
    name: 'Aave',
    symbol: 'AAVE',
    id: 'aave-aave-aave',
  },
  {
    name: 'Bitcoin SV',
    symbol: 'BSV',
    id: 'bsv-bitcoin-sv-bsv',
  },
  {
    name: 'Bitget Token',
    symbol: 'BGB',
    id: 'bgb-bitget-token-bgb',
  },
  {
    name: 'Starknet',
    symbol: 'STRK',
    id: 'strk-starknet-strk',
  },
  {
    name: 'Flare',
    symbol: 'FLR',
    id: 'flr-flare-flr',
  },
  {
    name: 'Theta Network',
    symbol: 'THETA',
    id: 'theta-theta-network-theta',
  },
  {
    name: 'Mina Protocol',
    symbol: 'MINA',
    id: 'mina-mina-protocol-mina',
  },
  {
    name: 'Synthetix Network',
    symbol: 'SNX',
    id: 'snx-synthetix-network-snx',
  },
  {
    name: 'ORDI',
    symbol: 'ORDI',
    id: 'ordi-ordi-ordi',
  },
  {
    name: 'TrueUSD',
    symbol: 'TUSD',
    id: 'tusd-trueusd-tusd',
  },
  {
    name: 'Tokenize Xchange',
    symbol: 'TKX',
    id: 'tkx-tokenize-xchange-tkx',
  },
  {
    name: 'Helium',
    symbol: 'HNT',
    id: 'hnt-helium-hnt',
  },
  {
    name: 'Fantom',
    symbol: 'FTM',
    id: 'ftm-fantom-ftm',
  },
  {
    name: 'The Sandbox',
    symbol: 'SAND',
    id: 'sand-the-sandbox-sand',
  },
  {
    name: 'dYdX',
    symbol: 'ETHDYDX',
    id: 'ethdydx-dydx-ethdydx',
  },
  {
    name: 'Worldcoin',
    symbol: 'WLD',
    id: 'wld-worldcoin-wld',
  },
  {
    name: 'Axie Infinity',
    symbol: 'AXS',
    id: 'axs-axie-infinity-axs',
  },
  {
    name: 'Chiliz',
    symbol: 'CHZ',
    id: 'chz-chiliz-chz',
  },
  {
    name: 'Fetch.ai',
    symbol: 'FET',
    id: 'fet-fetch.ai-fet',
  },
  {
    name: 'BitTorrent',
    symbol: 'BTT',
    id: 'btt-bittorrent-btt',
  },
  {
    name: 'ApeCoin',
    symbol: 'APE',
    id: 'ape-apecoin-ape',
  },
  {
    name: 'GALA',
    symbol: 'GALA',
    id: 'gala-gala-gala',
  },
  {
    name: 'Blur',
    symbol: 'BLUR',
    id: 'blur-blur-blur',
  },
  {
    name: 'WhiteBIT Coin',
    symbol: 'WBT',
    id: 'wbt-whitebit-coin-wbt',
  },
  {
    name: 'KuCoin',
    symbol: 'KCS',
    id: 'kcs-kucoin-kcs',
  },
  {
    name: 'Cheelee',
    symbol: 'CHEEL',
    id: 'cheel-cheelee-cheel',
  },
  {
    name: 'Tezos',
    symbol: 'XTZ',
    id: 'xtz-tezos-xtz',
  },
  {
    name: 'Osmosis',
    symbol: 'OSMO',
    id: 'osmo-osmosis-osmo',
  },
  {
    name: 'SATS (Ordinals)',
    symbol: 'SATS',
    id: 'sats-sats-(ordinals)-sats',
  },
  {
    name: 'EOS',
    symbol: 'EOS',
    id: 'eos-eos-eos',
  },
  {
    name: 'Decentraland',
    symbol: 'MANA',
    id: 'mana-decentraland-mana',
  },
  {
    name: 'Dymension',
    symbol: 'DYM',
    id: 'dym-dymension-dym',
  },
  {
    name: 'Conflux',
    symbol: 'CFX',
    id: 'cfx-conflux-cfx',
  },
  {
    name: 'Akash Network',
    symbol: 'AKT',
    id: 'akt-akash-network-akt',
  },
  {
    name: 'Frax Ether',
    symbol: 'FRXETH',
    id: 'frxeth-frax-ether-frxeth',
  },
  {
    name: 'Ronin',
    symbol: 'RON',
    id: 'ron-ronin-ron',
  },
  {
    name: 'NEO',
    symbol: 'NEO',
    id: 'neo-neo-neo',
  },
  {
    name: 'SingularityNET',
    symbol: 'AGIX',
    id: 'agix-singularitynet-agix',
  },
  {
    name: 'Astar',
    symbol: 'ASTR',
    id: 'astr-astar-astr',
  },
  {
    name: 'Kava',
    symbol: 'KAVA',
    id: 'kava-kava-kava',
  },
  {
    name: 'Bittensor',
    symbol: 'TAO',
    id: 'tao-bittensor-tao',
  },
  {
    name: 'First Digital USD',
    symbol: 'FDUSD',
    id: 'fdusd-first-digital-usd-fdusd',
  },
];
export default mockedCrypto;
