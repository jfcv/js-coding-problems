
function removeDups(str) {
    return Array.from(new Set(str));
}

console.log(
    removeDups('aabbccdde'),  
);