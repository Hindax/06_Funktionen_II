
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

// Application , App
// startApp();
// function startApp() {
//     output(Calculator(getNumber("Zahl 1"),getNumber("Zahl 2"),getOp()));
    
// }
let isNotAborted; // Globale Variable
startApp();
function startApp() {
    let num1,num2,op;
    isNotAborted = true;

    if (isNotAborted){num1 = getNumber("1st");}
    if (isNotAborted){num2 = getNumber("2nd");}
    if (isNotAborted){op = getOp();}
    
    if (isNotAborted){
        output(calculator(num1,num2,op)); 
    } else{
        output("Aborted by user!");
    }
}
// function getNumber(figure) {
//     let inputStr = prompt("Bitte " + figure + " eingeben")
//     let num = parseInt(inputStr);
//     return num;
// }

// module: data input | test:
//output(getNumber("1st"));
function getNumber(figure) {
    const displayStr = "Please insert " + figure + " number:";
    let inputStr = prompt(displayStr) 
    let num = parseInt(inputStr);

    // if num is NOT a number AND user DIDN'T click at Abbrechen
    while (isNaN(num) && (inputStr !== null)) {
        inputStr =  prompt(displayStr);
        num = parseInt(inputStr); 
    }
    
    // if this is aborted, ALL gets aborted ...
    if(inputStr == null){isNotAborted = false;}
    return num;

}



// module: input operator, test
// output(getOp());
// function getOp() {
//     let op = prompt("Please insert an operator");
//     if (isOpValid(op)) {
//         return "operator ok";
//     } else {
//         return "operator not ok";
//     }  
// }

// module: input operator | Test:
//output(getOp());
// 
// module: input operator | Test:
//output(getOp());
function getOp() {
    const displayStr = "Please insert correct operator [ + | - | * | : | / ]:";
    let op = prompt(displayStr); 

    // if op is NOT valid AND user DIDN'T click at Abbrechen
    while (isNotValidOp(op) && (op !== null)) {
        op = prompt(displayStr);
    }

    if (op == null){isNotAborted = false;}
    return op;
}
function isNotValidOp(op) {
    return op != "+" && op != "-" && op != "*" && op != ":" && op != "/";
}
// function isOpValid(op) {

//     switch (op) {
//         case "+":
//         case "-":
//         case "*":
//         case ":":
//         case "/":
//             return true;
//         default:
//             return false;
//     }
    
// }


// module: calculator | tests:
// agreement : "+","-","*",":"
// output(Calculator(2,2,"+"));
// output(calculator(2,2,"-"));
// output(calculator(2,2,"*"));
// output(calculator(2,2,":"));
// output(calculator(2,0,"/"));
// output(calculator(2,2,"#?!"));

function calculator(a,b,op) {
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
            return "Something went wrong!";
    }

}

// modul division a / b | test
// output(divide(2,3));
// output(divide(2,-3));
// output(divide(2,0));
// output(divide(0,2));
function divide(a,b) {

    if (b == 0) {
        return "Division by 0 not possible!";
        
    } 
    return a / b;
    }
    

// module multiplication a * b | test
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


// module: console output |test

// output("Hello");
// output(2);
function output(outputData) {
    // console.log(typeof outputData);

    if (typeof outputData == "number") {
        console.log("The result is :" + outputData); 
    } else {
        console.log("Error: " + outputData);
        
    }
}

