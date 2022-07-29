function reduce(numerator,denominator){
  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(numerator,denominator);
  return [numerator/gcd, denominator/gcd];
}


function getMedian(args) {
  if (!args.length) {return 0};
  var numbers = args.slice(0).sort((a,b) => a - b);
  var middle = Math.floor(numbers.length / 2);
  var isEven = numbers.length % 2 === 0;
  return isEven ? (numbers[middle] + numbers[middle - 1]) / 2 : numbers[middle];
}

var quiz = {

    duration: 45,
    question: 20,
    randomize: true,

 
   data: [
        // how to get linebreak, how to get $
        // circle equations are too long - need linebreak
        //1, 3, 4
        // DIAGRAMS!
        // Conversions in test 1
        // ${op} 
        //`
/*        return {
                  ques:` 1`,
                  Hint: `Hint: 1 `,
                  Answer: `Answer:  1`

                 }
*/
    
        /*
    
       
        
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 2) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                opA = op1 + op2;


                return `For what value of $a$, will these two equations: $y + ax = ${op1}$ and $y + 1x = ${opA} $, have no solution?`; 
            },
            answer: function() {
                return op1 * op2;
            }
          },    
         
         
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 8) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 8) + 1;
                op4 = Math.ceil(Math.random() * 8) + 1;
                op5 = Math.ceil(Math.random() * 8) + 1;
                op6 = Math.ceil(Math.random() * 8) + 1;
                opA = Math.pow(op1,2); 
                opB = Math.pow(op2,2);  


                return `At which point(s), does the parabola $y = ${opA} x^2 -${opB} $ intersect the $X$-axis?`; 
            },
            answer: function() {
                return op1 * op2;
            }
          },    
        
        
        
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 8) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 8) + 1;
                op4 = Math.ceil(Math.random() * 8) + 1;
                op5 = Math.ceil(Math.random() * 8) + 1;
                op6 = Math.ceil(Math.random() * 8) + 1;
                opA = Math.pow(op2,2);    


                return `At which point(s), does the parabola $y = ${op1} x^2 -${opA} $ intersect the line: $y = ${op3} $ ?`;  
            },
            answer: function() {
                return op1 * op2;
            }
          },    
        
        
        
          {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 8) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 8) + 1;
                op4 = Math.ceil(Math.random() * 8) + 1;
                op5 = Math.ceil(Math.random() * 8) + 1;
                op6 = Math.ceil(Math.random() * 8) + 1;


                return `Find the solution to: $ ${op1} x^2 + ${op2} x + ${op3}  = 0$, using the $\\dfrac{-b +/- \\sqrt{b^2-4ac}}{2a}$ formula.`;  
            },
            answer: function() {
                return op1 * op2;
            }
          },    
        
        
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 8) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 8) + 1;
                op4 = Math.ceil(Math.random() * 8) + 1;
                op5 = Math.ceil(Math.random() * 8) + 1;
                op6 = Math.ceil(Math.random() * 8) + 1;
                op7 = Math.ceil(Math.random() * 8) + 1;
                op8 = Math.ceil(Math.random() * 8) + 1;

                return `$ \\dfrac{${op1} x}{ ${op2}  } + \\dfrac{ ${op3}  }{ ${op4} } = -\\dfrac{${op5}  x}{${op6} } + \\dfrac{${op7} }{${op8} }$ Find the value of $x$`;
                //"Find the value of x: 1x/1 + 1/1 = -1x/1 + 1 ";  
            },
            answer: function() {
                return op1 * op2;
            }
          },    
        
        
          
         { 
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 10) + 1;
                op4 = Math.ceil(Math.random() * 10) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;


                return `If $ \\dfrac{ ${op1}}{${op2} c} = \\dfrac{ ${op3} }{ ${op4} }$, then what is the value of $c$?`;  
            },
            answer: function() {
                return op1 * op2;
            }
          },   
        
        
        
         { 
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 10) + 1;
                op4 = Math.ceil(Math.random() * 10) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;


                return `If $ \\dfrac{ ${op1}a}{${op2} } = \\dfrac{ ${op3} }{ ${op4} }$, then what is the value of $a$?`;  
            },
            answer: function() {
                return op1 * op2;
            }
          },    
        
        
        
        
         
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 10) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 10) + 1;
                return `At how many points, do these two lines intersect? $ ${op1}x +  ${op2}y =  ${op3}$ and $ ${op4}x +  ${op5}y =  ${op6} $`;
            },
            answer: function() {
                return op1 * op2;
            }
        },
        

           
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;

                return `$f(x) = ${op1}x + b$. If $f(${op2}) = ${op3}$, find the value of $b$.`
                //"f(x) = " + op1 + "x + b. If f(" + op2 + ") = " + op3 + ", find the value of b.";
            },
            answer: function() {
                return op1 * op2;
            }
        },
        
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                return `If $(${op1}n + m)/${op2}m = ${op3}$, find the value of $n/m$`;
                //"If (" + op1 + "n + m)/" + op2 + "m = " + op3 + ", find the value of n/m";
            },
            answer: function() {
                return op1 - op2;
            }
        },
        
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                return `Simplify the expression: $${op1} (${op2} x+1)(${op3} x+1)$`;
                //"Simplify the expression: " + op1 + "(" + op2 + "x" + "+1" + ")" + "(" + op3 + "x" + "+1" + ") "
                //"Which is the following is equivalent to:  " + op1 + "(" + op2 +"x"+ "+1" +") "+  "(" + op3 +"x"+ "+1" +") " + "?";
            },
            answer: function() {// return op1*op2 + "x" ;
            }
        },
        
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
    
                return `Rewrite the expression $(${op1}  + ${op2} i)(${op3}  - ${op4} i)$ as $a + bi$`;
                //"Rewrite the expression" + " (" + op1 + " + " + op2 + "i) / (" + op3 + " - " + op4 + "i) as  a + bi";
            },
            answer: function() {
                return op1 * op2;
            }
        },
        
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
    
                return `Rewrite the expression $(${op1}  + ${op2} i) / (${op3}  - ${op4} i)$ as $a + bi$`;
                //"Rewrite the expression" + " (" + op1 + " + " + op2 + "i) / (" + op3 + " - " + op4 + "i) as  a + bi";
            },
            answer: function() {
                return op1 * op2;
            }
        },
        
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                opA = op1 * op2;

                return `Find the real-valued $x$ for which this equation is valid: $x^3 - ${op1}x^2 + ${op2}x - ${opA} = 0$.`
                
                //"Find the real-valued x for which this equation is valid: " + "x^3 - " + op1 + "x^2 + " + op2 + "x - " + op1 * op2 + " = 0";
            },
            answer: function() {
                return op1 * op2;
            }
        },
        
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;

                return `If $(${op1} x - ${op2} )/${op3}  = ${op4} $, then what is the value of $x$?`
                //"If (" + op1 + "x - " + op2 + ")/" + op3 + " = " + op4 + ", then what is the value of x";
            },
            answer: function() {
                return op1 * op2;
            }
        },
        
        
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;

                //What is (10 + 2i) - (2 - 2i) ?
                return `What is (${op1} + ${op2}i) - (${op3} - ${op4}i) ?`;
            },
            answer: function() {
                return op1 * op2;
            }
        },
        
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;

                return `$f(x) = ax + ${op1}$. Now if $f(${op2}) = ${op3}$, find the value of $a$.`;
            },
            answer: function() {
                return op1 * op2;
            }
        },
        
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;

                return `$f(x) = ax + ${op1}$. Now if $f(${op2}) = ${op3}$, find the value of $f(${op4})$.`;
            },
            answer: function() {
                return op1 * op2;
            }
        },
        
        
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                opA = op1+op3;

                return `$f(x) = ax^2 + ${op1}$. Now if $f(${op2}) = ${opA}$, find the value of $f(${op4})$.`
                //"f(x) = ax^2 + " + op2 + ". Now if f(" + op2 + ") = " + op3 + ", find the value of f(" + op4 + ").";
            },
            answer: function() {
                return op1 * op2;
            }
        },
        
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;

                return `If $| x + 10 | = 6$, find the $2$ values of $x$` ;
                //"If | x + " + op1 + " | = " + op2 + ", find the 2 values of x";
            },
            answer: function() {
                return op1 * op2;
            }
        },
        
        
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;

                return `If $x/y =${op1}$ and $ ${op2}(x+${op3}y) = ${op4} $, find the value of $y$`;
                //"If x/y =" + op1 + "  and " + op2 + "(x+" + op3 + "y) = " + op4 + ", find the value of y";
            },
            answer: function() {
                return op1 * op2;
            }
         }, 
        
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;

                return {
                    ques:`If $f(x) =  ${op1} x +  ${op2} $, what is $f(- ${op3} x)$ in terms of $x$`,
                    Hint: `Hint: 1 `,
                    Answer: `Answer:  1`

                 }

                 //return ` `;
                //"If f(x) = " + op1 + "x + " + op2 + ", what is f(-" + op3 + "x) in terms of x";
            },
            answer: function() {
                return op1 * op2;
            }
        },
          */   
        
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                opA = op2+Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 7) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                opB = op3*(opA - op2)-opA;

                return {
                    ques:`If $(p + ${opB})/(p - ${op2}) = ${op3} $, find the value of $p$`,
                    Hint: `Hint: First, Move the denominator to the other side`,
                    Answer: `Answer:  ${opA}`

                 }

                 // return ``
                
                //"If (p + " + op1 + ")/(p - " + op2 + ") = " + op3 + ", find the value of p";
            },
            answer: function() {
                return op1 * op2;
            }
        },
     
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                opA = Math.abs(op1+op2); opB = op1 * op2;
                
                return {
                   ques:`Find the 2 roots of the quadratic equation: $x^2 + ${opA}x + ${opB} = 0$`,
                    Hint: `Hint: Factor the quadratic. Both roots will be negative (why?)`,
                    Answer: `Answer:  $ ${-op1}$ and $ ${-op2}$`

                 }

                 //return `Find the 2 roots of the quadratic equation: $x^2 + ${opA}x + ${opB} $ `;
                //"Find the 2 roots of the quadratic equation: x^2 -" + (op1 + op2) + "x + " + (op1 * op2) + "";
            },
            answer: function() {
                return op1 * op2;
            }
        },
      
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                opA = Math.abs(op1+op2); opB = op1 * op2;
                
                
                return {
                    ques:`Find the 2 roots of the quadratic equation: $x^2 - ${opA}x + ${opB} = 0$`,
                    Hint: `Hint: Factor the quadratic. Both roots will be positive (why?)`,
                    Answer: `Answer:  $ ${op1}$ and $ ${op2}$`

                 }
                 //return `Find the 2 roots of the quadratic equation: $x^2 - ${opA}x + ${opB} $ `;
                //"Find the 2 roots of the quadratic equation: x^2 -" + (op1 + op2) + "x + " + (op1 * op2) + "";
            },
            answer: function() {
                return op1 * op2;
            }
        },
               
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = op1 + Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                opA = Math.abs(op2 - op1); opB = (-op1 * op2);

                return {
                    ques:`Find the 2 roots of the quadratic equation: $x^2 - ${opA}x ${opB} = 0$`,
                    Hint: `Hint: Factor the quadratic. The sign of $ ${-opB}$ is $-$, so one root will be positive and other will be negative`,
                    Answer: `Answer: $ ${-op1}$ and $ ${op2}$`

                 }
                 //return ` `;
                //Find the 2 roots of the quadratic equation: x^2 - " + Math.abs(op2 - op1) + "x  " + (-op1 * op2) + "
            },
            answer: function() {
                return op1 * op2;
            }
        },

        
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                //  op3 = Math.ceil(Math.random(),0.55);
                op4 = Math.ceil(Math.random() * 5) + 1;
                opA = 3*op1;  opB = 5*op1;
                
                return {
                    ques:`In a right angled triangle, one of the angles has a $cosine$ of ${opA}/${opB}. What is the $sine$ of its complementary angle?`,
                    Hint: `Hint: Recall co-function property `,
                    Answer: `Answer:  $ ${opA}/${opB} $`

                 }
                 //return ``;
            },
            answer: function() {
                return op1 * op2;
            }
        },
         
          {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                //  op3 = Math.ceil(Math.random(),0.55);
                op4 = Math.ceil(Math.random() * 5) + 1;
                opA = 3*op1;  opB = 5*op1;
                
                return {
                    ques:`In a right angled triangle, one of the angles has a $cosine$ of ${opA}/${opB}. What is the $sine$ of that angle?`,
                    Hint: `Hint: $cos^2(x) + sin^2(x) = 1$`,
                    Answer: `Answer:  $ ${4*op1}/${opB}$ `

                 }
                 //return ``;
            },
            answer: function() {
                return op1 * op2;
            }
        },
        
        
   
        
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = op2*(Math.ceil(Math.random() * 5) + 1);
                op4 = Math.ceil(Math.random() * 5) + 1;

                return {
                    ques:`Find the volume of an object with mass = ${op3} kg and density = ${op2} kg/cubic meters `,
                    Hint: `Hint: $Density = Mass/Volume $ `,
                    Answer: `Answer: $ ${op3/op2} $`


                 }
                 //return `Find the volume of an object with mass = ${op1} kg and density = ${op2} kg/cubic meters. $Hint: Density = Mass/Volume.$`;
            },
            answer: function() {
                return op1 * op2;
            }
        },
            
        
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                return {
                    ques:`Find the mass of an object with volume = ${op1} cubic meters and density = ${op2} kg/cubic meters `,
                    Hint: `Hint: $Density = Mass/Volume $ `,
                    Answer: `Answer:  ${op1*op2}`

                 }
                //return ``;
            },
            answer: function() {
                return op1 * op2;
            }
        },

            
        
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                opR = Math.ceil(Math.random() * 10) + 5;
                opA = Math.ceil(Math.random() * 10) + 1;
                //opJ = Math.ceil(Math.random() * 5) + 1;
                opS = opR + opR + opA;
                op1 = Math.ceil(Math.random() * 5) + 1;
                

                return {
                    ques:`Jared is $ ${opA}  $ years older than Rika. The sum of their ages is $ ${opS} $. What will be Rika's age after $ ${op1} $ years?`,
                    Hint: `Hint: Rika = $x$ and Jared = $x + ${opA} $`,
                    Answer: `Answer:  $ ${opR+op1}  $`

                 }
             //   return ``
                
                //"Jared is " + op3 + " years older than Rika. The sum of their ages is " + (2 * op1 + op3) + ". What will be Rika's age after " + op4 + " years?";
            },
            answer: function() {
                return op1 * op2;
            }
         },
        

        
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                opb = Math.ceil(Math.random() * 5) + 1;
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = op1*opb - op2;
                op4 = Math.ceil(Math.random() * 5) + 1;
           
              
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                Ans = op5*opb + op6;

                return {
                  ques:` If $ ${op1}b - ${op2} > ${op3}$, write the inequality for $ ${op5}b + ${op6} $`,
                  Hint: `Hint: Solve for b first... `,
                  Answer: `Answer:  $ ${op5}b + ${op6} > ${Ans} $`

                 }
                 //return `If $ ${op1}b - ${op2} > ${op3}$, write the inequality for $ ${op4}b + ${op5} $`;
            },
            answer: function() {
                return op1 * op2;
            }
        },
    
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;

                return {
                  ques:` If $ ${op1}  - ${op2} b > ${op3} $, write the inequality for $ ${op4} b + ${op5} $`,
                  Hint: `Hint: 1 `,
                  Answer: `Answer:  1`

                 }
                 //return ` `;
            },
            answer: function() {
                return op1 * op2;
            }
        },
        
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = 2*Math.ceil(Math.random() * 5) + 1;
                op2 = 2*Math.ceil(Math.random() * 7) + 1;
                op3 = 2*Math.ceil(Math.random() * 5) + 1;
                op4 = 2*Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 10) + 1;
                op6 = Math.ceil(Math.random() * 10) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                op8 = Math.ceil(Math.random() * 5) + 1;

                return {
                  ques:` $a$ is the arithmetic mean of  $ ${op1}p$ and $ ${op2}$ . $b$ is the arithmetic mean of $ ${op3}p $ and $ ${op4} $. What is the arithmetic mean of $a$ and $b$ in terms of $p$?`,
                  Hint: `Hint:  $ ${op1}p+ ${op2}$  and $ ${op3}p  + ${op4}$`,
                  Answer: `Answer:  $ ${(op1+op3)/2}p+ ${(op2+op4)/2}$`

                 }
                 //return ``;
            },
            answer: function() {
                return op1 * op2;
            }
        },      
        
   
       
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = 1000*(Math.ceil(Math.random() * 5) + 1);
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 10) + 1;
                op6 = Math.ceil(Math.random() * 10) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                op8 = Math.ceil(Math.random() * 5) + 1;
                Ans = (op3*Math.pow((1-op1/100),op2)).toFixed(2);
                return {
                    ques:` Current Price of a stock = ${op3} and decreases by ${op1}% every month. If the equation is $Price = ${op3} a^m$ after $m$ months, what is $a$? Find the price after ${op2}  months.`,
                    Hint: `Hint: $New = Old(1-pct)^{${op2}} $`,
                    Answer: `Answer: $ ${Ans}$`

                 }  
                //return `;
            },
            answer: function() {
                return op1 * op2;
            }
        }, 
        
   
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = 1000*(Math.ceil(Math.random() * 5) + 1);
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 10) + 1;
                op6 = Math.ceil(Math.random() * 10) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                op8 = Math.ceil(Math.random() * 5) + 1;
                Ans = (op3*Math.pow((1+op1/100),op2)).toFixed(2);
        return {
                  ques:` Current Price of a stock = ${op3} and increases by ${op1}% every month. If the equation is $Price = ${op3} a^m$ after $m$ months, what is $a$? Find the price after ${op2}  months.`,
                  Hint: `Hint: $New = Old(1+pct)^{${op2}} $`,
                  Answer: `Answer: $ ${Ans}$`

                 }  
                //return `;
            },
            answer: function() {
                return op1 * op2;
            }
        }, 
    
        
        
           
          {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 10) + 1;
                op3 = Math.ceil(Math.random() * 10) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                op8 = Math.ceil(Math.random() * 5) + 1;
        return {
                  ques:`   $(${op1}x^2 - ${op2}xy + ${op3}y^2)$  $-(- ${op6}y^2 -${op4}x^2 + ${op5}xy )$`,
                  Hint: `Hint: Distribute the - sign correctly. Then combine the like terms`,
                  Answer: `Answer:    $${op1+op4}x^2 - ${op2+op5}xy + ${op3+op6}y^2$  `

                 }
                //return `  `
                
                //"Combine the like terms:  (" + op1 + "x^2 - " + op2 + "xy + " + op3 + "y^2) -   (-" + op4 + "x^2 + " + op5 + "xy - " + op6 + "y^2)";
            },
            answer: function() {
                return op1 * op2;
            }
        },
        
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 4) + 2;
                op2 = op1+ Math.ceil(Math.random() * 3) + 1;
                op3 = Math.ceil(Math.random() * 3) + 1;
                op4 = op2*Math.ceil(Math.random() * 2 + 1);
                op5 = op1/op2*op4 + op3;
                op6 = Math.ceil(Math.random() * 5) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                op8 = Math.ceil(Math.random() * 5) + 1;
                opA = op3 + op4;
        return {
                  ques:` A line passes through point $(${op5}, ${op4})$ and has slope $ ${op1} / ${op2}  $. Write down the equation of the line using the slope-intercept form.`,
                  Hint: `Hint: plug $(${op4}, ${op5})$ inside: $y = ${op1} x/ ${op2}  + b$ and find $b$ `,
                  Answer: `Answer: $ y = ${op1} x/ ${op2} + ${op3} $`

                 }
                // return ``;
            },
            answer: function() {
                return op1 * op2;
            }
        },         
         
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 4) + 1;
                op3 = Math.ceil(Math.random() * 3) + op1;

                opM = Math.ceil(Math.random() * 5) + 1;
                opB = Math.ceil(Math.random() * 5) + 1;
                
                op2 =  opM*op1 + opB;
                op4 =  opM*op3 + opB;
                

        return {
                  ques:` A line passes through point $(${op1}, ${op2})$ and point $(${op3}, ${op4})$. Write down the equation of the line as $y = mx + b$`,
                  Hint: `Hint: First find the Slope = $(y_2-y_1)/(x_2-x_1)$. Then plug in $(${op1}, ${op2})$ into the equation & find $b$ `,
                  Answer: `Answer:  Slope is $ ${opM}$, Intercept is $ ${opB}$, equation: $y = ${opM}x + ${opB}$ `

                 }
                // return ``;
            },
            answer: function() {
                return op1 * op2;
            }
        },
 
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 3) + 1;
                op4 = (op1-op3) *(Math.ceil(Math.random() * 5) + 1);
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                op8 = Math.ceil(Math.random() * 5) + 1;
                Ans = op4*op3/(op1-op3);

        return {
                  ques:` Find the value of $x$: $ \\dfrac{${op1}x}{x+${op4}}  = ${op3} $`,
                  Hint: `Hint: Cross-multiply - move the denominator to the right...`,
                  Answer:  `$ ${Ans} $ `

                 }
                // return `Find the value of $x$: $ \\dfrac{1}{\\dfrac{1}{${op1} x} + ${op2}} = ${op3} $`; // 1/ (1/(1x)  + 1)
                //"Simplify: 1/ (1/(" + (op1) + "x)  + " + op3 + " )";

            },
            answer: function() {
                return op1 * op2;
            }
        },
          
        
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 10) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 10) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                op8 = Math.ceil(Math.random() * 5) + 1;
        return {
                  ques:` Simplify: $ \\dfrac{1}{\\dfrac{1}{${op1} x} + ${op2}} $`,
                  Hint: `Hint: Simplify the numerator first`,
                  Answer: `Answer:  $ \\dfrac{${op1} x}{1+ ${op1*op2}x} $`

                 }
                // return ``; // 1/ (1/(1x)  + 1)
                //"Simplify: 1/ (1/(" + (op1) + "x)  + " + op3 + " )";

            },
            answer: function() {
                return op1 * op2;
            }
        },
 
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 2) + 1;
                op2 = Math.ceil(Math.random() * 2) + 1;
                op3 = Math.ceil(Math.random() * 2) + 1;
                op4 = Math.ceil(Math.random() * 2) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                op7 = Math.ceil(Math.random() * 5) + 1;
                op8 = Math.ceil(Math.random() * 5) + 1;
                opA = op1 + op2;    
                opB = Math.pow(op4, op1 + op2);
                opC = Math.pow(op4, op1);
                Ans = Math.pow(op4,op3);
                return {
                  ques:` If $ ${opA}x - ${op1}y = ${op3} $, then find the value of $ ${opB}^{x} / ${opC}^{y} $`,
                  Hint: `Hint: Reduce to common base first... `,
                  Answer: `Answer: $ ${Ans} $ `

                 }
                // return  ``;
                
                //"If " + (op1 + op2) + "x - " + op1 + "y = " + op3 + ", then find the value of " + Math.pow(2, op1 + op2) + "^x / " + Math.pow(2, op1) + "^y";

            },
            answer: function() {
                return op1 * op2;
            }
        },
                
        
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                //  op3 = Math.ceil(Math.random(),0.55);
                op4 = Math.ceil(Math.random() * 5) + 1;
                opA = op1*3; opB = op1*5;
        return {
                  ques:` If $cos(x) = ${opA} /${opB} $, $sin(x) = $ ?`,
                  Hint: `Hint: $cos^2(x) + sin^2(x) = 1$`,
                  Answer: `Answer:  $ ${op1*4} /${op1*5} $`

                 }
                // return `If $cos(x) = ${opA} /${opB} $, $sin(x) = $ ?` ;
            },
            answer: function() {
                return op1 * op2;
            }
        }, 

        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                //  op3 = Math.ceil(Math.random(),0.55);
                op4 = Math.ceil(Math.random() * 5) + 1;
                opA = op1*3; opB = op1*5;
        return {
                  ques:` If $cos(x) = ${opA} /${opB} $, $sin(90 - x) = $ ?`,
                  Hint: `Hint: Recall the co-function property...`,
                  Answer: `Answer:  $ ${op1*3} /${op1*5} $`

                 }
                // return ``   //If $cos(x) = 12/20$, $sin(90 - x) = $ ?
                // "If cos(x) = " + op1 * 3 + "/" + op1 * 5 + ", sin(90 - x) = ? ";
            },
            answer: function() {
                return op1 * op2;
            }
        },
       
        
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 2) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                Ans = op1*op1*op2*op3;

        return {
                  ques:` If $m = ${op1}  \\sqrt{ ${op2} }$ , then  ${op3}$m^{2}  $  = ? `,
                  Hint: `Hint: Square both sides... `,
                  Answer: `Answer: $ ${Ans} $ `

                 }
                //return ``;
                //"If m = "+op1+" sqrt("+op2 + ") , then  m^2 / " + op3 + "  = ? "
            },
            answer: function() {
                return op1 * op2;
            }
        },
        
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 2) + 1;
                op2 = op1*(Math.ceil(Math.random() * 4) + 1);
                op3 = op1* (Math.ceil(Math.random() * 4) + 1);
                op4 = op1* (Math.ceil(Math.random() * 5) + 1);
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                Ans = (op4- op3 - op2)/op1 *op5 - op6;
        return {
                  ques:`$ ${op1} x + ${op2}$ is $${op3}$ less than $${op4}$. Find the value of $${op5}x - ${op6}$`,
                  Hint: `Hint: Translate to Algebra`,
                  Answer: `Answer: $ ${Ans} $ `

                 }
                //return ``;
            },
            answer: function() {
                return op1 * op2;
            }
        },
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 2) + 1;
                op3 = Math.ceil(Math.random() * 3) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                opk = Math.ceil(Math.random() * 5) + 1;
                Ans = opk*(op1+op3)*(op1+op3);
        return {
                  ques:` You are given that $y = k x^2$. When $x = ${op1}$, the value of $y = ${op1*op1*opk}$. Find $y$, when $x = ${op1+op3}$`,
                  Hint: `Hint: Constant Finder Problem - Find $k$ first  `,
                  Answer: `Answer: $ ${Ans} $ `

                 }
                //return ``;
            },
            answer: function() {
                return op1 * op2;
            }
        },  
        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 2) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                opk = Math.ceil(Math.random() * 5) + 1;
                Ans = opk*(op1+op3);

        return {
                  ques:`You are given that $y = k x$. When $x = ${op1}$, $y = ${op1*opk}$. Find $y$, when $x = ${op1+op3}$`,
                  Hint: `Hint: Constant Finder Problem - Find $k$ first `,
                  Answer: `Answer: $ ${Ans} $ `

                 }
                //return ``;
            },
            answer: function() {
                return op1 * op2;
            }
        },



        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op0 = Math.ceil(Math.random() * 2) + 1;
                op1 = Math.ceil(Math.random() * 3) + 1;
                op2 = op0*(Math.ceil(Math.random() * 3) +1);
                op3 = op0;
                op4 = Math.ceil(Math.random() * 2) + 1;
                Ans = (op4*op4* op1 *op1 *op2)/op3
        return {
                  ques:`If $n = ${op1}\\sqrt{${op2}}$, and $\\sqrt{${op3}x} = ${op4}n$ then $x = ?$`,
                  Hint: `Hint: Square the x-term and then substitute the n`,
                  Answer: `Answer: $ ${Ans}$`

                 }

                //return ``;
            },
            answer: function() {
                return op1 * op2;
            }
        },
        
    


       
