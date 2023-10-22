export const TRADE_ABI = [
    {
        "anonymous": false,
        "inputs": [
          {
            "components": [
              {
                "internalType": "bool",
                "name": "exists",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "tradePending",
                "type": "bool"
              },
              {
                "internalType": "address",
                "name": "wallet",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "tokenIn",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "tokenOut",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amountInvested",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "minLiquidity",
                "type": "uint256"
              }
            ],
            "indexed": false,
            "internalType": "struct Trade.User",
            "name": "user",
            "type": "tuple"
          }
        ],
        "name": "NewUserAdded",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "previousOwner",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
      },
      {
        "anonymous": false,
        "inputs": [
          {
            "components": [
              {
                "internalType": "bool",
                "name": "exists",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "tradePending",
                "type": "bool"
              },
              {
                "internalType": "address",
                "name": "wallet",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "tokenIn",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "tokenOut",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amountInvested",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "minLiquidity",
                "type": "uint256"
              }
            ],
            "indexed": false,
            "internalType": "struct Trade.User",
            "name": "user",
            "type": "tuple"
          }
        ],
        "name": "UserUpdated",
        "type": "event"
      },
      {
        "inputs": [],
        "name": "fee",
        "outputs": [
          {
            "internalType": "int256",
            "name": "",
            "type": "int256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_addressToCheck",
            "type": "address"
          }
        ],
        "name": "getUser",
        "outputs": [
          {
            "components": [
              {
                "internalType": "bool",
                "name": "exists",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "tradePending",
                "type": "bool"
              },
              {
                "internalType": "address",
                "name": "wallet",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "tokenIn",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "tokenOut",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "amountInvested",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "minLiquidity",
                "type": "uint256"
              }
            ],
            "internalType": "struct Trade.User",
            "name": "",
            "type": "tuple"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "getUsersAddresses",
        "outputs": [
          {
            "internalType": "address[]",
            "name": "",
            "type": "address[]"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "owner",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_tokenIn",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
          }
        ],
        "name": "registerIntent",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_tokenIn",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "_tokenOut",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minAmountOut",
            "type": "uint256"
          }
        ],
        "name": "tradeTokens",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
          }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "uniswapRouter",
        "outputs": [
          {
            "internalType": "contract IUniswapV2Router02",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "address",
            "name": "_addressToCheck",
            "type": "address"
          }
        ],
        "name": "userExists",
        "outputs": [
          {
            "internalType": "bool",
            "name": "",
            "type": "bool"
          }
        ],
        "stateMutability": "view",
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
        "name": "users",
        "outputs": [
          {
            "internalType": "bool",
            "name": "exists",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "tradePending",
            "type": "bool"
          },
          {
            "internalType": "address",
            "name": "wallet",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "tokenIn",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "tokenOut",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "amountInvested",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minLiquidity",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "usersAddresses",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
]
