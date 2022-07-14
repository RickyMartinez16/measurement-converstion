const convertButtonEl = document.getElementById("convert-btn");
const inputEl = document.getElementById("input-value");
const lengthEl = document.getElementById("length-p");
const volumeEl = document.getElementById("volume-p");
const massEl = document.getElementById("mass-p");

convertButtonEl.addEventListener("click", function(){
    console.log(inputEl.value);
    convert();
    inputEl.value = "";
})

function convert(){
    const feetToMeter = inputEl.value / 3.281;
    const meterToFeet  = inputEl.value * 3.281;
    const litersToGallons = inputEl.value * 0.264;
    const gallosnToLiters = inputEl.value / 0.264;
    const kilogramsToPounds = inputEl.value * 2.204;
    const poundsToKilograms = inputEl.value / 2.204;
    lengthEl.innerHTML = `<p> ${inputEl.value} meters = ${meterToFeet.toFixed(2)} feet | ${inputEl.value} feet = ${feetToMeter.toFixed(2)} meters </p>`
    volumeEl.innerHTML = `<p> ${inputEl.value} liters = ${litersToGallons.toFixed(2)} gallons | ${inputEl.value} gallons = ${gallosnToLiters.toFixed(2)} liters </p>`
    massEl.innerHTML = `<p> ${inputEl.value} kilograms = ${kilogramsToPounds.toFixed(2)} pounds | ${inputEl.value} pounds = ${poundsToKilograms.toFixed(2)} kilograms </p>`
}