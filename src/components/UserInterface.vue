<template>
  <div class="user-wrapper">
    <LoginPage v-if="displayForm === 'login'" />
    <RegistrationPage v-if="displayForm === 'reg'" />
  </div>
</template>

<script>
import LoginPage from './components/LoginPage.vue'
import RegistrationPage from './components/RegistrationPage.vue'

export default {
  components: {
    LoginPage,
    RegistrationPage,
  },
  data() {
    return {
      displayForm: 'login',
    }
  },
}
</script>

<style lang="css">
.user-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* výška obrazovky */
  background-color: #cff5d8;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.user-form {
  background-color: #cdeacd;
  border-radius: 12px;
  padding: 2rem 3rem;
  box-shadow: 0 6px 15px rgba(62, 142, 65, 0.3);
  width: 320px;
  box-sizing: border-box;
}

.user-form h2 {
  color: #3e8e41;
  margin-bottom: 1.5rem;
  text-align: center;
  border: 2px solid #3e8e41;
  border-radius: 8px;
}

.user-form h3 {
  color: #3e8e41;
  margin-bottom: 1.5rem;
  text-align: center;
}

.user-form label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #3e8e41;
  font-size: 1rem;
}

.user-form input[type='email'],
.user-form input[type='password'] {
  width: 100%;
  padding: 0.5rem 0.75rem;
  margin-bottom: 1.25rem;
  border: 1.5px solid #4caf50;
  border-radius: 8px;
  font-size: 1rem;
  color: #2c3e50;
  box-sizing: border-box;
  transition: border-color 0.3s ease;
}

.user-form input[type='email']:focus,
.user-form input[type='password']:focus {
  outline: none;
  border-color: #3e8e41;
  background-color: #e6f2e8;
}

.user-form button {
  width: 100%;
  padding: 0.75rem;
  background-color: #4caf50;
  border: none;
  border-radius: 10px;
  color: white;
  font-weight: 700;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.25s ease;
}

.user-form button:hover {
  background-color: #3e8e41;
}

.loginreglabel {
  color: red;
}
</style>
