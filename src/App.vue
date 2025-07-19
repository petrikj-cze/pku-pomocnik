<template>
  <div>
    <h1>PKU Pomocník</h1>

    <AddIngredient @pridej-surovinu="aktualizujSuroviny" :surky="surky" />

    <ListIngredients :suroviny="suroviny" @smazat-surovinu="smazatPolozku" />
  </div>
</template>

<script>
import AddIngredient from './components/AddIngredient.vue'
import ListIngredients from './components/ListIngredients.vue'

export default {
  components: {
    AddIngredient,
    ListIngredients,
  },
  props: {
    surky: {
      type: Array,
      default: () => [
        { surka: 'Brambory', phe: 100 },
        { surka: 'Mrkev', phe: 150 },
        { surka: 'Mouka', phe: 13 },
        { surka: 'NB Parek', phe: 50 },
      ],
    },
  },
  data() {
    return {
      suroviny: [],
    }
  },
  methods: {
    aktualizujSuroviny(name, phe) {
      this.suroviny.push({ name, phe })
    },
    smazatPolozku(index) {
      this.suroviny.splice(index, 1)
    },
  },
}
</script>
