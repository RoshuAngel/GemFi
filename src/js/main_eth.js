
const contAbi = [
	{
		"inputs": [],
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
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
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
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "trueOrFalse",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "gemId",
				"type": "uint256"
			}
		],
		"name": "GemUpgraded",
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
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
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
				"internalType": "uint256",
				"name": "gemId",
				"type": "uint256"
			}
		],
		"name": "WinnerPicked",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "RANDOM",
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
		"inputs": [],
		"name": "activeSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
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
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
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
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_durationInHours",
				"type": "uint256"
			}
		],
		"name": "changeWinnerPickDuration",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "collectedFee",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "gemPot",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
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
				"name": "_gemId",
				"type": "uint256"
			}
		],
		"name": "gemStatus",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "level",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "balance",
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
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
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
		"inputs": [],
		"name": "getTotalHighLevelGems",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "totalHighLevelGems",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "highestGemLevel",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
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
		"name": "highestLevelGems",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
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
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
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
		"inputs": [],
		"name": "lastDraw",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastWinner",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_mintAmount",
				"type": "uint8"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
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
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
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
				"internalType": "uint256",
				"name": "_gemId",
				"type": "uint256"
			}
		],
		"name": "pickWinner",
		"outputs": [],
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
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
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
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
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
		"type": "function"
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
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_gemId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
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
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_gemOne",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_gemTwo",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_gemThree",
				"type": "uint256"
			}
		],
		"name": "upgradeGems",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "winnerPickDuration",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
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
				"name": "_gemId",
				"type": "uint256"
			}
		],
		"name": "withdrawBalance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawCollectedFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]

const contAddress = "0x53fe7DA3bB36218cDfc7a11a6bBB2C0D31Fd7E4E"; //Test FTM net/ hardhat

var nftContract;
var currentAddr;
var web3;
var ownedNFts = [];
var gemPotEligible = [];
// var testContract = "0x41f3532B4667b3A4a526EeA0c4103e486c5053e7"; //FAM reward card

/* ----------------------------
*	Connect
* ----------------------------*/
async function connect() {
	console.log('Connecting to wallet...')
	$('#connectButton').attr('disabled', false);
	try {
		var accounts = await ethereum.request({
			method: 'eth_requestAccounts'
		})
		if (accounts.length == 0) {
			console.log('Please connect to Wallet.');
			$('#connectButton').html('Connect wallet')
		} else {
			if (accounts[0] !== currentAddr) {
				currentAddr = accounts[0];
			}
			if (currentAddr !== null) {
				console.log('Wallet connected = ' + currentAddr)
				let shortenedAccount = currentAddr.replace(currentAddr.substring(5,
					38),
					"***")
				$('#connectButton').html(shortenedAccount)
				$('#connectButton').attr('disabled', true)
			}
		}
	} catch (err) {
		if (err.code === 4001) {
			// EIP-1193 userRejectedRequest error
			// If this happens, the user rejected the connection request.
			sendAlert('Please connect wallet.');
		} else {
			console.error(err);
		}
	}
}

/* ----------------------------
*	Load Web3
* ----------------------------*/
async function loadWeb3() {
	if (window.ethereum) {
		web3 = new Web3(window.ethereum);

		setChainListener(window.ethereum);
		setAccListener(window.ethereum);
		$('#connectButton').attr('disabled', true)
		var chainID = await web3.eth.getChainId();
		console.log('Connected to chain ' + chainID)
		if (chainID == 250) { //4002 test net ftm //main 250 ///localhost hardhat 31337
			$('#connectButton').attr('disabled', false);
			$('#connectButton').click(function () {
				connect();
			});
			await connect();
			await loadContracts();
		} else {
			sendAlert('Please switch to Fantom Opera in your wallet');
		}
	} else {
		$('#connectButton').attr('disabled', true)
	}
}

