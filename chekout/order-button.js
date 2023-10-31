
let cart = JSON.parse(localStorage.getItem("cart")) || [];

const orderButton = document.getElementById("order-button");

orderButton.addEventListener("click", () => {
  
  cart.splice(0, cart.length);
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "../done-by/done.html";
});