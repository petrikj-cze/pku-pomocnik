<template>
  <div>
    <h2>Přidat surovinu</h2>
    <form @submit.prevent="formPridatSurovinu">
      <select v-model="typPolozkySelect">
        <option value="jidlo">Jídlo</option>
        <option value="surovina">Surovina</option>
      </select>
      <fieldset v-show="typPolozkySelect === 'surovina'">
        <legend>Surovina</legend>
        <label>Název:</label>
        <input v-model="nameSurovina" />

        <label>PHE (mg):</label>
        <input v-model.number="phe" type="number" />
        <button type="submit">Přidat</button>
      </fieldset>
    </form>

    <!-- Přidání jídla -->

    <form @submit.prevent="formPridatJidlo">
      <fieldset v-show="typPolozkySelect === 'jidlo'">
        <legend>Jídlo</legend>
        <input v-model="nameJidlo" /><br />
        <select v-for="i in pocetSurovinJidlo" :key="i">
          <option v-for="(surovina, index) in this.surky">
            {{ surovina.surka }}
          </option>
        </select>
        <br />
        <button @click="pridatDalsiSurovinu">Přidat surovinu</button>
        <button type="submit">Přidat jídlo</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    surky: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      name: '',
      phe: 0,
      typPolozkySelect: 'surovina',
      pocetSurovinJidlo: 0,
    }
  },
  methods: {
    formPridatSurovinu() {
      console.log('Odesláno:', this.nameSurovina, this.phe)
      this.$emit('pridej-surovinu', this.nameSurovina, this.phe)
    },
    formPridatJidlo() {},
    pridatDalsiSurovinu() {
      this.pocetSurovinJidlo++
    },
  },
}
</script>
