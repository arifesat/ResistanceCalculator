
const TOLERANCE_VALUES = {
    brown: 1/100,
    red: 2/100,
    green: 5/1000,
    blue: 25/10000,
    violet: 1/1000,
    gray: 5/10000,
    gold: 5/100,
    silver: 1/10,
  };

let stripe1 = null;
let stripe2 = null;
let stripe3 = null;
let stripe4 = null;
let stripe5 = null;

let stripe4Tolerance = null;
let stripe5Tolerance = null;

const selectionListItems = document.querySelectorAll('.colorPicker li');

selectionListItems.forEach(item => {
    item.addEventListener('click', function () {
        let selectedColor = item.textContent.toLowerCase()
        let stripeNumber = item.className;
        let newStripeURL = 'url("images/' + selectedColor + 'Stripe.png")'
        document.getElementById(stripeNumber).style.backgroundImage = (newStripeURL);
        let resistanceValue = item.getAttribute('value')
        // console.log(resistanceValue);
        // console.log(stripeNumber);

        stripe4Tolerance = TOLERANCE_VALUES[selectedColor]
        stripe5Tolerance = TOLERANCE_VALUES[selectedColor]

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
    
    if (stripe5 === null) {
        baseResistance = parseInt(stripe1.toString() + stripe2.toString()) * Math.pow(10, stripe3);
        let toleranceValue = stripe4Tolerance;
        let resistanceMax = baseResistance + (baseResistance * toleranceValue);
        let resistanceMin = baseResistance - (baseResistance * toleranceValue);
        let mainResistance = baseResistance;
        console.log(mainResistance);
        console.log(resistanceMin + '< ' + mainResistance + ' < ' + resistanceMax);
    }

    else {
        baseResistance = parseInt(stripe1.toString() + stripe2.toString() + stripe3.toString()) * Math.pow(10, stripe4);
        let toleranceValue = stripe5Tolerance;
        let resistanceMax = baseResistance + (baseResistance * toleranceValue);
        let resistanceMin = baseResistance - (baseResistance * toleranceValue);
        let mainResistance = baseResistance;
        console.log(mainResistance);
        console.log(resistanceMin + '< ' + mainResistance + ' < ' + resistanceMax);
    }

    
};

document.getElementById('calculateButton').addEventListener('click', function() {
    calculateResistance();
});

