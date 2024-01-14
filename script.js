


function updateDisplay(e){
    let display=document.querySelector("h1");
    let pressKey=e.key;
    let keyValue=e.keyCode;


    display.innerHTML=`You press  <span> &nbsp; ${pressKey}
    &nbsp; </span> key and the key code is <span> &nbsp; ${keyValue}</span>`;
    display.style.width="90%";
}





document.addEventListener("keydown",updateDisplay);