// controller function
function getVals() {
    document.getElementById("alert").classList.add("invisible");

    let userInput = document.getElementById("userInput").value;
    let returnObj = checkPalin(userInput);
    display(returnObj);
}

// logic function
function checkPalin(string) {
    string = string.toLowerCase();
    let regex = /[^a-z0-9]/gi;
    string = string.replace(regex,"");

    let revString = [];
    let returnObj = {};

    for (let i = string.length - 1; i >= 0; i--) {
        revString += string[i];
    }

    if (revString == string) {
        returnObj.msg = "Well Done! You entered a palindrome!";
    } else {
        returnObj.msg = "Sorry! You did not enter a palindrome!";
    }

    returnObj.reversed = revString;
    return returnObj;
}

// view function
function display(returnObj) {
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");
}