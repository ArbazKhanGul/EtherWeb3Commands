import { ethers } from "ethers";

//for connecting with metamask

const provider = new ethers.providers.Web3Provider(window.ethereum)

//get attach account
const signer = provider.getSigner()

//get address of attach account
await signer.getAddress()

//connecting with blockchain
const provider = new ethers.providers.JsonRpcProvider();  //by default it is connecing with localhost:8545

//send trasaction through metamask
const res=await  signer.sendTransaction({to:"0x048f391974dE6c607151407Ec811a82343E62b81",value:10000000000});
let tx = await res.wait() // it return when transaction is mined

//Interacting with contract address for only reading data

const Abi = [
  // Get the account balance
  "function balanceOf(address) view returns (uint)",
  // Send some of your tokens to someone else
  "function transfer(address to, uint amount)",
  // An event triggered whenever anyone transfers to someone else
  "event Transfer(address indexed from, address indexed to, uint amount)"
];

const daiContract = new ethers.Contract(Address,Abi, provider);

balance = await daiContract.balanceOf("ricmoo.firefly.eth") //call method

//Interacting with contract address for writing data also

const daiWithSigner = contract.connect(signer); // or give signer instead of provider in above method

tx = daiWithSigner.transfer("ricmoo.firefly.eth", dai);//call method



//convert to wei
ethers.utils.parseUnits("1.0", 18);

//convert to ether
ethers.utils.formatUnits(balance, 18)

//listening to events
daiContract.on("Transfer", (from, to, amount, event) => {
    console.log(`${ from } sent ${ formatEther(amount) } to ${ to}`); //it is event which we use above
});

//sign message
signature = await signer.signMessage("Hello World");



//sign transaction 


const connection = new ethers.providers.JsonRpcProvider();  
const gasPrice=provider.getGasPrice();


const wallet=ethers.Wallet.fromMnemonic("your mnemoic");
const signer=wallet.connect(connection);


// through private key//  let signer=new ethers.Wallet(privateKey,provider)

const recepient="recepient address"
const tx={
    from: wallet.address,
    to: recepient,
    value: ethers.utils.parseEther("0.05"),
    nonce: await connection.getTransactionCount(wallet.address, "latest"),
    gasLimit: ethers.utils.hexlify(10000),
    gasPrice,
}

const transaction=await signer.sendTransaction(tx);
let tx = await transaction.wait() // it return when transaction is mined


//call contract
var options = { gasPrice: 1000000000, gasLimit: 85000, nonce: 45, value: 0 };
transaction = await contract.createMarketItem(nftaddress, tokenId, price, options )

await transaction.wait()



//estimate gas limit
const erc20 = new ethers.Contract(address, abi, provider);
const recipient = "SOME_ADDRESS_HERE";
const estimation = await erc20.estimateGas.transfer(recipient, 100);
