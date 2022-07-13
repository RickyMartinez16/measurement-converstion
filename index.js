const convertButtonEl = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-value");
const lengthEl = document.getElementById("length-p");

convertButtonEl.addEventListener("click", function(){
    console.log(inputEl.value);
    convert();
    lengthEl.innerHTML = `<p> ${inputEl.value} meters = 0.000 feet | 0 feet = 0.000 meters </p>`
    inputEl.value = "";
})

function convert(){
    let feetMeter = inputEl.value * 3.281;
    console.log(feetMeter)
}