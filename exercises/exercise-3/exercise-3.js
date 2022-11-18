let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printRecipe(arr) {
  console.log("QTY     ITEM                TOTAL");
  arr.forEach((item) => {
    let { quantity, itemName, unitPrice } = item;
    console.log(
      `${quantity}       ${itemName}${printSpaces(itemName)}${
        unitPrice * quantity
      }`
    );
  });
}

function printSpaces(str) {
  return new Array(21 - str.length).join(" ");
}

printRecipe(order);

