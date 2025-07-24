<template>
  <div>
    <h2>Přidat surovinu</h2>
    <div class="typPolozky">
      <button
        @click="typPolozkySelect = 'jidlo'"
        :class="{ aktivni: typPolozkySelect === 'jidlo' }"
      >
        Přidat jídlo
      </button>
      <button
        @click="typPolozkySelect = 'surovina'"
        :class="{ aktivni: typPolozkySelect === 'surovina' }"
      >
        Přidat surovinu
      </button>
    </div>
    <div v-show="typPolozkySelect === 'surovina'">
      <form @submit.prevent="formPridatSurovinu">
        <fieldset v-show="typPolozkySelect === 'surovina'">
          <legend>Surovina</legend>
          <label>Název:</label>
          <input v-model="nameSurovina" />

          <label>PHE (mg):</label>
          <input v-model.number="phe" type="number" />
          <button type="submit">Přidat</button>
        </fieldset>
      </form>
    </div>

    <!-- Přidání jídla -->
    <div v-show="typPolozkySelect === 'jidlo'">
      <form @submit.prevent="formPridatJidlo">
        <fieldset>
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
          <h3>Recept jídla {{ nameJidlo }}</h3>
          <textarea v-model="receptJidla" rows="10" cols="50"></textarea><br />
          <button type="submit">Přidat jídlo</button>
        </fieldset>
      </form>
    </div>
    <div v-if="pridano === 'ano'">
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
      typPolozkySelect: 'surovina',
      nameJidlo: '',
      surovinyJidla: [{ jidloSurovina: '', gramaz: '' }],
      pridano: 'ne',
      celkovaGramaz: 0,
      pheNa100g: 0,
      totalPHE: 0,
      receptJidla: '',
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
        receptJidla: this.receptJidla,
      })
    },
    pridatDalsiSurovinu() {
      console.log('pridatDalsiSurovinu funkce', this.surovinyJidla)
      this.surovinyJidla.push({ jidloSurovina: '', gramaz: '' })
    },
  },
}
</script>

<style lang="css" scoped>
form {
  margin-bottom: 2rem;
  background-color: #f8fff9;
  border: 1px solid #cdeacd;
  border-radius: 10px;
  padding: 1.5rem;
}

fieldset {
  border: none;
  margin: 0;
  padding: 0;
  margin-bottom: 1rem;
}

legend {
  font-size: 1.2rem;
  font-weight: bold;
  color: #3e8e41;
  margin-bottom: 0.5rem;
}

label {
  display: block;
  font-weight: 500;
  margin-top: 0.5rem;
  color: #2c3e50;
}

.typPolozky {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.typPolozky button {
  flex: 1;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  border: 2px solid #4caf50;
  background-color: white;
  color: #4caf50;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.typPolozky button:hover {
  background-color: #e6f7eb;
}

.typPolozky button.aktivni {
  background-color: #4caf50;
  color: white;
}
</style>
