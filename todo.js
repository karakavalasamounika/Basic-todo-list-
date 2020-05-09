let input = document.getElementById("userInp");
let ul = document.querySelector("ul");
let enterBut = document.getElementById("enter");
let item = document.getElementsByTagName("li");

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListEle() {
	let li = document.createElement("li"); 
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li); 
	input.value = ""; 


	function finished() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",finished);


	let dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);


	function deleteListItem(){
		li.classList.add("delete")
	}
}


function addListAfterClick(){
	if (inputLength() > 0) { 
		createListEle();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 
		//the 13 is the enter key's keycode
		createListEle();
	} 
}


enterBut.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

