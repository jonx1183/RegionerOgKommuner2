console.log("Jeg er i FetchRegioner")
const urlRegioner = "https://api.dataforsyningen.dk/regioner";
const urlRegion = "http://localhost:8080/region"

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

regionList =[]
async function fetchRegioner(){
    regionList = await fetchAny(urlRegioner);
    console.log(regionList)
    regionList.forEach(fillRegionDropDown)
}

let body ={}

const postRegionRequest = {
    method: "post",
    headers:{
        "content-type": "application/json"
    },
    body: body
}

function postRegioner(region){
    body = JSON.stringify(region)
    console.log(body)
    postRegionRequest.body = body;
    fetch(urlRegion,postRegionRequest).catch((error) => console.log(error));
}

function actionPostAllRegioner(){
    if(regionList){
        console.log("Post alle regioner")
        regionList.forEach(postRegioner)
    }else{
        console.log("tryk på fetch region")
    }
}

const pbFetchRegioner = document.getElementById("pbFetchRegioner");
pbFetchRegioner.addEventListener('click', fetchRegioner);
const pbPostRegioner = document.getElementById("pbPostRegioner")
pbPostRegioner.addEventListener('click', actionPostAllRegioner)
