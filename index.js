
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

let toleranceValue = null;
let resistanceMax = null;
let resistanceMin = null;
let mainResistance = null;

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
        toleranceValue = stripe4Tolerance;
        resistanceMax = baseResistance + (baseResistance * toleranceValue);
        resistanceMin = baseResistance - (baseResistance * toleranceValue);
        mainResistance = baseResistance;
        console.log(mainResistance);
        console.log(resistanceMin + '< ' + mainResistance + ' < ' + resistanceMax);
    }

    else {
        baseResistance = parseInt(stripe1.toString() + stripe2.toString() + stripe3.toString()) * Math.pow(10, stripe4);
        toleranceValue = stripe5Tolerance;
        resistanceMax = baseResistance + (baseResistance * toleranceValue);
        resistanceMin = baseResistance - (baseResistance * toleranceValue);
        mainResistance = baseResistance;
        console.log(mainResistance);
        console.log(resistanceMin + '< ' + mainResistance + ' < ' + resistanceMax);
    }

    document.getElementById('resultText').innerHTML = mainResistance + ' Ω ± ' + (toleranceValue * 100) + '%';

    let previousStripe1Value = stripe1;
    let previousStripe2Value = stripe2;
    let previousStripe3Value = stripe3;
    let previousStripe4Value = stripe4;
    let previousStripe5Value = stripe5;
    let previousTolerance = toleranceValue;
};

document.getElementById('calculateButton').addEventListener('click', function() {
    calculateResistance();
});

