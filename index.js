
const TOLERANCE_VALUES = {
    brown: 1/100,
    red: 2/100,
    green: 5/1000,
    blue: 25/10000,
    purple: 1/1000,
    grey: 5/10000,
    gold: 5/100,
    silver: 1/10,
    blank: null
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

let Stripe1Value = null;
let Stripe2Value = null;
let Stripe3Value = null;
let Stripe4Value = null;
let Stripe5Value = null;
let toleranceLevel = null;

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
                stripe4Tolerance = TOLERANCE_VALUES[selectedColor]
                break;
            
            case 'fifth':
                if (selectedColor === 'blank') {
                    stripe5 = null;
                    toleranceValue = stripe4Tolerance;
                    // console.log(toleranceValue);
                } else {
                    stripe5 = resistanceValue;
                    stripe5Tolerance = TOLERANCE_VALUES[selectedColor]
                }
                break;
            
            default:
                break;
            }

            // console.log('tolerance ' + stripe4Tolerance + ' ' + stripe5Tolerance);
              
    });
});

function calculateResistance () {
    
    Stripe1Value = stripe1;
    Stripe2Value = stripe2;
    Stripe3Value = stripe3;
    Stripe4Value = stripe4;
    Stripe5Value = stripe5;


    if (stripe5 === null) {
        baseResistance = parseInt(Stripe1Value.toString() + Stripe2Value.toString()) * Math.pow(10, Stripe3Value);
        toleranceValue = stripe4Tolerance;
    }

    else {
        baseResistance = parseInt(Stripe1Value.toString() + Stripe2Value.toString() + Stripe3Value.toString()) * Math.pow(10, Stripe4Value);
        toleranceValue = stripe5Tolerance;
    }

    toleranceLevel = toleranceValue;

    resistanceMax = baseResistance + (baseResistance * toleranceValue);
    resistanceMin = baseResistance - (baseResistance * toleranceValue);
    mainResistance = baseResistance;
    // console.log(resistanceMax);
    // console.log(resistanceMin);
    // console.log(toleranceValue);
    // console.log(mainResistance);
    // console.log(resistanceMin + '< ' + mainResistance + ' < ' + resistanceMax);

    document.getElementById('resultText').innerHTML = mainResistance + ' Ω ± ' + (toleranceValue * 100) + '%';
    document.getElementById('resultText2').innerHTML = resistanceMin + ' Ω ' + '< ' + mainResistance + ' Ω ' + ' < ' + resistanceMax + ' Ω ';
    // console.log(toleranceValue);


};

document.getElementById('calculateButton').addEventListener('click', function() {
    calculateResistance();
});