/* ----------------------------
*	Load Contracts
* ----------------------------*/
async function loadContracts() {
	console.log('Loading contracts...')
	nftContract = new web3.eth.Contract(contAbi, contAddress);
	// var contractFactory = await ethers.getContractFactory("GemFi");
	// nftContract = await contractFactory.deploy();
	console.log('Done loading contracts.')
	var event = new CustomEvent('contractLoaded');
	window.dispatchEvent(event); // Send the custom event to the window
}

/* ----------------------------
*	get Mint token from trxn
* ----------------------------*/
async function getMintTokenID(tx, num) {
	var interval1 = setInterval(function a() {
		var newMints = [];
		nftContract.events.Transfer({ fromBlock: tx.blockNumber }, function (error, events) { })
			.on('data', function (events) {
				var jj = events.returnValues.tokenId;
				// console.log(jj);
				if (!newMints.includes(jj)) {
					newMints.push(jj);
				}
				if (newMints.length == num) {
					sendAlertPerm("New Minted Gem<br/>" + JSON.stringify(newMints));
					clearInterval(interval1);
				}
			});
	}, 3000);
}

/* ----------------------------
*	Mint
* ----------------------------*/
async function mint(mintAmount) {
	var mintPrice = 1e18;
	// var mintPrice = nftContract.methods.mintCost().call();
	console.log(mintPrice);
	var totalPrice = mintPrice * mintAmount;

	await nftContract.methods.mint(mintAmount).send({
		from: currentAddr,
		value: totalPrice
	}).on('transactionHash', function (hash) {
		console.log("Transaction sent!", hash);
		sendAlertPerm("Getting mint status...");
		console.log("Attempting to get transaction receipt...");
	}).on('receipt', function (receipt) {
		try {
			getMintTokenID(receipt, mintAmount);
		} catch (e) {
			console.log("Error getting mint Id:", e);
		}
		updateData();
	}).catch(err => {
		if (err.code === 4001) {
			// EIP-1193 userRejectedRequest error
			// If this happens, the user rejected the connection request.
			sendAlertPerm("User denied Transaction");
		}
		else {
			console.log("Something went wrong while submitting your transaction:", err);
		}
	});
}

/* ----------------------------
*	Mint Wrapper
* ----------------------------*/
async function mintWrapper() {
	var mintAmount = document.getElementById('input').value;
	mint(mintAmount);
	console.log(mintAmount);
}

/* ----------------------------
*	get upgrade success from trxn
* ----------------------------*/
async function upgradeStatus(tx) {
	var interval = setInterval(function a() {
		var tokenUpgraded = 0;
		var success;

		nftContract.events.GemUpgraded({ fromBlock: tx.blockNumber }, function (error, events) { })
			.on('data', function (events) {
				console.log(events.returnValues);
				success = events.returnValues.trueOrFalse;
				if (success == true) {
					tokenUpgraded = events.returnValues.gemId;
					sendAlertPerm("Success: Gems upgraded!<br/>New Gem #" + tokenUpgraded);

				} else {
					sendAlertPerm("Last Upgrade failed");
					console.log(events.returnValues);
				}
				clearInterval(interval);
			});
	}, 3000);
}

/* ----------------------------
*	Upgrade
* ----------------------------*/
async function upgrade(gem1, gem2, gem3) {

	await nftContract.methods.upgradeGems(gem1, gem2, gem3).send({
		from: currentAddr,
		value: 0
	}).on('transactionHash', function (hash) {
		console.log("Transaction sent!", hash);

		console.log("Attempting to get transaction receipt...");
		sendAlertPerm("Getting upgrade status...");
	}).on('receipt', function (receipt) {
		try {
			upgradeStatus(receipt);
		} catch (e) {
			console.log("Error getting upgrade status", e);
			sendAlertPerm("Error getting Upgrade status");
		}
		updateData();
	}).catch(err => {
		if (err.code === 4001) {
			// EIP-1193 userRejectedRequest error
			// If this happens, the user rejected the connection request.
			sendAlertPerm("User denied Transaction");
		}
		else {
			console.log("Something went wrong while submitting your transaction:", err);
		}
	});
}

