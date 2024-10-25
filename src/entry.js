// src/entry.js
import { defineCustomElement } from 'vue';
import MyComponent from './components/MyComponent.vue';

// Convert Vue component to custom element
const MyCustomElement = defineCustomElement(MyComponent);

// Define the custom element
customElements.define('my-component', MyCustomElement);
