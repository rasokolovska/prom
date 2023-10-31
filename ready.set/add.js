// Отримати кількість товарів з локального сховища та відобразити її
const cartCountSpan = document.querySelectorAll('.cart-count');
// const cartCount = localStorage.getItem('.cartCount') || 0;

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cartCountSpan.forEach(span => {
  span.textContent = cart.length;
});

// При кожному додаванні товару оновлювати локальне сховище та відображати кількість
const addToCartButtons = document.querySelectorAll('.add-to-cart-by');
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
  //   const currentCount = localStorage.getItem('.cartCount') || 0;
  //   const newCount = parseInt(currentCount) + 1;
    
  //   localStorage.setItem('.cartCount', newCount);

  let newCart = JSON.parse(localStorage.getItem("cart")) || [];
    cartCountSpan.forEach(span => {
      span.textContent = newCart.length + 1;
    });
  });
});