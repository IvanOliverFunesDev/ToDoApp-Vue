<template>
  <form @submit.prevent="handleSubmit" class="task-form">
    <h2>{{ tarea ? 'Editar tarea' : 'Crear tarea' }}</h2>

    <input
      type="text"
      placeholder="Nombre"
      v-model="name"
      required
    />

    <textarea
      placeholder="Contenido"
      v-model="content"
      required
    />

    <button type="submit">
      {{ tarea ? 'Actualizar' : 'Crear' }}
    </button>
  </form>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useRouter } from 'vue-router'
import { createTask, updateTask } from '../services/tasksService'

// Recibimos la tarea por props si es para editar
const props = defineProps({
  tarea: Object
})

const router = useRouter()

// Estado local de los campos
const name = ref('')
const content = ref('')

// Cuando llega la tarea, rellenamos los campos
watch(
  () => props.tarea,
  (newTarea) => {
    if (newTarea) {
      name.value = newTarea.name
      content.value = newTarea.content
    }
  },
  { immediate: true }
)

const handleSubmit = async () => {
  try {
    if (props.tarea) {
      // Modo editar
      await updateTask(props.tarea.id, {
        name: name.value,
        content: content.value
      })
      console.log('✅ Tarea actualizada')
    } else {
      // Modo crear
      await createTask({
        name: name.value,
        content: content.value
      })
      console.log('✅ Tarea creada')
    }

    router.push('/tasks')
  } catch (err) {
    console.error('❌ Error en el formulario:', err.response?.data || err.message)
  }
}
</script>

<style scoped>
.task-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

input,
textarea {
  padding: 0.5rem;
  font-size: 1rem;
}

button {
  padding: 0.7rem;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
