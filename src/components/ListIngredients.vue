<template>
  <h2>Seznam surovin</h2>

  <div class="seznam-surovin">
    <!-- <ul>
      <li v-for="(surovina, index) in surovinySeznam" :key="index">
        {{ surovina.surovinaNazev }}, {{ surovina.phe }}
        <button @click="smazPolozku(index)">Smazat</button>
      </li>
    </ul>

-->
    <ul>
      <li v-for="(surovina, index) in ingredientsStore.surovinySeznam" :key="index">
        <span class="liSurovinaNazev">{{ surovina.surovinaNazev }}</span
        ><span class="liSurovinaPhe">{{ surovina.phe }} mg Phe</span
        ><span class="liButton"><button>Upravit</button></span
        ><span class="liButton"
          ><button @click="ingredientsStore.smazatSurovinu(index)">Smazat surovinu</button></span
        >
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useIngredientsStore } from '@/stores/ingredients'
const ingredientsStore = useIngredientsStore()
</script>

<style lang="css" scoped>
.seznam-surovin {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.seznam-surovin ul {
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  padding: 0;
  list-style: none;
}

.seznam-surovin li {
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #e8f5e9; /* světle zelená */
  display: flex;
  margin-top: 0.25rem;
}

/* každý sudý řádek trochu jiný odstín */
.seznam-surovin li:nth-child(even) {
  background-color: #d0ebd2; /* trochu tmavší */
}

.seznam-surovin button {
  background-color: transparent;
  border: 1px solid #d32f2f;
  color: #d32f2f;
  padding: 0.25rem 0.5rem;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.seznam-surovin button:hover {
  background-color: #ffebee;
}

.liSurovinaNazev {
  min-width: 300px;
  font-weight: bold;
  background-color: white;
}

.liSurovinaPhe {
  width: 150px;
  background-color: #d32f2f;
}

.liButton {
  width: 140px;
  background-color: aqua;
}
</style>
