// name, category, description, price

let products = [
    {
        name: 'Dirty Hippy Tots',
        category: 'Vegetarian',
        description: 'Tater tots made from brussel sprouts.',
        price: 1.00,
        img: 'images/dirtyHippyTots.jpg'
    },
    {
        name: 'Dodger dog',
        category: 'non-Vegetarian',
        description: 'Footlong hot dog from Dodger Stadium.',
        price: .30,
        img: 'images/dodgerDog.jpg'
    }

];




function pushProduct() {
    const productList = document.getElementById('productList');
    for(let i = 0; i < products.length; i++) {
        productList.innerHTML += `<li class='fairFood'>
                                        <img src='${products[i].img}'>
                                        <div class='product-name'>${products[i].name}</div>
                                        <div class='product-category'>${products[i].category}</div>
                                        <div class='product-description'>${products[i].description}</div>
                                        <div class='product-price'>${products[i].price}</div>
                                        <button>Add To Cart</button>
                                        <input type='number'></input>
                                    </li>`;
    };
}

pushProduct();

/* this holds the contents of the cart */
let cartArray = [];
/* this holds the sub total */
let subTotalDisplay = 0;
/* function for sales tax */
const calculateSalesTax = (totalBeforeTaxes) => {
    let totalAfterTaxes = totalBeforeTaxes * 1.06;
    return totalAfterTaxes;
}

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
        
    