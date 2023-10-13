function Write(ButtonID) {
    var Screen_element = document.getElementById("Screen");
    Screen_element.diabled = false;
    if (isValid(ButtonID)) {
        Screen_element.value += ButtonID;
    }
    Screen_element.diabled = true;
}
function isValid(ButtonID) {
    // this func checks if the entered input is valid
    var txt = document.getElementById("Screen").value;

    // if operator expect "-" clicked first,then it shows error.
    if (txt.length == 0 && ["*", "+", "/"].includes(ButtonID)) {
        alert("Error : Cannot perform operation '" + ButtonID + "' with no operands");
    }
    // if two operators xlicked one after other, then shows error. 
    else if (["*", "+", "=", "/", "-"].includes(txt[txt.length - 1]) && ["*", "+", "=", "/", "-"].includes(ButtonID)) {
        alert("Error : two operators are immediate, " + txt[txt.length - 1] + " and " + ButtonID);
    }
    else return true;
}
function Evaluate() {
    var txt = document.getElementById("Screen").value;
    var Screen_element = document.getElementById("Screen");
    var temp = Screen_element.value;
    Screen_element.value = eval(temp);
    if (txt.length == 0) { // if directly "=" is clicked, shows msg that nothig to evaluate 
        alert("Error : Nothig to Evaluate");
        AllClear();
    }
}
function AllClear() { //  to clear the screen
    document.getElementById("Screen").value = "";
}
function BackSpace() { // to back space
    var Screen_element = document.getElementById("Screen");
    Screen_element.value = Screen_element.value.slice(0, Screen_element.value.length - 1);
}
