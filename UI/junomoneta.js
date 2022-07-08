abiCBDC = 
    [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "BlacklistAccount",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "BurnAccountSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "RequiredCBDC",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "WhitelistAccount",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "CENTRAL_BANK",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "COMMERCIAL_BANK",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "GOVERNMENT",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "SUPERVISOR",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "burnAccount",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "requiredCBDC",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "whitelist",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newAccount",
          "type": "address"
        }
      ],
      "name": "setBurnAccount",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "whitelistAccount",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "blacklistAccount",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "requireCBDC",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "to",
          "type": "address"
        }
      ],
      "name": "kill",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

//abiDCMB = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"_owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"_players","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"attend","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"pickWinner","outputs":[],"stateMutability":"nonpayable","type":"function"}]');

abiDCMB = [
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "BlacklistAccount",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "BurnAccountSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "newAdminRole",
        "type": "bytes32"
      }
    ],
    "name": "RoleAdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleGranted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleRevoked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "WhitelistAccount",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "CENTRAL_BANK",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "COMMERCIAL_BANK",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "GOVERNMENT",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "SUPERVISOR",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "blacklistAccount",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "burnAccount",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleAdmin",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "grantRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "hasRole",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "renounceRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "revokeRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "whitelist",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "whitelistAccount",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newAccount",
        "type": "address"
      }
    ],
    "name": "setBurnAccount",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "to",
        "type": "address"
      }
    ],
    "name": "kill",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

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
var cbdcHufContractAddress = "0x9a3DBCa554e9f6b9257aAa24010DA8377C57c17e";
var cbdcHufContract = new web3.eth.Contract(abiCBDC,cbdcHufContractAddress);

var cbdcYuanContractAddress = "0x345cA3e014Aaf5dcA488057592ee47305D9B3e10";
var cbdcYuanContract = new web3.eth.Contract(abiCBDC,cbdcYuanContractAddress);

var PvPManagerContractAddress = "0x39Ce188CCA4EBF6DF7E89ab0602f199a369A0BD8";
var PvPManagerContract = new web3.eth.Contract(abiPvP,PvPManagerContractAddress);

var dcmbHufContractAddress = "0xfeae27388A65eE984F452f86efFEd42AaBD438FD";
var dcmbHufContract = new web3.eth.Contract(abiDCMB,dcmbHufContractAddress);

var dcmbYuanContractAddress = "0x2E1f232a9439C3D459FcEca0BeEf13acc8259Dd8";
var dcmbYuanContract = new web3.eth.Contract(abiDCMB,dcmbYuanContractAddress);


//--Participants
var centralBankMnbAddress = "0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73";
var centralBankPBOFddress = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57";

var centralBankBurnMnbAddress = "0x39Ce188CCA4EBF6DF7E89ab0602f199a369A0BD8";
var centralBankBurnPBOFddress = "0x39Ce188CCA4EBF6DF7E89ab0602f199a369A0BD8";

var commbankAdminOtpAddress = "0xdEF4c8Be5af2EE130f7555aa94590b7832730878";
var commbankAdminAlibabaAddress = "0xDC974303246491F4F0Cc6a5EaD4485860585Df3E";

var commbankOtpAddress = "0xdEF4c8Be5af2EE130f7555aa94590b7832730878";
var commbankAlibabaAddress = "0xDC974303246491F4F0Cc6a5EaD4485860585Df3E";



function setBurnMnb() {
    address = $("#burn_address_mnb").val();    
    console.log("Set burn = " + address);
    
    cbdcHufContract.methods.setBurnAccount(address).send({from: account}).on('error',console.error);    
}

function setBurnPbof() {
    address = $("#burn_address_pbof").val();    
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
    console.log("Mint amount = " + amount + ", address = " + address);
    
    cbdcHufContract.methods.mint(address, amount).send({from: account}).on('error',console.error);    
}

