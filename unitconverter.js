
let inputValue = document.getElementById('input');

let outputValue = document.getElementById('output');

let conversionList = document.getElementById('conversion-list');

conversionList.addEventListener("change", converter)


function converter() {

    switch (conversionList.value) {
        case "1": inputValue.oninput = changeCelsiusToFarenheit;
            break;

        case "2": inputValue.oninput = changeFarenheitToCelsius;
            break;

        case "3": inputValue.oninput = changeKmtoM;
            break;

        case "4": inputValue.oninput = changeMtoKm;
            break;

        case "5": inputValue.oninput = changeCelsiusToKelvin;
            break;


        case "6": inputValue.oninput = changeKelvinToCelsius;
            break;

        default: inputValue.oninput = defaultOutput;
            break;

    }

}


changeCelsiusToFarenheit()

changeFarenheitToCelsius()

changeKmtoM()

changeMtoKm()

changeCelsiusToKelvin()

changeKelvinToCelsius();

defaultOutput()


function changeCelsiusToFarenheit() {
    outputValue.innerText = (inputValue.value - 32) * 5/9
}


function changeFarenheitToCelsius() {
    outputValue.innerText = (inputValue.value * 9/5) + 32
}


function changeKmtoM() {
    outputValue.innerText = (inputValue.value * 1000)
}


function changeMtoKm() {
    outputValue.innerText = (inputValue.value * 0.001)
}


function changeCelsiusToKelvin() {
    outputValue.innerText = (Number(inputValue.value) + 273)
}


function changeKelvinToCelsius() {
    outputValue.innerText = (Number(inputValue.value) + 273)
}


function defaultOutput() {
    outputValue.innerText = 0;
}




