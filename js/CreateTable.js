const pbCreateTable = document.getElementById("pbCreatTable");
const tblKommune = document.getElementById("tblKommune");

function createTable(kommune){
    console.log(kommune.navn)
}

function actionCreateTable(){
    lstKommuner.forEach(createTable);
}

pbCreateTable.addEventListener('click', actionCreateTable);