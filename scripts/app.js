// IIFE - Immediately Invoked Function Expression
(function () {

//Define global variables
let addThreeButton = document.getElementById("add-3");
let subThreeButton = document.getElementById("subtract-3");
let reeseNumber = document.getElementById("reese-number");
let cupsimage3 = document.getElementById("3-cups");
let cupsimage6 = document.getElementById("6-cups");
let cupsimage9 = document.getElementById("9-cups");
let cupsimage12 = document.getElementById("12-cups");


//Reese Number Section

//Add event listeners on each of our reese number buttons
addThreeButton.addEventListener("click",ReeseCounter);
subThreeButton.addEventListener("click",ReeseCounter);


//Function used when a reese's cups are added or subtracted
function ReeseCounter(event) {
    let currentNumber;

    //grabs the button which is currently being clicked
    let currentButton = event.currentTarget;

    switch (currentButton.getAttribute("id")) {
        case "add-3":
            //If the reese's number is less than 99, add 3 cups
            if(reeseNumber.value < 99){
                //increment our reese's number by 3 cups
                currentNumber = parseInt(reeseNumber.value);
                currentNumber += 3;
                reeseNumber.value = currentNumber;   
            }

        break;
        case "subtract-3":
            //if the reese's number is greater or equal to 3, subtract 3 cups
            if(reeseNumber.value >= 3){
                //decrement our reese's number by 3 cups
                currentNumber = parseInt(reeseNumber.value);
                currentNumber -= 3;
                reeseNumber.value = currentNumber;   
            }
        break;
    }
        //depending on how many Reese's have been selected, change pictures/aria elements
        switch(parseInt(reeseNumber.value)){
            case 0:
                cupsimage3.style.display = "none";
            break;
            case 3:
                cupsimage3.style.display = "initial";
                cupsimage6.style.display = "none";
            break;
            case 6:
                cupsimage3.style.display = "none";
                cupsimage6.style.display = "initial";
                cupsimage9.style.display = "none";
            break;
            case 9:
                cupsimage6.style.display = "none";
                cupsimage9.style.display = "initial";
                cupsimage12.style.display = "none";

            break;
            case 12:
                cupsimage9.style.display = "none";
                cupsimage12.style.display = "initial";
            break;
            case 20:
            break;
            case 99:
            break;
        
    }
}


    



})(); // end of the IIFE