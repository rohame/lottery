let flag = 1;
function start(){
    flag = 1;
    changeNumber();
}

function changeNumber(){
    if(flag==0){
        return
    }
    d3.select('#num')
      .text(d3.randomInt(0, 159)());
    setTimeout("changeNumber()",50);
}

function stop(){
    flag = 0
}