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
