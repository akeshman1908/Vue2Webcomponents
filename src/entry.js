// src/entry.js
import { defineCustomElement } from 'vue';
import MyComponent from './components/MyComponent.vue';

const MyCustomElement = defineCustomElement(MyComponent);

customElements.define('my-component', MyCustomElement);
