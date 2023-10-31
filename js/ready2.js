
// Отримуємо посилання на кнопку за класом
var lookAllButton = document.querySelector(".button-look-all-set");

// Додаємо обробник події на клік кнопки
lookAllButton.addEventListener("click", function() {
    // Перенаправляємо користувача на файл ready2.html
    // window.location.href = "../ready.set/ready2.html";
    history.back();
});