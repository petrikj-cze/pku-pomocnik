<template>
  <div class="header">
    <img :src="logo" class="pku-pomocnik-logo" />
  </div>
  <nav class="mainmenu">
    <router-link v-if="userStore.isLogged === true" to="/day-view"
      ><button><b>DENNÍ PŘEHLED</b></button>
    </router-link>
    <router-link v-if="userStore.isLogged === false" to="/"
      ><button><b>Domů</b></button>
    </router-link>
    <router-link v-if="userStore.isLogged === true" to="/add-ingredient"
      ><button><b>Přidat položku</b></button>
    </router-link>
    <router-link v-if="userStore.isLogged === true" to="/list-ingredients"
      ><button>Seznam surovin</button></router-link
    >

    <router-link v-if="userStore.isLogged === true" to="/list-meals"
      ><button>Seznam jídel</button></router-link
    >
    <router-link to="/about"><button class="alternativeButton">O aplikaci</button></router-link>
    <router-link to="/about-pku"
      ><button class="alternativeButton">O fenylketonurii</button></router-link
    ><router-link v-if="userStore.isLogged === true" to="/user-profile"
      ><button class="alternativeButton">Uživatelský profil</button></router-link
    ><router-link v-if="userStore.isLogged === false" to="/user-interface"
      ><button class="alternativeButton">Přihlásit</button></router-link
    >
  </nav>
</template>
<script setup>
import logo from '@/assets/header.png'
import { useUserStore } from '@/stores/user-state'
const userStore = useUserStore()
</script>
<style>
.header {
  background-color: #3e8e41;

  border-radius: 20px;
}
.pku-pomocnik-logo {
  margin-left: 30px;
}
.appTitle {
  width: 100%;
  background-color: #3e8e41;
}
.appTitle h1 {
  color: white;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 40px;
}
.alternativeButton {
  background-color: #2b552d;
}
nav {
  margin-top: 30px;
}

.mainmenu button {
  margin-left: 10px;
}
</style>
