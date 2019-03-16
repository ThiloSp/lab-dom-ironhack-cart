function deleteItem(e) {
  console.log(e.currentTarget.parentNode.parentNode);
  let toDeleteProduct = e.currentTarget.parentNode.parentNode;
  let toDeleteFrom = toDeleteProduct.parentNode;
  toDeleteFrom.removeChild(toDeleteProduct);
}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  let priceUnit = document.getElementsByClassName("unitPrice");
  let qty = document.getElementsByClassName("input");
  let price = document.getElementsByClassName("total");
  let totalPrice = document.getElementsByClassName("totalCart");
  let sum = 0;
  /* console.log("priceUnit: ", priceUnit);
  console.log("qty: ", qty);
  console.log("price[0]: ", price[0]);
  console.log("totalPrice[0]: ", totalPrice[0]); */

  for (let i = 0; i < priceUnit.length; i++) {
    price[i].innerHTML = `$${priceUnit[i].innerHTML.replace("$", "") *
      qty[i].value}`;
    sum += priceUnit[i].innerHTML.replace("$", "") * qty[i].value;
  }
  totalPrice[0].innerHTML = `$${sum}`;
}

function createQuantityInput() {}

function createDeleteButton() {}

function createQuantityNode() {}

function createItemNode(dataType, itemData) {}

function createNewItemRow(itemName, itemUnitPrice) {}

function createNewItem() {}

window.onload = function() {
  var calculatePriceButton = document.getElementById("calc-prices-button");
  var createItemButton = document.getElementById("new-item-create");
  var deleteButtons = document.getElementsByClassName("btn-delete");

  calculatePriceButton.onclick = getTotalPrice;
  createItemButton.onclick = createNewItem;

  for (var i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = deleteItem;
  }
};
