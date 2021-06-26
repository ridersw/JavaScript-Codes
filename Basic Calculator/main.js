function addValues() {
	number1 = document.getElementById("number1").value

	number2 = document.getElementById("number2").value

	answer = parseInt(number1) + parseInt(number2)

	document.getElementById("answer").innerText = 'Answer: ' + answer
}

function subtractValues() {
	number1 = document.getElementById("number1").value

	number2 = document.getElementById("number2").value

	answer = parseInt(number1) - parseInt(number2)

	document.getElementById("answer").innerText = 'Answer: ' + answer

}

function multiplyValues() {
	number1 = document.getElementById("number1").value

	number2 = document.getElementById("number2").value

	answer = parseInt(number1) * parseInt(number2)

	document.getElementById("answer").innerText = 'Answer: ' + answer

}

function divideValues() {
	number1 = document.getElementById("number1").value

	number2 = document.getElementById("number2").value

	if ( (parseFloat(number1) / parseFloat(number2)) - (parseInt(number1) / parseInt(number2)) == 0) {
		answer = parseInt(number1) / parseInt(number2)
	}
	else {
		answer = parseFloat(number1) / parseFloat(number2)
	}

	

	document.getElementById("answer").innerText = 'Answer: ' + answer

}