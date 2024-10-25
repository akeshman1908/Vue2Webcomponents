// src/entry.js
import { defineCustomElement } from 'vue';
import TodoList from './components/TodoList.vue';

const TodoListElement = defineCustomElement(TodoList);

// Expose methods to the custom element instance
class ExtendedTodoListElement extends TodoListElement {
    constructor() {
        super();
        // Bind methods to the instance
        this.clearTasks = this.clearTasks.bind(this);
        this.setTasks = this.setTasks.bind(this);
    }

    clearTasks() {
        this.vueComponent.clearTasks();
    }

    setTasks(newTasks) {
        this.vueComponent.setTasks(newTasks);
    }

    // Reference to the Vue component instance
    get vueComponent() {
        return this.__vue_app__.component.proxy;
    }
}

customElements.define('todo-list', ExtendedTodoListElement);
