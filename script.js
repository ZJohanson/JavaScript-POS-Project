// name, category, description, price

let products = [
    {
        name: 'Dodger Dog',
        category: 'non-vegetarian',
        description: 'An extra long hot dog, with all the stuff.',
        price: .30
    },
    {
        name: 'Beaver Burger',
        category: 'Vegetarian',
        description: 'A lettuce burger with nothing.',
        price: .30
    },
    {
        name: 'Cat Food',
        category: 'non-vegetarian',
        description: 'The fanciest of feasts',
        price: .30,
        img: 'imgName.jpg'
    }
];




function pushProduct() {
    const productList = document.getElementById('productList');
    for(let i = 0; i < products.length; i++) {
        productList.innerHTML += `<li class='myLI'><div class='product-name'>${products[i].name}</div></li>`;
    };
}

pushProduct();
//Each product needs an add to cart button 

//Give the subtotal, sales tax, total
    //MI sales tax = 6%
    //add up price of property all products in cart = subtotal
    //multiply subtotal by 0.06 to get sales tax
    //total = subtotal + sales tax 

//if the user is paying in cash, ask for the amount tendered and provide change
    //use ChangeHandler function from testing lab?
        //specific denomination of change (x quarters, y pennies, etc) not needed
    //create change function with parameter 'cashTendered'
        //change is 'cashTendered' - total
        //check if cashTendered is greater than or equal to total
            //isPaymentSufficient function from testing lab?

//If the user is paying with a card, ask for the card number, expiration, and CVV
    //If 'pay by card' option is selected/clicked/checked, then 
        //Take user input for card number
        //input forms?
    //stretch goal: validation for credit card numbers
        //makes sure number is 16 digits, expiration is valid date/ 4 digits, CVV is 3 digits
    //No change necessary, amount tendered should equal the total exactly
    
//Provide a receipt for the payment which includes the item(s) bought, the subtotal, total, and anything else of interest
    //Generate PDF?
    //Generate new html page?
        //include labels for items, total, subtotal, etc -- don't just list the values
    //Style up the receipt so it looks nice? If we're thinking checkout/order summary page vs. thermal paper receipt 
        
    