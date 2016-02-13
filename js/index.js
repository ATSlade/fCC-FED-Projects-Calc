function calc9() {
   jscalc.answer.value += '9';
}  

function calc8() {
   jscalc.answer.value += '8';
}  

function calc7() {
   jscalc.answer.value += '7';
}  

function calc6() {
   jscalc.answer.value += '6';
}  

function calc5() {
   jscalc.answer.value += '5';
}  

function calc4() {
   jscalc.answer.value += '4';
} 

function calc3() {
   jscalc.answer.value += '3';
}  

function calc2() {
   jscalc.answer.value += '2';
}  

function calc1() {
   jscalc.answer.value += '1';
} 

function calc0() {
   jscalc.answer.value += '0';
} 

 function calcDivide() {
   jscalc.answer.value += "/";   
}  

function calcMultiply() {
   jscalc.answer.value += "*";   
}

function calcSubtract() {
   jscalc.answer.value += "-";   
}  
 
function calcAdd() {
   jscalc.answer.value += "+";
}  
 
function calcClear() {
   jscalc.answer.value = '';
}         

function del() {
   var value = document.getElementById("display").value;
   document.getElementById("display").value = value.substr(0, value.length - 1);
}

// Trimming the output
function calcEquals() {
   jscalc.answer.value = eval(jscalc.answer.value);
   jscalc.answer.value = (jscalc.answer.value).slice(0,13);
}