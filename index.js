
const soldiv = document.querySelector("#sol");
const sagdiv = document.querySelector("#sag");
const ctrldiv = document.querySelector("#ctrl");
const clear = document.querySelector("#button_clear");
var userText1 = document.querySelector("#user_input");

document.getElementById("button_clear").addEventListener("click" , changeText);
userText1.focus();
function changeText (){
    location.reload();
    return false;
}


function wordRev () {
   
    var userText = userText1.value;
    var s=userText.split("").reverse().join("");
    soldiv.innerHTML=s;
    sagdiv.innerHTML=s;
    ctrldiv.innerHTML=s;
   
    setTimeout(wordRev);
}
    
wordRev();
    
