function countDown(num){
    for(let i = num; i > 0; i--){
        console.log(i)
    }
    console.log("count down done!")
}
countDown(5)


function countDownStack(num){
    if(num <= 0){
        console.log("all done")
        return;//if we are not return it will continue loop
    }
    console.log(num)
    num--;
    countDownStack(num);//call the same function with diffrent value

}
countDownStack(5)

function sumRange(num){
    if(num === 1) return 1;
    return num + sumRange(num-1)
}
console.log(sumRange(5));//5+4+3+2+1 =15