//` At how many points, do these two lines intersect? $ ${op1}x + ${op2} y = ${op3} $ and $ ${op4}x+ ${op5}y = ${op6}$ `,

        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 10) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 10) + 1;

                Answer1 = 1;
                if (op1/op2 == op4/op5){
                        Answer1 = 0;
                    if (op3/op2 == op6/op5){
                        Answer1 = "Infinite";
                    }
                }
                return {
                  ques: `At how many points, do these two lines intersect? $ ${op1}x + ${op2} y = ${op3} $ and $ ${op4}x+ ${op5}y = ${op6}$` , 
                  Hint: `Hint: Write as $y = mx + b$ and compare the $m$ and $b$`,
                  Answer: Answer1

                 }

               //return "At how many points, do these two lines intersect? " + op1 + "x + " + op2 + "y = " + op3 + " and " + op4 + "x + " + op5 + "y = " + op6;
            },
            answer: function() {
                return op1 * op2;
            }
        },
      
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 8) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 4) + 1;
                op4 = Math.ceil(Math.random() * 4) + 1;
                op5 = Math.ceil(Math.random() * 8) + 1;
                op6 = Math.ceil(Math.random() * 8) + 1;
                opA = op1 + op3;
                opB = op2 + op4*op3;

        return {
                  ques:` $ \\dfrac{1}{  ${opA}x +  ${op2}} =\\dfrac{1}{ ${op1}x + ${opB}}$. Find $x$`,
                  Hint: `Hint: Flip the numerator to denominator and then Solve!`,
                  Answer: `Answer: $ ${op4} $`

                 }
              //  return `$ \\dfrac{1}{  ${op1}x +  ${op2}} =\\dfrac{1}{ ${opA}x + ${opB}}$. Find $x$.`; // Leave the numerators as 1. 
            },
            answer: function() {
                return op1 * op2;
            }
          },   


    
          {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 4) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 3) + 1;
                op4 = Math.ceil(Math.random() * 4) + 1;
                opA = Math.pow(op1,op3);
                fraction = reduce(op3, op2);
        return {
                  ques:`Write $ \\sqrt[${op2} ]{${opA}}$ as a rational exponent of the form $ ${op1} ^{\\frac{b}{c}}$ ) `,
                  Hint: `Hint: $ ${opA} = ${op1}^${op3}  $ `,
                  Answer: `Answer:  $${op1} ^{\\frac{${fraction[0]}}{${fraction[1]}}} $`

                 }

             //   return `Write $ \\sqrt[${op2} ]{${opA}}$ as a rational exponent of the form $ ${op1} ^{\\frac{b}{c}}$ )`; 
            },
            answer: function() {
                return op1 * op2;
            }
          },   
       

            
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 8) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 8) + 1;
                op4 = Math.ceil(Math.random() * 8) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                Answer = (op2 - op3*(Math.pow(op1,2)) - 1)/op1;

                return {
                  ques:` If $(${op1} , ${op2} )$ lies on the graph of $y = ${op3} x^2 + bx + 1$. Find the value of $b$`,
                  Hint: `Hint: Just plug $(${op1} , ${op2} )$ into $y = ${op3} x^2 + bx + 1$`,
                  Answer: `Answer:  $ ${Answer} $`

                 }

                
                //"If (1, 1) lies on the graph of y = 1x^2 + bx + 1. Find the value of b."; 
            },
            answer: function() {
                return op1 * op2;
            }
          },   
        

       {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 2) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                Answer = (Math.sqrt((Math.pow(op1,2)-op3)/op2)).toFixed(2);

                return {
                  ques:` If $y = ${op1} $ and, also, $y^2 = ${op2} x^2 + ${op3} $. Find $x$ (Might need a calculator)`,
                  Hint: `Hint: Move the ${op3} to the other side first`,
                  Answer: `Answer:  ${Answer} `

                 }

         
            },
            answer: function() {
                return op1 * op2;
            }
          },   


      {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = 2*(Math.ceil(Math.random() * 5) + 1);
                op2 = 2*(Math.ceil(Math.random() * 2) + 1);
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                radius = (Math.sqrt(op4 - op3 + Math.pow(op1/2,2) +  Math.pow(op2/2,2))).toFixed(2);

                return {
                  ques:` A circle has the equation: $x^2 + y^2 - ${op1} x - ${op2} y + ${op3}  = ${op4} $ .What is the radius of this circle? `,
                  Hint: `Hint: Complete the squares for x and y first...`,
                  Answer: `Answer: ${radius}`

                 }  

                
            },
            answer: function() {
                return op1 * op2;
            }
          },   



      {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 8) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 8) + 1;
                op4 = Math.ceil(Math.random() * 4) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                return {
                  ques:`If $r^${op4} = \\dfrac{a k^${op5}}{${op2} } + ${op3} $. Write the formula for $k^${op5}$ in terms of $r^${op4}$ `,
                  Hint: `Hint: First move the $ ${op3}$ to the left. Then isolate the $ k^${op5} $`,
                  Answer: `Answer: $k^${op5} = ${op2} (r^${op4} -  ${op3})/a  $`

                 }

                
            },
            answer: function() {
                return op1 * op2;
            }
          },   


         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 8) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 8) + 1;
                op4 = Math.ceil(Math.random() * 8) + 1;
                op5 = Math.ceil(Math.random() * 8) + 1;
                op6 = Math.ceil(Math.random() * 8) + 1;
                Range = Math.max(op1, -op2, -op3, op4, op5, -op6) - Math.min(op1, -op2, -op3, op4, op5, -op6);

        return {
                  ques:`Find the range of these numbers: $ ${op1} , ${-op2} , ${-op3} , ${op4}, ${op5}, ${-op6} $ `,
                  Hint: `Hint: Range = Max - min`,
                  Answer: `Answer:  ${Range} `

                 }
              
            },
            answer: function() {
                return op1 * op2;
            }
          },   
        

    {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
            op1 = Math.ceil(Math.random() * 8) + 1;
                op2 = Math.ceil(Math.random() * 20) + 1;
                op3 = Math.ceil(Math.random() * 20) + 1;
                op4 = Math.ceil(Math.random() * 20) + 1;
                op5 = Math.ceil(Math.random() * 10) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                med = getMedian([op1,op2,op3,op4,op5,op6]);

                //

                return {
                  ques:`Find the median of these numbers: $ ${op1} , ${op2} , ${op3} , ${op4}, ${op5}, ${op6} $ `,
                  Hint: `Hint: Sort in ascending order... Then take avg of middle two numbers `,
                  Answer: `Answer:  ${med} `

                 }

                
            },
            answer: function() {
                return op1 * op2;
            }
          },   
         

         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 8) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 8) + 1;
                op4 = Math.ceil(Math.random() * 8) + 1;
                op5 = Math.ceil(Math.random() * 8) + 1;
                op6 = Math.ceil(Math.random() * 8) + 1;

        return {
                  ques:`$f(${op2} ) = ${op4} , f( ${op3} ) = ${op5} $, $g(${op2} ) =  ${op3} , g( ${op3} ) = ${op6} $. Find $f(g(${op2} ))$`,
                  Hint: `Hint:  Find $g(${op2})$ first ... `,
                  Answer: `Answer:  ${op5}`

                 }



                return `$f(${op2} ) = ${op4} , f( ${op3} ) = ${op5} $, $g(${op2} ) =  ${op3} , g( ${op3} ) = ${op6} $. Find $f(g(${op2} ))$`;
            },
            answer: function() {
                return op1 * op2;
            }
          },   


