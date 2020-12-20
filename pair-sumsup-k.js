let arr = [3,5,7,8,9];
let k = 10;

let notArr = [];

let objArr = {};

//pushing the reflection number to 'notArr' array && saving array numbers on the 'objArr' object array
arr.map(function(number) { //O(n)
    notArr.push(Math.abs(number-k));
    objArr[number] = true;
});

let lookedPair = [];

notArr.map(function(notNumber) { //O(n)
    if (objArr[notNumber] && notNumber !== k/2) {
        lookedPair.push(notNumber);
    }
});


//object array printing from the original array
console.log(objArr);

//reflection array printing
console.log(notArr);

//find pair that sums up to k printing
console.log(lookedPair);


//Time Complexity: O(n)

//Space Complexity: O(n)