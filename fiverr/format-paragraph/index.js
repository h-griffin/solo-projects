
document.addEventListener('paste', (e) => {
    e.preventDefault();
    let pastedText = ''
    if (e.clipboardData && e.clipboardData.getData) {
        pastedText = e.clipboardData.getData('text/html');
    }
    document.getElementById('paste').innerHTML = pastedText

});

function reset(){
    window.location.reload()
}

function sync()
{
  var n1 = document.getElementById('paste');
  var n2 = document.getElementById('copy');
  n2.innerHTML = n1.innerHTML;
}

function format() {
    sync();

    var copyElParent  = document.getElementById('copy');

    var elements = ['span', 'ul', ' li'];
    var children = copyElParent.getElementsByTagName("*");
    for (var i = 0; i < children.length; i++) {

        if (children[i].tagName == "SPAN" ){
            replace("span", "a");
        } if (children[i].tagName == "UL" ){
            replace("ul", "a");
        } if (children[i].tagName == "LI" ){
            replace("li", "a");
        } if (children[i].tagName == "P" ){
            children[i].style.lineHeight = 1.38;
        }
    }
  }

function replace(oldtag, newtag){

    var copyElParent  = document.getElementById('copy');

    var oldEl = copyElParent.getElementsByTagName(oldtag)[0];

    if (window.getComputedStyle(oldEl).fontWeight == 700){
        var newEl = document.createElement(newtag);
        newEl.style.fontWeight = 700;
        newEl.style.lineHeight = 1.38;
        newEl.style.color = "inherit";
    } else {
        var newEl = document.createElement(newtag);
        newEl.style.lineHeight = 1.38;
        newEl.style.color = "inherit";
    }


    newEl.innerHTML = oldEl.innerHTML;

    oldEl.parentNode.replaceChild(newEl, oldEl);
}

// https://jsfiddle.net/g602dcny/


