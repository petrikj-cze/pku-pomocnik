<template>
  <div class="seznam-surovin">
    <h2>Seznam surovin</h2>
    <ul>
      <li v-for="(surovina, index) in surovinySeznam" :key="index">
        {{ surovina.surovinaNazev }}, {{ surovina.phe }}
        <button @click="smazPolozku(index)">Smazat</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  emits: ['smazat-surovinu'],
  props: {
    surovinySeznam: {
      type: Array,
      required: true,
    },
  },
  methods: {
    smazPolozku(index) {
      this.$emit('smazat-surovinu', index)
    },
  },
}
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
  justify-content: space-between;
  align-items: left;
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
</style>