/* ----------------------------
*	Upgrade wrapper
* ----------------------------*/
async function upgradeWrapper() {
	var t1 = document.getElementById("dropdownMenuButton1").textContent;
	var t2 = document.getElementById("dropdownMenuButton2").textContent;
	var t3 = document.getElementById("dropdownMenuButton3").textContent;

	var gem1 = parseDropSelection(t1, ':Lvl', ':Bal');
	var gem2 = parseDropSelection(t2, ':Lvl', ':Bal');
	var gem3 = parseDropSelection(t3, ':Lvl', ':Bal');

	if (gem1 == gem2 && gem2 == gem3) {
		//console.log("3 gems are same level");
		var token1 = parseDropSelection(t1, '#', ' :Lvl');
		var token2 = parseDropSelection(t2, '#', ' :Lvl');
		var token3 = parseDropSelection(t3, '#', ' :Lvl');

		// console.log(token1, token2, token3);
		upgrade(token1, token2, token3);
	} else {
		// console.log("Error: Gems not same level");
		sendAlertPerm("Choose same level Gems for upgrade", 'red');
	}
}

/* ----------------------------
*	Withdraw
* ----------------------------*/
async function withdrawBalance(token) {

	await nftContract.methods.withdrawBalance(token).send({
		from: currentAddr,
		value: 0
	}).on('transactionHash', function (hash) {
		console.log("Transaction sent!", hash);

		console.log("Attempting to get transaction receipt...");
		sendAlertPerm("Getting upgrade status...");
	}).on('receipt', function (receipt) {
		sendAlertPerm("Withdraw successful")
		updateData();
	}).catch(err => {
		if (err.code === 4001) {
			// EIP-1193 userRejectedRequest error
			// If this happens, the user rejected the connection request.
			sendAlertPerm("User denied Transaction");
		}
		else {
			console.log("Something went wrong while submitting your transaction:", err);
		}
	});
}

/* ----------------------------
*	Withdraw wrapper
* ----------------------------*/
async function withdrawWrapper() {
	var gem = document.getElementById("dropdownMenuButtonWithdraw").textContent;
	var token = parseDropSelection(gem, '#', ' :Lvl');
	// console.log(token);
	withdrawBalance(token);
}
/* ----------------------------
*	Deployer previledge
* ----------------------------*/
async function changeWinnerPickDuration() {
	await nftContract.methods.changeWinnerPickDuration(1).send({
		from: currentAddr,
		value: 0
	}).on('transactionHash', function (hash) {
		console.log("Transaction sent!", hash);
		console.log("Attempting to get transaction receipt...");
		sendAlertPerm("Getting upgrade status...");
	}).on('receipt', function (receipt) {
		console.log("Frequency change successful");
		// updateData();
	}).catch(err => {
		if (err.code === 4001) {
			// EIP-1193 userRejectedRequest error
			// If this happens, the user rejected the connection request.
			sendAlertPerm("User denied Transaction");
		}
		else {
			console.log("Something went wrong while submitting your transaction:", err);
		}
	});
}

