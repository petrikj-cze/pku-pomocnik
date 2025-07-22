<template>
  <div>
    <h1>PKU Pomocník</h1>

    <AddIngredient
      @pridej-surovinu="aktualizujSuroviny"
      :surovinySeznam="surovinySeznam"
      @pridej-jidlo="pridejNoveJidlo"
    />

    <ListIngredients :surovinySeznam="surovinySeznam" @smazat-surovinu="smazatPolozku" />
    <ListMeals :jidlaSeznam="jidlaSeznam" />
  </div>
</template>

<script>
import AddIngredient from './components/AddIngredient.vue'
import ListIngredients from './components/ListIngredients.vue'
import ListMeals from './components/ListMeals.vue'

export default {
  components: {
    AddIngredient,
    ListIngredients,
    ListMeals,
  },
  props: {},
  data() {
    return {
      surovinySeznam: [
        { surovinaNazev: 'Brambory', phe: 120 },
        { surovinaNazev: 'Mrkev', phe: 150 },
        { surovinaNazev: 'Mouka', phe: 13 },
        { surovinaNazev: 'NB Parek', phe: 50 },
        { surovinaNazev: 'Kaše', phe: 99 },
      ],
      jidlaSeznam: [],
    }
  },
  methods: {
    aktualizujSuroviny(name, phe) {
      this.surovinySeznam.push({ surovinaNazev: name, phe: phe })
    },
    smazatPolozku(index) {
      this.surovinySeznam.splice(index, 1)
    },
    pridejNoveJidlo(jidlo) {
      this.jidlaSeznam.push(jidlo)
      console.log('JIIIDLO: ', jidlo)
    },
  },
}
</script>
