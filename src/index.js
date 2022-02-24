module.exports = function check(str, bracketsConfig) { 

  const openBrackets = ['(', '[', '{', '1', '3', '5'];
  const repeatBrackets = ['|' , '7', '8'];
  const bracketsPairs ={
    [')']: '(',
    [']']: '[',
    ['}']: '{',   
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',   
  };
 

  let stack = [];
   for (let i = 0; i < str.length; i++) {
     let currentSymbol = str[i];

     
    
     if (openBrackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
     } else {
       if(stack.length === 0) {
         return false
       }

       let lastElement = stack[stack.length - 1];


       if (bracketsPairs[currentSymbol] ===  lastElement) {
         stack.pop();
       } else{
         return false;
       }
     }
  
   
  }
  
  return stack.length === 0;
}
