 
// fetch request moon for current date
function getMoonPhases(){
    // https://www.icalendar37.net/lunar/api/?lang=en&month=8&year=2022&size=100%25&lightColor=white&shadeColor=black&texturize=true&LDZ=1659337200
    var rootUrl = 'https://www.icalendar37.net'
    var month = new Date().getMonth() + 1;
    var year  = new Date().getFullYear();

    var apiUrl = `${rootUrl}/lunar/api/?lang=en&month=${month}&year=${year}&size=100%25&lightColor=white&shadeColor=black&texturize=true&LDZ=1659337200`
    console.log('apiUrl ->',apiUrl)

    fetch(apiUrl)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            if(data){
                console.log("getMoonPhase Data ->",data);
                renderMoonPhases(data);
            } else {
                console.log("no data :(")
            }
        })
        .catch(function (error) {
            console.log("getMoonPhase Fetch Error ->", error)
        })
}
 
function renderMoonPhases(moon){
    var lunarDay , blankBoxes = 0
    var calendarContainer =  document.getElementById("moonCalendar")

    const isSundayFirst = false  
    if (isSundayFirst) {
        blankBoxes = 1
        moon.nameDay.unshift(moon.nameDay.pop())        
    }
    
    var emptyInitialBoxes = moon.phase[1].dayWeek + blankBoxes     
    var weekDays = moon.daysMonth
    var totalBoxes = Math.ceil((emptyInitialBoxes + weekDays) /7) * 7

    // build calendar 7day a week rows
    var html =
        '<div>' +
            '<div class="titleCalendar">' + moon.monthName + " "+ moon.year + '</div>' 
        + '</div>'
        
    for (i = 0; i < 7; i++){
        html += '<div class="nameDay">' + moon.nameDay[i] + '</div>'
    } 
    calendarContainer.innerHTML = html 

    // insert moon data into rows
    for (i = 0 ; i < totalBoxes; i++){
        var day = i - emptyInitialBoxes;
        var card = document.createElement('div')
        card.className = 'dayCard';

        if(day >= 0 && day < weekDays){
            lunarDay = day + 1
            if(moon.year ==  (new Date).getFullYear() && moon.month == (new Date).getMonth()+1 && lunarDay == (new Date).getDate()){
                card.id = 'isToday'
            }
            card.innerHTML = 
                '<div>' +
                    '<span>' + lunarDay + '</span>' +
                    '<div>' + moon.phase[lunarDay].svg +'</div>' +
                '</div>'
            if(moon.phase[lunarDay].isPhaseLimit){
                var svgUrl = "data:image/svg+xml;utf8, " + moon.phase[lunarDay].svgMini 
                card.firstChild.style.backgroundImage ='url("' + svgUrl +'")'
                card.title = moon.phase[lunarDay].phaseName  
            }
        }
        calendarContainer.appendChild(card)
    }

}

getMoonPhases()
 