var registrationNumberFactoryFunction = function(){
var regNumber = "";
var theTown = "";
    // var createNewListItem = function(){
    //     var newListItem = document.createElement("li");
    //     return newListItem
    // }
    
    var displayRegNumber = function(theRegNumber){
        regNumber = theRegNumber;
        return regNumber
    }

    var townSelected = function(town){
       
        theTown = town;

        if (theTown === "CA") {
            return "Cape Town";
        }
         else if (theTown === "CJ") {
            return "Paarl";
        }
       
       else if (theTown === "CL") {
            return "Stellenbosch";
        }
        else if (theTown === "") {
            return "Please Select Town";
        }

        };
    
    
    
    
    
    
    
    
        return{
            // createNewListItem,
            displayRegNumber,
            townSelected,
        }
    }