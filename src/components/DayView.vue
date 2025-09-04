<template>
  <h2>Denní přehled</h2>

  <div class="aktualniHodnoty">Aktuální hodnoty: 540 phe / 850 phe</div>

  <div class="jidelnicekDenni">
    <ul>
      <li class="denniJidlo">Snídaně</li>
      <li><span class="Spanphe">45 phe</span> NB rohlík, NB sýr</li>
      <li><span class="Spanphe">120 phe</span> zeleniová polévka</li>
      <li class="denniJidlo">Oběd</li>
      <li class="addButton"><button>Přidat položku</button></li>
    </ul>
  </div>
</template>

<style>
.aktualniHodnoty {
  color: white;
  background-color: #3e8e41;
  width: 70%;
  margin: auto;
  font-size: x-large;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 12px;
}

.jidelnicekDenni {
  margin: auto;
  width: 75%;
}

.jidelnicekDenni ul {
  list-style: none;
}

.jidelnicekDenni li {
  margin-top: 15px;
}

.Spanphe {
  font-weight: bold;
  background-color: #3e8e41;
  border-radius: 12px;
  color: white;
  padding: 5px;
  margin-right: 10px;
}

li.denniJidlo {
  background-color: rgb(114, 153, 104);
  border-radius: 12px;
  padding: 5px;
  text-align: center;
}

li.addButton {
  padding: 5px;
  width: 199px;
  margin: auto;
  margin-top: 15px;
  text-align: center;
}
</style>
