import { LitElement, html } from '@polymer/lit-element/';
import axios from 'axios';

class LoginDemo extends LitElement {
	static get properties() {
		return {
			username: String,
			password: String,
			loggedIn: Boolean,
			user: Object
		};
	}

	constructor() {
		super();
		this.username = '';
		this.password = '';
		this.user = {
			local: {
				username: ''
			}
		};
	}

	_login() {
		const username = this.shadowRoot.querySelector('#loginUsername').value;
		const password = this.shadowRoot.querySelector('#loginPassword').value;

		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response);
				if (response.status === 200) {
					this.loggedIn = true;
					this.user = response.data.user;

				}
			}).catch(response => {
				console.log(response);
			});
	}

	_register() {
		const username = this.shadowRoot.querySelector('#registerUsername').value;
		const password = this.shadowRoot.querySelector('#registerPassword').value;

		axios
			.post('/auth/signup', {
				username: username,
				password: password
			})
			.then(response => {
				console.log(response);
				if (!response.data.errmsg) {
					console.log('logged in');
				} else {
					console.log('duplicate');
				}
			});
	}

	render() {
		return html`
		${this.loggedIn 
			? html`<p>You are logged in.</p>Welcome, <b>${this.user.local.username}</b>` 
			: html`<p>You are not logged in.</p>`}
		<br>

			<h1>Login form</h1>
			<label htmlFor="username">Username: </label>
			<input
				id="loginUsername"
				type="text">
			</input><br>
			<label htmlFor="password">Password: </label>
			<input
				id="loginPassword"
				type="password">
			</input><br>
			<button @click=${() => this._login()}>Login</button>
			<hr>
			<h1>Register form</h1>
			<label htmlFor="username">Username: </label>
			<input
				id="registerUsername"
				type="text">
			</input><br>
			<label htmlFor="password">Password: </label>
			<input
				id="registerPassword"
				type="password">
			</input><br>
			<button @click=${() => this._register()}>Register</button>
		`;
		
	}
}

customElements.define('login-demo', LoginDemo);