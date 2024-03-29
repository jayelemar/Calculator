const keys = document.getElementsByTagName("li");
    result = document.querySelector("p"),
    clear = document.querySelector(".clear");

for (let i = 0; i < keys.length; i++) {
    if (keys[i].innerHTML === "=") {
        keys[i].addEventListener("click", calculate);
    } else {
        keys[i].addEventListener("click", addToCurrentValve(i))
    }
}

function addToCurrentValve(i){
    return() => {
        if(keys[i].innerHTML === "÷"){
            result.innerHTML += "/";
        } else if(keys[i].innerHTML === "x") {
            result.innerHTML += "*";
        } else {
            result.innerHTML += keys[i].innerHTML;
        }
    }
}

function calculate() {
    return(result.innerHTML = eval(result.innerHTML));
}

clear.addEventListener("click", ()=> {
    result.innerHTML = "";
});