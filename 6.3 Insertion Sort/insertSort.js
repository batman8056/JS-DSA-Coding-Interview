function insertSort(arr){
    for(let i = 1; i< arr.length; i++){
        let currentValue = arr[i]
        for(j = i-1; j >= 0 && arr[j] > currentValue;  j--){
            arr[j+1] =arr[j]
            console.log(arr)
           
        }
        arr[j+1]

        
    }
    return arr
}
//Example
console.log(insertSort([5, 2, 9, 1, 5, 6]));