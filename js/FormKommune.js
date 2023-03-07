document.addEventListener('DOMContentLoaded', createFormEventListener)
let formKommune;

function createFormEventListener(){
    formKommune = document.getElementById("formKommune");
    formKommune.addEventListener("submit", handleFormSubmit);
}

async function handleFormSubmit(event){
    event.preventDefault();
    const form = event.currentTarget;
    const url = form.action;
    console.log(form)
    console.log(url)
    console.log(form ===formKommune)
    try{
        const formData = new FormData(form);
        console.log(formData)
        const responseData = await postFormData(url,formData);
    }catch (error){
        alert(error.message)
        console.log(error)
    }
}

async function postFormData(urlm, formData){
    const plainFormData = Object.fromEntries(formData.entries())
    console.log(plainFormData)
}