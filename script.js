// name, category, description, price

let products = [
    {
        name: 'Dirty Hippy Tots',
        category: 'Vegetarian',
        description: 'Tater tots made from brussel sprouts.',
        price: 1.00,
        img: 'images/dirtyHippyTots.jpg',
        count: 0
    },
    {
        name: 'Dodger dog',
        category: 'Non-Vegetarian',
        description: 'Footlong hot dog from Dodger Stadium.',
        price: .30,
        img: 'images/dodgerDog.jpg',
        count: 0
    },
    {
        name: 'Ultimate Banana Split',
        category: 'Vegetarian',
        description: 'A banana split with the maximum amount of ice cream legally allowed by the state of Wisconsin.',
        price: 4.00,
        img: 'images/bananaSplit.jpg',
        count: 0
    },
    {
        name: 'Backyard BBQ Burrito',
        category: 'Non-Vegetarian',
        description: 'Massive burrito stuffed with everything a backyard barbeque would have, hold the grill.',
        price: 2.00,
        img: 'images/bbqBurrito.jpg',
        count: 0
    },
    {
        name: 'Frites Charcuterie Board',
        category: 'Vegetarian',
        description: 'Charcuterie board loaded with various fries and dipping sauces.',
        price: 1.00,
        img: 'images/fryBoard.jpg',
        count: 0
    },
    {
        name: 'Pork Belly Bun',
        category: 'Non-Vegetarian',
        description: 'Two slices of pork belly, slow-cooked in dark soy sauce, tucked inside a steamed bun with romaine lettuce and a flat-leaf parsley garnish.',
        price: 3.00,
        img: 'images/braisedPorkBellyBun.png'
    },
    {
        name: 'Massive Margarita',
        category: 'Non-Vegetarian',
        description: 'This massive margarita is more than just a drink, it\'s your whole meal.',
        price: 8.00,
        img: 'images/MassiveMargarita.jpg',
        count: 0,
    },
    {
        name: 'Loaded Shake',
        category: 'Non-Vegetarian',
        description: 'Ignore the calories and indulge yourself in this shake, loaded with tons of our favorite sweets.',
        price: 7.00,
        img: 'images/LoadedShake.png',
        count: 0,
    },
    {
        name: 'Burger Tower',
        category: 'Non-Vegetarian',
        description: 'A gigantic burger with twelve patties and enough cheese to make Wisconsin proud',
        price: 15.00,
        img: 'images/burgertower.jpg',
        count: 0,

    },
    {
        name: 'Krispy Kreme Sloppy Joe',
        category: 'Non-Vegetarian',
        description: 'a deep-fried, beef-based, cheddar-cheese creation, served on two halves of glazed donut',
        price: 15.00,
        img: 'images/sloppyjoe.jpg',
        count: 0,

    }
];

// Push Products from object literals into index.html page
function pushProduct() {
    const productList = document.getElementById('productList');
    for(let i = 0; i < products.length; i++) {
        productList.innerHTML += `<li class='fairFood ${products[i].category}'>
        <img src='${products[i].img}'>
        <div class='product-name'>${products[i].name}</div>
        <div class='product-category'>${products[i].category}</div>
        <div class='product-description'>${products[i].description}</div>
        <div class='product-price'>$${products[i].price.toFixed(2)}</div>
        <button class="addToCart" type='submit' value='${i}'>Add To Cart</button>
        </li>`;
    };
    // document.querySelectorAll('.addToCart').forEach(element => {
    //     element.addEventListener('click', listener);
    // })
    // function listener(event) {
    //     console.log(event.target.value);
    // }
};

pushProduct();

// Add to Cart 
let cartArray = [];
let cart = document.getElementById('cartArray');
// increase count property on each product
document.getElementById('productList').addEventListener('click', event => {
    if(event.target !== event.currentTarget) {
        let index = event.target.value;
        products[index].count++;
        cartArray.push(products[index]);
    }
    cart.innerText = '';
    products.forEach(obj => {
        if(obj.count > 0) {
            cart.innerText += `${obj.name} QTY:  ${obj.count} `
        }
    })
    console.log(cartArray);
});

// Sort food by category
const allFood = document.querySelectorAll('.fairFood');
const vegetarian = document.querySelectorAll('.Vegetarian');
const nonVeg = document.querySelectorAll('.Non-Vegetarian');

document.getElementById('allFoodBtn').addEventListener('click', function(){
    allFood.forEach(element => element.classList.remove('push-off-screen'))
});

document.getElementById('vegBtn').addEventListener('click', function(){
    vegetarian.forEach(element => element.classList.remove('push-off-screen'))
    nonVeg.forEach(element => element.classList.add('push-off-screen'))
});

document.getElementById('nonVegBtn').addEventListener('click', function(){
    vegetarian.forEach(element => element.classList.add('push-off-screen'))
    nonVeg.forEach(element => element.classList.remove('push-off-screen'))
});

// /* this holds the sub total */
// let subTotalDisplay = 0;
// /* function for sales tax */
// const calculateSalesTax = (totalBeforeTaxes) => {
//     let totalAfterTaxes = totalBeforeTaxes * 1.06;
//     return totalAfterTaxes;
// }


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