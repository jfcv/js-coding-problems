
let arr = [1,2,3,3,4];
let objArr = {};

arr.forEach(element => { //O(n)
    if (objArr[element]) {
        console.log(element);
    } else {
        objArr[element] = true;
    }
});