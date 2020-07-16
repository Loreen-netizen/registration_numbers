var regNumberInput = document.getElementById("regNumberInput");
var addButton = document.getElementById("addButton");
var regNumberList = document.getElementById("regNumberList");

var addButtonClicked = function(){
var newListItem = document.createElement("li");
newListItem.classList.add("regNumberLabels");
if (regNumberInput.value !== ""){
    newListItem.innerHTML = regNumberInput.value;
    regNumberList.appendChild(newListItem);
}

}



addButton.addEventListener("click", addButtonClicked);