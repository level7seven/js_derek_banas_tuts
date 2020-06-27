function calcPI(iterations) {
    let pi = 0,
        divisor = 1;
    for (let i = 0; i <= iterations; i++) {
        pi = pi + (4 / divisor) - (4 / (divisor + 2));
        divisor = divisor + 4;
    }
    document.getElementById("output1").value = pi.toFixed(10);
}

let fibList = [];

function getFibList(howMany) {
    for (i = 0; i < howMany; i++) {
        fibList[i] = fib(i);
    }
    fibList.shift();
    document.getElementById("output1").value = fibList.join(", ");

}

function fib(whichNumber) {
    let num1 = 1,
        num2 = 0,
        temp, i = 0;
    while (i < whichNumber) {
        temp = num1;
        num1 = num1 + num2;
        num2 = temp;
        i++;
    }
    return num2;
}


let mLText = "Magna et esse do ~ culpa anim non ~ exercitation fugiat ~ in incididunt";

// logic 

// Convert string into array
let mLArray = mLText.split(" ");
// Create array for user input
let inputArray = [];


function madLibGenerator() {
    createInputArray();
    if (checkForMissingInput()) {
        document.getElementById("output1").value = "Enter all values above";

    } else {
        createMLSentence();
    }
}

function createInputArray() {
    for (i = 0; i < 13; i++) {
        inputArray[i] = document.getElementById("i" + i).value;
    }
}

function checkForMissingInput() {
    let defaultArrayVals = ["Person", "Noun", "Verb", "Adjective",
        "Plural Verb", "Body Part", "Event"
    ];

    for (i = 0; i < inputArray.length; i++) {
        if (defaultArrayVals.indexOf(inputArray[i]) > -1) {
            return true;
        }
    }
    return false;
}

function createMLSentence() {
    let arrIndex = 0;
    for (let i = 0; i < mLArray.length; i++) {
        let matchIndex = mLArray.indexOf("~");
        mLArray[matchIndex] = inputArray[arrIndex];
        arrIndex++;
    }
    document.getElementById("output1").value = mLArray.join(" ");
}