const form = document.getElementById("contact-form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const result = document.getElementById("result");
    let valid = true;
    function check(field, condition, error) {
        document.getElementById(field.id + "-error").textContent = condition ? "" : error;
        field.setAttribute("aria-invalid", String(!condition));
        if (!condition) valid = false;
    }
    check(name, /^[\p{L}][\p{L}\s'-]{1,59}$/u.test(name.value.trim()), "Введите имя без цифр (от 2 символов).");
    check(email, /^[^\s@]+@[^\s@]+[^\s@]+\.[^\s@]+$/.test(email.value.trim()), "Введите корректную почту.");
    check(message, message.value.trim().length >= 10, "Введите не менее 10 символов.");
    result.textContent = valid ? "Анкета заполнена правильно." : "Исправьте ошибки в анкете.";
});
