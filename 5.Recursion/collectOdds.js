function collectOddvalues(arr){

    let result = [];
    function helper(num){
        if(num.length === 0) return;
        if(num[0] % 2 !== 0){
            result.push(num[0])
        }
        helper(num.slice(1));
    }
    arr.sort()
    helper(arr)
    return result;
}
console.log(collectOddvalues([1,2,3,4,5,6,7,8]));
