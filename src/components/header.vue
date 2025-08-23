<template>
  <div class="header">
    <img :src="logo" class="pku-pomocnik-logo" />
  </div>
  <nav>
    <router-link to="/"
      ><button><b>Denní přehled</b></button> </router-link
    >&nbsp;
    <router-link to="/add-ingredient"
      ><button><b>Přidat položku</b></button> </router-link
    >&nbsp; <router-link to="/list-ingredients"><button>Seznam surovin</button></router-link>&nbsp;
    <router-link to="/list-meals"><button>Seznam jídel</button></router-link>&nbsp;
    <router-link to="/user-profile"
      ><button class="alternativeButton">Uživatelský profil</button></router-link
    >&nbsp;
    <router-link to="/about"><button class="alternativeButton">O aplikaci</button></router-link
    >&nbsp;
    <router-link to="/about-pku"
      ><button class="alternativeButton">O fenylketonurii</button></router-link
    >&nbsp;
  </nav>
</template>
<script setup>
import logo from '@/assets/header.png'
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
</style>
