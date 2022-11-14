
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

output(Calculator(2,3,"+"));
output(Calculator(2,2,"-"));
output(Calculator(6,7,"*"));
output(Calculator(5,0,":"));
output(Calculator(4,5,"$$"));



function Calculator(a,b,op) {
    switch (op) {
        case "+": // addition
            return add(a,b);  

        case "-": // substraction
            return substract(a,b);
            
        case "*": // multiplikation
            return multiply(a,b);

        case ":": // division
        case "/": // division
            return divide(a,b);
    
        default: // Error
            return "Something went wrong!"
    }
    

}

// modul division a / b
// output(divide(2,3));
// output(divide(2,-3));
// output(divide(2,0));
// output(divide(0,2));
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
// output(multiply(2,3));
// output(multiply(2,-3));
// output(multiply(2,0));
function multiply(a,b) {
    return a * b;
}

// module substraction a - b
// output(subtract(2,3));
// output(subtract(2,-3));
// output(subtract(2,0));
function substract(a,b) {
    return a - b;
}


// module addition a+b test
// output(add(2,3));
// output(add(2,-3));
// output(add(2,0));
function add(a,b) {;
    return a + b;
}


// module: console output test
// output("Hello");
// output(2);
function output(outputData) {
    console.log(outputData);
}


