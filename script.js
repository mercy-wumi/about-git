// Module 13 Assignment
//celsius to fahrenheit
function convertToF(celsius) {
    let fahrenheit;
    fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}
document.getElementById('convert').textContent = convertToF(30);

//reverseString
function reverseString(str) {
    let newString = "";

    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    // let third = str[1]
    // console.log(third)
    return newString;
}
// reverseString('mercy')
document.getElementById('reverse').textContent = reverseString('mercy');

//factorialize
function factorialize(num) {
    for (var i = num - 1; i > 0; i--) {
        num *= i;
    }
    // if (num ==0){
    //   num = 1;
    // }
    return num;
}
document.getElementById('factorise').textContent = factorialize(5);

// Module 14 Assignment
// Truncate a String
function truncateString(str, num) {
    if (str.length > num) {
        // str = str.substr(0, num)+"...";
        str = str.slice(0, 5) + "...";
    }
    return str;
}

document.getElementById('truncate').textContent = truncateString("Adams Mercy", 5);

//Where Do I Belong
function getIndexToIns(arr, num) {
    arr.sort(function (a, b) { return a - b });
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num)
            return i
    }
    return arr.length;
}

document.getElementById('belongTo').textContent = getIndexToIns([40, 55, 45, 60], 50);

//Chunky Monkey
function chunkArrayInGroups(arr, size) {
    let newArray = []
    for (let i = 0; i < arr.length; i += size) {
        newArray.push(arr.slice(i, i + size));
    }
    console.log(newArray)
    return newArray;
}

document.getElementById('chunk').textContent = chunkArrayInGroups(["a", "b", "c", "d"], 2);

