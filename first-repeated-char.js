
let name = 'ferne';

let tempStr = Array.from(new Set(name));
let freqs = {};
tempStr.forEach(element => { //O(n)
    freqs[element] = 0;
});

let str = name.split(''); //O(1)

let counter = 0;
for (let i = 0; i < str.length; i++) { //O(n)
    let element = str[i];
    if(freqs[element] !== undefined) {
        freqs[element]++;
    }
    if (freqs[element] > 1) {
        console.log(`The first repeated character is ${element}.`);
        break;
    } else {
        counter += freqs[element];
    }
}

if(counter === str.length) {
    console.log(`${null}`);
}

console.log(freqs);