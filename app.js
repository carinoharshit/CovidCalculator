window.onload = () =>{
    document.querySelector('#calculate').onclick = add;
}
function add(){
    var ACY,ACT,NCT,RCT;
// ACY --> Total Active Cases Yesterday 
// ACT --> Total Active Cases Today
// NCT --> New Cases Today
// RCT --> Recovered Cases Today

    ACY=Number(document.getElementById("ACY").value);
    ACT=Number(document.getElementById("ACT").value);
    NCT=Number(document.getElementById("NCT").value);
    RCT=(ACY+NCT)-ACT;
    document.getElementById("answer").value= RCT;
}
