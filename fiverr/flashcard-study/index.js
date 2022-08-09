 
// get reference to text areas
var meaning = document.getElementById("paste-meaning")
var phrase = document.getElementById("paste-phrase")
var script = document.getElementById("paste-script")

document.querySelector("button").addEventListener("click", () => {start()});

var currentIndex = 0;

//add oninput listener to all text areas
document.querySelectorAll("textarea").forEach( textarea => {
    textarea.addEventListener("change", () => {canStart()})
})

// disable start button when all fields are filled
function canStart() {
    console.log("== canStart() ==")
    if (meaning.value && phrase.value && script.value){
        document.querySelector("button").disabled = false
    } 
}

// start cycle display
async function start() {
    // remove listener for start button activation
    document.querySelectorAll("textarea").forEach( textarea => {
        textarea.removeEventListener("change", () => {canStart()})
    })

    var allArrs = []
    // split all textarea inputs by white space (single words)
    document.querySelectorAll("textarea").forEach( textarea => {
        allArrs.push(textarea.value.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } ));
    })

    //skip first delay
    document.getElementById("meaning-text").innerHTML = allArrs[0][0];
    document.getElementById("phrase-text").innerHTML = allArrs[1][0];
    document.getElementById("script-text").innerHTML = allArrs[2][0];

    // cycle all displays - 5 seconds
    var displayInterval = setInterval(() => {updateDisplay(displayInterval, allArrs)}, 5000);
}

var updateDisplay = function(displayInterval ,allArrs){
    console.log("== setDisplays() ==")

    if(currentIndex >= allArrs[0].length -1){
        // clearInterval(displayInterval); // end loop

        currentIndex = 0; // restart list
    } else{
        currentIndex++
    }

    document.getElementById("meaning-text").innerHTML = allArrs[0][currentIndex];
    document.getElementById("phrase-text").innerHTML = allArrs[1][currentIndex];
    document.getElementById("script-text").innerHTML = allArrs[2][currentIndex];

};
