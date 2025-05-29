//Оголошення об'єкта formData
const formData = {
    email: "",
    message: ""
};

// Ключ для локального сховища
const STORAGE_KEY = "feedback-form-state";

// Отримуємо посилання на елементи DOM
const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

// 2. Відстеження змін у формі (делегування подій) та збереження у локальне сховище
form.addEventListener('input', (event) => {
    // Перевіряємо, чи зміни відбулися в полях email або message
    if (event.target.name === 'email') {
        formData.email = event.target.value.trim();
    } else if (event.target.name === 'message') {
        formData.message = event.target.value.trim();
    }
    
    // Зберігаємо оновлений об'єкт formData у локальне сховище
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 3. Заповнення форми при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    
    if (savedData) {
        // Парсимо збережені дані
        const parsedData = JSON.parse(savedData);
        
        // Заповнюємо поля форми та об'єкт formData
        formData.email = parsedData.email || ""; // Забезпечуємо порожній рядок, якщо null/undefined
        formData.message = parsedData.message || "";
        
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
});

// 4. Обробка відправлення форми
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Запобігаємо стандартній поведінці відправлення форми

    // Перевіряємо, чи обидва поля заповнені
    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
        return; // Зупиняємо виконання, якщо поля не заповнені
    }

    // Якщо всі поля заповнені:
    console.log(formData); // Виводимо об'єкт formData у консоль

    // Очищаємо локальне сховище
    localStorage.removeItem(STORAGE_KEY);

    // Очищаємо об'єкт formData
    formData.email = "";
    formData.message = "";

    // Очищаємо поля форми
    form.reset(); // Метод reset() очищає всі поля форми до початкового стану
});