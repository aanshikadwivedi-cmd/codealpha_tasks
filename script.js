const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.innerText;

        if(value === "C"){
            display.value = "";
        }

        else if(value === "⌫"){
            display.value = display.value.slice(0,-1);
        }

        else if(value === "="){

            try{
                display.value = eval(display.value);
            }

            catch{
                display.value = "Error";
            }

        }

        else{

            if(display.value === "Error"){
                display.value = "";
            }

            display.value += value;
        }

    });

});

/* Keyboard Support */

document.addEventListener("keydown",(event)=>{

    const key = event.key;

    if((key>="0" && key<="9") ||
       key==="+" ||
       key==="-" ||
       key==="*" ||
       key==="/" ||
       key==="."){

        display.value += key;
    }

    else if(key==="Enter"){

        try{
            display.value = eval(display.value);
        }
        catch{
            display.value = "Error";
        }

    }

    else if(key==="Backspace"){
        display.value = display.value.slice(0,-1);
    }

    else if(key==="Delete"){
        display.value = "";
    }

});