import './styles/style.scss';
import './styles/about.scss';
import logo from './assets/Frame 3032.png';
import Header from "./about";
import User from "./header";
import Table from "./tableview";
import Todo from "./dashboard";

document.addEventListener('DOMContentLoaded', function() {
    const app = document.getElementById('app');

    function createForm(titleText, formFields, submitText, toggleText, toggleHref, onSubmit) {
        const container = document.createElement('div');
        container.className = 'container';

        const logoContainer = document.createElement('div');
        logoContainer.className = 'logo-container';

        const logoImg = document.createElement('div');
        logoImg.className = 'logo-img';
        const img = document.createElement('img');
        img.src = logo; 
        img.alt = 'logo';
        logoImg.appendChild(img);

        const logoText = document.createElement('div');
        logoText.className = 'logo-text';
        const logoTitle = document.createElement('h2');
        logoTitle.innerText = 'TaskTrack';
        logoText.appendChild(logoTitle);

        logoContainer.appendChild(logoImg);
        logoContainer.appendChild(logoText);
        container.appendChild(logoContainer);

        const title = document.createElement('h1');
        title.innerText = titleText;
        container.appendChild(title);

        const form = document.createElement('form');
        formFields.forEach(field => {
            const input = document.createElement('input');
            input.type = field.type;
            input.placeholder = field.placeholder;
            input.className = field.className;
            form.appendChild(input);
        });

        const submitButton = document.createElement('input');
        submitButton.type = 'submit';
        submitButton.value = submitText;
        form.appendChild(submitButton);

        form.addEventListener('submit', function(event) {
            event.preventDefault();
            onSubmit(form);
        });

        container.appendChild(form);

        const toggleLink = document.createElement('a');
        toggleLink.href = toggleHref;
        toggleLink.innerText = toggleText;
        toggleLink.addEventListener('click', (e) => {
            e.preventDefault();
            app.innerHTML = '';
            if (toggleHref === 'signup') {
                createSignupForm();
            } else {
                createLoginForm();
            }
        });
        container.appendChild(toggleLink);

        app.appendChild(container);
    }

    function showError(input, message) {
        const error = document.createElement('div');
        error.className = 'error';
        error.textContent = message;
        input.parentElement.insertBefore(error, input.nextSibling);
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function renderMainContent() {
        const html = `
            ${Header}
            ${User}
            ${Table}
            ${Todo}
        `;
        
        app.innerHTML = html;
    }
    

    function createSignupForm() {
        createForm(
            'Create an account',
            [
                { type: 'text', placeholder: 'Full Name', className: 'ul' },
                { type: 'email', placeholder: 'Enter your Email', className: 'el' },
                { type: 'password', placeholder: 'Enter Password', className: 'pl' },
                { type: 'password', placeholder: 'Confirm Password', className: 'el' }
            ],
            'Get Started',
            'Already have an account?  Sign up',
            'login',
            function(form) {
                let valid = true;

                document.querySelectorAll('.error').forEach(e => e.remove());

                const fullNameInput = form.querySelector('input[placeholder="Full Name"]');
                const emailInput = form.querySelector('input[placeholder="Enter your Email"]');
                const passwordInput = form.querySelector('input[placeholder="Enter Password"]');
                const confirmPasswordInput = form.querySelector('input[placeholder="Confirm Password"]');

                if (fullNameInput.value.trim() === '') {
                    showError(fullNameInput, 'Full Name is required');
                    valid = false;
                }

                if (emailInput.value.trim() === '') {
                    showError(emailInput, 'Email is required');
                    valid = false;
                } else if (!validateEmail(emailInput.value.trim())) {
                    showError(emailInput, 'Enter a valid email address');
                    valid = false;
                }

                if (passwordInput.value.trim() === '') {
                    showError(passwordInput, 'Password is required');
                    valid = false;
                } else if (passwordInput.value.length < 6) {
                    showError(passwordInput, 'Password must be at least 6 characters long');
                    valid = false;
                }

                if (confirmPasswordInput.value.trim() === '') {
                    showError(confirmPasswordInput, 'Confirm Password is required');
                    valid = false;
                } else if (passwordInput.value !== confirmPasswordInput.value) {
                    showError(confirmPasswordInput, 'Passwords do not match');
                    valid = false;
                }

                if (valid) {
                    // Load the main content after signup
                    renderMainContent();
                }
            }
        );
    }

    function createLoginForm() {
        createForm(
         
            'Log into your account',
            [
                { type: 'email', placeholder: 'Enter your Email', className: 'ul' },
                { type: 'password', placeholder: 'Enter your Password', className: 'el' }
            ],
            'Sign in',
            'Do not have an account? Log in',
            'signup',
            function(form) {
                let valid = true;

                document.querySelectorAll('.error').forEach(e => e.remove());

                const emailInput = form.querySelector('input[placeholder="Enter your Email"]');
                const passwordInput = form.querySelector('input[placeholder="Enter your Password"]');

                if (emailInput.value.trim() === '') {
                    showError(emailInput, 'Email is required');
                    valid = false;
                } else if (!validateEmail(emailInput.value.trim())) {
                    showError(emailInput, 'Enter a valid email address');
                    valid = false;
                }

                if (passwordInput.value.trim() === '') {
                    showError(passwordInput, 'Password is required');
                    valid = false;
                }

                if (valid) {
                    // Load the main content after login
                    renderMainContent();
                }
            }
        );
    }

    // Start by creating the signup form
    createSignupForm();
});