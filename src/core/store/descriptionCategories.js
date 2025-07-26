const descCategories = new Map();

descCategories.set(
  'decentralized-finance-defi',
  'Decentralized finance (DeFi) is an emerging financial technology based on secure distributed ledgers similar to those used by cryptocurrencies. The system removes the control banks and institutions have on money, financial products, and financial services.',
);
descCategories.set(
  'non-fungible-tokens-nft',
  'Non-fungible tokens, or NFTs, are collectible elements within the Ethereum blockchain that usually follow the ERC-721 or ERC-1155 standard. They represent something unique and therefore are not mutually interchangeable. In other words, no non-fungible token is the same. NFTs take advantage of innovative smart contract technology to store and record unique information on the blockchain, which means that whenever an NFT is created, only one of it verifiably exists. NFT creators can also encrypt details such as rich metadata or secure file links allowing people to create all sorts of digital assets which are verifiable such as videos and songs. With NFTs, one can digitally certify that an asset is authentic.',
);
descCategories.set(
  'metaverse',
  'Metaverse refers to the part of the Internet where there is a shared virtual reality, a shared digital world where everything can be interconnected. Metaverse extends reality as we know it through a combination of Virtual Reality (VR), Augmented Reality (AR) and various forms of social media where participants can interact with one another in a separate world.\nThere is no one “real” metaverse as of 2021 - much like the internet itself.',
);
descCategories.set(
  'play-to-earn',
  'Play-to-earn refers to the gaming concept whereby players are awarded in-game currency. These tokens can be earned by completing certain tasks, or achievements. These in-game tokens can also be transferred out of the game, and into wallets or exchanges, where they can be traded for various other currencies to be used in the real world.',
);
descCategories.set(
  'meme-token',
  'Meme coins are meme-inspired cryptocurrencies. They tend to be highly volatile compared to major cryptocurrencies like bitcoin (BTC) and ether (ETH). This is likely because meme coins are heavily community-driven tokens. Their prices are usually influenced by social media and online community sentiments. This often brings a lot of hype but also FOMO and financial risk. While it’s true that some traders became rich with meme coins, many lost money due to market volatility.',
);
descCategories.set(
  'binance-smart-chain',
  'Binance Smart Chain, or BSC, is an alternative blockchain that is similar to Ethereum. It was launched by Binance in September 2020 to host smart contracts and decentralized applications. Unlike Ethereum’s Proof-of-Work consensus model, BSC uses the Proof-of-Staked-Authority model which has allowed for low transaction fees and higher throughput.\n\n\tCompared to Ethereum which would usually cost hundreds to make a few transactions, BSC only charges less than a few dollars. BSC supports the BEP-20 token format, which is essentially the same format as ERC-20 but on a different chain, and transaction fees are paid in Binance’s native exchange token, BNB.',
);
descCategories.set(
  'solana-ecosystem',
  'Solana is a general purpose blockchain similar to Ethereum. The underlying architecture is different, such that developers have to write applications using Rust instead of Solidity or Vyper. However, this may soon change with the introduction of the Neon EVM solution on Solana. End user applications as of now include decentralized finance (DeFi), non-fungible tokens (NFT), marketplaces, games, and more. One of its biggest features is its scalability in which Solana is able to process over 700,000 transactions per second. Its high throughput capability appeals to high frequency traders, which is spearheaded by FTX and Alameda Research. The first use case for DeFi applications on Solana is Serum, built by the team behind FTX.',
);
descCategories.set(
  'dot-ecosystem',
  'Polkadot is a blockchain protocol designed to support multiple purpose-built blockchains under one unified network. Polkadot’s infrastructure begins with the relay chain, which acts as the central chain. Each chain that runs on Polkadot is called a parachain as they run parallel to the main relay chain, and is built on top of the relay chain. Besides parachains, projects can participate in the Polkadot ecosystem for a shorter fixed period of time through parathreads. Blockchains built on top of Polkadot’s own relay chain are also interoperable with blockchains that have vastly different technology stacks such as Ethereum and Bitcoin through bridges.',
);
descCategories.set(
  'cardano-ecosystem',
  'Cardano is a proof-of-stake blockchain platform: the first to be founded on peer-reviewed research and developed through evidence-based methods. It combines pioneering technologies to provide unparalleled security and sustainability to decentralized applications, systems, and societies. With a leading team of engineers, Cardano exists to redistribute power from unaccountable structures to the margins – to individuals – and be an enabling force for positive change and progress.',
);
descCategories.set(
  'avalanche-ecosystem',
  'Avalanche is a smart contract platform that allows users to create their own multi-purpose blockchains or decentralized applications (dApps). Their mainnet was launched in September 2020 and has since become a major hub of activity for DeFi and NFTs. In 2021, they announced their Avalanche Rush incentives program to introduce more applications and to promote further growth of their ecosystem. The Avalanche chain is centered around 3 main blockchains - the P-Chain, X-Chain and C-Chain. The C-Chain is Avalanche’s EVM implementation, which hosts various applications and smart contracts. Users can access Avalanche through centralized exchanges, the official Avalanche bridge or via Celer’s cBridge.',
);
descCategories.set(
  'polygon-ecosystem',
  'Polygon, formerly known as Matic, was originally meant to be a Layer-2 scaling solution for Ethereum to improve transaction throughput and speed. However, it has since become more popular as a stand-alone blockchain, with its own native projects and decentralized applications. Major DeFi protocols such as Aave and Curve have also found second homes on Polygon. Unlike Ethereum, Polygon operates on Proof-of-Stake (PoS) in which network participants can stake the network’s native MATIC tokens to validate transactions and participate in voting and other governance decisions. Polygon also hosts its own bridge that allows users to transfer assets from Ethereum to Polygon and vice versa.',
);

export default descCategories;
