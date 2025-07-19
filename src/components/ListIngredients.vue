<template>
  <h2>Seznam surovin</h2>
  <ul>
    <li v-for="(surovina, index) in suroviny" :key="index">
      {{ surovina.name }}, {{ surovina.phe }} <button @click="smazPolozku(index)">Smazat</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    suroviny: {
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
