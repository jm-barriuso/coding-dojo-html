console.log("page loaded...");

let cardName = document.getElementById("name-card");

function changeName(){
    console.log(cardName);
    cardName.innerText = "Juana Perez"; 
}

let badgeMinus = document.querySelector(".badge");
let badgePlus = document.getElementById("connections")
function removeRequest(e,request){
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
    if(request === 'accept'){
        badgePlus.innerText ++;
    }
    badgeMinus.innerText --;
    console.log(request);
}