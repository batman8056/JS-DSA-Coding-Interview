function search(arr,val){
    let min = 0
    let max =  arr.length -1;
    let middle = Math.floor((min + max) /2);

        while(arr[middle] !== val){
            console.log(min, max, middle);
            if(val < arr[middle]) max = middle -1;
            else min = middle +1;
            middle = Math.floor((min + max) /2);
         }
        return arr[middle] == val ? middle : -1;
        
}
console.log(search([1, 2, 3, 4, 5, 6],5));