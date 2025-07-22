<template>
  <h2>Seznam jídel</h2>
  <div v-for="jidlo in jidlaSeznam">
    <h2>Nazev: {{ jidlo.nazevJidla }}</h2>
    <ul>
      <li v-for="suroviny in jidlo.surovinyJidla">
        {{ suroviny.jidloSurovina }} : {{ suroviny.gramaz }} g
      </li>
    </ul>
    <b>Z těchto surovin uvaříte přibližně {{ jidlo.celkovaGramazJidla }} gramů jídla</b><br />
    <b>Na 100g má toto jídlo {{ jidlo.pheNa100gJidla }} phe</b>
  </div>
</template>
<script>
export default {
  props: {
    jidlaSeznam: {
      type: Array,
      required: true,
    },
  },
}
</script>
