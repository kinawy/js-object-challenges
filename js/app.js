const menu = {
    neapolitan: {
        price: 12.50,
        toppings: ['anchioves', 'red sauce', 'capers', 'olives']
    },
    cheese: {
        price: 9.00,
        toppings: ['red sauce', 'romano', 'parm', 'provolone']
    },
    margherita: {
        price: 10.00,
        toppings: ['olive oil', 'mozzerella', 'basil', 'roma tomatoes' ]
    },
    meatLovers: {
        price: 15.00,
        toppings: ['three cheese blend', 'red sauce', 'bacon', 'ham', 'pepperoni', 'sausage']
    },
    hawaiian: {
        price: 12.00,
        toppings: ['pineapple', 'mozzerella', 'bacon', 'chicken']
    }
}

console.log(Object.keys(menu));

console.log(menu.hasOwnProperty('banana'));