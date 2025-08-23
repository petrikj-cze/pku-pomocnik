<template>
  <headerGlobal />

  <div class="hlavni-layout">
    <!-- <AddIngredient
        @pridej-surovinu="aktualizujSuroviny"
        :surovinySeznam="surovinySeznam"
        @pridej-jidlo="pridejNoveJidlo"
      />

      <ListIngredients :surovinySeznam="surovinySeznam" @smazat-surovinu="smazatPolozku" />
      <ListMeals :jidlaSeznam="jidlaSeznam" /> -->

    <router-view />
  </div>

  <footerGlobal />
</template>

<script>
import footerGlobal from './components/footer.vue'
import headerGlobal from './components/header.vue'

export default {
  components: {
    footerGlobal,
    headerGlobal,
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
  gap: 1rem;
  padding: 2rem;
  background-color: white;
  min-height: 500px;
  font-family: 'Segoe UI', sans-serif;
}

h2 {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 50px;
  border-radius: 12px;
  border: 1px solid #3e8e41;
  color: white;
}

.hlavni-layout {
  margin-top: 30px;
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

.pageHeader {
  background-color: #2f6e31;
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

nav {
  margin-left: 2rem;
}
</style>
