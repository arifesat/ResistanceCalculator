const selectionListItems = document.querySelectorAll('.colorPicker li');

selectionListItems.forEach(item => {
    item.addEventListener('click', function () {
        let lowerContent = item.textContent.toLowerCase()
        console.log(`You selected: ${lowerContent}`);
        item.parentElement.parentElement.parentElement.style.backgroundImage = 'url("images/"' + lowerContent + '"Stripe.png")';
        console.log(item.parentElement.parentElement.parentElement.style.backgroundImage)
        console.log(item.parentElement.parentElement.parentElement.className)
        console.log("images/" + lowerContent + "Stripe.png");
    });
});
