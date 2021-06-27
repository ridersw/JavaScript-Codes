// generate random in range: Math.random() * (max - min) + min

//How Black Jack Works? Get 2 cards with sum as close as 21 (still in game), 21 is a blackjack and hand that sums above 21 is bust
//Ace value is 11


//console.log("Sum: " + sum)

let sum = 0

// function initializeGame() {
// 	let hasBlackJack = false
// 	let isAlive = true
// 	let firstCard = 0
// 	let message = ""
// 	let sum = 0
// 	return

function pickACard() {

	let hasBlackJack = false
 	let isAlive = true
 	let firstCard = 0
 	let message = ""
 	//let sum = 0
	firstCard += parseInt(Math.random() * (12) + 1)
	sum += firstCard
	//let sum = firstCard + secondCard
	//console.log("firstCard: " + firstCard)
	//console.log("secondCard: " + secondCard)
	document.getElementById("pickCard").innerText = "Your Card Number is: " + firstCard
	document.getElementById("theSum").innerText = "The Sum is: : " + sum

	return sum
}

function startGame() {
	sum = pickACard()
	if (sum == 21) {
		alert("That's a BLACKJACK!!! ")
		hasBlackJack = true
	}

	else if (sum <= 21) {
		message = "Still in the Game"
	}

	else {
		message = "Busted!!"
		isAlive = false
		alert("Busted!!")
		if (confirm("Do You Want To Play Again?")) {
			sum = 0
			hasBlackJack = false
		 	isAlive = true
		 	firstCard = 0
		 	document.getElementById("pickCard").innerText = "Your Card Number is: " + firstCard
			document.getElementById("theSum").innerText = "The Sum is: : " + sum
		}
		else {
			window.close()
		}
	}
	console.log(sum)
	console.log(message)
}