 


// ====================
//  TEXT TO SPEECH  
// ====================

if ('speechSynthesis' in window) {
    // Speech Synthesis supported 
}else{
    // Speech Synthesis Not Supported 
    alert("Sorry, your browser doesn't support text to speech!");
}

let meaningSpeech = new SpeechSynthesisUtterance();
meaningSpeech.lang = "en";

let scriptSpeech = new SpeechSynthesisUtterance();
scriptSpeech.lang = "ja"; // default - reset on select


let voices = []; // global array of available voices
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices(); // list of all voices

    // create options for each language in the voice select drop down
    let scriptVoiceSelect = document.querySelector("#voices");
    voices.forEach((voice, i) => (scriptVoiceSelect.options[i] = new Option(`${voice.name} - { ${voice.lang} } `, i)));

    // dynamically select en-US and ja-JP voices
    for(i=0; i < voices.length; i++){
        if(voices[i].lang == 'ja-JP' && voices[i].name == 'Kyoko'){
            scriptSpeech.voice = voices[i];
            scriptVoiceSelect.selectedIndex = i
        }
        if(voices[i].lang == 'en-US' && voices[i].name == 'Samantha'){
            meaningSpeech.voice = voices[i];
        }
    }
};

// update speed when selected
document.querySelector("#slider2").addEventListener('change', () => {
    // meaningSpeech.rate = document.querySelector("#slider2").value
    scriptSpeech.rate = document.querySelector("#slider2").value
})

// update voice & language when new one is selected
document.querySelector("#voices").addEventListener("change", () => {
    scriptSpeech.voice = voices[document.querySelector("#voices").value];
    scriptSpeech.lang = scriptSpeech.voice.lang;
});


// ================
// HELPER FUNCTIONS
// ================

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function pause() {
    isPaused = true;
    console.log('setting changed, isPaused:', isPaused)

    // change button text
    document.querySelector("button").innerHTML = "Resume Learning";

    // clear screen display
    document.getElementById("meaning-text").classList.remove('load');
    document.getElementById("phrase-text").classList.remove('load');
    document.getElementById("script-text").classList.remove('load'); 

    setTimeout(() => {
        document.getElementById("meaning-text").innerHTML = ' ';
        document.getElementById("phrase-text").innerHTML = ' ';
        document.getElementById("script-text").innerHTML = ' ';
    }, 500); //css fade out
} 

// function to display text and read out phrase and script
function phraseAndScript(allArrs, randomIndex) {
    return new Promise(resolve => {
        console.log('phraseAndScript()')
    
        document.getElementById("phrase-text").innerHTML += allArrs[1][randomIndex] ? `<p> ${ allArrs[1][randomIndex] } </p>` : ' ';
        document.getElementById("script-text").innerHTML += allArrs[2][randomIndex] ? `<p> ${ allArrs[2][randomIndex] } </p>` : ' ';
        
        // delay css fade in so js dom has access to newest word (last child)
        setTimeout(() => {
            document.getElementById("phrase-text").lastChild.classList.add('load')
            document.getElementById("script-text").lastChild.classList.add('load')
        }, 100);

        scriptSpeech.text = allArrs[2][randomIndex];
        speechSynthesis.speak(scriptSpeech);

        scriptSpeech.onerror = (event) => {
            console.log(`(phrase speech) An error has occurred with the speech synthesis: ${event.error}`);
        }

        setTimeout(() => {
            console.log('phrase and script resolved')
            resolve("sucess!");
        }, 3000); //timer to allow for speech to finish
    })
}

// function to display text and read out meaning
function meeaning(allArrs, randomIndex) {
    return new Promise(resolve => {
        console.log('meaning()')

        document.getElementById("meaning-text").innerHTML += allArrs[0][randomIndex] ? `<p> ${ allArrs[0][randomIndex] } </p>` : ' ';

        // delay css fade in so js dom has access to newest word (last child)
        setTimeout(() => {
            document.getElementById("meaning-text").lastChild.classList.add('load')
        }, 100);
 
        meaningSpeech.text =  allArrs[0][randomIndex];
        speechSynthesis.speak(meaningSpeech);

        meaningSpeech.onerror = (event) => {
            console.log(`(meaning speech) An error has occurred with the speech synthesis: ${event.error}`);
        }
        
        setTimeout(() => {
            console.log('meaning resolved')
            resolve("sucess!");
        }, 3000); //timer to allow for speech to finish
    })
}

// function to order displays and speech
async function meaningFirst(allArrs, selectedIndexes) {
    for (let i = 0; i < selectedIndexes.length; i++) {
        if(!isPaused){
            await meeaning(allArrs, selectedIndexes[i]);
        }
    }
    await delay(delayTime)
    for (let i = 0; i < selectedIndexes.length; i++) {
        if(!isPaused){ 
            await phraseAndScript(allArrs, selectedIndexes[i])
        }
    }
    await delay(delayTime)
}

// function to order displays and speech
async function meaningLast(allArrs, selectedIndexes) {
    for (let i = 0; i < selectedIndexes.length; i++) {
        if(!isPaused){
            await phraseAndScript(allArrs, selectedIndexes[i])
        }
    }
    await delay(delayTime)
    for (let i = 0; i < selectedIndexes.length; i++) {
        if(!isPaused){ 
            await meeaning(allArrs, selectedIndexes[i]);
        }
    }
    await delay(delayTime)
}





