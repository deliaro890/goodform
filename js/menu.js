class MyComponent extends HTMLElement {
	constructor() {
		super();
		const shadowRoot = this.attachShadow( { mode : 'open'});
		let h2 = document.createElement('h2');
		h2.textContent = 'hola soy el h2';
		shadowRoot.append(h2)
	}
}

customElements.define('menu-component', MyComponent);