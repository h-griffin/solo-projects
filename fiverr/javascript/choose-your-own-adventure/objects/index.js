 
// Global variable that keeps track of current question to ask
let currentQuestion = 'question1';

// Questions object that holds all game questions
const questions = {
    question1: {
        prompt: 'Would you like to take a survey about cars?',
        options: ['Yes', 'No'],

        // key pairs to ask next question based on answer
        answers: {
            // selected answer : next question 
            'Yes': 'question2',   
            'No': 'end-survey'
        }
    },
    question2: {
        prompt: 'What size car do you want?',
        options: ['Small', 'Medium', 'Large', 'I don\'t want a car'],
        answers: {
            'Small': 'question22',
            'Medium': 'question13',
            'Large': 'question44',
            'I don\'t want a car': 'end-survey'
        }
    },
    question13: {
        prompt: 'Are you sure you want a Medium car?',
        options: ['Yes', 'No'],
        answers: {
            'Yes': 'end-survey',
            'No': 'question2'
        }
    },
    question44: {
        prompt: 'Are you sure you want a Large car?',
        options: ['Yes', 'No'],
        answers: {
            'Yes': 'end-survey',
            'No': 'question2'
        }
    },
    question22: {
        prompt: 'Are you sure you want a Small car?',
        options: ['Yes', 'No'],
        answers: {
            'Yes': 'end-survey',
            'No': 'question2'
        }
    }
}
 
// Helper function to display the current question and available options on the screen
// parameter =>  The key for the question to ask, key:value pair in questions object
function setQuestion(question) {

    // display question
    const promptQuestion = document.getElementById("promptQuestion");
    promptQuestion.innerHTML= question.prompt;

    // display options
    const promptOptions = document.getElementById("promptOptions");
    promptOptions.innerHTML = '';  
    
    // for each available option, create a button 
    question.options.forEach((option) => {

        const button = document.createElement('button');
        button.innerHTML = option

        // when clicked, set global question to the next question based on key:value pair in questions object
        button.addEventListener('click', () => {
            currentQuestion = question.answers[option]
            startSurvey();
        });

        promptOptions.append(button);
    })

};

// This will remove all questions from the screen and send a thank you message
function endSurvey() {
  document.getElementById('promptBox').innerHTML = 'Thanks for taking my survey!';
};

// Starts the survey and sets the question
function startSurvey() {

  if (currentQuestion !== 'end-survey') {
    setQuestion(questions[currentQuestion]);
  } else {
    endSurvey();
  }
};

// Initiates the survey
startSurvey(); 


 
// --- if/else statement block ---
// prompt/confirm/alert come built in to WAIT for a user response before moving on
// to make our if statement wait for a user response we would need to chain javascript promises
// chaining these promises together for a large amount of questions would get very messy and hard to follow
// read more about promises here : https://www.delftstack.com/howto/javascript/javascript-wait-for-function-to-finish/

// --- javascript object --- 
// using this javascript object allows for easy scalability and readability 
// startSurvey() and endSurvey() are dynamic and don't need to change regardless how many questions there are

