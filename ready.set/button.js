// Отримуємо посилання на кнопку за класом
var scrollToTopButtons = document.querySelectorAll(".scrollToTopButton");

// Додаємо обробник події на клік кожної кнопки
scrollToTopButtons.forEach(button => {
    button.addEventListener("click", function() {
        // Прокручуємо сторінку вгору
        window.scrollTo({
            top: 0, // Прокрутити вгору до верхнього краю сторінки
            behavior: "smooth" // Плавна анімація прокрутки
        });
    });
});

// Показуємо кнопку, коли сторінка прокручена понад певну висоту
window.addEventListener("scroll", function() {
    if (window.scrollY > 0) { // Встановіть бажану висоту, коли кнопка має з'являтися
        scrollToTopButtons.forEach(button => {
            button.style.display = "block";
        });
    } else {
        scrollToTopButtons.forEach(button => {
            button.style.display = "none";
        });
    }
});



// Отримуємо посилання на кнопку
var lookAllSetButton = document.querySelector(".button-look-all-set");

// Додаємо обробник події на клік кнопки
if (lookAllSetButton) {
    lookAllSetButton.addEventListener("click", function() {
        // Переносимо користувача на сторінку ready.html
        window.location.href = "../ready.set/ready.html";
    });
}



;