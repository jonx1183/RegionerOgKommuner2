console.log("Jeg er i FetchRegioner")
const urlRegioner = "https://api.dataforsyningen.dk/regioner";

function fetchAny(url){
    console.log("url")
    return fetch(url).then((response) => response.json())
}

const ddRegioner = document.getElementById("ddRegioner");
function fillRegionDropDown(region){
    const el = document.createElement("option")
    el
}