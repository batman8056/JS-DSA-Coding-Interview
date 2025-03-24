// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let minIndex = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIndex]) {
//                 minIndex = j;
//             }
//         }
//         // Swap elements
//         if (minIndex !== i) {
//             let temp = arr[i];
//             arr[i] = arr[minIndex];
//             arr[minIndex] = temp;
//         }
//     }
//     return arr;
// };
function selectionSort(arr){
    for(let i = 0; i<arr.length; i++){
        let minIndex = i;
        for(let j = i +1; j<arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        //swap
        if(minIndex !== i){
            // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];  // Swap elements using destructuring
            let temp =arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] =temp
        }
    }
    return arr;
}
// Example
console.log(selectionSort([5, 2, 9, 1,-3,  5, 6]));