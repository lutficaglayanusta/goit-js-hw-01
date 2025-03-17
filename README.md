# goit-js-hw-01

This project contains three JavaScript tasks that demonstrate basic JavaScript functionality.

## Task 1

**File:** `js/task-1.js`

**Description:** This task includes a function `makeTransaction` that calculates the total cost of ordering a certain quantity of droids at a given price per droid.

```js
function makeTransaction(quantity, pricePerDroid) {
    return `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`;
}
```

## Task 2

**File:** `js/task-2.js`

**Description:** This task includes a function `getShippingMessage` that calculates the total cost of shipping to a specific country, including the delivery fee.

```js
function getShippingMessage(country, price, deliveryFee) {
    return `Shipping to ${country will cost ${price + deliveryFee} credits`;
}
```

## Task 3

**File:** `js/task-3.js`

**Description:** This task includes a function `getElementWidth` that calculates the total width of an element, including its content, padding, and border.

```js
function getElementWidth(content, padding, border) {
    let result;

    let newContent = content.split("px")[0]
    let newPadding = padding.split('px')[0];
    let newBorder = border.split('px')[0];
    
    result = Number.parseFloat(newContent) + Number.parseFloat(newPadding) * 2 + Number.parseFloat(newBorder) * 2

    return result
}
```

## Usage

To run the tasks, open `index.html` in a web browser. The results will be displayed in the console.