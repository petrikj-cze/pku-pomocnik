<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name">Název suroviny:</label>
      <input v-model="name" id="name" type="text" required />
    </div>
    <div>
      <label for="phe">PHE (mg na 100 g):</label>
      <input v-model.number="phe" id="phe" type="number" min="0" step="0.1" required />
    </div>
    <button type="submit">Přidat surovinu</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const phe = ref(0)

const handleSubmit = () => {
  const ingredient = {
    name: name.value,
    phe: phe.value,
  }

  console.log('Nová surovina:', ingredient)

  // Reset formuláře
  name.value = ''
  phe.value = 0
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  gap: 1rem;
}
</style>
