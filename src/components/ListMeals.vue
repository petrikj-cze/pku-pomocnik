<template>
  <div>
    <h2>Seznam jídel</h2>
    <div
      v-for="(jidlo, index) in jidlaSeznam"
      :key="index"
      class="jidlo-box"
      @click="toggleJidlo(index)"
    >
      <h2>Nazev: {{ jidlo.nazevJidla }}</h2>
      <transition name="expand">
        <div v-if="expandedIndex === index" class="jidlo-detail">
          <ul>
            <li v-for="suroviny in jidlo.surovinyJidla">
              {{ suroviny.jidloSurovina }} : {{ suroviny.gramaz }} g
            </li>
          </ul>
          <b>Z těchto surovin uvaříte přibližně {{ jidlo.celkovaGramazJidla }} gramů jídla</b><br />
          <b>Na 100g má toto jídlo {{ jidlo.pheNa100gJidla }} phe</b> <br />
          <h3>Jak vařit:</h3>
          <i> {{ jidlo.receptJidla }}</i>
        </div>
      </transition>
    </div>
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
  data() {
    return {
      expandedIndex: null,
    }
  },
  methods: {
    toggleJidlo(index) {
      this.expandedIndex = this.expandedIndex === index ? null : index
    },
  },
}
</script>

<style lang="css" scoped>
.jidlo-box {
  background-color: #e8f5e9;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.jidlo-box:hover {
  background-color: #d0e8d0;
}

.jidlo-detail {
  margin-top: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px solid #a5d6a7;
}
.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.3s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 500px; /* dostatečně velká hodnota, aby se obsah ukázal */
  opacity: 1;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
</style>
