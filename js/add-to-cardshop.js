document.addEventListener("DOMContentLoaded", function() {
  const addToCartButtons = document.querySelectorAll(".add-to-cart-by");

  // Додаємо обробник події для кожної кнопки "Додати в корзину"
  addToCartButtons.forEach(button => {
      button.addEventListener("click", () => {
          const productTitle = button.getAttribute("data-title");
          const productPrice = button.getAttribute("data-price");
  
          // Отримуємо дані про корзину з локального сховища
          const cart = JSON.parse(localStorage.getItem("cart")) || [];

          // Додаємо товар до корзини
          cart.push({ title: productTitle, price: productPrice });
          
          // Зберігаємо дані корзини в локальному сховищі
          localStorage.setItem("cart", JSON.stringify(cart));
      });
  });
});