import { defineStore } from 'pinia'

export const useIngredientsStore = defineStore('ingredients', {
  state: () => ({
    surovinySeznam: [
      { surovinaNazev: 'Brambory', phe: 120 },
      { surovinaNazev: 'Mrkev', phe: 150 },
      { surovinaNazev: 'Mouka', phe: 13 },
      { surovinaNazev: 'NB Parek', phe: 50 },
      { surovinaNazev: 'Kaše', phe: 99 },
      { surovinaNazev: 'Jablko', phe: 5 },
      { surovinaNazev: 'Mrkev', phe: 150 },
      { surovinaNazev: 'Mouka', phe: 13 },
      { surovinaNazev: 'NB Parek', phe: 50 },
      { surovinaNazev: 'Kaše', phe: 99 },
      { surovinaNazev: 'Jablko', phe: 5 },
      { surovinaNazev: 'Mrkev', phe: 150 },
      { surovinaNazev: 'Mouka', phe: 13 },
      { surovinaNazev: 'NB Parek', phe: 50 },
      { surovinaNazev: 'Kaše', phe: 99 },
      { surovinaNazev: 'Jablko', phe: 5 },
      { surovinaNazev: 'Mrkev', phe: 150 },
      { surovinaNazev: 'Mouka', phe: 13 },
      { surovinaNazev: 'NB Parek', phe: 50 },
      { surovinaNazev: 'Kaše', phe: 99 },
      { surovinaNazev: 'Jablko', phe: 5 },
      { surovinaNazev: 'Mrkev', phe: 150 },
      { surovinaNazev: 'Mouka', phe: 13 },
      { surovinaNazev: 'NB Parek', phe: 50 },
      { surovinaNazev: 'Kaše', phe: 99 },
      { surovinaNazev: 'Jablko', phe: 5 },
      { surovinaNazev: 'Mrkev', phe: 150 },
      { surovinaNazev: 'Mouka', phe: 13 },
      { surovinaNazev: 'NB Parek', phe: 50 },
      { surovinaNazev: 'Kaše', phe: 99 },
      { surovinaNazev: 'Jablko', phe: 5 },
    ],
  }),
  actions: {
    pridatSurovinu(name, phe) {
      this.surovinySeznam.push({ surovinaNazev: name, phe })
    },
    smazatSurovinu(index) {
      this.surovinySeznam.splice(index, 1)
    },
  },
})
