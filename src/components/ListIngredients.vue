<template>
  <h2>Seznam surovin</h2>
  <ul>
    <li v-for="(surovina, index) in surovinySeznam" :key="index">
      {{ surovina.surovinaNazev }}, {{ surovina.phe }}
      <button @click="smazPolozku(index)">Smazat</button>
    </li>
  </ul>
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
