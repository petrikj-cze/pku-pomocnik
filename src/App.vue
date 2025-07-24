<template>
  <div>
    <h1>PKU Pomocník</h1>
    <div class="hlavni-layout">
      <AddIngredient
        @pridej-surovinu="aktualizujSuroviny"
        :surovinySeznam="surovinySeznam"
        @pridej-jidlo="pridejNoveJidlo"
      />

      <ListIngredients :surovinySeznam="surovinySeznam" @smazat-surovinu="smazatPolozku" />
      <ListMeals :jidlaSeznam="jidlaSeznam" />
    </div>
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

<style>
.hlavni-layout {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;
  background-color: white;
  min-height: 100vh;
  font-family: 'Segoe UI', sans-serif;
  color: #2c3e50;
}

.hlavni-layout > *:nth-child(1) {
  flex: 2;
}

.hlavni-layout > *:nth-child(2),
.hlavni-layout > *:nth-child(3) {
  flex: 1;
}

@media (max-width: 768px) {
  .hlavni-layout {
    flex-direction: column;
  }
  .hlavni-layout > * {
    width: 100%;
    flex: none;
  }
}

/* Obecné styly pro bloky komponent */
.hlavni-layout > * {
  background-color: #f5fdf8;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 128, 0, 0.05);
  border: 1px solid #d3f5df;
}

/* Titulky */
h1,
h2 {
  color: #3e8e41; /* Vue zelená */
}

/* Tlačítka */
button {
  background-color: #3e8e41;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;
}

button:hover {
  background-color: #2f6e31;
}

/* Formulářové prvky */
input,
select {
  padding: 0.5rem;
  margin: 0.5rem 0;
  width: 100%;
  border: 1px solid #cce7d0;
  border-radius: 6px;
  font-size: 1rem;
}
</style>
