function positiveArray(num){
    let pos=[];
    for(let i=0;i<=num.length;i++){
        if(num[i]>=0){
            pos[i]=num[i];
        }
        else{
            break;
        }
    }
    return pos;
}







var num=[90,70,100,60,95,75,30,-10,65,36];
var arr=positiveArray(num);
for(let i=0;i<=arr.length;i++){
console.log(arr[i]);
}