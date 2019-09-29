let flag = 1;
const from = 9002;
const to = 9167;
let randomIndex = 0;

let arr = []
for(let i=from;i<=to;i++){
    arr.push(i);
}
function start(){
    flag = 1;
    changeNumber();
}

function changeNumber(){
    if(flag==0){
        return
    }
    console.log(arr.length);
    randomIndex = d3.randomInt(0, arr.length)();
    d3.select('#num')
      .text(arr[randomIndex]);
    setTimeout('changeNumber()',50);
}

function stop(){
    flag = 0
    arr.splice(randomIndex,1);
}