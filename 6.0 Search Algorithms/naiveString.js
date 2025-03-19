
function nativeSearch(long, short){
    let count = 0;
    for(let i =0; i <long.length; i++){
        for(let j=0; j<short.length; j++){
           if(long[i+j] !== short[j]){
                console.log(short[j] ,long[i+j])
                console.log("break")
                break;
           }
           if(j === short.length-1){
            console.log("found one")
            count++;
           }
        }
    }
    return count;
}
nativeSearch("loria loled", "lol");