{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 8) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 8) + 1;
                op4 = Math.ceil(Math.random() * 8) + 1;
                op5 = Math.ceil(Math.random() * 8) + 1;
                op6 = Math.ceil(Math.random() * 8) + 1;


        return {
                  ques:`$(${op1}x + ${op2})(${op3}x +${op6} ) - ${op4}(x + ${op5})$ $= ax^2 + bx + c$. Find the value of $c$ `,
                  Hint: `Hint:  FOIL, then GROUP, then COMPARE the coefficients `,
                  Answer: `Answer:  ${op2*op6 - op4*op5}`

                 }


              
            },
            answer: function() {
                return op1 * op2;
            }
          },   

        


{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 8) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 8) + 1;
                op4 = Math.ceil(Math.random() * 8) + 1;
                op5 = Math.ceil(Math.random() * 8) + 1;
                op6 = Math.ceil(Math.random() * 8) + 1;


        return {
                  ques:`$(${op1}x + ${op2})(${op3}x + 1) - ${op4}(x + ${op5})$ $= ax^2 + bx + c$. Find the value of $b$ `,
                  Hint: `Hint:  FOIL, then GROUP, then COMPARE the coefficients `,
                  Answer: `Answer:  ${op2*op3 + op1 -op4}`

                 }


              
            },
            answer: function() {
                return op1 * op2;
            }
          },   

         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 8) + 1;
                op2 = Math.ceil(Math.random() * 8) + 1;
                op3 = Math.ceil(Math.random() * 8) + 1;
                op4 = Math.ceil(Math.random() * 8) + 1;
                op5 = Math.ceil(Math.random() * 8) + 1;
                op6 = Math.ceil(Math.random() * 8) + 1;


        return {
                  ques:`$(${op1}x + ${op2})(${op3}x + 1) - ${op4}(x + ${op5})$ $= ax^2 + bx + c$. Find the value of $a$ `,
                  Hint: `Hint:  FOIL then COMPARE the coefficients `,
                  Answer: `Answer:  ${op1*op3}`

                 }


              
            },
            answer: function() {
                return op1 * op2;
            }
          },   

    
{
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 8) + 1;
                op2 = Math.ceil(Math.random() * 4) + 1;
                op3 = Math.ceil(Math.random() * 8) + 1;
                op4 = Math.ceil(Math.random() * 8) + 1;
                op5 = Math.ceil(Math.random() * 8) + 1;
                op6 = Math.ceil(Math.random() * 8) + 1;
       

                 return {
                  ques:`Find the product of the roots of the quadratic equation:  $ ${op2} x^2 + ${op3}x + ${op2*op4} = 0$`,
                  Hint: `Hint:  $c/a$`, 
                  Answer: `Answer: $ ${op4} $`

                 }


                return  `Find the sum of the roots of the quadratic equation:  $ x^2 + ${op2}x + ${op3} = 0$`;
            },
            answer: function() {
                return op1 * op2;
            }
          },   
        
    
          {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 8) + 1;
                op2 = Math.ceil(Math.random() * 4) + 1;
                op3 = Math.ceil(Math.random() * 8) + 1;
                op4 = Math.ceil(Math.random() * 8) + 1;
                op5 = Math.ceil(Math.random() * 8) + 1;
                op6 = Math.ceil(Math.random() * 8) + 1;
       

                 return {
                  ques:`Find the sum of the roots of the quadratic equation:  $ ${op2} x^2 - ${op2*op4}x + ${op3} = 0$`,
                  Hint: `Hint:  $-b/a$`, 
                  Answer: `Answer: $ ${op4} $`

                 }


                return  `Find the sum of the roots of the quadratic equation:  $ x^2 + ${op2}x + ${op3} = 0$`;
            },
            answer: function() {
                return op1 * op2;
            }
          },   
        


    {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 8) + 1;
                op2 = Math.ceil(Math.random() * 3) + 1;
                op3 = Math.ceil(Math.random() * 8) + 1;
                op4 = Math.ceil(Math.random() * 8) + 1;
                op5 = Math.ceil(Math.random() * 8) + 1;
                op6 = Math.ceil(Math.random() * 8) + 1;


                 return {
                  ques:`A line has x-intercept = ${op1}, and y-intercept = ${op2*op1}. Write the equation to this line in the slope-intercept form.`,
                  Hint: `Hint: Slope = $(${op2*op1} - 0) / (0 - ${op1})$ `, 
                  Answer: `Answer: $ y = ${-op2} x + ${op2*op1} $`

                 }

            },
            answer: function() {
                return op1 * op2;
            }
          },   

     {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 4) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 8) + 1;
                op4 = Math.ceil(Math.random() * 8) + 1;
                op5 = (op3+op1)* Math.ceil(Math.random() * 3) ;
                op6 = Math.ceil(Math.random() * 8) + 1;

                 return {
                  ques:`Line A has slope ${-op1}  and intercept ${op5}. Line B has slope ${op3}  and passes through (${op4} , ${op4*op3} ). At which point(s), do these two lines intersect?`,
                  Hint: `Hint: The 2 lines are: $y = ${-op1}x + ${op5}$  and $y = ${op3}x$ `, 
                  Answer: `Answer: $ (${op5/(op1+op3)}, ${op3*op5/(op1+op3)}) $`

                 }
             
            },
            answer: function() {
                return op1 * op2;
            }
          },   

         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                opA = 1000 - op1;
                
        return {
                  ques:`Find the value of $ ${opA}^2 - ${op1}^2$ without using your calculator. `,
                Hint: `Hint: Use the formula: $a^2 - b ^2 = (a-b)(a+b)$`,
                  Answer: `Answer: ${1000*(opA-op1)}`

                 }
              
            },
            answer: function() {
                return op1 * op2;
            }
          },   

     {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = op1*(Math.ceil(Math.random() * 5) + 1);
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                opA = op2+op3;
                opB = Math.pow((Math.pow(opA+op3,2) - op2)/op1,0.5);
                opC = op3/op1*Math.pow(op2,2);

                return {
                  ques:` Solve for $x$: $ \\sqrt{${op1}x}  =  ${op2} \\sqrt{${op3}}  $`,
                Hint: `Hint: Square both sides... Also $(\\sqrt{${op3}})^2 = ${op3} $`,
                  Answer: `Answer:  ${opC}`

                 }
                 
            },
            answer: function() {
                return op1 * op2;
            }
          },   


            

     {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                opA = op2+op3;
                opB =  Math.pow((Math.pow(opA+op3,2) - op2)/op1,0.5);
                opC = opB.toFixed(2);

                return {
                  ques:` Solve for $k$: $ \\sqrt{${op1}k^2+${op2}} - ${op3} = ${opA} $`,
                Hint: `Hint: Isolate the Square Root. Then Square both sides `,
                  Answer: `Answer:  ${opC}`

                 }
                 
            },
            answer: function() {
                return op1 * op2;
            }
          },   

        
         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                opA = op2+op3;
                opB =  Math.pow((Math.pow(opA,2) - op2)/op1,0.5);
                opC = opB.toFixed(2);

                return {
                  ques:`Solve for $k$: $ \\sqrt{${op1}k^2+${op2}} = ${opA} $ `,
                  Hint: `Hint: Square both sides `,
                  Answer: `Answer:  ${opC}`

                 }

                
            },
            answer: function() {
                return op1 * op2;
            }
          }, 


          {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                opA = Math.pow(op1,2); opB = Math.pow(op2,2); opC = 2*op1*op2;

        return {
                  ques:`Write this expression as a complete square: $ ${opA}m^4 -  ${opC} m^2 n^2 + ${opB} n^4$. Recall the formula: $a^2 - 2ab + b^2 = (a-b)^2$ `,
                  Hint: `Hint: $a^2 = ${opA}m^4$, so $a = ${op1}m^2...$ `,
                  Answer: `Answer:  $ (${op1}m^2 - ${op2}n^2)^2 $`

                 }  

               
            },
            answer: function() {
                return op1 * op2;
            }
          },   


    {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                opA = Math.pow(op1,2); opB = Math.pow(op2,2); opC = 2*op1*op2;

                return {
                  ques:`Write this expression as a complete square: $ ${opA}m^4 +  ${opC} m^2 n^2 + ${opB} n^4$. Recall the formula: $a^2 + 2ab + b^2 = (a+b)^2$ `,
                  Hint: `Hint: $a^2 = ${opA}m^4$, so $a = ${op1}m^2...$ `,
                  Answer: `Answer:  $ (${op1}m^2 + ${op2}n^2)^2 $`

                 }  

               
            },
            answer: function() {
                return op1 * op2;
            }
          },   

      
     {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 4) + 1;
                op5 = op4+ Math.ceil(Math.random() * 4);
                op6 = Math.ceil(Math.random() * 5) + 1;


        return {
                  ques:`$f(x) = ${op1} x + ${op2} $, and  $g(x) = x^2 - ${op4+op5} x + ${op4*op5}$. Find $x$ for which $ \\dfrac{f(x)}{g(x)} $ is undefined`,
                  Hint: `Hint: Here "undefined" means the denominator is 0 ... Find the roots of the quadratic`,
                  Answer: `Answer: $ ${op4} $ and $ ${op5}$`

                 }

                
            },
            answer: function() {
                return op1 * op2;
            }
          },  


      {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = op2*(Math.ceil(Math.random() * 5) + 1);
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;


        return {
                  ques:`f(x) = ${op1} x + ${op2} , and  g(x) = ${op3} x + ${op4} . Find the value of $x$ for which $ \\dfrac{f(x)}{g(x)} $ is undefined`,
                  Hint: `Hint: Here "undefined" means the denominator is 0`,
                  Answer: `Answer:  ${-op4/op3}`

                 }

                
            },
            answer: function() {
                return op1 * op2;
            }
          },   

      {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;


                return {
                  ques:`The volume of a circular cylinder is $ ${op2*Math.pow(op1,2)} \\pi$, and its radius is  $ ${op1} $. Determine its height `,
                  Hint: `Hint: $V = \\pi r^2 h$ `,
                  Answer: `Answer:  ${op2}`

                 }
                
            },
            answer: function() {
                return op1 * op2;
            }
          },   

      {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;

                return {
                  ques:`The volume of a circular cylinder is $ ${op2*Math.pow(op1,2)} \\pi$, and its height is  $ ${op2} $. Determine its radius `,
                  Hint: `Hint: $V = \\pi r^2 h$ `,
                  Answer: `Answer:  ${op1}`

                 }

                
            },
            answer: function() {
                return op1 * op2;
            }
          },   
        


      {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;

                 return {
                  ques: `When the polynomail $f(x)$ is divided by $x-${op1} $, the remainder is $${op2}$. What is the value of $f(${op1})$?`,
                  Hint: `Hint: By definition of remainder: $f(x) =  (x-${op1})g(x) + ${op2} $`,
                  Answer: `Answer:  ${op2}`

                 }  
                
            },
            answer: function() {
                return op1 * op2;
            }
          },   

          {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                op7 = Math.pow(op1-op3,2)+Math.pow(op2-op4,2); 

        return {
                  ques: `A circle has center (${op1} , ${op2} ), and the point (${op3} , ${op4}) lies on this circle. Write the equation of this circle`,
                  Hint: `Hint:  $(x- )^2 + (y - )^2  = r ^2  ...$ and $r^2 = (${op1}-${op3})^2 + (${op2}-${op4})^2 $`,
                  Answer: `Answer:   $(x- ${op1})^2 + (y - ${op2})^2  = ${op7}$ `

                 }


               },
            answer: function() {
                return op1 * op2;
            }
          },   


      {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
      return {
                  ques: `Write the equation of a circle with center (${op1}, -${op2}) and radius equal to ${op3}`,
                  Hint: `Hint:  $(x- )^2 + (y - )^2  = r ^2$`,
                  Answer: `Answer:  $(x- ${op1})^2 + (y + ${op2} )^2  = ${Math.pow(op3,2)} $`

                 }

              
            },
            answer: function() {
                return op1 * op2;
            }
          },   

          {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                
                op3 = Math.ceil(Math.random() * 5) + 1;
                op2 = (op1+op3)*Math.ceil(Math.random() * 5) - 1;
                op4 = (op1+op3)*Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
        return {
                  ques:`Solve the inequality: $ -${op1}x + ${op2}  > ${op3}x - ${op4} $`,
                  Hint: `Hint: $ -${op1}x - ${op3}x   >  - ${op4} - ${op2} $`,
                  Answer:  `$ x  <  ${(-op4-op2)/(-op1-op3)} $`

                 }

               
            },
            answer: function() {
                return op1 * op2;
            }
          },   


           {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = op1*Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = op1*Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
 
                return {
                  ques:`Solve the inequality: $ ${op1}x + ${op2}  > ${op1+op3}x + ${op4} $`,
                  Hint: `Hint: $ ${op1}x - ${op1+op3}x   >  ${op4} -  ${op2} $`,
                  Answer:  `$ x  <  ${(op4-op2)/(-op1)} $`

                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   

        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = op1*Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = op1*Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
 
                return {
                  ques:`Solve the inequality: $ ${op1+op3}x + ${op2}  > ${op3}x + ${op4} $`,
                  Hint: `Hint: $ ${op1+op3}x - ${op3}x   >  ${op4} -  ${op2} $`,
                  Answer:  `$ x  >  ${(op4-op2)/(op1)} $`

                 }
            },
            answer: function() {
                return op1 * op2;
            }
          },   


         {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;


                return {

                  ques: `If c = (${op1}d + ${op2})/(${op3}d + ${op4}). Write d in terms of c`,
                  Hint: `Hint: c(${op3}d + ${op4}) = ${op1}d + ${op2} ...  =  ${op3}cd + ${op4}c  .. Then isolate the d terms.. `,
                  Answer: `(${op4}c - ${op2})/(${op1} - ${op3}c)`
                } 
            },
            answer: function() {
                return op1 * op2;
            }
         },  

        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;

                return {
                  ques: `If c = ${op1}d + ${op2}. Write d in terms of c`,
                  Hint: `Hint:  c - ${op2} = ${op1}d `,
                  Answer: `Answer:  (c - ${op2})/${op1} `
                } 


            },
            answer: function() {
                return op1 * op2;
            }
         },   


          {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 2) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;
                op7 = op2+op3;

                // This return statement is responsible for desiplaying question Hint and answer
                return {
                    ques: `If $|x+${op1} | = x+${op7}$. Find the value of $x$. Note: It is possible $x$ may have no value`,
                    Hint:  `$x+${op1}  = x+${op7}$ and $x+${op1}  = -(x+${op7})$`,
                    Answer: `Answer: ${-(op1+op7)/2}`
                };
            },
            answer: function() {
                return op1 * op2;
            }
        }, 



        {
            op1: 0,
            op2: 0,
            op3: 0,
            op4: 0,
            question: function() {
                op1 = Math.ceil(Math.random() * 5) + 1;
                op2 = Math.ceil(Math.random() * 5) + 1;
                op3 = Math.ceil(Math.random() * 5) + 1;
                op4 = Math.ceil(Math.random() * 5) + 1;
                op5 = Math.ceil(Math.random() * 5) + 1;
                op6 = Math.ceil(Math.random() * 5) + 1;



                 return {
                    ques: `If $|x+${op1} | = ${op2}$. Find the value(s) of $x$`,
                    Hint: `Hint: Solve $x+${op1}  = ${op2}$ and $x+${op1}  = -${op2}$`,
                    Answer:  `$x = ${op2-op1}$ and $x= ${-op2-op1}  $`
                };

                // This return statement is responsible for displaying only question replace it same as 1st one
                return 
            },
            answer: function() {
                return op1 * op2;
            }
        },   
          
        
        
      
        
    ]
  
};