async function winnerStatus(tx, gemPot) {
	var interval = setTimeout(function a() {
		var winner = 0;

		nftContract.events.WinnerPicked({ fromBlock: tx.blockNumber }, function (error, events) { })
			.on('data', function (events) {
				// console.log(events.returnValues);
				winner = events.returnValues.gemId;
				sendAlertPerm("Congrats Winner !!!<br/>" + "Gem #" + winner + " Pot: " + gemPot / 1e18 + " FTM");
				clearInterval(interval);
			});
	}, 3000);
}
function checkEligibility() {
	var token = 0;

	if (gemPotEligible.length == 0) {
		return 0;
	} else if (ownedNFts.length == 0) {
		return 0;
	} else {
		for (i = 0; i < ownedNFts.length; i++)
			if (gemPotEligible.includes(ownedNFts[i].token)) {
				token = ownedNFts[i].token;
				break;
			}
		return token;
	}
}
/* ----------------------------
*	Pick Winner
* ----------------------------*/
async function pickWinner() {
	console.log("pick winner");
	var eligible = checkEligibility();

	if (eligible != 0) {
		var gemPot = await nftContract.methods.gamePot().call();
		console.log(gemPot);

		await nftContract.methods.pickWinner(eligible).send({
			from: currentAddr
		})
			.on('transactionHash', function (hash) {
				console.log("Transaction sent!", hash);
				console.log("Attempting to get transaction receipt...");
				sendAlertPerm("Getting Winner status...");
			}).on('receipt', function (receipt) {
				try {
					winnerStatus(receipt, gemPot);
				} catch (e) {
					console.log("Error getting winner status", e);
				}
				reloadStats();
			}).catch(err => {
				if (err.code === 4001) {
					// EIP-1193 userRejectedRequest error
					// If this happens, the user rejected the connection request.
					sendAlertPerm("User denied Transaction");
				}
				else {
					console.log("Something went wrong while submitting your transaction:", err);
				}
			});
	} else {
		sendAlertPerm("Not eligible to call pickWinner", 'red');
	}

}

