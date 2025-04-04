<template>
    <div class="tasks-page">
      <h1>Mis Tareas</h1>
  
      <div v-if="tasks && tasks.length === 0">
        <p>No hay tareas aún.</p>
      </div>
  
      <div v-else>
        <TaskCard
          v-for="task in tasks"
          :key="task.id"
          :task="task"
        />
      </div>
    </div>
  </template>

<script setup>
import {getTasks} from '../services/tasksService';
import { ref, onMounted} from 'vue';
import TaskCard from '../components/TaskCard.vue';

const tasks = ref([]);

onMounted(async () => {
  try {
    const data = await getTasks();
    console.log("🧾 Tareas obtenidas:", data);
    tasks.value = data;
  } catch (err) {
    console.error("❌ Error al obtener tareas:", err.message);
  }
});
</script>

<style scoped>
.tasks-page {
  max-width: 800px;
  margin: auto;
  padding: 2rem;
}
</style>