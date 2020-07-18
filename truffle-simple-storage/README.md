## Simple Storage DAPP 

### Dependencies: 

```
node@12.18.x
npm@6.14.x
static-server@2.2.x
truffle@5.1.x
```

### To run locally:

```
npm run start
```

### Steps followed to make this:

1. Code smart contract with Solidity (and its test and migration).

2. Test the smart contract.

```
truffle test
```

3. Create contract artifact

```
truffle compile
```

4. Copy ABI into *public/bundle.js*

5. Deploy the smart contract to the blockchain

```
truffle develop
migrate --reset
```

6. Copy contract address into *public/bundle.js* file.

7. Instantiate web3.

8. Instantiate the contract using ABI & address.

9. Do your business magic.  
