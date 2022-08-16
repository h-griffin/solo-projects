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
 
  var quiz_2 = {
  
      duration: 45,
      question: 20,
      randomize: true,
  
   
      data: [
          
                      // 1.1
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `If $ ${op1}^{x+ ${op2} } = y$, rewrite $ ${op1}^{x} $ in terms of y.`,
                              Hint: `Hint: Split into $ ${op1}^x.${op1}^${op2} $ `,
                              Answer: `Answer:  $ y/${op1}^${op2} $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
          
                  // 1.2
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `If $ ${op1}^{x + ${op2}} = ${op1}^{-x + ${op3} } $, what is the value of $x$?`,
                              Hint: `Hint: $ a + ${op2} = -a + ${op3}$ `,
                              Answer: `Answer:  $ ${(op3-op2)/2}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 1.3
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 1) + 3;
                          return {
                              ques: `If $ ${op6} m - n = ${op4}  $, what is the value of $ \\frac{ ${op5 ** op6 }^{m}}{ ${op5}^{n}} $ ?`,
                              Hint: `Hint:  $  ${op5 ** op6 }^{m} = ${op5}^{${op6}m} $`,
                              Answer: `Answer:  $ ${op5}^${op4}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 1.4
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 4) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `Convert $\\sqrt[ ${op1 + op2}]{x^{ ${op1+1} }}$ to fractional exponents.`,
                              Hint: `Hint: Convert to $  \\frac{${op1+1}}{${op2+op1}} $ `,
                              Answer: `Answer:  $  x^{\\frac{${op1+1}}{${op2+op1}}}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 1.5
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 4) + 1; op2 = Math.ceil(Math.random() * 4) + 1; op3 = Math.ceil(Math.random() * 4) + 1;
                          op4 = Math.ceil(Math.random() * 4) + 1; op5 = Math.ceil(Math.random() * 4) + 1; op6 = Math.ceil(Math.random() * 4) + 1;
                          return {
                              ques: `What is the value of $a$ if $(x^${op3})^{ \\frac{${op1}}{${op2+op1}} } = x^{a}$?`,
                              Hint: `Hint: $ ${op3} . \\frac{${op1}}{${op2+op1}} $ `,
                              Answer: `Answer:  $a =  \\frac{${op3*op1}}{${op2+op1}} $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                               // 2.1
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$ ${op3*10}\\%$ of ${op1*10} students are girls, and $${op4*10}\\%$ of another ${op2*10} students are girls, what is the percent of girls of the entire ${(op1+op2)*10} students?`,
                              Hint: `Hint: Find the number of girls separately and then add.`,
                              Answer: `Answer:  $ ${Math.round((op3*op1+op4*op2)/(op1+op2)*10)}\\%  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
                  // 2.2
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = 5*(Math.ceil(Math.random() * 9) + 1); op2 = 5*(Math.ceil(Math.random() * 9) + 1); op3 = 5*(Math.ceil(Math.random() * 9) + 1);
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `The price of bitcoin increased by $ ${ op1 } \\%$, then decreased by $ ${op2}\\%$, then increased by $ ${op3}\\%$. Find the percent change in the price.`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${Math.round(((1+op1/100)*(1-op2/100)*(1+op3/100)-1)*100*100)/100}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
          
                  // 2.3
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `You have a savings account that earns $ ${op1} $ percent interest compound annually and your initial deposit was $ \\$${ op2 * 100 }$. What is the value of your account after $${op3}$ years?`,
                              Hint: `Hint: $ ${op2*100} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${  Math.round(op2*100*Math.pow((1+op1/100),op3)  )}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
           
          
          
          
                  // 2.4
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `You deposit $ \\$ $ ${op1*100} into a bank account earning $x $ percent interest each year, compounded annually. How much is in the account after $t$ years?`,
                              Hint: `Hint: Use the compounding formula...`,
                              Answer: `Answer:  $ ${op1*100}(1+0.01x)^t  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    }, 
          
                   
                              
          
          
                  // 2.5
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = 10*(Math.ceil(Math.random() * 9) + 1); op2 = 100*(Math.ceil(Math.random() * 9) + 1); op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `This year, the chicken on a farm lain ${op1}% less eggs than they did last year. If they laid ${ (op2)*(1-op1/100)} eggs this year, how many did they lay last year?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op2}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
          
          
                  // 2.6
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = 100*(Math.ceil(Math.random() * 9) + 1); op2 = 100*(Math.ceil(Math.random() * 9) + 1); op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `In a particular store, the number of TVs sold the week of Black Friday was $ ${op1}$. The number of TVs sold the following week was $${op2}$. Tv sales the week following Black Friday were percent less than TV sales the week Black Friday (rounded the nearest percent)?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${    Math.round((op2-op1)/op1*100)   }  $%` // 
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },          
          
                  // 2.7 -> hard
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = 10*(Math.ceil(Math.random() * 50) + 1); op2 = 10*(Math.ceil(Math.random() * 50) + 1); op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `In a particular store, the number of computers sold the week of Black Friday was $${4*op1+op2}$. The number of computers sold the previous week was $${op2}$. Which of the following best approximates the percent increase in computer sales from previuos week to the week of Black Friday?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${ Math.round(4*op1/op2*100)}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 2.8
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 =  Math.ceil(Math.random() * 9) + 1; op2 =100*Math.ceil(Math.random() * 50 + 1); op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `The number of students at a school decreased $${op1}$% from $2010$ to $2011$. If the number of students enrolled in the $2011$ was $${op2}$, which of the following expresses thenumber of students enrolled in $2010$ in terms of $k$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${Math.round(op2/(1-op1/100))}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },  
            
                  // 2.9
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 50) + 1; op2 = Math.ceil(Math.random() * 50) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `Among 10th graders at a school, $${op1}$% of students are Red Sox fans. Among those Red Sox fans, $${ op2}$% are also Celtic fans. What percent of the 10th graders at the school are both Red Sox fans and Celtic fans?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${Math.round(100*op1*op2/10000)}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    }, 
                  // 3.1
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = 100*(Math.ceil(Math.random() * 9) + 1); op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ M = ${op1}(${1 + (op2/100)})^{\\frac{t}{${op3}}}$$ The equation above models the mass $M$, in nanograms, of a particle after $t$ years. Based on the equation, the mass increases by how much every $${op3}$ years?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op2}  $%`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 3.2
              {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
                      question: function() {
                          op1 = 100*(Math.ceil(Math.random() * 9) + 1); op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ M = ${op1}(${1 - (op2/100)})^{\\frac{t}{${op3}}}$$ The equation above models the mass $M$, in nanograms, of a particle after $t$ years. Based on the equation, the mass increases by how much every $${op3}$ years?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op2}  $%`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
           
              {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
                      question: function() {
                          op1 = 100*(Math.ceil(Math.random() * 9) + 1); op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ M = ${op1}(${1 - (op2/100)})^{\\frac{t}{${op3}}}$$ The equation above models the mass $M$, in nanograms, of a particle after $t$ years. Based on the equation, the mass increases by $ ${op2}  $% after how many years?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op3}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
          
          
                  // 3.3
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = 10*(Math.ceil(Math.random() * 9) + 1); op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `A non-profit organization currently has $ ${op1}$ volunteers. If the organization is able to double the number every $${op2}$ months, which of the following equations best models the number of volunteers, $v$, the organization will have $t$ months from now?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1} .{2}^{\\frac{t}{  ${op2} } } $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
           
                  // 3.4
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                    
                      question: function() {
                          op1 = 10*(Math.ceil(Math.random() * 9) + 1); op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `A non-profit organization currently has $ ${op1}$ volunteers. If the organization is able to double the number every $${op2}$ months, which of the following equations best models the number of volunteers, $v$, the organization will have $t$ months from now?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1} .{2}^{\\frac{t}{  ${op2} } } $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },  
                  // 4.1
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 50) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `A bicycle manufacture can produce $${op1}$ bicycles per hour. How many hours would it take the manufacture to produce $ ${(op1*op2)}$ bicycles?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op2}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 4.2
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `A rocket has  $ ${op1+op4*op2}$ gallons of fuel left after $${op3}$ hours of flight, and only $ ${op1}$ gallons after $ ${op3+op4}$ hours of flight. It burns $n$ gallons of fuel for every hour of flight, where $n$ is a constant. What is the value of $n$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op2}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },  
          
                  // 4.3
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `A box at the supermarket can hold $${op1}$ oranges each. Each orange costs $${op2}$ cents. Given that the supermarket has a budget of $ \\$ ${op1*op2*op4}$ to stock oranges, how many boxes will the supermarket be able to fill?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op4*100}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 4.4
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 2; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `A car can travel $ ${op1}$ miles in $ ${op2}$ minutes and $${op3}$ seconds. At this rate, how many miles can the car travel in $ ${(op2*60+op3)}$ hours?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${ Math.round(op1*3600)}  $`  //
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 4.5
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `Tom drives $${op1}$ miles at an average rate of $${op2}$ miles per hour. If Leona drives at an average rate of $${op3}$ miles per hour, how many more minutes will it take her to travel the same driver?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${Math.round((op1/op2-op1/op3)*60)}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
           
                  // 4.6
                
                  // Mr Chu dimensional analysis. use the = problems
          
                  // 5.1
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `Minyoung bought croissants and bagels for a breakfast event. The ratio of the number of croissants she bought to the number of bagels she bought was $${op1}$ to $${op2}$. If Minyoung bought $${op2*op3}$ bagels, how many croissants did she buy?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1*op3}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                   
          
                  // 5.2
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 5) + 1; op2 = Math.ceil(Math.random() * 5) + 1; op3 = Math.ceil(Math.random() * 5) + 1;
                          op4 = Math.ceil(Math.random() * 3) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `Arfand is following a recipe for seasoning blend that require sea salt, black pepper, and paprika. According to the recipe, the ratio of grams of sea salt to grams of black pepper should be $ ${op1}:${op2}$, and ratio of grams of black pepper to grams of paprika should be $${op4*op2}:${op4*op3}$. How many grams of paprika should Arfand use to make $${ (op1*op4 + op2*op4 + op3*op4)*op5 }$ grams of the seasoning blend?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op3*op5}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
                    
                  // 5.3
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 20) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `The radius of a circle is increased by $${op1}$%. By what percent does the area of the circle increase?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${  Math.round((Math.pow(1+op1/100,2)-1)*10000)/100}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
            
                  // 5.4
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `The length of a rectangle is increased by $${op1}$%. The width is decreased by $${op2}$%. The area of the rectangle changed by how much percent?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${Math.round(   ((1+op1/100)*(1-op2/100)-1)*10000  )/100  }  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
             
                  // 5.5
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$F = \\frac{9q_{1}q_{2}}{r^{2}}$$ If $r$ becomes $${op1}r$, and $q_{1}$ and $q_{2}$ remain unchanged, the $F$ becomes $aF$. What is $a$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ \\frac{1}{${Math.pow(op1,2)}}   $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 5.6
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `The area of a square $A$ becomes $${op1}A$. The length of each side has increased by what percent?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${Math.round((Math.pow(op1,0.5)-1)*10000)/100 }  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    }, 
               // 6.1
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          op7 = Math.ceil(Math.random() * 9) + 1; op8 = Math.ceil(Math.random() * 9) + 1; op9 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ ${op1}(${op2}x^2 -${op3}x^2y^2 - ${op4}y^2) - ${op5}(${op6}x^2 + ${op7}x^2y^2 - ${op8}y^2)$$What is the coefficient of $x^2y^2$ in the expression above?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1*op2-op5*op6}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 6.2
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ ${op1}(${op2}x+${op3})(${op4}x- ${op5}) = ax^2 + bx + c$$What is the value of $a$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1*op2*op4}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
           
          {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ ${op1}(${op2}x+${op3})(${op4}x- ${op5}) = ax^2 + bx + c$$What is the value of $b$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1*(-op2*op5 + op3*op4)}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
          {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ ${op1}(${op2}x+${op3})(${op4}x- ${op5}) = ax^2 + bx + c$$What is the value of $c$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${-op1*op3*op5}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
          
          
          
                  // 6.3
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ ${op1**2}m^{4} - ${op2**2}m^{2} = (Am+Bn)(Am-Bn) $$ What is the value of $A+B$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1+op2}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 6.4
                 {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ ${(op1)**2}x^2 - ${2*(op1)*op2}xy +${op2**2} y^2 = (Ax-By)^2$$ What is the value of $A+B$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1+op2}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },  
          
          
          
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ ${(op1)**2}x^4 - ${2*(op1)*op2}x^2y^2 +${op2**2} y^4 = (Ax^2-By^2)^2$$ What is the value of $A+B$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1+op2}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
                    // 6.5 -> use the 1/x example from the main file
               
           
                  // 6.7
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: ` If $\\frac{${op1*op2} + B}{${op2}} = A + \\frac{B}{${op2}}$, what is the value of $A$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
            
                  // 6.8
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `There are $${op1}$ houses with $${op2}$ people in each house. If $${op1*op2*op3}$ oranges are distributed equally among the people, how many stickers does each student receive?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op3}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
                       
                  // 7.1
              // graph
          
                  // 7.2 
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$ ${op1}(x + ${op2}y ) = ${op1 +op4}x + ${op1*op2}y - ${op3*op4} $, find the value of $a$.`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op3}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                       
                  // 8.1 -> square root squaring covered later
          
                  // 8.2
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `If $(x+${op1})^2 = ${(op1+op2)**2}$, what is the sum of the roots of the equation?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${-2*op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 8.3
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 5) + 1; op2 = Math.ceil(Math.random() * 5) + 1; op3 = Math.ceil(Math.random() * 5) + 1;
                          op4 = Math.ceil(Math.random() * 5) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          a = reduce(op3*(op1+op2),(op3+op4)*op1);
                          
                          return {
                              ques: `If $\\frac{${op1}}{${op1+op2}}x = \\frac{${op3}}{${op3+op4}}$, what is the value of $x$ as a fraction?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ \\frac{${a[0]}}{${a[1]}}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
                         
          
                  // 8.4
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `If $\\frac{2}{x^2 - 4} - \\frac{1}{x+2} = 0$, what is the value of $x$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
           
          
                  // 8.5
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ b = \\frac{a}{${op1+1}a + c}$$ Which of the following expresses $a$ in terms of $b$ and $c$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 8.6
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ x^4 + ${op1+1}x^3 + x + ${op1+1} = 0$$ What is one possible real value of $x$ for which the equation above is true?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 8.7
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ x^3 + x^2 + x = \\frac{x\\sqrt{x-\\frac{1}{x}}}{m(x+\\frac{1}{x})}$$ Which of the following gives $m$ in terms of $x$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 8.8
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ (x+${op1})^2 + 5(x + ${op1}) - 24 = 0$$ If $x \\gt 0$, for what real value of $x$ is the equation above true?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 8.9
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `If $${op1}x + ${op1*3}y = ${op1}$, what is the value of $x+3y$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 8.10
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `If $\\frac{x}{y}= ${op1}$, what is the value of $\\frac{y}{2x}$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 8.11
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ \\sqrt{22 -x} = x-2$$ What is set of all solutions to the equation above?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 8.12
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ x^2(x^3 -4) = 4^x$$ If $x$ is an integer, what is one possible solution to the equation above?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 9.1
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `If $(x+a)^2$ = $x^2 + ${op1*2}x + b$, what is the value of $b$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 9.2
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ a(x^2 -2b) = 4x^2 -12$$ In the equation above, $a$ and $b$ are constants. If the equation has infinitely many solutions, what is the value of $b$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 9.3
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ kx + ${op1}(${op2} - 2x) = ${op1*op2}$$In the equation above, $k$ is a constant. If the equation is true for all the values of $x$, what is the value of $k$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 9.4
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ ${op1}cx - ${op2}(x+ ${op3}) = ${op4}(x-${op5})$$The equation above has no solutions, and $c$ is a constant. What is the value of $c$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 9.5
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ \\frac{${op1}}{x} + \\frac{${op2}}{x+2} = ${op3}$$ If $x$ is a solution to the equation above and $x \\gt 0$, what is the value of $x$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 9.6
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ \\frac{${op1}}{x+${op2}} + \\frac{${op3}}{ax + ${op4}} = \\frac{-${op5}x^2 + ${op6 + op5}x + ${op5}}{(x+${op2})(ax+${op4})} $$In the equation above, $x \\ne -\\frac{${op4}}{a}$ and $a$ is a constant. What is the value of $a$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
                              
                  // 10.1
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ \\begin{align} -ax - ${op1}y &= ${op2} \\\\ ${op3}x + ${op4}y &= -${op5} \\end{align} $$If the system of equation has no solution, what is the value of $a$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 10.2
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ \\begin{align} ${op1+1}x - ${op2}y = ${op3} \\\\ mx - ny = ${(op1+op2)*op3} \\end{align} $$In the system of equation above, $m$ and $n$ are constants. If the system has infinitely many solutions, what is the value of $m+n$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 10.3
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `A group of $${5*op1}$ students order lunch from a restaurant. Each student gets either a burger or a salad. The price of a burger is $ \\$ ${op2}$ and the price of a salad is $ \\$ ${op3}$. If the group spent a total of of $ \\$${op1*(3*op2 + 2*op3)}$, how many students ordered burgers?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 10.4
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ \\begin{align} y + ${op1+1}x &= 0 \\\\ x^2 + ${op2+1}y^2 &= ${4 + (op2+1)*(op1+1)**2} \\end{align}$$If $(x,y)$ is a solution to the system of equation above and $y\\gt 0$, what is the value of $y$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 10.5
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ \\begin{align} xy + 2y &= 2 \\\\ \\left( \\frac{1}{x+2} \\right)^2 + \\left( \\frac{1}{x+2} \\right) -6  &= 0 \\end{align}$$If $(x,y)$ is solution to the equation above, what is a possible value for $|y|$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 10.6
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `If $xy = ${op1}$, $xz = ${op2}$, and $yz=${op3}$, what is apossible positive value of $xyz$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 10.7
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `In the $xy$-plane, the lines $y = ${op1+1}x - ${op2}$ and $y = -${op3+1}x + ${op4}$ intersect at the point $(h,k)$. What is the value of $k$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 10.8
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ \\begin{align} y &= x^2 -${op1}x + ${op1*op2 + op3} \\\\ y &= ${op2}x + ${op3} \\end{align}$$The system of equations above is graphed in $xy$-plane. If the ordered pair $(x,y)$ represents an intersection point of the graphs of the two equations, what is on possible value of $y$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    }, 
                       // 10.9 -> incomplete
                             {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$ \\begin{align} y &= x + ${op1} \\\\ y &= |x| \\end{align}$$ A system of two equations and their graphs in the $xy$-plane are shown above. How many solutions does the system have?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
                  // 11.1
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `Which of the following integers is solution to the inequality $-${((op1*4/10) | 0)+2}x - ${op2} \\le -${op1 + 2}x - ${op1*op2}$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
                  // 11.2
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `if $-${op1} \\le -${op2 == 1? 2:op2}x + ${op3} \\le ${op2*op3}$, which of the following must be true?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
                  // 11.3
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `To follow his diet plan, James must limit his daily sugar consumption to at most $${op1*op2*op3}$ grams. One cookie has $${op1}$ grams of sugar and one fruit salad contains $${op2}$ grams of sugar. If James ate only cookies and fruit salads, which of the following inequalities represents the possible number of cookies $c$ and fruit salads $s$ that he could eat in one day and remain within his diet's sugar limit?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 11.4 -> incomplete
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `The following system of inequalities is graphed in $xy$-plane above. \\begin{align} y &\\ge -${op1}x +${op2} \\\\ y&\\ge ${op3}x -${op4} \\end{align}Which quadrants contain solutions to the system?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 11.5
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `Ecologists have determined that the number of frogs $y$ must be greater thatn or equal to three times the number of snakes $x$ for a healthy ecosystem to be maintained in a particular forest. In addition the number of frogs and number of snakes must sum to at least $${op1*100}$. Which of the following systems of inequalities expresses these conditions for a healthy ecosystem?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   	 
                  // 12.1
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `The sum of three consecutive integers is $${3*(op1+op2+op3)+3}$. What is the largest of these three integers?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 12.2
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `One number is $3$ times another number. If they sum to $${4*(op1+op2)}$, what is the larger of the two numbers?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 12.3
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `What is a number such that the square of the number is equal to $${op1**3/10}$% of its reciprocal?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 12.4
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `Albert is $${op1}$ years older than Henry. In $${op2}$ years, Albert will be twice as old as Henry. How old is Albert now?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 12.5
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `Jake can run $60$ yards per minute. Amy can run $120$ yards per minute for first $10$ minutes but then slows down to $20$ yards per minute thereafter. If they start running at same time, after how many minutes $t$ will both Jake and Amy have run the same distance, assuming $t\\lt10$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 12.6
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `At a pharmaceutical company, research equipment must be shared among the scientists. There is one microscope for every $4$ scientists, one centrifuge for every $3$ scientists, and one freezer for every $2$ scientists. If there is a total of $52$ pieces of research equipment at this company, how many scientists are there?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 12.7
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `A group of friends wants to split the cost of renting a cabin equally. If each friend pay $\\$130$, they will have $\\$10$ too much. If each friend pays $\\$120$, they will have $\\$50$ too little. How much does it cost to rent the cabin?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 12.8
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `Of the $${op1*100}$ jellybeans in a jar, $70$% are green and the rest are red. How many green jelly beans must be removed so that $60$% of the remaining jellybeans are green?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 12.9
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `A rectangle has a width that is $3$ inches shorter than its length. If area of the rectangle is $108$ square inches, what is the perimeter, in inches, of the rectangle?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 12.10
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `When Alex and Barry work separately from each other, Alex can paint a house in $6$ days and Barry can paint a house in $12$ days. Assuming that they each work at a constant rate, how many days will it take Alex and Barry to paint a house if they work together?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },
                  // 13.1
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `Corine is graphics designer who earns $\\$ ${2+op1*10*op2*5}$ for every logo she designs. What is the minimum number of logos she would have design to earn at least $\\$ ${op1*1000}$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 13.2
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `A pallet truck can move up to $${op1}$ tons in a single trip. If truck is to be used to move $${320}$-pound pallet, what is maximum number of whole pallets the truck can move in a single trip?($${1}$ ton = $${2000}$ pounds)`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 13.3
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `If one tray of flatbead can be made from $${op1}$ cups of flour and $${op2}$ cups of greek yogurt, what is maximum number of whole trays of flatbead that can be made from $${op1*100+op2*5}$ cups of flour and $${op2*100 + op1*5}$ of greek yogurt?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 13.4
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$\\begin{align} C = 18tw + 1050\\end{align}$$ An appliance manufacture uses the equation above to calculate the total cost $C$, in dollars, of producing a shipment of $t$ toasters that each weigh $w$ pounds. If the manufacturer can spend no more than $\\$ ${op1*op2*1000}$ producing the next shipment of toasters, and the weight of each toaster will be $${op1}$ pounds, what is the maximum number of toasters that can be produced for the next shipment?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 13.5
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `A deck of $48$ cards consists of only red cards and black cards. If the number of red cards is less than twice the number of black cards, what is minimum possible number of black cards in the deck?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 13.6
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `An art teacher needs to buy a total of $${op3*op1}$ paintbrushes for a painting class. Each paintbrush must be either an acrylic brush, which costs $\\$${op1}$, or a watercolor brush, which costs $\\$${op2}$. If no more than $\\$${(op1+op2+op3)*10}$ can be spent on the paintbrushes, what is minimum number of watercolor brushes the art teacher can buy?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 13.7
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `Shahar collects baseball cards that are solids in regular packs and premium packs. Two rare cards be found in every regular pack and three rare cards can be found in every premium pack. If Shahar wants to add at least $${op1*10}$ rare cards to his collection by buying no more than $${op2*4}$ packs of baseball cards, what is least number of premium packs be could buy?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },  
                  // 14.1
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `The line shown in the $xy$-plane above passes through the origin and point $(a,b)$, where $a\\gt b$. Which of the following could be the slope of the line?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 14.2
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `Line $m$ passes through points $(k,${op1})$ and $(${op2},k-${op3})$. If the slope of the line $m$ is $${op4}$, what is the value of $k$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 14.3
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `If the line $ax+${op1}y = ${op1*op2}$, where $a$ is a constant, has an $x$-intercept that is twice the value of the $y$-intercept, what is the value of $a$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 14.4
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `Which of the following could be the equation of the line shown in the $xy$-plane above?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 14.5
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `A line $l$ passes through the points $(-${op1},${op2})$ and $(${op3},${op4})$. What is the $y$-intercept of line $l$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 14.6
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `Line $m$ has a slope of $\\frac{${op1}}{${op2}}$ and passes through the point $(${op3},${op4})$. If line $n$ is perpendicular to line $m$ and passes through the same point $(${op3},${op4})$, which of the following could be the equation of line $n$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },
                        
                       // 15.1 -> incomplete
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: ``,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 15.2 -> incomplete
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: ``,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 15.3
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$T = ${(9 + op1)*op2} - ${op1+1}m$$A can of soda is put into a freezer. The temperature $T$ of the soda, in degrees Fahrenheit, can be found by using the equation above, where $m$ is number of minutes the can has been in the freezer. What is the decrease in the temperature of the soda, in degrees Fahrenheit, for every $${op3}$ minutes the can is left in the freezer?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 16.1
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$f(x) = (x + ${op1})^{x}$, then what is the value of $f(0) + f(1) +f(2)+f(3)$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 16.2
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$f(x) = \\frac{${op2}}{x^2 - ${2*op1}x + ${op1**2}}$$ For what value of $x$ is the function $f$ above undefined?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 16.3
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `If $f(x-1) = ${op1}x$ and $g(x) = x+${op2}$, what is value of $f(g(2))$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 16.4
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `Functions $f$ and $g$ are defined by $f(x) = x ${op1}$ and $g(x) = \\frac{x}{${op2}}$. If $f(g(f(k))) = ${op3}$, what is the value of $k$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 16.5 -> incomplete
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `The graph of $f(x)$ is shown in the $xy$-plane. For what value of $x$ is $f(x)$ at its maximum?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 16.6
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `If the function with equation $y = ax^2 + ${op1}$ crosses the point $(${op2},${op3})$, what is the value of $a$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 16.7
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `If the function $y = x^2 + ${2*op1}x - ${op1*op1}$ contains the point $(m,2m)$ and $m\\gt0$, what is the value of $m$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 16.8 -> incomplete
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `The graph of $f(x) = x^3 - 2x^2 -5x + 6$ is shown in the $xy$-plane above. If $k$ is a constant such that $f(x) = k$ has 1 solution, which of the following could be the value of $k$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 16.9 -> incomplete
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `Which of the following could be the graph of $y = x^3 + 2x^2 + x + 1$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 16.10
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `In the $xy$-plane, the graph of the function $g$ is graph of $f$ translated $${op1}$ units to left and $${op2}$ units downward. If function $f$ is defined by $f(x) = (x-${op3})^2+${op4}$, which of the following defines $g(x)$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 17.1
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `In the $xy$-plane, the parabola $y=x^2 - ${op1}x +${op2}$ intersects the line $y=${op3}x -${op4}$ at the point $(a,b)$. What is the value of $b$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 17.2
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `How many times does the graph of $y = -x^2 +${op1}x+${op2}$ intersect the line $y=${op3}$ in the $xy$-plane?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 17.3
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$\\begin{align} y -k = 0 \\\\ y = x^2 - ${op1}x +${op2} \\end{align}$$ In the system of equations above, $k$ is a constant. Which of following values of $k$ does the system of equations have no real solutions?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 17.4
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `A biologist uses the function $p(n) = -100n^2 + 1000n$ to model the population of seagulls on a beach in year number $n$, where $1\\lt n \\lt 10$. Which of the following equivalent forms of $p(n)$ displays the maximum population of seagulls and the number of the year in which the population reaches that maximum as constants or coefficients?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 18.1
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `The expression $\\frac{${op1+1} - ${op2}}{x+${op3}}$ is equivalent to which of the following?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 18.2
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `When $${op1+1}x^2 + ${op2}$ is divided by $x-1$, the result is $A + \\frac{${op1+op2+1}}{x-1}$. What is $A$ in terms of $x$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 18.3
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `If the expression $\\frac{${op1+1}x^2 - ${op2+1}x +${op3}}{x-2}$ is written in the form $${op1+1}x + ${2*op1-op2+1} + \\frac{B}{x-2}$, where $B$ is a constant, what is the value of $B$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 18.4
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `If the expression $\\frac{${op1+1}x^2 - ${op2+1}x +${op3}}{x-3}$ is written in equivalent from $${op1+1}x + ${3*op1+2 - op2} + \\frac{R}{x-3}$, what is the value of $R$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 18.5
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `$$f(x) = 3x^3 - kx^2 + 5x +2$$ In the polynomial $f(x)$ defined above, $k$ is constant. If $f(x)$ is divisible by $x-2$, what is the value of $k$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                  // 18.6 -> incomplete
                {
                      op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
                              
                      question: function() {
                          op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                          op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                          return {
                              ques: `The table above gives of polynomial $p(x)$ for some values of $x$. Which of the following must be a factor of $p(x)$?`,
                              Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                              Answer: `Answer:  $ ${op1}  $`
                           }
                      },
                      answer: function() {
                          return op1 * op2;
                      }
                    },   
          
                        // 19.1
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `If $i = \\sqrt{-1}$, which of the following is equivalent to $(${op1} + ${op2}i) - (${op3} - ${op4}i)$?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 19.2
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `Given that $i = \\sqrt{-1}$, what is the product $(${op1} + ${op2}i)(${op3} - ${op4}i)$?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 19.3
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `Which of the following is equal to $\\frac{(${op1} + ${op2}i)}{(${op3} - ${op4}i)}$?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 20.1
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `How many integer values of $x$ satisfy $|x|\\lt${op1}$?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 20.2
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `How many integer values of $x$ satisfy $|x+${op1}|\\lt${op2}$?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 20.3
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `Fow which of the following values of $x$ is $|${op1+1}x - ${op2}|$?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 20.4
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `A manufacturer of cookies test the weight of its cookie packages to ensure consistency in the product. An acceptable package of cookies must weigh between $${op1*2}$ ounces and $${2*op2}$ ounces as it comes out of production. If $w$ is weight of an acceptable cookie package, then which of the following inequalities correctly expresses all possible values of $w$?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 20.5 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `Which of the following could be the graph of $y = |2x-1|$?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 21.1 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `What is the value of $x$ in the figure above?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 21.2 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `In the figure above, $\\overline{AC}||\\overline{GD}$ and $\\overline{BF}||\\overline{CE}$. If $\\angle CAE = 70^{\\circ}$ and $\\angle ACE = 40^{\\circ}$, what is the value of $x$?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 21.3 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `Two sides of a regular pentagon are extended as shwon in figure above. What is the value of $x$?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 22.1 
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `In an isosceles triangle, one of the angles has a measure of $${op1*10}^{\\circ}$`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 22.2 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `In the figure above, the triangle $ABC$ is equilateral. What is the value of $j+k+l+m+n+o$?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 22.3 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `The rectangle above has a diagonal of length $${op1*10}$. If the base of the rectangle is twice as long as the height, what is the height?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 22.4 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `What is the area of $\\triangle ACB$ shown above?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 22.5 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `In the figure above, $AD = DC$, $\\angle B = 30^{\\circ}$, and $AB = 10$. What is the ratio of $AC$ to $CB$?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 22.6 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `In $\\triangle ABC$ above, $\\overline DE$ is parallel to $\\overline AC$, $AD = 9$, $DB=3$, and $DE=2$. What is the length of $\\overline{AC}$?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 22.7 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `In the figure above, what is length of $\\overline{KH}$?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 22.8 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `In figure above, $\\overline{AB}$,$\\overline{PQ}$, and $\\overline{DC}$ are parallel. Point $P$ lies on $\\overline{AD}$ and point $Q$ lies on $\\overline{BC}$. If $BQ = 4$, and $AD = 7.5$, what is the length of $\\overline{AP}$?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 22.9 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `In the $xy$-plane above, line $m$ passes through the origin and has a slope of $\\sqrt{3}$. If point $A$ line on line $m$ and point $B$ lies on the $x$-axis as shown, what is the measure, in radians, of angle $AOB$?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
           
                        // 23.1 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `In the figure above, the outer circle's radius is twice as long as the inner circel's. What is the ratio of the are of the area of the unshaded region?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 23.2 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `What is the area of the shaded region in the figure above?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 23.3 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `A circle with a diameter of $${op1*10}$ is shown in the figure above. If $\\angle AOB = 120^{\\circ}$, what is the length of minor are $\\stackrel{\\frown}{{AB}}$?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 23.4 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `$$x^2 - 4x + y^2 + 2y = 31$$ The equation of a circle in the $xy$-plane is given above. What are the coordinates of the center of the circle?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
             
                        // 26.1 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `The table above summarizes the meat preferences of passengers on a particular flight. If a first class passenger is chosen at random from this flight, what is the probability that the passenger chosen prefers beef?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 26.2 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `The manager of a large assembly line uses the table below to keep track of the number of vehicles that are produced during different shifts in the day.
          If a vehicle is selected at random at the end of the day, which of the following is closest to the probability that the vehicle will be either a car produced during the first shift or a truck produced during the third shift?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 27.1 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `The histogram above summarizes the daily number of hours spent playing sports for $80$ students at a school. What is the mean daily number of hours spent playing sports for the $80$ students?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 27.2 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `The dot plot above summarizes the number of flights taken in year a by $19$ college students. If the student who took $6$ flights in a year is removed from the data, which of the following correctly describes the changes to the statistical measures of the data?
          I. The mean decrease
          II. The median decreases
          III. The range decreases`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 27.3
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `The average weight of a group of pandas is $200$ pounds. Another panda, weighing $230$ pounds, joins the group, raising the average weight of the entire group to $205% pounds. How many pandas were in the original group?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 27.4 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `The bar charts above summarize the number of cars that residents from two neighborhoods, $A$ and $B$, own. Which of the following correctly compares the standard deviation of the number of the cars owned by residents ineach of the neighborhoods?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 28.1 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `A pet food store chose $1000$ customers at random and asked each customer how many pets he or she has. The results are shown in the table below.
          There are total of $18000$ customers in the sore's database. Based on the survey data, what is the exprected total number of customers who own $2$ pets?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 28.2 -> incomplete
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `The scatterplot above shows the relationship between heart rate and oxygen uptake at $16$ different points during Kyle's excercise routine. The line of the best fit is also shown. Based on the line of the best fit, what is Kyle's predicated oxygen uptake at a heart rate of $110$ beats per minute?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 28.4
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `Malden is a town in the state of Massachusetts. A real estate agent randomly surveyed $50$ apartments for sale in Malden and found that the average price of each apartment was $\\$150000$. Another real estate agent intends to replicate the survey and will attempt to get a smaller margin of error. Which of following samples will most likely result in a smaller margin of error for the mean price of an apartment in Malden, Massachusetts?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 28.5
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `Researchers conducted an experiment to determine whether exercise improves student exam scores. They randomly selected $200$ students who exercise at least once a week and $200$ students who do not exercise at least once a week. After tracking the students' academic performances for a year, the researchers found that the students who exercise at least once a week performed significantly better on the same exams than the students who do not. Based on the design and results of the study, which of the following is an appropiate conclusion?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          },
                
                        // 28.6
                      {
                            op1: 0, op2: 0, op3: 0, op4: 0, op5: 0, op6: 0,
          
                            question: function() {
                                op1 = Math.ceil(Math.random() * 9) + 1; op2 = Math.ceil(Math.random() * 9) + 1; op3 = Math.ceil(Math.random() * 9) + 1;
                                op4 = Math.ceil(Math.random() * 9) + 1; op5 = Math.ceil(Math.random() * 9) + 1; op6 = Math.ceil(Math.random() * 9) + 1;
                                return {
                                    ques: `Enviromentalists are testing pH levels in a forest that is being harmed by acid rain. They analyzed water samples from $40$ rainfalls in the past year and found that the mean pH of the water samples has a $95$% confidence interval of $3.2$ to $3.8$. Which of the following conclusions is the most appropriate based on the confidence interval?`,
                                    Hint: `Hint: $ ${op1} = ${op1}^${op3}, etc...$ `,
                                    Answer: `Answer:  $ ${op1}  $`
                                 }
                            },
                            answer: function() {
                                return op1 * op2;
                            }
                          }, 
                
              ]
    
  };
  
  
  $(document).ready(function() {
      var totalQuestion = quiz.question;
      var currentIndex = 0;
      var intervalHandle = null;
      var questionField2 = $("#question2");
      var currentIndex2 = 0;
      var hint2 = $("#hint2");
      var answer2 = $(".answer2")
      var progressBar2 = $("#bar-2")
  
      // global
      var globalBreakTimer = 0;
      var globalQuizTimer = 0;
      var quizActive = false;
  
      // shuffle quiz.data
      if (quiz_2.randomize) {
          for (var i = quiz_2.data.length - 1; i > 0; --i) {
              var rand = Math.floor(Math.random()*i);
              var temp = quiz_2.data[i];
              quiz_2.data[i] = quiz_2.data[rand];
              quiz_2.data[rand] = temp;
          }
      }
      
      function quizInterval () {
          quizActive = true;
          var countDownDate = new Date().getTime() + 15 * 60 * 1000; 
          
          var quizHandler = setInterval(() => {
              var now = new Date().getTime();
              var distance = countDownDate - now;
              globalQuizTimer = distance;
  
              // Time calculations for hours, minutes and seconds
              var minutes = Math.floor((globalQuizTimer % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((globalQuizTimer % (1000 * 60)) / 1000);
  
              if (minutes < 10)
                  minutes = "0" + minutes;
              if (seconds < 10)
                  seconds = "0" + seconds;
  
              if (globalQuizTimer < 0) {
                  clearInterval(quizHandler);
  
                  breakInterval()
              }
          }, 1000);
      };
  
      function breakInterval () {
          quizActive = false;
          globalQuizTimer = 0;
          
          var breakCountDownDate = new Date().getTime() + 0.5 * 60 * 1000;
  
          var breakHandler = setInterval(() => {
              var now = new Date().getTime();
              var distance = breakCountDownDate - now;
              globalBreakTimer = distance;
  
              // Time calculations for hours, minutes and seconds
              var minutes = Math.floor((globalBreakTimer % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((globalBreakTimer % (1000 * 60)) / 1000);
  
              if (minutes < 10)
                  minutes = "0" + minutes;
              if (seconds < 10)
                  seconds = "0" + seconds;
          
              if (globalBreakTimer < 0) {
                    clearInterval(breakHandler);
    
                    quizInterval()
                  
                    setTimeout(() => {
                        loadQuestion2();
                    }, 20000);//20 sec
                    
              }
          }, 1000);
      }
 
      function loadQuestion2() {
          if (quizActive ){
              dataSet = quiz_2.data[currentIndex].question();
  
              progressBar2.removeClass('playAnimation')
              progressBar2.width()
              progressBar2.addClass('playAnimation')
  
              questionField2.html(dataSet.ques);
              hint2.html(dataSet.Hint);
              answer2.html(dataSet.Answer);
          
              MathJax.Hub.Queue(["Typeset", MathJax.Hub, questionField2[0]]);  
              MathJax.Hub.Queue(["Typeset", MathJax.Hub, hint2[0]]);
              MathJax.Hub.Queue(["Typeset", MathJax.Hub, answer2[0]]);
  
              setTimeout(function() {
                  if (currentIndex2 === 0) {
                      questionField2.css("opacity", 1);
                  }
                  animateQuestion2();
              }, 500);
          }
      }
 
      function animateQuestion2() {
          questionField2.removeClass("zoomOutLeft");
          questionField2.addClass("zoomIn");
  
          setTimeout(function() {
              intervalHandle = setInterval(function() {
                  second = Math.floor((globalQuizTimer % (1000 * 60)) / 1000);
                  if(quizActive){
                      if (second > 0) {
                          loadhint2();
                          loadanswer2();
                          
                      }else{
                          // unload the question
                          clearInterval(intervalHandle);
  
                          questionField2.removeClass("zoomIn");
                          questionField2.addClass("zoomOutLeft");
  
                          setTimeout(function() {
                              if (currentIndex2 < totalQuestion - 1) {
                                  currentIndex2++
                                  
                                  setTimeout(() => {
                                      loadQuestion2(currentIndex2);
                                  }, 20000); //20 sec
                              } else {
                                  console.log("2 -AQ2 else hide everything")
                              }
                          }, 1000);
                      }
                  }
                  
              }, 1000);
          }, 1000);
      }
 
      function loadhint2() {
          second = Math.floor((globalQuizTimer % (1000 * 60)) / 1000);
  
          if (second <= 15 && second >= 5){
              hint2.fadeIn(2000);
 
          }else{
              hint2.fadeOut(2000);
          }
      }
  
 
      function loadanswer2() {
          second = Math.floor((globalQuizTimer % (1000 * 60)) / 1000);
          
          if (second <= 10 && second >= 5){
              answer2.fadeIn(2000);
 
          }else{
              answer2.fadeOut(2000);
          }
      }
   
      quizInterval()

      setTimeout(() => {
          loadQuestion2( )
      }, 20000); //20sec
  
   
  });
  