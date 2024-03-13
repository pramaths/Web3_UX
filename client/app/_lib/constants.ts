export const chains: {
  name: string;
  bgProp: string;
}[] = [
  {
    name: 'ethereum',
    bgProp: 'bg-[98deg,_#9BBFEA_11.35%,_#BBEBFF_88%]'
  },
  {
    name: 'avalanche',
    bgProp: 'bg-[linear-gradient(82deg,_#BD6F70_0.01%,_#FCC6C7_100%)]'
  },
  {
    name: 'polygon',
    bgProp: 'bg-[linear-gradient(82deg,_#DCABFF_0%,_#E4D3FF_100%)]'
  }
  // {
  //   name: 'scroll',
  //   bgProp: 'bg-[linear-gradient(82deg,_#EFC676_0%,_#FCF9AA_100%)]'
  // },
  // {
  //   name: 'base',
  //   bgProp: 'bg-[linear-gradient(82deg,_#55C1E3_0%,_#D6FFF5_100%)]'
  // },
  // {
  //   name: 'celo',
  //   bgProp: 'bg-[linear-gradient(82deg,_#E2DA18_0%,_#FFEFB8_100%)]'
  // },
  // {
  //   name: 'optimism',
  //   bgProp: 'bg-[linear-gradient(82deg,_#FF8693_0%,_#FFE5E8_100%)]'
  // },
  // {
  //   name: 'arbitrum',
  //   bgProp: 'bg-[linear-gradient(82deg,_#12AAFF_0%,_#9DCCED_100%)]'
  // },
  // {
  //   name: 'mantle',
  //   bgProp: 'bg-[linear-gradient(82deg,_#B8E4B4_0%,_#EAEAEA_100%)]'
  // },
  // {
  //   name: 'xdc',
  //   bgProp: 'bg-[linear-gradient(82deg,_#F1F1F1_0%,_#9DDBEF_100%)]'
  // },
  // {
  //   name: 'zetachain',
  //   bgProp: 'bg-[linear-gradient(82deg,_#1CAF8A_0%,_#C0FFD2_100%)]'
  // },
  // {
  //   name: 'linea',
  //   bgProp: 'bg-[linear-gradient(82deg,_#B6B6B6_0.01%,_#FBFBFB_100%)]'
  // },
  // {
  //   name: 'okx',
  //   bgProp: 'bg-[linear-gradient(82deg,_#AAB99B_0.01%,_#D2FFA6_100%)]'
  // }
];

export const userFunds: {
  chain: String;
  amount: number;
}[] = [
  {
    chain: 'ethereum',
    amount: 12
  },
  {
    chain: 'avalanche',
    amount: 100
  },
  {
    chain: 'polygon',
    amount: 10
  },
  {
    chain: 'scroll',
    amount: 0
  },
  {
    chain: 'base',
    amount: 16
  },
  {
    chain: 'celo',
    amount: 0
  },
  {
    chain: 'optimism',
    amount: 0
  },
  {
    chain: 'arbitrum',
    amount: 0
  },
  {
    chain: 'mantle',
    amount: 0
  },
  {
    chain: 'xdc',
    amount: 0
  },
  {
    chain: 'zetachain',
    amount: 0
  },
  {
    chain: 'linea',
    amount: 0
  },
  {
    chain: 'okx',
    amount: 0
  }
];

export const deductions: {
  chain: String;
  amount: number;
}[] = [
  {
    chain: 'ethereum',
    amount: 4
  },
  {
    chain: 'avalanche',
    amount: 10
  },
  {
    chain: 'polygon',
    amount: 10
  }
  // {
  //   chain: 'scroll',
  //   amount: 0
  // },
  // {
  //   chain: 'base',
  //   amount: 16
  // },
  // {
  //   chain: 'celo',
  //   amount: 0
  // },
  // {
  //   chain: 'optimism',
  //   amount: 0
  // },
  // {
  //   chain: 'arbitrum',
  //   amount: 0
  // },
  // {
  //   chain: 'mantle',
  //   amount: 0
  // },
  // {
  //   chain: 'xdc',
  //   amount: 0
  // },
  // {
  //   chain: 'zetachain',
  //   amount: 0
  // },
  // {
  //   chain: 'linea',
  //   amount: 0
  // },
  // {
  //   chain: 'okx',
  //   amount: 0
  // }
];

export const currentAddress = '0x27923CAB90564c5C195BbFb98f7DA8d3D4F751Fb';
export const curEns = '0xLpircy.eth';
export const notifs: {
  type: String;
  fromAdd: String;
  toAdd: String;
  fromChain: String[];
  toChain: String[];
  status: String;
  link: String;
}[] = [
  {
    type: 'sent',
    fromAdd: 'vitalik.ens',
    toAdd: '0xLPircy',
    fromChain: ['polygon'],
    toChain: ['dummy chain', 'dummy chain2'],
    status: 'unread',
    link: '/dashboard'
  },
  {
    type: 'recieved',
    fromAdd: 'yash.eth',
    toAdd: 'lucifer0x17.ens',
    fromChain: ['dummy chain', 'dummy chain2'],
    toChain: ['ethereum'],
    status: 'read',
    link: '/dashboard'
  }
];

export const CHAINS = ['ethereum', 'avalanche', 'polygon'];
