//Global Vars
var itemNum = 1;

// create a JSON object
const mainList = {
    produce: ["Vegtable 1", "Vegetable 2", "Vegetable 3"],
    cold: ["Cream Cheese", "Creamer"],
    aisles: ["Pasta"]
};


function saveCurrentList (){

}

function loadNewPresetList(){

}

//Temp Function
function populateCurrentList() {

    //Loop through each array within mainList object -- Then populate Current List with new li for each
    for (var i in mainList) {
        var arr = mainList[i];
        for (var j = 0; j < arr.length; j++) {
            console.log(arr[j]);
            var ul = document.getElementById("current-list");
            var li = document.createElement("li");

            //Set ID to item with number
            li.setAttribute("id", "store-item-" + itemNum);

            li.appendChild(document.createTextNode(arr[j]));
            ul.appendChild(li);

            itemNum++;
        }
    }
}

function addToCurrentList() {

    //Get value of user input box
    var userInput = document.getElementById("user-input-box").value;

    //Create list variables to use in append function
    var ul = document.getElementById("current-list");
    var li = document.createElement("li");

    //Set ID to item with number
    li.setAttribute("id", "store-item-" + itemNum)

    //Create li element with string from user input box
    li.appendChild(document.createTextNode(userInput));

    //Add li element to current list
    ul.appendChild(li);
    console.log("Added: " + "store-item-" + itemNum);

    itemNum++;
}

function removeFromCurrentList() {
    var latestItem = "store-item-" + (itemNum - 1);
    console.log("Removed: " + latestItem);

    // Get the child element node
    var child = document.getElementById(latestItem);


    // Remove the child element from the document
    child.parentNode.removeChild(child);
    itemNum--;
    
}