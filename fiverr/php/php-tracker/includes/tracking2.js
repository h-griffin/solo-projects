start()

function getData () {
    let url = "https://results.eventtiming.com.au/tdu-2023/includes/data-simulate.json" //reads json file
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
          if(data.FrontofRace.active == "TRUE"){
			  document.getElementById('tracking_stats').style.display = '';
		  try{
                document.getElementById("distanceToGo").innerHTML = data.FrontofRace.distanceToGo.toFixed(1)
            }
            catch{
                document.getElementById("distanceToGo").innerHTML = ''
            }
            try{
                document.getElementById("ETA").innerHTML = data.FrontofRace.ETA
            }
            catch{
                document.getElementById("ETA").innerHTML = ''
            }
            try{
				if (data.Peloton.pelotonTimeGap == ""){
					document.getElementById("Gap").innerHTML = 0
					}
				else{document.getElementById("Gap").innerHTML = data.Peloton.pelotonTimeGap}

				}
				catch{
                document.getElementById("Gap").innerHTML = ''
            }
		  } else {
			document.getElementById('tracking_stats').style.display = 'none';
		}
		});

}

function start(){
    getData()
    blah()
}

function blah (){
    setInterval(getData, 10000)
}