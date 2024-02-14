import 'dotenv/config';
import Covalent from './main';

const c = new Covalent(process.env.COVALENT_API_KEY);

const test_contract = process.env.TEST_CONTRACT;
const test_wallet = process.env.TEST_WALLET;
const test_tx = process.env.TEST_TX;

test(`Token balance of "${test_wallet}" should return an object`, async () => {
    const response = await c.walletTokensBalance({
        chain: "bsc-mainnet",
        address: test_wallet,
    });

    console.log(response);

    expect(response).toMatchObject({
        address: test_wallet?.toLowerCase(),
        chain_name: "bsc-mainnet"
    });

    expect(response).toHaveProperty("items");
})

test(`Historical balance of "${test_wallet}" should return an object`, async () => {
    const response = await c.walletHistoricalBalance({
        chain: "bsc-mainnet",
        address: test_wallet,
    });

    console.log(response);

    expect(response).toMatchObject({
        address: test_wallet?.toLowerCase(),
        chain_name: "bsc-mainnet"
    });

    expect(response).toHaveProperty("items");
})

test(`Native token balance of "${test_wallet}" should return an object`, async () => {
    const response = await c.walletNativeBalance({
        chain: "bsc-mainnet",
        address: test_wallet,
    });

    console.log(response);

    expect(response).toMatchObject({
        address: test_wallet?.toLowerCase(),
        chain_name: "bsc-mainnet"
    });

    expect(response).toHaveProperty("items");
})

test(`Transaction details of "${test_tx}" should return an object`, async () => {
    const response = await c.getTransaction({
        tx: test_tx
    });

    console.log(response);

    expect(response).toHaveProperty("items");
})

test(`Transaction summary of "${test_wallet}" should return an object`, async () => {
    const response = await c.getTransactionSummary({
        chain: "bsc-mainnet",
        address: test_wallet,
    });

    console.log(response);

    expect(response).toMatchObject({
        address: test_wallet?.toLowerCase(),
        chain_name: "bsc-mainnet"
    });

    expect(response).toHaveProperty("items");
})

test(`Token approval of "${test_wallet}" should return an object`, async () => {
    const response = await c.getTokenApprovals({
        chain: "bsc-mainnet",
        address: test_wallet,
    });

    console.log(response);

    expect(response).toMatchObject({
        address: test_wallet?.toLowerCase(),
        chain_name: "bsc-mainnet"
    });

    expect(response).toHaveProperty("items");
})

test(`Token history of "${test_contract}" should return an object`, async () => {
    const response = await c.getTokenPrices({
        chain: "bsc-mainnet",
        contractAddress: test_contract,
        from: "2024-01-20",
        to: "2024-02-13"
    });

    console.log(response);

    expect(response).toMatchObject({
        "0": {
            contract_address: test_contract?.toLowerCase(),
        }
    });
})