const $template = document.createElement('template')
$template.innerHTML = `<form class="login-form">
            <h1 class="title">Member Login</h1>
            <input-wrapper class="email" placeholder="your email" type="text" error="">Email</input-wrapper>
            <input-wrapper class="password" placeholder="your password" type="password" error="">Password</input-wrapper>
            <a href="#">Forgot?</a>
            <button class="login-btn">Sign In</button>

        </form>`;

export default class LoginForm extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$loginForm = this.querySelector('.login-form');
        this.$email = this.querySelector('.email');
        this.$password = this.querySelector('.password');
    }

    connectedCallback() {
        this.$loginForm.onsubmit = (event) => {
            event.preventDefault();

            this.$email.validate((value) => {
                return value != '';
            }, "Invalid email"
            );

            this.$password.validate((value) => {
                return value != '';
            }, "Invalid password")
        }
    }

}

window.customElements.define('login-form', LoginForm);