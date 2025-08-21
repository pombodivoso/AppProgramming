let inputUser = document.getElementById("userInput")
let list = document.getElementById("listChores")

function addChore(){


    let newChore = document.createElement("div")
    newChore.classList.add("choresSquare")

    let newP = document.createElement("p")
    newP.textContent = inputUser.value
    newP.classList.add("chores")
    newChore.appendChild(newP)

    let newButton = document.createElement("button")
    newButton.classList.add("buttonX")
    newButton.onclick = removeChore;
    newButton.textContent = "X"
    newChore.appendChild(newButton)

    list.appendChild(newChore)
    
}

function removeChore(event){
    const button = event.target;          
    const choreDiv = button.parentNode;   
    choreDiv.remove();              
}