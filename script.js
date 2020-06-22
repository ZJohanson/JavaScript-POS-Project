// name, category, description, price
let products = [
    {
        name: 'Dirty Hippy Tots',
        category: 'Vegetarian',
        description: 'Tater tots made from Brussels sprouts.',
        price: 1.00,
        img: 'images/dirtyHippyTots.jpg',
        count: 0
    },
    {
        name: 'Dodger Dog',
        category: 'Non-Vegetarian',
        description: 'A ballpark classic. Foot-long hot dog from Dodger Stadium.',
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
        img: 'images/braisedPorkBellyBun.png',
        count: 0
    },
    {
        name: 'Shanghai Scallion Pancake',
        category: 'Vegetarian',
        description: 'Crispy, flaky, chewy Chinese flatbread filled with green onions. Served with dipping sauce.',
        price: 1.50,
        img: 'images/scallionPancake.jpg',
        count: 0
    },
    {
        name: 'Giant Chicken Cutlet',
        category: 'Non-Vegetarian', 
        description: 'A night market classic from the streets of Taiwan. A massive chicken breast cutlet is pounded, marinated, breaded in sweet potato flour, deep-fried, and seasoned with a house blend of salt and pepper powder',
        price: 4.00,
        img: 'images/giantChickenCutlet.png',
        count: 0
    },
    {
        name: 'Massive Margarita',
        category: 'Non-Vegetarian',
        description: 'This massive margarita is more than just a drink, it\'s your whole meal.',
        price: 8.00,
        img: 'images/MassiveMargarita.jpg',
        count: 0
    },
    {
        name: 'Loaded Shake',
        category: 'Vegetarian',
        description: 'Ignore the calories and indulge yourself in this shake, loaded with tons of our favorite sweets.',
        price: 7.00,
        img: 'images/LoadedShake.png',
        count: 0
    },
    {
        name: 'Burger Tower',
        category: 'Non-Vegetarian',
        description: 'A gigantic burger with twelve patties and enough cheese to make Wisconsin proud.',
        price: 15.00,
        img: 'images/burgertower.jpg',
        count: 0
    },
    {
        name: 'Krispy Kreme Sloppy Joe',
        category: 'Non-Vegetarian',
        description: 'A deep-fried, beef-based, cheddar-cheese creation, served on two halves of glazed donut.',
        price: 15.00,
        img: 'images/sloppyjoe.jpg',
        count: 0
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
        <button class="removeFromCart" type='submit' value='${i}'>Remove From Cart</button>
        </li>`;
    };
};

pushProduct();

// Add and remove products in Cart 
let cartArray = [];
const cart = document.getElementById('cartArray');
const total = document.getElementById('total');
// increase count property on each product
document.getElementById('productList').addEventListener('click', event => {
    if(event.target.className === 'addToCart') {
        let index = event.target.value;
        products[index].count++;
        cartArray.push(products[index]);
    }
    if(event.target.className === 'removeFromCart') {
        let index = event.target.value;
        while(products[index].count > 0) { products[index].count--; }
        cartArray.splice(products[index], 1);
    }
    cart.innerText = '';
    total.innerText = '';
    products.forEach(obj => {
        if(obj.count > 0) {
            cart.innerHTML += `${obj.name} QTY:  ${obj.count} `;
        }
    })
    total.innerText = `Total: $${(subtotalPlusTax(products)).toFixed(2)}`;
});

// Get subtotal and convert to post-tax Total
function subtotalPlusTax(array) {
    let subtotal = 0;
    for(let obj of array) {
        subtotal += obj.price * obj.count
    }
    return subtotal * 1.06;
}

// Sort food by category

const categorySelection = () => document.getElementById('category');
const addClass = elements => elements.forEach(element => element.classList.add('push-off-screen'));
const removeClass = elements => elements.forEach(element => element.classList.remove('push-off-screen'));

categorySelection().addEventListener('click', function(event){
    const selection = event.target.value;
    const allFood = document.querySelectorAll('.fairFood');
    const vegetarian = document.querySelectorAll('.Vegetarian');
    const nonVeg = document.querySelectorAll('.Non-Vegetarian');
    if (event.target.tagName === 'BUTTON') {
        if (selection === 'allFood') {
            removeClass(allFood);
        } else if (selection === 'vegetarian') {
            addClass(nonVeg);
            removeClass(vegetarian);
        } else {
            addClass(vegetarian);
            removeClass(nonVeg);
        }
    }
})

// BILLING

const cashOrCard = () => document.querySelector('input[name="payment-method"]:checked').value;

document.getElementById('choosePaymentType').addEventListener('click', event => {
    const creditCardForm = document.getElementById('cardInfo');
    const cashForm = document.getElementById('cashPayment');
    if(cashOrCard() === 'card'){
        creditCardForm.classList.remove('push-off-screen');
        cashForm.classList.add('push-off-screen'); 
        
    } else {
        creditCardForm.classList.add('push-off-screen');
        cashForm.classList.remove('push-off-screen');
    }
})

let amountTendered = () => document.getElementById('cashForm').value;

function makeChange() {
    return (parseInt(amountTendered()) - subtotalPlusTax(products)).toFixed(2);
}

document.getElementById('cashOut').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('change').innerText = `Keep the change you filthy animal: $${makeChange()}`;
})

document.getElementById('checkout').addEventListener('click', event => {
    event.preventDefault();
    const receipt = document.getElementById('receipt');
    receipt.classList.remove('push-off-screen');

    // let finalCart = new Set(cartArray);
    receipt.innerHTML = '';
    for(let obj of products) {
        if(obj.count > 0) {
            receipt.innerHTML += `<img src='${obj.img}'> ${obj.name}  QTY:  ${obj.count} PRICE: $${(obj.price).toFixed(2)}`;
        }
    }
    receipt.innerHTML += `<h1>Total: $${(subtotalPlusTax(products)).toFixed(2)}</h1>`;
})