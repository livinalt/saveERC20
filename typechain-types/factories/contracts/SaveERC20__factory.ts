/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { SaveERC20, SaveERC20Interface } from "../../contracts/SaveERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_savingToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "SavingSuccessful",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "WithdrawSuccessful",
    type: "event",
  },
  {
    inputs: [],
    name: "checkContractBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "checkUserBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "ownerWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620010c1380380620010c1833981810160405281019062000037919062000129565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506200015b565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000f182620000c4565b9050919050565b6200010381620000e4565b81146200010f57600080fd5b50565b6000815190506200012381620000f8565b92915050565b600060208284031215620001425762000141620000bf565b5b6000620001528482850162000112565b91505092915050565b610f56806200016b6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80630a9bfef51461005c5780632e1a7d4d1461008c57806333f707d1146100a857806350312c9e146100c4578063b6b55f25146100e2575b600080fd5b6100766004803603810190610071919061092d565b6100fe565b6040516100839190610973565b60405180910390f35b6100a660048036038101906100a191906109ba565b610147565b005b6100c260048036038101906100bd91906109ba565b6103f0565b005b6100cc610522565b6040516100d99190610973565b60405180910390f35b6100fc60048036038101906100f791906109ba565b6105c4565b005b6000600260008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16036101b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ad90610a44565b60405180910390fd5b600081116101f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f090610ab0565b60405180910390fd5b6000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610280576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161027790610b1c565b60405180910390fd5b81600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102cf9190610b6b565b9250508190555060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33846040518363ffffffff1660e01b8152600401610331929190610bae565b6020604051808303816000875af1158015610350573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103749190610c0f565b6103b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103aa90610c88565b60405180910390fd5b7f84e742a3ea03623687a5febaa797636d728230721d4b3d1405d19fbbc16298d933836040516103e4929190610bae565b60405180910390a15050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610480576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161047790610cf4565b60405180910390fd5b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016104db929190610bae565b6020604051808303816000875af11580156104fa573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061051e9190610c0f565b5050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161057e9190610d14565b602060405180830381865afa15801561059b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105bf9190610d44565b905090565b600073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1603610633576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062a90610a44565b60405180910390fd5b60008111610676576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161066d90610dbd565b60405180910390fd5b8060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231336040518263ffffffff1660e01b81526004016106d09190610d14565b602060405180830381865afa1580156106ed573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107119190610d44565b1015610752576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161074990610e29565b60405180910390fd5b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b81526004016107b293929190610e49565b6020604051808303816000875af11580156107d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f59190610c0f565b905080610837576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082e90610ecc565b60405180910390fd5b81600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546108869190610eec565b925050819055507f62d8fec9f61d4b47a4873e3c6baf9e3834c5d36a06c7035b3e2f4239b6fd6d6933836040516108be929190610bae565b60405180910390a15050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006108fa826108cf565b9050919050565b61090a816108ef565b811461091557600080fd5b50565b60008135905061092781610901565b92915050565b600060208284031215610943576109426108ca565b5b600061095184828501610918565b91505092915050565b6000819050919050565b61096d8161095a565b82525050565b60006020820190506109886000830184610964565b92915050565b6109978161095a565b81146109a257600080fd5b50565b6000813590506109b48161098e565b92915050565b6000602082840312156109d0576109cf6108ca565b5b60006109de848285016109a5565b91505092915050565b600082825260208201905092915050565b7f61646472657373207a65726f2064657465637465640000000000000000000000600082015250565b6000610a2e6015836109e7565b9150610a39826109f8565b602082019050919050565b60006020820190508181036000830152610a5d81610a21565b9050919050565b7f63616e2774207769746864726177207a65726f2076616c756500000000000000600082015250565b6000610a9a6019836109e7565b9150610aa582610a64565b602082019050919050565b60006020820190508181036000830152610ac981610a8d565b9050919050565b7f696e73756666696369656e742066756e64730000000000000000000000000000600082015250565b6000610b066012836109e7565b9150610b1182610ad0565b602082019050919050565b60006020820190508181036000830152610b3581610af9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610b768261095a565b9150610b818361095a565b9250828203905081811115610b9957610b98610b3c565b5b92915050565b610ba8816108ef565b82525050565b6000604082019050610bc36000830185610b9f565b610bd06020830184610964565b9392505050565b60008115159050919050565b610bec81610bd7565b8114610bf757600080fd5b50565b600081519050610c0981610be3565b92915050565b600060208284031215610c2557610c246108ca565b5b6000610c3384828501610bfa565b91505092915050565b7f6661696c656420746f2077697468647261770000000000000000000000000000600082015250565b6000610c726012836109e7565b9150610c7d82610c3c565b602082019050919050565b60006020820190508181036000830152610ca181610c65565b9050919050565b7f6e6f74206f776e65720000000000000000000000000000000000000000000000600082015250565b6000610cde6009836109e7565b9150610ce982610ca8565b602082019050919050565b60006020820190508181036000830152610d0d81610cd1565b9050919050565b6000602082019050610d296000830184610b9f565b92915050565b600081519050610d3e8161098e565b92915050565b600060208284031215610d5a57610d596108ca565b5b6000610d6884828501610d2f565b91505092915050565b7f63616e27742073617665207a65726f2076616c75650000000000000000000000600082015250565b6000610da76015836109e7565b9150610db282610d71565b602082019050919050565b60006020820190508181036000830152610dd681610d9a565b9050919050565b7f6e6f7420656e6f75676820746f6b656e00000000000000000000000000000000600082015250565b6000610e136010836109e7565b9150610e1e82610ddd565b602082019050919050565b60006020820190508181036000830152610e4281610e06565b9050919050565b6000606082019050610e5e6000830186610b9f565b610e6b6020830185610b9f565b610e786040830184610964565b949350505050565b7f6661696c656420746f207472616e736665720000000000000000000000000000600082015250565b6000610eb66012836109e7565b9150610ec182610e80565b602082019050919050565b60006020820190508181036000830152610ee581610ea9565b9050919050565b6000610ef78261095a565b9150610f028361095a565b9250828201905080821115610f1a57610f19610b3c565b5b9291505056fea26469706673582212208c2b18eda422a0f85b57e57527131b88e02563b910a2f950ab682203b28cf74c64736f6c63430008180033";

type SaveERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SaveERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SaveERC20__factory extends ContractFactory {
  constructor(...args: SaveERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _savingToken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_savingToken, overrides || {});
  }
  override deploy(
    _savingToken: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_savingToken, overrides || {}) as Promise<
      SaveERC20 & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): SaveERC20__factory {
    return super.connect(runner) as SaveERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SaveERC20Interface {
    return new Interface(_abi) as SaveERC20Interface;
  }
  static connect(address: string, runner?: ContractRunner | null): SaveERC20 {
    return new Contract(address, _abi, runner) as unknown as SaveERC20;
  }
}