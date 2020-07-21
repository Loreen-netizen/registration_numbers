var regNumberInput = document.getElementById("regNumberInput");
var addButton = document.getElementById("addButton");
var regNumberList = document.getElementById("regNumberList");
var allRegNumbers = [];
var filteredTowns = [];
var theTown = document.getElementById("townList");
var filterButton = document.getElementById("filterButton");
var addButtonClicked = function () {
    var newListItem = document.createElement("li");
    newListItem.classList.add("regNumberLabels");
    if (regNumberInput.value !== "") {
        newListItem.innerHTML = regNumberInput.value;
        regNumberList.appendChild(newListItem);

        allRegNumbers.push(regNumberInput.value);
    }
}

var townFunction = function () {

    if (theTown.value === "Paarl") {
        for (let i = 0; i < allRegNumbers.length; i++) {
            if (allRegNumbers[i].startsWith("CJ"))
                filteredTowns.push(allRegNumbers[i]);
        }
    }
    if (theTown.value === "Cape Town") {
        for (let i = 0; i < allRegNumbers.length; i++) {
            if (allRegNumbers[i].startsWith("CA"))
                filteredTowns.push(allRegNumbers[i]);
        }
    }
    if (theTown.value === "George") {
        for (let i = 0; i < allRegNumbers.length; i++) {
            if (allRegNumbers[i].startsWith("CAw") || allRegNumbers[i].startsWith("CAG"))
                filteredTowns.push(allRegNumbers[i]);
        }
    }
    else if (theTown.value === "Stellenbosch") {
        for (let i = 0; i < allRegNumbers.length; i++) {
            if (allRegNumbers[i].startsWith("CL"))
                filteredTowns.push(allRegNumbers[i]);
        }

    }
    showTheList(filteredTowns);
}


function showTheList(filteredTowns) {
    regNumberList.innerHTML = "";
    for (var i = 0; i < filteredTowns.length; i++) {
        var currentItem = filteredTowns[i];
        var townElement = document.createElement("li");
        townElement.classList.add("regNumberLabels");

        townElement.innerHTML = currentItem;
        regNumberList.appendChild(townElement);
    }
}


addButton.addEventListener("click", addButtonClicked);
filterButton.addEventListener("click", townFunction);