function deleteItem(e) {}

function getPriceByProduct(itemNode) {}

function updatePriceByProduct(productPrice, index) {}

function getTotalPrice() {
  let priceUnit = document.getElementsByClassName("unitPrice");
  let qty = document.getElementsByClassName("input");
  let price = document.getElementsByClassName("total");
  console.log("priceUnit: ", priceUnit);
  console.log("qty: ", qty);
  console.log("price[0]: ", price[0]);

  for (let i = 0; i < priceUnit.length; i++) {
    price[i].innerHTML = `$${priceUnit[i].innerHTML.replace("$", "") *
      qty[i].value}`;
  }
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
