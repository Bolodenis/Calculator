const calculator = document.querySelector(".calculator");

function field(input) {
    calculator.value += input;
}

function clearField() {
    calculator.value = 0;
}

function operation(input) {
    calculator.value += input;
}
function del(){
    calculator.value = calculator.value.slice(0, -1)
}

function submit() {
    try {
        calculator.value = eval(calculator.value);
    } catch (error) {
        calculator.value = "Math error";
    }
}
