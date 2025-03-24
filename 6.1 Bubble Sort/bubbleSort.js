const sortArray = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        // noSwap = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                //swap
                var temp = arr[j];//init value store temp
                arr[j] = arr[j+1];//next value replace to init value of arr[j]
                arr[j+1] =temp;//then temp replace to next value
                // noSwap = false;
                // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];  // Swap elements using destructuring
            }
        }
        // if(noSwap) break;
    }
    return arr;
};

// Example
console.log(sortArray([5, 2, 9, 1,-3,  5, 6]));  // Output: [1, 2, 5, 5, 6, 9]