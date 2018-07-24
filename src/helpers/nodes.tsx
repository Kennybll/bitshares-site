const nodes: any = {
    DEFAULT_WS_NODE: 'wss://bitshares.openledger.info/ws',
    WS_NODE_LIST: [
        {url: 'ws://127.0.0.1:8090', location: 'Locally hosted'},
        {
            url: 'wss://bitshares.openledger.info/ws',
            location: 'Nuremberg, Germany'
        },
        {url: 'wss://eu.openledger.info/ws', location: 'Berlin, Germany'},
        {url: 'wss://bitshares.nu/ws', location: 'Stockholm, Sweden'},
        {url: 'wss://bit.btsabc.org/ws', location: 'Hong Kong'},
        {url: 'wss://node.btscharts.com/ws', location: 'Hong Kong'},
        {url: 'wss://japan.bitshares.apasia.tech/ws', location: 'Tokyo, Japan'},
        {url: 'wss://openledger.hk/ws', location: 'Hong Kong'},
        {url: 'wss://bitshares.crypto.fans/ws', location: 'Munich, Germany'},
        {url: 'wss://ws.gdex.io', location: 'Japan'},
        {url: 'wss://ws.gdex.top', location: 'China'},
        {url: 'wss://dex.rnglab.org', location: 'Netherlands'},
        {url: 'wss://dexnode.net/ws', location: 'Dallas, USA'},
        {url: 'wss://la.dexnode.net/ws', location: 'LA, USA'},
        {url: 'wss://kc-us-dex.xeldal.com/ws', location: 'Kansas City, USA'},
        {url: 'wss://btsza.co.za:8091/ws', location: 'Cape Town, South Africa'},
        {url: 'wss://api.bts.blckchnd.com', location: 'Falkenstein, Germany'},
        {url: 'wss://api-ru.bts.blckchnd.com', location: 'Moscow, Russia'},
        {url: 'wss://node.market.rudex.org', location: 'Germany'},
        {url: 'wss://api.bitsharesdex.com/ws', location: 'Missouri, USA'},
        {url: 'wss://api.fr.bitsharesdex.com/ws', location: 'France'},
        {url: 'wss://blockzms.xyz/ws', location: 'USA'},
        {
            url: 'wss://eu.nodes.bitshares.ws',
            location: 'Central Europe - BitShares Infrastructure Program'
        },
        {
            url: 'wss://us.nodes.bitshares.ws',
            location: 'U.S. West Coast - BitShares Infrastructure Program'
        },
        {
            url: 'wss://sg.nodes.bitshares.ws',
            location: 'Singapore - BitShares Infrastructure Program'
        },
        {url: 'wss://ws.winex.pro', location: 'Singapore'},
        {url: 'wss://api.bts.mobi/ws', location: 'VA, USA'},
        {
            url: 'wss://api.btsxchng.com',
            location:
                'Global (Asia Pacific (Singapore) / US East (N. Virginia) / EU (London))'
        },
        {url: 'wss://api.bts.network', location: 'East Coast, USA'},
        {url: 'wss://btsws.roelandp.nl/ws', location: 'Finland'},
        {url: 'wss://api.bitshares.bhuz.info/ws', location: 'Europe'},
        {url: 'wss://bts-api.lafona.net/ws', location: 'USA'},
        {url: 'wss://kimziv.com/ws', location: 'Singapore'},
        {url: 'wss://api.btsgo.net/ws', location: 'Singapore'},
        {url: 'wss://bts.proxyhosts.info/wss', location: 'Germany'},
        {url: 'wss://bts.open.icowallet.net/ws', location: 'Hangzhou, China'},
        {url: 'wss://crazybit.online', location: 'China'},
        {url: 'wss://freedom.bts123.cc:15138/', location: 'China'},
        {url: 'wss://bitshares.bts123.cc:15138/', location: 'China'},
        {url: 'wss://ws.hellobts.com/', location: 'Japan'},
        {url: 'wss://bitshares.cyberit.io/', location: 'Hong Kong'},
        {url: 'wss://bts-seoul.clockwork.gr/', location: 'Seoul, Korea'},
        {url: 'wss://bts.to0l.cn:4443/ws', location: 'China'},
        {url: 'wss://btsfullnode.bangzi.info/ws', location: 'Germany'},
        // Testnet
        {
            url: 'wss://node.testnet.bitshares.eu',
            location: 'TESTNET - BitShares Europe (Frankfurt, Germany)'
        },
        {
            url: 'wss://testnet.nodes.bitshares.ws',
            location: 'TESTNET - BitShares Infrastructure Program'
        },
        {
            url: 'wss://testnet.bitshares.apasia.tech/ws',
            location: 'TESTNET - APT BitShares (Dallas, USA)'
        }
    ],
    DEFAULT_FAUCET: 'https://faucet.bitshares.eu/onboarding',
    TESTNET_FAUCET: 'https://faucet.testnet.bitshares.eu',
    RPC_URL: 'https://openledger.info/api/'
}

export default nodes