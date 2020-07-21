var regNumberInput = document.getElementById("regNumberInput");
var addButton = document.getElementById("addButton");
var regNumberList = document.getElementById("regNumberList");

var theTown = document.getElementById("townList");
var addButtonClicked = function(){
var newListItem = document.createElement("li");
newListItem.classList.add("regNumberLabels");
if (regNumberInput.value !== ""){
    newListItem.innerHTML = regNumberInput.value;
    regNumberList.appendChild(newListItem);
}

}

var townFunction = function(){
    
    if(theTown.value === "Paarl"){
        alert("Paarl")
    }
    else if(theTown.value === "Cape Town"){
        alert("Cape Town")
    }
    else if(theTown.value === "George"){
        alert("George")
    }
    else if(theTown.value === "Stellenbosch"){
        alert("Stellenbosch")
    }
}


addButton.addEventListener("click", addButtonClicked);
addButton.addEventListener("click", townFunction);
