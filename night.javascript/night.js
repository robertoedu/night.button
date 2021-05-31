
const body = document.querySelector( "body");
const mode = document.querySelector("#night");

mode.addEventListener("change", ()=>{
    body.classList.toggle("nightMode");
});