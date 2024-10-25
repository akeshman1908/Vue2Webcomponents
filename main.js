import { defineCustomElement } from 'vue';
import MyComponent from './MyComponent.vue';

// Definieer de Vue-component als een custom element
const MyWebComponent = defineCustomElement(MyComponent);

// Registreer het custom element
customElements.define('my-web-component', MyWebComponent);
