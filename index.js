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
const blankTolerance = 1/5;

const selectionListItems = document.querySelectorAll('.colorPicker li');

selectionListItems.forEach(item => {
    item.addEventListener('click', function () {
        let lowerContent = item.textContent.toLowerCase()
        let stripeNumber = item.className;
        let newStripeURL = 'url("images/' + lowerContent + 'Stripe.png")'
        console.log(newStripeURL);
        document.getElementById(stripeNumber).style.backgroundImage = (newStripeURL);
    });
});
