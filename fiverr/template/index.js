// ---------- EXAMPLE ONE ----------
// simple example using alerts and confirm 
//      - these are built into the browser to receive yes/no responses
    
var beginQuestions = confirm("would you like to continue");
if (beginQuestions) {
    alert("you said yes");
    var secondQuestion = confirm("this is another question");
    if (secondQuestion) {
        alert("that was indeed another question");
    } else{
        alert("that was definitely another question...");
    }
} else{
    alert("you said no");
}


// ---------- EXAMPLE TWO ----------
// example using prompt box - inner html
// 
// using .innerHTML="" changes the text inside the h2="promptResult" to display the result on screen 
//      - you can also use alert("")to print the message in a messageBox like the prompt as seen above in example one ^^^

// grab <h2 id="prompt"> tag from html, and store it in a variable 'promptResult' to use later
var promptResult = document.getElementById("promptResult");

function startSurvey() {

    // first question/prompt to begin if statements (questions)
    var startSurveyChoice = prompt("would you like to take a survey about cars?");
 

    // ----- FIRST QUESTION -----
    if (startSurveyChoice == "yes"){

        var carSizeChoice = prompt("What size car do you want? [small or large]");

        if (carSizeChoice == "small"){
            promptResult.innerHTML="you chose a small car! the end.";

        } else if (carSizeChoice == "large") {
            promptResult.innerHTML="you chose a large car! one more question...";

            // ----- SECOND QUESTION ----- 
            var carSpeedChoice = prompt("how fast do you want your large car to go? [slow or fast]");
            if (carSpeedChoice == "slow"){
                promptResult.innerHTML="a large car that goes slow!";
            }
            else if(carSpeedChoice == "fast"){
                promptResult.innerHTML="a large car that goes fast!";
            } 
        } else {
            // typed something else in the prompt box
            promptResult.innerHTML="sorry i do not understand your answer... it was not [small or large]";
        }
    }
    else{
        // we do not join survey  // typed something else in the prompt box
        promptResult.innerHTML="you do not want to take the survey.";
    }

}

// call/initialize your function to run its code/start quetsion prompts
startSurvey(); 
 

// if (condition) {
//      block of code to be executed if the condition is true
// } else {
//      block of code to be executed if the condition is false / not met
// }


// if statement structure
// 
// first if statement 
//      option 1
//          second if statement
//              option 1.1
//              option 1.2
//              option 1.3
//      option 2
//          second if statement
//              option 2.1
//              option 2.2
//              option 2.3
//      option 3 
//          second if statement
//              option 3.1
//              option 3.2
//              option 3.3
//                  third if statement
//                      option3.3.1
//                      option3.3.2
//                      option3.3.3



// learn more about javascript if statements at W3Schools
//      https://www.w3schools.com/js/js_if_else.asp

