
document.addEventListener("DOMContentLoaded", function() {
  const cartItemsList = document.getElementById("cart-items");
  const totalAmount = document.getElementById("total-amount");
  
  const cartCountSpan = document.querySelectorAll('.cart-count');

  // Отримуємо дані про товари з локального сховища
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  // Функція для оновлення відображення корзини та загальної суми
  function updateCart() {
    if (cartItemsList) {
      cartItemsList.innerHTML = "";
    }
      
      let amount = 0;

      cart.forEach((item, index) => {
          const cartItem = document.createElement("li");
          cartItem.textContent = item.title + " " + item.price;
          const deleteButton = document.createElement("button");
          deleteButton.textContent = "DELETE";
          deleteButton.addEventListener("click", () => {
              // Видаляємо товар з корзини за індексом
              cart.splice(index, 1);
              updateCart();
              updateTotalAmount();
              saveCartToLocalStorage();

              cartCountSpan.forEach(span => {
                span.textContent = cart.length;
              });
          });
          cartItem.appendChild(deleteButton);
          cartItemsList.appendChild(cartItem);

          // Підраховуємо загальну суму
          const price = parseFloat(item.price);
          amount += price;
      });

      // Відображаємо загальну суму
      if (totalAmount) {
        totalAmount.textContent = "Total: " + amount + " UAH";
      }
      
  }

  // Функція для оновлення загальної суми
  function updateTotalAmount() {
      let amount = 0;
      cart.forEach(item => {
          // Підраховуємо загальну суму
          const price = parseFloat(item.price);
          amount += price;
      });

      // Відображаємо загальну суму
      if (totalAmount) {
        totalAmount.textContent = "Total: " + amount + " UAH";
      }
  }

  // Функція для збереження корзини в локальному сховищі
  function saveCartToLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(cart));
  }

  // Оновлюємо відображення корзини та загальної суми при завантаженні сторінки
  updateCart();
  updateTotalAmount();

  // Додаємо товар до корзини
  document.querySelectorAll(".add-to-cart").forEach(button => {
      button.addEventListener("click", () => {
          const title = button.getAttribute("data-title");
          const price = button.getAttribute("data-price");
          cart.push({ title, price });
          updateCart();
          updateTotalAmount();
          saveCartToLocalStorage();
      });
  });
});
