
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/


//Module: calculator tester
// agreement: "+", "-", "*", ":"

output(Calculator("+"));
output(Calculator("-"));
output(Calculator("*"));
output(Calculator(":"));
output(Calculator("$$"));


function Calculator(op) {
    switch (op) {
        case "+": // addition
            return "add";  

        case "-": // substraction
            return "sub";
            
        case "*": // multiplikation
            return "mul";

        case ":": // dicvision
            return "div";
    
        default: // Error
            return "Something went wrong!"
    }
    
}

// modul division a / b
function divide(a,b) {

    if (b == 0) {
        return "ERROR";
        
    } else {
        return a / b;
        
    }
    

    // if (b != 0) {
    //     // true
    //     return a / b;
    // } else { 
    //     //false
    //     return "ERROR"
    // }

    // return a / b;
}


// module multiply a*b
function multiply(a,b) {
    return a * b;
}

// module substraction a - b
function substract(a,b) {
    return a - b;
}


// module addition a+b test
function add(a,b) {;
    return a + b;
}


// module: console output test
// output("Hello");
// output(2);
function output(outputData) {
    console.log(outputData);
}


