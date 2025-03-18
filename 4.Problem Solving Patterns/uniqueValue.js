function countUniqueValues(arr) {
    if (arr.length === 0){
        return 0; // If the array is empty, return 0
    }  
    let i = 0; // First pointer starts at index 0
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++; // Move the first pointer to the next position
            arr[i] = arr[j]; // Overwrite the next unique value
        }
    }
    return i + 1; // The number of unique values is i + 1
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
