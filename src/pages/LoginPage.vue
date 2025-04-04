<template>
    <div class="login-page">
        <h1>Login</h1>
        <form @submit.prevent="handleSubmit">
            <input type="email" placeholder="Correo electrónico" v-model="email" required />
            <input type="password" placeholder="Contraseña" v-model="password" required />
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../services/authService'

const email = ref('')
const password = ref('')

const router = useRouter()

const handleSubmit = async () => {
    try {
        const data = await login({ email: email.value, password: password.value })
        console.log("✅ Usuario registrado:", data)
        localStorage.setItem('token', data.token);
        router.push('/login')
    } catch (err) {
        console.error("❌ Error al registrar:", err.response?.data || err.message)
    }
}
</script>

<style scoped>
.login-page {
    max-width: 400px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

input,
button {
    padding: 0.5rem;
    font-size: 1rem;
}
</style>