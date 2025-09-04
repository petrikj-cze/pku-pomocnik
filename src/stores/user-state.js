import router from '@/router'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    //dummy data
    userEmail: 'pepa@jednicka.cz',
    userPass: 'ahoj',
    loginError: null,
    //interface
    displayForm: 'log',
    //Uživatelská data
    isLogged: false,
    logedUserID: null,
    logedUserEmail: null,
    logedUserUsername: null,
    logedUserMaxDailyPhe: null,
    logedUserSocial: null,
  }),
  actions: {
    userLogout() {
      this.isLogged = false
      router.push('/user-interface')
    },
    changeUserForm() {
      if (this.displayForm === 'log') {
        this.displayForm = 'reg'
      } else if (this.displayForm === 'reg') {
        this.displayForm = 'log'
      }
    },
    logUser(loginMail, loginPass) {
      if (loginMail === this.userEmail && loginPass === this.userPass) {
        this.isLogged = true
        this.logedUserEmail = loginMail
        this.logedUserID = 2
        this.logedUserMaxDailyPhe = 17
        this.logedUserSocial = 'x.com/pepa1'
        this.logedUserUsername = 'Pepanino'
        router.push('/user-profile')
      } else {
        this.loginError = 'Spatne neco'
      }
    },
  },
  getters: {
    getLogedUserID: (state) => state.logedUserID,
  },
})