async function contractCreationTime() {
	var blockNumber, time, date;

	hash = '0xaa205006534dfc03e1557c59c050edc5361fcad4f5e56ac467a83613811c820b'; // from create ftm-scan

	await web3.eth.getTransactionReceipt(hash, function (err, rec) {
		if (rec) {
			blockNumber = rec.blockNumber;
		}
	});
	time = await web3.eth.getBlock(blockNumber);

	return time.timestamp;
}
/* ----------------------------
*	Reload game stats
* ----------------------------*/
async function reloadStats() {
	if (nftContract) {
		sendAlert("Updating...Stats...");
		document.getElementById("loader").classList.remove("hide-loader");

		try {
			var stat = '';
			var stat2 = '';

			var gemPot = await nftContract.methods.gemPot().call();
			var activeSupply = await nftContract.methods.activeSupply().call();
			var highestLevel = await nftContract.methods.highestGemLevel().call();
			var lastDraw = await nftContract.methods.lastDraw().call();
			var create = await contractCreationTime();

			let lastDrawDate;
			if (lastDraw == create) {
				lastDrawDate = 'None';
			}
			else {
				lastDrawDate = new Date(lastDraw * 1000).toLocaleString('en-GB');
			}

			var lastWinner = await nftContract.methods.lastWinner().call();
			//console.log(lastWinner);
			// var lastWinnerAdd;
			if (lastWinner == 0) {
				lastWinner = 'None';
			}
			// else {
			// 	lastWinnerAdd = await nftContract.methods.ownerOf(lastWinner).call();
			// 	lastWinnerAdd = lastWinnerAdd.replace(lastWinnerAdd.substring(5,
			// 		38),
			// 		"***")
			// }
			stat += '<table class="table text-white mb-0"><tbody><tr><td>Active Supply:</td><td>' + activeSupply + '</td>\n';
			stat += '<tr><td>Highest Level:</td><td>' + highestLevel + '</td></tbody>\n';
			stat += '<tbody><tr><td>Pot Balance:</td><td>' + gemPot / 1e18 + ' FTM</td>\n';
			stat += '<tr><td>Last Draw:</td><td>' + lastDrawDate + '</td>\n';
			stat += '<tr><td>Last Winner:</td><td>Gem #' + lastWinner + '</td>\n';
			stat += '<tr><td>Owned Gems:</td><td>' + bal + '</td ></tbody ></table >\n';
			document.getElementById("stat1").innerHTML = stat;

			gemPotEligible = [];
			// console.log(currentTime, lastDraw, freq);


			var getTotalHighLevelGems = await nftContract.methods.getTotalHighLevelGems().call();
			// console.log("Total high level gems", getTotalHighLevelGems);
			var gems = '';
			if (getTotalHighLevelGems > 0) {
				for (let i = 0; i < getTotalHighLevelGems; i++) {
					var highestLevelGems = await nftContract.methods.highestLevelGems(i).call();
					// var owner = await nftContract.methods.ownerOf(highestLevelGems).call();
					// //console.log(owner);
					// stat2 += '<p>' + owner.replace(owner.substring(5,
					// 	38),
					// 	"***") + '</p>';
					// var status = await nftContract.methods.gemStatus(highestLevelGems);

					gemPotEligible.push(highestLevelGems);
					gems += '<p>Gem #' + highestLevelGems + '</p>\n'
				}
				stat2 += gems;

				if (gemPot > 0) {
					var freq = await nftContract.methods.winnerPickDuration().call();

					var block = await web3.eth.getBlock("latest");
					var currentTime = block.timestamp;

					var math = (lastDraw / 1e5) + ((freq * 3600) / 1e5);
					var math = (lastDraw / 1e5) + (10 / 1e5);

					// console.log("freq " + freq + " currentTime " + currentTime / 1e5 + " last draw " + lastDraw / 1e5 + "\n " + time);

					if (time == true) {
						document.getElementById("win").classList.remove("disabled");
					} else {
						stat2 += '<p>* Pick winner is not ready yet!</p>\n';
						document.getElementById("win").classList.add("disabled");
					}
				}
				else {
					stat2 += '<p>* Pot balance is 0!</p>\n';
					document.getElementById("win").classList.add("disabled");
				}
			} else {
				stat2 = '<p>* No eligible gems in the pot!</p>\n';
				document.getElementById("win").classList.add("disabled");
			}

			document.getElementById("win").removeAttribute("hidden");

			var element = document.getElementById("stat2");
			element.innerHTML = stat2;
			element.scrollTop = element.scrollHeight - element.clientHeight;

		} catch (err) {
			console.log("Game Stat Error\n" + err);
		}
		document.getElementById("loader").classList.add("hide-loader");
		sendAlert("Stats Ready");
		console.log("Stats Ready");
	}
}
/* ----------------------------;l..;l
*	Owned Gem
* ----------------------------*/
async function getOwnedAsync(index, callback) {

	/* Token of owner Method*/
	try {
		var tokenId = await nftContract.methods.tokenOfOwnerByIndex(currentAddr, index).call(); //get token
		var gemStatus = await nftContract.methods.gemStatus(tokenId).call(); //get the status of gem from token
	} catch (e) {
		console.log("error: getting token", e)
		callback(e);
	}
	//add to array
	var obj = { token: tokenId, level: gemStatus.level, balance: gemStatus.balance };
	ownedNFts.push(obj);

	callback(null, obj);
}
async function getOwned(bal) {

	for (let i = 0; i < bal; i++) {
		var tokenId = await nftContract.methods.tokenOfOwnerByIndex(currentAddr, i).call(); //get token
		var gemStatus = await nftContract.methods.gemStatus(tokenId).call(); //get the status of gem from token

		var gemImage;
		var uri = await nftContract.methods.tokenURI(tokenId).call(); //getImage
		await fetch(uri)
			.then(res => res.json())
			.then(data => {
				gemImage = data.image;
			});

		const obj = { token: tokenId, level: gemStatus.level, balance: gemStatus.balance, gemImage: gemImage };
		ownedNFts.push(obj);
		// console.log(obj);
	}
	ownedNFts.sort((a, b) => a.token - b.token);
}

