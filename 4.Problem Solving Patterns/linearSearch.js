//O(n) Linear search
function search(arr, val){
    for(let i = 0; i<arr.length; i++){
        if(arr[i] == val) return true;
    }
    return false
}
//search the 9 it is present return true if not return false
console.log(search([3,2,6,9,1,0],9))

