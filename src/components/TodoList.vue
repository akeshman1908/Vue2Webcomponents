<!-- src/components/TodoList.vue -->
<template>
  <div class="todo-list">
    <h2>{{ title }}</h2>
    <input
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="Add a new task"
    />
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }}
        <button @click="removeTask(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    title: {
      type: String,
      default: 'My Todo List',
    },
  },
  data() {
    return {
      newTask: '',
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push(this.newTask.trim());
        this.newTask = '';
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    },
    clearTasks() {
      this.tasks = [];
    },
    setTasks(newTasks) {
      this.tasks = newTasks;
    },
  },
};
</script>

<style scoped>
.todo-list {
  border: 1px solid #ccc;
  padding: 10px;
  width: 300px;
}
.todo-list h2 {
  margin-top: 0;
}
.todo-list input {
  width: 100%;
  padding: 5px;
  margin-bottom: 10px;
}
.todo-list ul {
  list-style-type: none;
  padding-left: 0;
}
.todo-list li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
.todo-list button {
  background-color: #ff4d4d;
  border: none;
  color: white;
  cursor: pointer;
}
</style>
