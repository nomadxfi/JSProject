// Check the login:
// Write the code which asks for a login with prompt.
//
//     If the visitor enters "Admin", then prompt for a password,
//     if the input is an empty line or Esc – show “Canceled”,
//     if it’s another string – then show “I don’t know you”.
//
// The password is checked as follows:
//
// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

// оператор && первый false
// оператор || первый true
//
// Приоритет оператора && выше, чем ||, поэтому он выполнится первым.


let userName = prompt("Кто там?", '');

if (userName === '' && userName !== 'Админ') {
    alert("Не верный логин");
} else if (userName == null) {
    alert("Отменено");
}
if (userName === 'Админ') {

    let password = prompt("Введите пароль", '');

    if (password === 'Admin') {
        alert("Здравствуйте!");
    } else if (password !== null) {
        alert("Неверный пароль");
    } else {
        alert("Отменено");
    }
}