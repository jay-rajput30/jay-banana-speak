const btn = document.querySelector(".btn");
const txtArea = document.querySelector("#txtArea");
const output = document.querySelector(".output");

btn.addEventListener('click', ()=>{
 output.innerText = txtArea.value;
})
