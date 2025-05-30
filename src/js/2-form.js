const formData = {
    email: "",
    message: ""
};

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;

form.addEventListener('input', (event) => {
    if (event.target.name === 'email') {
        formData.email = event.target.value.trim();
    } else if (event.target.name === 'message') {
        formData.message = event.target.value.trim();
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem(STORAGE_KEY);
    
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        
        formData.email = parsedData.email || "";
        formData.message = parsedData.message || "";
        
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    if (formData.email === "" || formData.message === "") {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);

    formData.email = "";
    formData.message = "";

    form.reset();
});