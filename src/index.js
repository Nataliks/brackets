module.exports = function check(str, bracketsConfig) { 

  const openBrackets = ['(', '[', '{', '1', '3', '5'];
  const identicalBrackets = ['|' , '7', '8'];
  const bracketsPairs ={
    [')']: '(',
    [']']: '[',
    ['}']: '{',   
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',   
  };
  
  let bracket = {}; 

  let stack = [];

  for (let i = 0; i < str.length; i++) {
    
    let currentSymbol = str[i];
    let lastEl= stack[stack.length - 1];

    if (identicalBrackets.includes(currentSymbol) && !bracket[currentSymbol]) {
      bracket[currentSymbol] = currentSymbol;
      stack.push(currentSymbol);    

    } else if (identicalBrackets.includes(currentSymbol)  && currentSymbol  ===  lastEl){
      stack.pop();
      delete bracket[currentSymbol];        
    } 
  
    if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
     } else {
       if(!identicalBrackets.includes(currentSymbol) && stack.length === 0) {
         return false
       }

       let lastElement = stack[stack.length - 1];


       if (!identicalBrackets.includes(currentSymbol) && bracketsPairs[currentSymbol] ===  lastElement) {
         stack.pop();
       } else if (!identicalBrackets.includes(currentSymbol) && bracketsPairs[currentSymbol] !=  lastElement) {
         return false;
       }
     
    }
  
   
  
    }
  return stack.length === 0;

 
}