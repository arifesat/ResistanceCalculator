const blackValue = 0;
const brownValue = 1;
const redValue = 2;
const orangeValue = 3;
const yellowValue = 4;
const greenValue = 5;
const blueValue = 6;
const purpleValue = 7;
const greyValue = 8;
const whiteValue = 9;
const goldValue = -1;
const silverValue = -2;

const brownTolerance = 1/100;
const redTolerance = 2/100;
const greenTolerance = 5/1000;
const blueTolerance = 25/10000;
const purpleTolerance = 1/1000;
const greyTolerance = 5/10000;
const goldTolerance = 5/100;
const silverTolerance = 1/10;

let stripe1 = 0;
let stripe2 = 0;
let stripe3 = 0;
let stripe4 = 0;
let stripe5 = 0;

const selectionListItems = document.querySelectorAll('.colorPicker li');

selectionListItems.forEach(item => {
    item.addEventListener('click', function () {
        let lowerContent = item.textContent.toLowerCase()
        let stripeNumber = item.className;
        let newStripeURL = 'url("images/' + lowerContent + 'Stripe.png")'
        document.getElementById(stripeNumber).style.backgroundImage = (newStripeURL);
        let resistanceValue = item.getAttribute('value')
        // console.log(resistanceValue);
        // console.log(stripeNumber);

        switch(stripeNumber) {
            case 'first':
                stripe1 = resistanceValue;
                break;
                
            case 'second':
                stripe2 = resistanceValue;
                break;
            
            case 'third':
                stripe3 = resistanceValue;
                break;

            case 'fourth':
                stripe4 = resistanceValue;
                break;
            
            case 'fifth':
                stripe5 = resistanceValue;
                break;
            
            default:
                break;
            }
            
    });
});

function calculateResistance () {
    
};