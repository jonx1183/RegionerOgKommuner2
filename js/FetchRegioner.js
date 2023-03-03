console.log("Jeg er i FetchRegioner")
const urlRegioner = "https://api.dataforsyningen.dk/regioner";

function fetchAny(url){
    console.log("url")
    return fetch(url).then((response) => response.json())
}

const ddRegioner = document.getElementById("ddRegioner");
function fillRegionDropDown(region){
    const el = document.createElement("option")
    el.textContent = region.navn;
    el.value = region.kode;
    el.region = region;
    ddRegioner.appendChild(el);
}

async function fetchRegioner(){
    const regionList = await fetchAny(urlRegioner);
    console.log(regionList)
    regionList.forEach(fillRegionDropDown)
}

const pbFetchRegioner = document.getElementById("pbFetchRegioner");
pbFetchRegioner.addEventListener('click', fetchRegioner);
