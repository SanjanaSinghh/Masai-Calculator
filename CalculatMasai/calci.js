let sanj = document.getElementById('sanj');
buttons = document.querySelectorAll('button');
let sanjValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            sanjValue += buttonText;
            sanj.value = sanjValue;
        }
        else if (buttonText == 'C') {
            sanjValue = "";
            sanj.value = sanjValue;
        }
        else if (buttonText == '=') {
            sanj.value = eval(sanjValue);
        }
        else {
            sanjValue += buttonText;
            sanj.value = sanjValue;
        }

    })
}