
/*** Rechner */
/*
0. a+b / a-b/ a*b / a/b  // ergebnis c 
1. Dateneingabe + -überprüfung :
2. Auswahl Rechenart : 
3. Fkt. Grundrechenarten :
4. Ausgabe in Konsole : check!
*/


// modul division a / b
output(divide(14,3));
output(divide(8,2));
output(divide(2,0));
output(divide(0,2));
function divide(a,b) {

    if (b != 0) {
        // true
        return a / b;
    } else { 
        //false
        return "ERROR"
    }

    return a / b;
}


// module multiply a*b
// output(multiply(7,1));
// output(multiply(9,10));
function multiply(a,b) {
    return a * b;
}


// module substraction a - b
// output(substract(5,1));
// output(substract(10,4))
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


