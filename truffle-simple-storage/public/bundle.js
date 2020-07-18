var simpleStorageABI = [
		{
      "constant": true,
      "inputs": [],
      "name": "data",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_data",
          "type": "string"
        }
      ],
      "name": "set",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
	]; 
var simpleStorageAddress = '0xe8C66C1FE50f2ed81EF8029A4Ad54f841FC4f5d0';
var web3 = new Web3('http://localhost:9545');
var simpleStorage = new web3.eth.Contract(simpleStorageABI, simpleStorageAddress);

document.addEventListener('DOMContentLoaded', () => {
	const $setData = document.getElementById('setData');
	const $data = document.getElementById('data');
	let accounts = [];

	web3.eth.getAccounts()
	.then(_accounts => {
		accounts = _accounts;
	});

	const getData = () => {
		simpleStorage.methods
		.get()
		.call()
		.then(result => {
			$data.innerHTML = result;
		});
	};

	getData();

	$setData.addEventListener('submit', e => {
		e.preventDefault();
		const data = e.target.elements[0].value;
		simpleStorage.methods
		.set(data)
		.send({from: accounts[0]})
		.then(getData);
	});
});
