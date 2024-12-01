import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { contractABI } from "./contractABI";
import { fiatContractABI } from "./fiatContractABI";

const contractAddress = "0x073e2E53CbeDbD97df0b20c6B5da2F2F22157aE8";

export const contract = getContract({
    client : client,
    chain : chain,
    address : contractAddress,
    abi : contractABI
});

const erc20FiatContractAddress = "0x85F82b051A878E0dEF3afdFC8300Aa8a76297824";

export const erc20Contract = getContract({
    client : client,
    chain : chain,
    address : erc20FiatContractAddress,
    abi : fiatContractABI
});