async function getOwnedPaintSwap(bal) {
	////===========paintSwap method=============//
	var response = await fetch(`https://api.paintswap.finance/v2/userNFTs?numToSkip=0&numToFetch=${bal}&user=${currentAddr}
		&orderBy=lastTransferTimestamp&orderDirection=desc&collections=${contAddress}`)
		.catch(err => {
			console.log("Error fetching from paintswap: " + err)
			sendAlert("Error getting owned Gems. Please reload");
		});
	// console.log(response);

	if (response) {
		var nfts = await response.json();

		for (let i = 0; i < bal; i++) {
			var nft = nfts.nfts[i];
			// console.log(nft);
			var tokenId = nft.tokenId; //paintswap method
			// console.log(tokenId);
			var gemStatus = await nftContract.methods.gemStatus(tokenId).call(); //get the status of gem from token

			var gemImage;
			var uri = await nftContract.methods.tokenURI(tokenId).call(); //getImage
			await fetch(uri)
				.then(res => res.json())
				.then(data => {
					gemImage = data.image;
				});

			//add to array
			var obj = { token: tokenId, level: gemStatus.level, balance: gemStatus.balance, gemImage: gemImage };
			ownedNFts.push(obj);
		}
		ownedNFts.sort((a, b) => a.token - b.token);
	}
}
/* ----------------------------
*	Show Image of GEM
* ----------------------------*/
async function showImage(num, token) {
	document.getElementById("gemContainer").removeAttribute("hidden");
	var gem = document.getElementById("gemImage" + num);
	gemContainer = '';

	var gemObj = ownedNFts.find(obj => obj.token === token);
	// console.log(gemObj.token);
	// console.log(data);
	gemContainer += '<div id="myGemImage' + num + '" class="myGemImage">\n';
	gemContainer += '<img class="gem" src="' + gemObj.gemImage + '"></div>\n';
	gemContainer += '<p class="m-0 p-small text-center text-white">#' + token + '</p>\n';
	document.getElementById("gemImage" + num).innerHTML = gemContainer;

}

async function dropDownSetup() {
	sendAlert("...Getting Owned Gems...");
	// console.log("...Getting Owned Gems...");
	//reset droptext
	document.getElementById("dropdownMenuButton1").textContent = 'Select 1st Gem';
	document.getElementById("dropdownMenuButton2").textContent = 'Select 2nd Gem';
	document.getElementById("dropdownMenuButton3").textContent = 'Select 3rd Gem';
	document.getElementById("dropdownMenuButtonWithdraw").textContent = 'Select a GEM';
	//Preparing dropdown
	var one = document.getElementById("dropdownMenu1");
	var two = document.getElementById("dropdownMenu2");
	var three = document.getElementById("dropdownMenu3");
	var withD = document.getElementById("dropdownWithdraw");

	/////// reset dropdown data /////////
	var htmlWD = '';
	ownedNFts.length = 0;
	document.getElementById("gemContainer").setAttribute("hidden", true);
	document.getElementById("gemImage" + 1).innerHTML = '';
	document.getElementById("gemImage" + 2).innerHTML = '';
	document.getElementById("gemImage" + 3).innerHTML = '';

	var accounts = await ethereum.request({
		method: 'eth_requestAccounts'
	});
	currentAddr = accounts[0];
	try {
		bal = await nftContract.methods.balanceOf(currentAddr).call();
		// console.log("balance " + bal);
		// await getOwned(bal);

		if (bal > 0) {
			await getOwnedPaintSwap(bal);

			// ====//get owned by index method=================================================//
			for (let i = 0; i < bal; i++) {
				var obj = ownedNFts[i];
				//dropdown menu
				htmlWD += '<li class="dropdown-item">Gem #' + obj.token + ' :Lvl ' + obj.level + ' :Bal ' + obj.balance / 1e18 + '</li>\n';
			}
			// ====//paint Swap=================================================//
			// htmlWD = await getOwnedPaintSwap(bal);
			one.innerHTML = htmlWD;
			two.innerHTML = htmlWD;
			three.innerHTML = htmlWD;
			withD.innerHTML = htmlWD;
		}
	}
	catch (error) {
		console.log("Get owned gem error:", error);
	}

}

