<template>
  <div class="task-card">
    <h3>{{ task.name }}</h3>
    <p>{{ task.content }}</p>
  </div>
</template>

<script setup>
  defineProps({
    task: Object
  })
</script>

<style>

.task-card {
  border: 1px solid #ddd;
  color:black;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  background: #f9f9f9;
}
</style>