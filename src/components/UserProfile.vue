<template>
  <h2>
    Uživatelský profil <u>{{ userStore.logedUserUsername }}</u>
  </h2>
  <div class="userProfileWrap">
    <h3>
      Nastavení uživatelského profilu (ID: {{ userStore.getLogedUserID }})
      <button @click="userStore.userLogout()">Odhlásit</button>
    </h3>
    <FormKit type="form" submit-label="Uložit změny">
      <FormKit
        type="text"
        name="username"
        id="username"
        label="Uživatelské jméno"
        :value="userStore.logedUserUsername"
      />

      <FormKit
        type="email"
        label="E-mailová adresa"
        name="email"
        id="email"
        :value="userStore.logedUserEmail"
      />

      <FormKit
        type="number"
        label="Maximální denní phe"
        name="maxdailyphe"
        id="maxdailyphe"
        :value="userStore.logedUserMaxDailyPhe"
      />

      <FormKit
        type="text"
        label="Odkaz na váš profil (Facebook, Twitter, Instagram) - volitelné"
        name="socialurl"
        id="socialurl"
        :value="userStore.logedUserSocial"
      />
    </FormKit>
    <hr />
    <h3>Seznam dočasných opatrovníků</h3>
    <table class="slaveListTable">
      <tr>
        <td>Babička</td>
        <td>Přidáno: 24.8.2025</td>
        <td><button>Smazat</button></td>
      </tr>
      <tr>
        <td>Vojtěch Kamprdlík - táborový vedoucí</td>
        <td>Přidáno: 21.7.2025</td>
        <td><button>Smazat</button></td>
      </tr>
    </table>
    <hr />
    <h3>Přidat dočasný účet opatrovníka</h3>
    <p>Co je dočasný účet opatrovníka?</p>
    <p>
      SLAVE účet bude možné přidávat a odebírat z účtu MASTER - typicky - dítě jede na tábor,
      ochotný kuchař dostane účet a bude to tam moci doplňovat a rodič bude moci kontrolovat. Pak se
      účet zase smaže. Účet SLAVE bude přidávat položky pod účet MASTERa. Bude se zakládat na e-mail
      SLAVE uživatele, kterému přijde mail typu: “Uživatel MASTER vám poslal odkaz do aplikace PKU
      Pomocík”. Slave uvidí suroviny, jídla (včetně receptů) přidané MASTER účtem a denní přehled.
    </p>
    <FormKit type="form" submit-label="Odeslat pozvánku">
      <FormKit
        type="text"
        name="slavenote"
        id="slavenote"
        label="Popis dočasného opatrovníka - POUZE PRO VÁS - vámi přidaný uživatel tento popisek neuvidí"
        placeholder="Babička, Školní kuchařka, Táborový vedoucí"
      />
      <FormKit
        type="email"
        name="emailslave"
        id="emailslave"
        label="E-mail dočasného opatrovníka"
        placeholder="babicka@seznam.cz"
      />
      <FormKit
        type="password"
        name="passwordslave2"
        id="passwordslave2"
        label="Heslo dočasného opatrovníka - heslo dostane opatrovník v mailu"
      />
      <FormKit
        type="password"
        name="passwordslave2"
        id="passwordslave2"
        label="Heslo znovu pro kontrolu"
      />
    </FormKit>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user-state'
const userStore = useUserStore()
</script>

<style lang="css" scoped>
.userProfileWrap {
  max-width: 70%;
  margin: auto;
}
.slaveListTable td {
  border: 1px solid #3e8e41;
  padding: 14px;
}

.slaveListTable {
  border: 3px solid #3e8e41;
}
</style>
