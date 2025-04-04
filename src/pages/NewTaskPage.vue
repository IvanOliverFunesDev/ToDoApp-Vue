<template>
    <div class="page">
        <h1>Página de New Tasks</h1>
        <TaskForm />
    </div>
</template>

<script setup>
import TaskForm from '../components/TaskForm.vue'
</script>

<style scoped>
.page {
    padding: 2rem;
    font-family: sans-serif;
    text-align: center;
}
</style>