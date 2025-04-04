<template>
    <div class="edit-task-page">
      <h1>Editar tarea</h1>
  
      <div v-if="loading">Cargando tarea...</div>
  
      <TaskForm v-else :tarea="tarea" />
    </div>
  </template>
  

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getTaskById } from '../services/tasksService'
import TaskForm from '../components/TaskForm.vue'

const route = useRoute()
const taskId = route.params.id

const tarea = ref(null)
const loading = ref(true)

onMounted(async () => {
  try {
    const data = await getTaskById(taskId)
    console.log("📝 Tarea encontrada:", data)
    tarea.value = data
  } catch (err) {
    console.error("❌ Error al cargar tarea", err.response?.data || err.message)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.edit-task-page {
  max-width: 600px;
  margin: 2rem auto;
}
</style>