/* ----------------------------
*	Dropdown menu setup
* ----------------------------*/
function dropDownListener() {

	//Add listeners
	$('#dropdownMenu1 li').on('click', function () {
		// console.log($(this).html());
		$("dropdownMenu1").collapse("hide");
		document.getElementById("dropdownMenuButton1").textContent = $(this).html();
		preventDupes();

		var token = parseDropSelection($(this).html(), '#', ' :Lvl');
		showImage(1, token);
	});

	$('#dropdownMenu2 li').on('click', function () {
		//console.log($(this).html());
		document.getElementById("dropdownMenuButton2").textContent = $(this).html();
		preventDupes();

		var token = parseDropSelection($(this).html(), '#', ' :Lvl');
		showImage(2, token);
	});

	$('#dropdownMenu3 li').on('click', function () {
		// console.log($(this).html());
		document.getElementById("dropdownMenuButton3").textContent = $(this).html();
		preventDupes();

		var token = parseDropSelection($(this).html(), '#', ' :Lvl');
		showImage(3, token);
	});

	$('#dropdownWithdraw li').on('click', function () {
		document.getElementById("dropdownMenuButtonWithdraw").textContent = $(this).html();
	});
	// console.log("Dropdown ready");
}

/* ----------------------------
*	Prevent duplicate in dropdown
* ----------------------------*/
function preventDupes() {
	var selectOne = document.getElementById("dropdownMenuButton1").innerHTML;
	var selectTwo = document.getElementById("dropdownMenuButton2").innerHTML;
	var selectThree = document.getElementById("dropdownMenuButton3").innerHTML;

	// var optionsCurr = current.getElementsByTagName('option');
	var options1 = document.getElementById("dropdownMenu1").getElementsByTagName('li');
	var options2 = document.getElementById("dropdownMenu2").getElementsByTagName('li');
	var options3 = document.getElementById("dropdownMenu3").getElementsByTagName('li');
	// console.log(options1);

	for (let i = 0; i < options1.length; i++) {
		options1[i
		].classList.remove("disabled");
		options2[i
		].classList.remove("disabled");
		options3[i
		].classList.remove("disabled");

		if (options1[i
		].textContent == selectOne || options1[i
		].textContent == selectTwo || options1[i
		].textContent == selectThree) {
			options1[i
			].classList.add("disabled");
		}
		if (options2[i
		].textContent == selectOne || options2[i
		].textContent == selectTwo || options2[i
		].textContent == selectThree) {
			options2[i
			].classList.add("disabled");
		}
		if (options3[i
		].textContent == selectOne || options3[i
		].textContent == selectTwo || options3[i
		].textContent == selectThree) {
			options3[i
			].classList.add("disabled");
		}
	}
	// options1[index - 1].disabled = true;
	// options2[index - 1].disabled = true;
}

async function updateData() {
	try {
		document.getElementById("loader").classList.remove("hide-loader");
		await dropDownSetup();
		await reloadStats();
		document.getElementById("loader").classList.add("hide-loader");
		dropDownListener();
		sendAlert("Dropdown Ready");
		console.log("Dropdown Ready");
	} catch (e) {
		console.log(e);
		sendAlert("Error getting data. Please reload", red)
	}
}

function parseError(err) {
	var text = err + '';
	var error = text.slice(text.indexOf('{') - 1, text.lastIndexOf('}') + 1);
	var message = JSON.parse(error).message;
	return message;
}

function parseDropSelection(text, a, b) {
	// var token = text.slice(text.indexOf('#') + 1, text.lastIndexOf(':Lvl'));
	var token = text.slice(text.indexOf(a) + 1, text.lastIndexOf(b));
	return token;
}

function sendAlert(message) {
	var alert = document.getElementById("alert-txt").innerHTML;
	alert = message;
	document.getElementById("alert-txt").innerHTML = alert;
}
function sendAlertPerm(message, red) {
	var alert = document.getElementById("alert-perm");
	if (red == 'red') {
		alert.style.cssText = 'background-color:rgb(238, 9, 121, 0.5);';
	} else {
		alert.style.cssText = 'background-color:none;';
	}
	alert.innerHTML = message;
}

$(document).ready(function () {
	loadWeb3();
})

window.addEventListener('contractLoaded', () => {
	updateData();
});

const setAccListener = (ethereum) => {
	ethereum.on("accountsChanged", pageReload);
}
const setChainListener = (ethereum) => {
	ethereum.on("chainChanged", pageReload);
}
function pageReload() {
	window.location.reload();
}