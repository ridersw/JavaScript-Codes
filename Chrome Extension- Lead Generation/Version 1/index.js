// function saveLead() {
// 	console.log("Button Clicked!!")

// }

// Add EventListener-
// 1. Grab the box and store it in Variable
// 2. Add the event to the box
// 3. Write a function

let myLeads = []
const inputel = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const clearBtn = document.getElementById("clear-btn")
const ulEl = document.getElementById("ul-el")


let localLeads = JSON.parse(localStorage.getItem("myLeads"))
//console.log(localLeads)

if (localLeads){
	myLeads = localLeads
	renderList()
}

inputBtn.addEventListener("click", function(){
	if (!!inputel.value) {
		myLeads.push(inputel.value)
		inputel.value = ''


		localStorage.setItem("myLeads",JSON.stringify(myLeads))
		renderList()
	}
	
})

clearBtn.addEventListener("click", function() {
	myLeads = []
	localStorage.removeItem("myLeads")
	renderList()
})

function renderList() {
	let listItems = ""

	for (let swi = 0; swi < myLeads.length; swi++ ) {
	// 	//console.log(myLeads[swi])
	 	listItems += "<li>" + myLeads[swi] + "</li>"
	 }

	//console.log(localStorage.getItem("myLeads"))


	ulEl.innerHTML = listItems
}