function mintPbof() {
    amount = $("#mint_amount_pbof").val();
    address = $("#mint_commbank_address_pbof").val();
    console.log("Mint amount = " + amount + ", address = " + address);
    
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
    console.log("Require amount = " + amount + ", address = " + address);
    
    cbdcHufContract.methods.requireCBDC(address,amount).send({from: account}).on('error',console.error);
}

function requireCBDCYuan() {
    amount = $("#require_cbdc_yuan_amount").val();
    address = $("#require_commbank_address_alibaba").val();
    console.log("Require amount = " + amount + ", address = " + address);
    
    cbdcYuanContract.methods.requireCBDC(address,amount).send({from: account}).on('error',console.error);
}

function whitelistAccountDcmbOtp() {
    address = $("#whitelist_commbank_address_dcmb_otp").val();
    console.log("Whitelist DCMB address = " + address);
    
    dcmbHufContract.methods.whitelistAccount(address).send({from: account}).on('error',console.error);
}

function whitelistAccountDcmbAlibaba() {
    address = $("#whitelist_commbank_address_dcmb_alibaba").val();
    console.log("Whitelist DCMB address = " + address);
    
    dcmbYuanContract.methods.whitelistAccount(address).send({from: account}).on('error',console.error);
}

function mintDcmbOtp() {
    address = $("#mint_dcmb_otp_commbank_address").val();
    amount = $("#mint_dcmb_otp_amount").val();
    console.log("Mint amount = " + amount + ", address = " + address);
    
    dcmbHufContract.methods.mint(address,amount).send({from: account}).on('error',console.error);
}

function mintDcmbAlibaba() {
    address = $("#mint_dcmb_alibaba_commbank_address").val();
    amount = $("#mint_dcmb_alibaba_amount").val();
    console.log("Mint amount = " + amount + ", address = " + address);
    
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
    console.log("Transfer CBDC amount = " + amount + ", address = " + address);
    
    cbdcHufContract.methods.transfer(address,amount).send({from: account}).on('error',console.error);    
}

function transferCbdcYuan() {
    amount = $("#transfer_cbdc_yuan_amount").val();
    address = $("#transfer_cbdc_yuan_target_address").val();
    console.log("Transfer CDBC amount = " + amount + ", address = " + address);
    
    cbdcYuanContract.methods.transfer(address,amount).send({from: account}).on('error',console.error);    
}

function transferDcmbHuf() {
    amount = $("#transfer_dcmb_huf_amount").val();
    address = $("#transfer_dcmb_huf_target_address").val();
    console.log("Transfer DCMB amount = " + amount + ", address = " + address);
    
    dcmbHufContract.methods.transfer(address,amount).send({from: account}).on('error',console.error);    
}

function transferDcmbYuan() {
    amount = $("#transfer_dcmb_yuan_amount").val();
    address = $("#transfer_dcmb_yuan_target_address").val();
    console.log("Transfer DCMB amount = " + amount + ", address = " + address);
    
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
			$("#balance_alibaba_cbdc_huf").html("CBDC eHUF Balance = " + res);
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
             
            
        
            if (account == "0xFE3B557E8Fb62b89F4916B721be55cEb828dBd73") {
                document.getElementById("centralbank_mnb").style.border="4px solid #00ff73";
            } 
            if (account == "0x627306090abaB3A6e1400e9345bC60c78a8BEf57") {
                document.getElementById("centralbank_pbof").style.border="4px solid #00ff73";
            } 
            if (account == "0x8EdD3fD0088c6931d7be7fc9B0EEfdc29Ca4e8Af") {
                document.getElementById("commbank_admin_otp").style.border="4px solid #00ff73";
            }
            if (account == "0xb0eeCD566F1788D6875fc08589b08e80F3A2F901") {
                document.getElementById("commbank_admin_alibaba").style.border="4px solid #00ff73";
            }
            if (account == "0x8EdD3fD0088c6931d7be7fc9B0EEfdc29Ca4e8Af") {
                document.getElementById("commbank_otp").style.border="4px solid #00ff73";
            }
            if (account == "0xb0eeCD566F1788D6875fc08589b08e80F3A2F901") {
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
