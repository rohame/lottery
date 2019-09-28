let flag = 1;
const from = 449001;
const to = 449200;
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
    randomIndex = d3.randomInt(0, to-from+1)();
    d3.select('#num')
      .text(arr[randomIndex]);
    setTimeout('changeNumber()',50);
}

function stop(){
    flag = 0
    arr.splice(randomIndex,1);
}