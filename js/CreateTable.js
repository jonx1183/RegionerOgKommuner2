const pbCreateTable = document.getElementById("pbCreatTable");
const tblKommune = document.getElementById("tblKommune");

function createTable(kommune){
    console.log(kommune.navn)

    if(!kommune.kode) return;

    let cellCount = 0;
    let rowCount = tblKommune.rows.length;
    let row = tblKommune.insertRow(rowCount);
    let cell = tblKommune.insertCell(cellCount++);
    cell.innerHTML = kommune.kode;

    cell = row.insertCell(cellCount++);
    cell.innerHTML = kommune.navn;

    cell = row.insertCell(cellCount++);
    cell.innerHTML = kommune.region.navn;
}

function actionCreateTable(){
    lstKommuner.forEach(createTable);
}

pbCreateTable.addEventListener('click', actionCreateTable);