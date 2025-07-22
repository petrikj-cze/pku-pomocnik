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
        <div v-for="(polozka, index) in surovinyJidla" :key="index">
          <select v-model="polozka.jidloSurovina">
            <option disabled value="">-- vyber surovinu --</option>
            <option
              v-for="surovina in surovinySeznam"
              :key="surovina.surovinaNazev"
              :value="surovina.surovinaNazev"
            >
              {{ surovina.surovinaNazev }} ({{ surovina.phe }} mg PHE / 100g)
            </option>
          </select>

          <input type="number" v-model.number="polozka.gramaz" placeholder="Gramáž (g)" />
        </div>

        <br />
        <button type="button" @click="pridatDalsiSurovinu">Přidat surovinu</button>
        <br />
        Celková gramáž uvařeného jídla:
        <input type="text" v-model="celkovaGramaz" placeholder="uveďte v gramech" />
        g<br />
        <button type="submit">Přidat jídlo</button>
      </fieldset>
    </form>
  </div>

  <div v-show="pridano === 'ano'">
    <h2>
      Přidáno jídlo <b>{{ nameJidlo }}</b> s následujícími parametry
    </h2>
    <ul>
      <li v-for="(doneCheck, index) in surovinyJidla" :key="index">
        {{ doneCheck.jidloSurovina }} s gramáží {{ doneCheck.gramaz }}g
      </li>
    </ul>
    Celková váha uvařeného jídla je: {{ celkovaGramaz }} gramů. <br />
    Toto jídlo ve {{ celkovaGramaz }} gramech obsahuje {{ totalPHE }} phe <br />
    Toto jídlo ve 100g obsahuje {{ pheNa100g }} phe <br />
  </div>
</template>

<script>
export default {
  emits: ['pridej-surovinu', 'pridej-jidlo'],
  props: {
    surovinySeznam: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      nameSurovina: '',
      phe: 0,
      typPolozkySelect: 'jidlo',
      nameJidlo: '',
      surovinyJidla: [{ jidloSurovina: '', gramaz: '' }],
      pridano: 'ne',
      celkovaGramaz: 0,
      pheNa100g: 0,
      totalPHE: 0,
    }
  },
  methods: {
    formPridatSurovinu() {
      console.log('Odesláno:', this.nameSurovina, this.phe)
      this.$emit('pridej-surovinu', this.nameSurovina, this.phe)
    },
    formPridatJidlo() {
      console.log('Jídlo přidáno', this.surovinyJidla)
      this.pridano = 'ano'

      this.totalPHE = this.surovinyJidla.reduce((sum, s) => {
        const nalezena = this.surovinySeznam.find((x) => x.surovinaNazev === s.jidloSurovina)
        return sum + (nalezena ? (nalezena.phe * s.gramaz) / 100 : 0)
      }, 0)
      const phena100gneformated = (this.totalPHE / this.celkovaGramaz) * 100
      this.pheNa100g = Math.round(phena100gneformated, 2)

      this.$emit('pridej-jidlo', {
        nazevJidla: this.nameJidlo,
        surovinyJidla: JSON.parse(JSON.stringify(this.surovinyJidla)),
        celkovaGramazJidla: this.celkovaGramaz,
        pheNa100gJidla: this.pheNa100g,
      })
    },
    pridatDalsiSurovinu() {
      console.log('pridatDalsiSurovinu funkce', this.surovinyJidla)
      this.surovinyJidla.push({ jidloSurovina: '', gramaz: '' })
    },
  },
}
</script>
