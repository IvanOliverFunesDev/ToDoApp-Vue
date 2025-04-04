<template>
<form @submit.prevent="handleSubmit">
<input type="text" placeholder="Name" v-model="name" required />
<input type="text" placeholder="Content" v-model="content" required />

<button type="submit">Crear Tarea</button>
</form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {createTask} from '../services/tasksService';

const name = ref('')
const content = ref('')

const router = useRouter()

const handleSubmit = async () => {
  try {
    const data = await createTask({name: name.value, content: content.value})
    console.log("Tarea creada correctamente", data);

    router.push('/tasks')
  } catch (err) {
    console.error("Error al crear tarea", err.message)
  }
}

</script>

<style scoped></style>