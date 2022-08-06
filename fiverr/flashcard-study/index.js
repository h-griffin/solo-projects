




// check input fields
// read input fields
// parse input fields
// 3 arrays
// cycle display at matching indexes

var meaning = document.getElementById("paste-meaning")
var phrase = document.getElementById("paste-phrase")
var script = document.getElementById("paste-script")

document.querySelector("button").addEventListener("click", () => {start()});

document.querySelectorAll("textarea").forEach( textarea => {
    textarea.addEventListener("input", () => {canStart()})
})

function canStart() {
    console.log("== canStart() ==")
    if (meaning.value && phrase.value && script.value){
        document.querySelector("button").disabled = false
    } 
}



function start() {
    console.log("== start() ==")
    console.log(meaning.value, phrase.value, script.value)

    var allArrs = []

    document.querySelectorAll("textarea").forEach( textarea => {
        allArrs.push(textarea.value.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } ));
    })

    console.log(allArrs)

    for(var i = 0; i < allArrs.length; i++){
        document.getElementById("display-meaning").innerHTML = allArrs[0][i].value;
        document.getElementById("display-meaning").innerHTML = allArrs[1][i].value;
        document.getElementById("display-meaning").innerHTML = allArrs[2][i].value;
    }
    
}