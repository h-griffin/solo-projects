let stageHeight;
let stageWidth;
let groupedSpotifyData; //all data grouped from data.js
let groupedSpotifyDataTitle; 

$(function () {
    stageHeight = $('#renderer').innerHeight();
    stageWidth = $('#renderer').innerWidth();

    prepareData();
    drawMap();
    // popMap();
    // rapMap();
    //createElements();
   // $('#toggleViewButton').click(toggleView);
});


function prepareData() {
    groupedSpotifyData = gmynd.groupData(spotifyData, 'topYear');
}

//COLOR OF THE SONGS BY GENRE
let colorgroups = {
    pop: '#4D0298', //lila
    dance: '#F20587', //Pink
    edm: '#EAF205',
    house: '#06EFF3',
    rap: '#16558C',
    hiphop: '#BC6300', //orangeundbraun
    rAndb: '#ffffff',
    latin: '#F2B705',
    reggae: '#00B026', //grün
    country: '#D95204',
    indie: '#9900FF',
    rock: '#0015FF', //blau
    metal: '#6e706a'
};

let bpm = {
    
} 


function drawMap() {

    let rectYearHeight = 30;
    let rectTitleHeight = 15;
    let yearCounter = 0;
    let dotwidth = 10;


    Object.entries(groupedSpotifyData).forEach((yearGroupElements, indexYears) => {

        let yearGroupTitles = yearGroupElements[1];

        let left = (stageWidth / Object.entries(groupedSpotifyData).length) * indexYears;

        indexSpalten = 0
        maxIndexSpalten = 3
        indexZeilen = 0
        console.log(yearGroupTitles);
        yearGroupTitles.forEach((yearGroupElement, indexTitle) => {

            let color = colorgroups[yearGroupElement.topGenre];
            let beats = bpm[yearGroupElement.bpm];



            if (indexTitle == 99) {
                yearCounter++;
                indexSpalten = 0 //column
                indexZeilen = 0 //row
            }

            let left = 300 + yearCounter * 110 + indexSpalten * 2 * dotwidth;
            let top = 750 - indexZeilen * 2 * dotwidth;
    
            indexSpalten++;
            if (indexSpalten >= maxIndexSpalten) {
                indexSpalten = 0;
                indexZeilen++;
            }


            let dotTitle = $('<div></div>');
            dotTitle.addClass("title");

            //in this part I colored all songs by its genre
            dotTitle.css({
                'position': 'absolute',
                'height': rectTitleHeight,
                'width': rectTitleHeight,
                'background-color': color,
                'left': left,
                'top': top,
                'border-radius': '50%',

                'animation-name': 'pulse-animation',
                'animation-duration':  '1.'+yearGroupElement.bpm+'s',   // speed based on bpm
                'animation-iteration-count': 'infinite', 
            });

            // add genre as a classname to show/hide later when filtering
            dotTitle.addClass(yearGroupElement.topGenre);

            dotTitle.addClass("hover");

            dotTitle.mouseover(() => {
                dotTitle.addClass("hover");

                $("#hoverLabel").text(yearGroupElement.title);
                $("#hoverLabel").addClass("active");

                let position = dotTitle.position();
                $("#hoverLabel").css({
                    "left": position.left + dotTitle.width() + 10,
                    "top": position.top
                });
            });

            dotTitle.click(() => {
                $(".clicked").removeClass("clicked");
                dotTitle.addClass("clicked");

                $("#clickLabel").text(yearGroupElement.artist + ": " + yearGroupElement.topGenre);
                $("#clickLabelbpm").text(yearGroupElement.bpm + ": " + yearGroupElement.yearReleased);

                $("#clickLabel").addClass("active");
                $("#hoverLabel").removeClass("active");

                let position = dotTitle.position();

                $("#clickLabel").css({
                    "left": position.left + dot.width() + 10,
                    // "left": position.left + dotTitle.width() + 10,
                    "top": position.top
                });
            });


            // $('#renderer>div:nth(' + (yearCounter + 1) + ')').append(dotTitle);

            $('#renderer').append(dotTitle);

        });

        //var Year = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019']
        $('#renderer').append();


    });

}

function drawView(){
    console.log ("Draw View");
}

function popMap(){

    
}

// get classname passed and show/hide - because map is aldready built/displayed no need to filter and rebuild
function filterGenre(genre) {

    // if any dots are hidden already, reset and show all
    if ($(".title").not("."+genre).is(":hidden")) {
        $(".title").show()
    } else {
        // hide all 
        $(".title").hide()

        // show passed/clicked
        $("."+genre).show()
    }
}

//TOGGLE FUNCTION 
// function toggleView() {
//     //$("#clickLabel").removeClass("active");
//     alert("test");
// }
