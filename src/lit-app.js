import { LitElement, html } from '@polymer/lit-element/';
import { AppStyles } from './AppStyles';

import { Router } from '@vaadin/router';

import './components/hello-world.js';
import './components/books-demo.js';
import './components/redux-demo.js';
import './components/login-demo.js';
import './components/not-found.js';

class LitApp extends LitElement {

	firstUpdated(){
		const router = new Router(this.shadowRoot.querySelector('#outlet'));

		router.setRoutes([
			{path: '/', component: 'hello-world'},
			{path: '/books', component: 'books-demo'},
			{path: '/redux', component: 'redux-demo'},
			{path: '/login', component: 'login-demo'},
			{path: '(.*)', component: 'not-found'}
		]);
	}

	render() {
		return html`
			${AppStyles}
			<div class="app">
				<header class="app-header">
					<img src="../assets/logo.svg" class="app-logo" alt="logo" />
					<h1 class="app-title">Welcome to LitHTML</h1>
				</header>

				<div class="app-links">
					<a href="/">Home</a>
					<a href="/books">Books</a>
					<a href="/redux">Redux</a>
					<a href="/login">Auth</a>
				</div>
				<div id="outlet"></div>

				<a href="https://github.com/thepassle/create-lit-app">
					<img src="../assets/github.svg" class="app-gh" alt />
				</a>
			</div>
		`;
	}
}

customElements.define('lit-app', LitApp);
