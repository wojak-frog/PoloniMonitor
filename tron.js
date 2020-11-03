function cancelOrder(orderID) {

	if(window.tronWeb && window.tronWeb.defaultAddress.base58){
                
        var obj = setInterval(async ()=>{
          if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
                clearInterval(obj)
                const tronweb = window.tronWeb;
                let addressBase58 = tronweb.defaultAddress.base58
                const contract = tronweb.address.toHex("TSMbPm5mUsaTDSEjHCd55ZJaib3Ysvjyc5")
                // create a tx
                order_id = tronweb.toHex(orderID)
                const parameter = [{type: 'string', value: order_id}]
                const options = {
        			feeLimit:100000000,
        			callValue:0,
        
    						}

    			console.log(`contract`, contract)
    			console.log('order id', order_id) } } ) }
				// const transaction = await tronWeb.transactionBuilder.triggerSmartContract(contract,
				 // "cancelOrder(uint256)", options, parameter, tronweb.address.toHex(addressBase58)) }


cancelOrder(2423951)
function getorders() {
	const tronscan = "https://tronscan.org/#/transaction/"
	 
	let adrs = document.getElementById('address1').innerHTML
	  var getPendingOrders = setInterval(async ()=>{
      clearInterval(getPendingOrders)

      
      
      const response = await fetch(`https://api.trx.market/api/exchange/user/order?uAddr=${adrs}`)
	  let json = await response.json()
	  console.log(response)
	  
	  const data_arr = json["data"]["rows"] /* get the list of interactions with the DEX */
	  console.log(data_arr)
	  let pending_txs = []
	  
	  
	  for (let tx of data_arr) {
	  	 if (tx["orderStatus"] === 0) {
	  		console.log(tx)
	  		
	  		pending_txs.push(tx['hash'])

	  		let el = document.createElement("p")
	  		let pair = `Pair: ${tx["fShortName"]}/${tx["sShortName"]}`
	  		let orderType = tx['orderType'] ? "sell order" : "buy order"
	  		let order_id = tx['orderID']
	  		let trade_metadata = `<b>| ${pair} | Order Type: ${orderType} | Order ID: ${order_id} |<b>`
	  		
	  		el.innerHTML = `${trade_metadata}:<br><a style="text-decoration:none;"
	  		 href="${tronscan}${tx['hash']}">${tx['hash'].slice(0,8)}....${tx['hash'].slice(tx['hash'].length, -8)}<a>` 
	  		
	  		document.getElementById("orders-list").appendChild(el)
	  		
	  	 }
	  }
}


)
}




