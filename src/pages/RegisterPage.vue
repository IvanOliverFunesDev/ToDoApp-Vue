<template>
    <div class="register-page">
        <h1>Registro</h1>
        <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="Nombre" v-model="name" required />
            <input type="email" placeholder="Correo electrónico" v-model="email" required />
            <input type="password" placeholder="Contraseña" v-model="password" required />
            <button type="submit">Registrarse</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { register } from '../services/authService'

const name = ref('')
const email = ref('')
const password = ref('')

const router = useRouter()

const handleSubmit = async () => {
    try {
        const data = await register({ name: name.value, email: email.value, password: password.value })
        console.log("✅ Usuario registrado:", data)

        // Aquí puedes usar Swal o redirigir directamente:
        router.push('/login')
    } catch (err) {
        console.error("❌ Error al registrar:", err.response?.data || err.message)
    }
}
</script>

<style scoped>
.register-page {
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