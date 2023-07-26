var display = document.getElementById('display');

function onclick(value){
    display.value += value;

}

function clearScreen(){
    display.value = ""
}

function findResult(){
    var result = eval(display.value);
    display.value = result;
}