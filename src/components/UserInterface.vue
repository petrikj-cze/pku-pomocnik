<template>
  <div class="user-wrapper">
    <div v-if="userStore.displayForm === 'log'" class="login-form">
      <h2>Přihlášení uživatele</h2>
      LOGIN: pepa@jednicka.cz | PASS: ahoj
      <FormKit type="form" submit-label="Přihlásit" @submit="onSubmit">
        <FormKit
          type="text"
          name="userLogin"
          id="userLogin"
          placeholder="Přihlašovací e-mail"
          validation="email"
          validation-visibility="live"
        />
        <FormKit
          type="password"
          name="userPass"
          id="userPass"
          placeholder="Heslo"
          validation="required"
        />
      </FormKit>
      {{ userStore.loginError }}
    </div>
    <button @click="userStore.changeUserForm()" v-if="userStore.displayForm === 'log'">
      Pokud ještě nemáte účet, klikněte na toto tlačítko pro vytvoření
    </button>
    <div v-if="userStore.displayForm === 'reg'">
      <h2>Registrace nového uživatele</h2>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user-state'
import { useRouter } from 'vue-router'
const userStore = useUserStore()
const router = useRouter()

function onSubmit(userData) {
  userStore.logUser(userData.userLogin, userData.userPass)
}
</script>

<style lang="css">
.login-form {
  margin-bottom: 10px;
}
</style>
