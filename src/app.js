App = {
	load: async () => {
		// Load app...
		await App.loadWeb3()
		await App.loadAccount()
		await App.loadContract()
	},

	loadWeb3: async () => {
	    if (typeof web3 !== 'undefined') {
	      App.web3Provider = web3.currentProvider
	      web3 = new Web3(web3.currentProvider)
	    } else {
	      window.alert("Please connect to Metamask.")
	    }
	    if (window.ethereum) {
	      window.web3 = new Web3(ethereum)
	      try {
	        await ethereum.enable()
	        web3.eth.sendTransaction({/* ... */})
	      } catch (error) {
	      }
	    }
	    else if (window.web3) {
	      App.web3Provider = web3.currentProvider
	      window.web3 = new Web3(web3.currentProvider)
	      web3.eth.sendTransaction({})
	    }
	    else {
	      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
	    }
	  },

	  loadAccount: async () => {
	  	App.account = await web3.eth.accounts
	  	console.log(App.account)
	  },

	  loadContract: async () => {
	  	const todoList = await $.getJSON('TodoList.json')
	  	console.log(todoList)
	  },

	},


$(() => {
	$(window).load(() => {
		App.load()
	})
})