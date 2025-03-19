//Log(n)
function search(arr, val) {
    arr.sort(); // Sort the array in ascending order
    console.log(arr);
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);
        // console.log(arr[middle]);
        if (arr[middle] < val) {
            min = middle + 1;
        } else if (arr[middle] > val) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}
console.log(search([3,2,6,9,1,0],9))