$(document).ready(function() {
    var questionField = $("#question1");

    // var totalQuestion = quiz.data.length;
    var totalQuestion = quiz.question;
    var currentIndex = 0;
    var progressField = $("#progress1");
    var timerField = $("#timer1");
    var intervalHandle = null;
    var hint = $("#hint1");
    var answer = $(".answer1")



    // shuffle quiz.data
    if (quiz.randomize) {
        for (var i = quiz.data.length - 1; i > 0; --i) {
            var rand = Math.floor(Math.random()*i);
            var temp = quiz.data[i];
            quiz.data[i] = quiz.data[rand];
            quiz.data[rand] = temp;
        }
    }

    function loadQuestion() {
        progressField.text("Question " + (currentIndex + 1) + " of " + totalQuestion);

        var remainingSec = quiz.duration;
                
        var min = Math.floor(remainingSec / 60);
        var sec = remainingSec % 60;
        if (min < 10)
            min = "0" + min;
        if (sec < 10)
            sec = "0" + sec;
        timerField.text(min + ":" + sec);

        
        dataSet = quiz.data[currentIndex].question();

        questionField.html(dataSet.ques);
        hint.html(dataSet.Hint);
        answer.html(dataSet.Answer);
      
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, questionField[0]]);  
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, hint[0]]);
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, answer[0]]);
        

        setTimeout(function() {
            if (currentIndex === 0) {
                questionField.css("opacity", 1);
            }
            animateQuestion(remainingSec);
            $('.next_question').click(function(){
                
            })
        }, 500);
    }


    function animateQuestion(remainingSec) {
        questionField.removeClass("zoomOutLeft");
        questionField.addClass("zoomIn");
        setTimeout(function() {
            intervalHandle = setInterval(function() {
                remainingSec -= 1;
                if (remainingSec > 0) {
                    var min = Math.floor(remainingSec / 60);
                    var sec = remainingSec % 60;
                    if (min < 10)
                        min = "0" + min;
                    if (sec < 10)
                        sec = "0" + sec;
                    timerField.text(min + ":" + sec);
                    loadhint(sec);
                    loadanswer(sec);
                } else {
                    // unload the question

                    timerField.text("00:00");
                    clearInterval(intervalHandle);

                    questionField.removeClass("zoomIn");
                    questionField.addClass("zoomOutLeft");
                    setTimeout(function() {
                        if (currentIndex < totalQuestion - 1) {
                            loadQuestion(++currentIndex);
                        } else {
                            questionField.hide();
                            progressField.css("visibility", "hidden");
                            timerField.css("visibility", "hidden");
                            $("#resultBox").fadeIn();
                        }
                    }, 1000);
                }
            }, 1000);
        }, 1000);
    }

    function loadhint(second) {
        if (second <= 30 && second >= 5){
            hint.fadeIn(2000);
        }else if(second >= 30){
            $('.ask_hint').click(function(){
                hint.fadeIn(1000);
            });
        }else{
            hint.fadeOut(2000);
        }
    }

    function loadanswer(secondCountAns) {
        if (secondCountAns <= 15 && secondCountAns >= 5){
            answer.fadeIn(2000);
        }else if(secondCountAns >= 15){
            $('.check_answer').click(function(){
                answer.fadeIn(1000);
            });
        }else{
            answer.fadeOut(2000);
        }
    }

    loadQuestion(currentIndex);

    $('.choose').click(function(){
        $('.audio_container').slideToggle();
    });

    $('.audio_one').click(function(){
        $('#audioChange').attr('src', 'https://bluerocketacademy.com/wp-content/uploads/2020/09/Binaural.mp3');
        $('.audio_container').slideUp();
    })
    $('.audio_two').click(function(){
        $('#audioChange').attr('src', 'https://bluerocketacademy.com/wp-content/uploads/2020/09/Classical.mp3');
        $('.audio_container').slideUp();
    })
});