// =========================  
//  DELAY TIME & SPEED RANGE SLIDER  
// =========================

var canPlay = false;
var isPaused = false;

// default settings
var delayTime = 5000;  
var speechspeed = 1.0;  
var setsToRead = 3   

function delaySlider() {
    var slider = document.getElementById("slider"); 

    // update values
    delayTime = slider.value * 1000;
    console.log("updated delay time:", delayTime);

    pause();

}
function speedSlider() {
    var slider = document.getElementById("slider2"); 

    // update values
    speechspeed = slider.value * 1000;
    console.log("updated speed time:", speechspeed);

    pause();
}

//  range slider value that follows slider thumb
const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

const allRanges2 = document.querySelectorAll(".range-wrap2");
allRanges2.forEach(wrap => {
  const range = wrap.querySelector(".range2");
  const bubble = wrap.querySelector(".bubble2");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

// value display follows slider thumb
function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}
 
// =========================  
//  PAUSE WHEN SETTINGS UPDATE  
// ========================= 
var isMeaningFirst = true;

document.getElementById("listen").addEventListener("click", () => {
    isMeaningFirst = !isMeaningFirst;
    pause();
})

document.getElementById("str-count").addEventListener("click", () => {
    setsToRead = document.getElementById("str-count").value;
    pause();
})


// =========================  
//  DISPLAY & AUDIO CYCLES  
// ========================= 

// get reference to text areas
var meaning = document.getElementById("paste-meaning");
var phrase = document.getElementById("paste-phrase");
var script = document.getElementById("paste-script");

document.querySelector("button").addEventListener("click", () => {start()});

// add oninput listener to all text areas
document.querySelectorAll("textarea").forEach( textarea => {
    textarea.addEventListener("change", () => {canStart()});
})

// disable start button until all fields are filled
function canStart() {
    console.log("== canStart() ==");
 
    meaningText = meaning.value.replace(/^\s+/, '').replace(/\s+$/, '');
    phraseText = phrase.value.replace(/^\s+/, '').replace(/\s+$/, '');
    scriptText = script.value.replace(/^\s+/, '').replace(/\s+$/, '');

    if (meaningText !== '' && phraseText !== '' && scriptText !== ''){
        document.querySelector("button").disabled = false;
        canPlay = true;
    } 
}

// start cycle display
async function start() {
    isPaused = false;
    document.querySelector("button").innerHTML = "Learning";
    console.log('start, delayTime: ', delayTime)
    
    // remove listener for start button activation
    document.querySelectorAll("textarea").forEach( textarea => {
        textarea.removeEventListener("change", () => {canStart()});
    })

    var allArrs = []
    // split all textarea inputs by line break  
    document.querySelectorAll("textarea").forEach( textarea => {
        allArrs.push(textarea.value.split('\n').filter( function(e) { return e.trim().length > 0; } ));
    })

    // start
    updateDisplay(allArrs);
}


async function updateDisplay(allArrs){
    console.log("== updateDisplays() ==");
    console.log("delay time:", delayTime);
    console.log("sets to read:", setsToRead);
    
    // reset previous display
    document.querySelectorAll(".text").forEach( tag => {
        tag.classList.remove('load')
    })

    await delay(500) //css fade out ^^
    document.getElementById("meaning-text").innerHTML = " ";
    document.getElementById("phrase-text").innerHTML = " ";
    document.getElementById("script-text").innerHTML = " ";

    // pre gather indexes to match meaning and phrases together
    var selectedIndexes = []
    for (let i = 0; i < setsToRead; i++) {
        selectedIndexes.push(Math.floor(Math.random() * allArrs[0].length))
    }
    
    // display and speak sets
    if(!isPaused){
        if(isMeaningFirst){
            await meaningFirst(allArrs, selectedIndexes)
        }else{
            await meaningLast(allArrs, selectedIndexes)
        }
    }

    // recursively call cycle again 
    if(!isPaused){
        await delay(delayTime) 
        updateDisplay(allArrs);
    }

};

// ================
// ACCORDION
// ================

var acc = document.getElementsByClassName("accordion");
var i;

// attach styles to all accordion bars
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = document.querySelector(`.panel.${this.id}`);
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// append prewritten text to text area
var loadBtn = document.querySelectorAll('.banner div p')
loadBtn.forEach(btn => {
    btn.addEventListener('click', () => { 
        // load only text from module selected

        var module = btn.parentElement.children[1].id
        var preloadContainer = document.querySelectorAll(`div.panel.${module} div div.preload small`)

        // add each line to text area
        preloadContainer.forEach(tag => {
            if (tag.parentElement.parentElement.id === 'meaning-container'){
                document.querySelector('textarea#paste-meaning').value += `\n${tag.innerHTML} `
                
                document.querySelector("button").disabled = false;
                canPlay = true;
            }
            if (tag.parentElement.parentElement.id === 'phrase-container'){
                document.querySelector('textarea#paste-phrase').value += `\n${tag.innerHTML} `
                
                document.querySelector("button").disabled = false;
                canPlay = true;
            }
            if (tag.parentElement.parentElement.id === 'script-container'){
                document.querySelector('textarea#paste-script').value += `\n${tag.innerHTML}`
                
                document.querySelector("button").disabled = false;
                canPlay = true;
            }
        });
    })
});
 

 





