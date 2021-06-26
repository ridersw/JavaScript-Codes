// document.getElementById("count-el").innerText = 4

//let variable = 2

//console.log(variable)

let variable = 0

function increment() {
	//console.log("Button was Clicked")

	//document.getElementById("count-el").innerText = variable+1
	variable = variable +1
	//console.log(variable)
	document.getElementById("count-el").innerText = variable
}

function save() {
	document.getElementById("history").innerText = document.getElementById("history").innerText + variable + " - "
	variable = 0
	document.getElementById("count-el").innerText = variable

}

function reset() {
	variable = 0
	document.getElementById("history").innerText = "Last Records - "
}
