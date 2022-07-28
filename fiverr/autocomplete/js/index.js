// city state country

const searchCountry = document.getElementById("search-country");
const searchState = document.getElementById("search-state");
const searchCity = document.getElementById("search-city");

const countryMatchList = document.getElementById("country-match-list")
const stateMatchList = document.getElementById("state-match-list")
const cityMatchList = document.getElementById("city-match-list")

const style = `
display: block;
position: absolute;
z-index: 100;
width: 100%;
background-color:  rgb(221, 205, 238);
`
countryMatchList.style = stateMatchList.style = cityMatchList.style = style;


let currentLocation ={
    name : '',
    states : [],
    state: '',
    cities: []
};

// --- SEARCH ---
const searchCountries = async searchText => {
    const res = await fetch('../data/countries_states_cities.json');
    const countries = await res.json();

    let matches = countries.filter(country => {
        const regex = new RegExp(`^${searchText}`, "gi");
        return country.name.match(regex) || country.iso3.match(regex);
    })

    if(searchText.length === 0){
        matches = [];
        countryMatchList.innerHTML = '';
    }
    outputCountryHtml(matches);
}
const searchStates = async searchText => {
    states = currentLocation.states;

    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, "gi");
        return state.name.match(regex) || state.state_code.match(regex);
    })

    if(searchText.length === 0){
        matches = [];
        stateMatchList.innerHTML = '';
    }
    outputStateHtml(matches);
}
const searchCities = async searchText => {
    cities = currentLocation.cities
    let matches = cities.filter(city => {
        const regex = new RegExp(`^${searchText}`, "gi");
        return city.name.match(regex);
    })

    if(searchText.length === 0){
        matches = [];
        stateMatchList.innerHTML = '';
    }
    outputCityHtml(matches);
}

// --- OUTPUT HTML ---
const outputCountryHtml = matches => {
    if(matches.length > 0){
        countryMatchList.innerHTML = "";
        const html = matches.map(match => {

            countryMatchList.style.marginTop = "60px"

            var div = document.createElement('div');
            div.setAttribute('id', `${match.id}`);
            div.style.cursor = "pointer";
            // div.style.backgroundColor = "grey";
            // div.style.position = "absolute";
            div.style.zIndex = 100;
            var h4 = document.createElement('h4')
            h4.innerText = `${match.name} (${match.iso3}), ${match.capital} - ${match.region}`
            
            // container.appendChild(div);
            div.appendChild(h4);
            

            div.addEventListener('click', () => {autofillCountry(match)} )

            countryMatchList.append(div);
        })
    }
}
const outputStateHtml = matches => {
    if(matches.length > 0){
        stateMatchList.innerHTML = "";
        const html = matches.forEach(match => {

            stateMatchList.style.marginTop = "150px"

            var div = document.createElement('div');
            div.setAttribute('id', `${match.id}`);
            div.style.cursor = "pointer";
            var h4 = document.createElement('h4')
            h4.innerText = `${match.name} (${match.state_code})`
            div.appendChild(h4);
            

            div.addEventListener('click', () => {autofillState(match)} )

            stateMatchList.append(div);
        })
    }
}
const outputCityHtml = matches => {
    if(matches.length > 0){
        cityMatchList.innerHTML = "";
        const html = matches.forEach(match => {

            cityMatchList.style.marginTop = "235px"



            var div = document.createElement('div');
            div.setAttribute('id', `${match.id}`);
            div.style.cursor = "pointer";
            var h4 = document.createElement('h4')
            h4.innerText = `${match.name}`
            div.appendChild(h4);
            

            div.addEventListener('click', () => {autofillCity(match)} )

            cityMatchList.append(div);
        })
    }
}

// --- AUTO FILL ---
const autofillCountry = match => {
    searchCountry.value = match.name;
    countryMatchList.innerHTML = '';
    currentLocation.states = match.states;
    // enable state
    searchState.disabled = false;
    searchState.focus();
}
const autofillState = match => {
    searchState.value = match.name;
    stateMatchList.innerHTML = '';
    currentLocation.cities = match.cities;
    // enable cities
    searchCity.disabled = false;
    searchCity.focus();
}
const autofillCity = match => {
    searchCity.value = match.name;
    cityMatchList.innerHTML = '';
}

searchCountry.addEventListener("input", () => searchCountries(searchCountry.value));
searchState.addEventListener("input", () => searchStates(searchState.value));
searchCity.addEventListener("input", () => searchCities(searchCity.value));

