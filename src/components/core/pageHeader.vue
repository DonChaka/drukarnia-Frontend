<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <b-nav-item class="navbar-brand" :to="'/'">Drukarnia</b-nav-item>
      <b-nav-item style="list-style-type: none" :to="'printers'">Drukarki</b-nav-item>
      <b-nav-item style="list-style-type: none" :to="'filaments'">Filamenty</b-nav-item>
      <div class="pull-right">
        <div v-if="!authorized">
        <button
          type="button"
          class="btn btn-outline-info"
          onclick="window.location.href = '/login';"
        >Zaloguj się</button>
        <button
          type="button"
          class="btn btn-info"
          onclick="window.location.href = '/register';"
        >Zarejestruj się</button>
        </div>
        <div v-if="authorized">
        Witaj, {{ getLoggedUser() }}
        <router-link to="/addOrder" type="button" class="btn btn-outline-info">Zamów wydruk</router-link>
        <button type="button" class="btn btn-info" v-on:click="signOut()">Wyloguj się</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  name: "pageHeader",
  data() {
    return {};
  },
  methods: {
    getLoggedUser: function () {
      return this.$store.state.loggedUser;
    },
    getUid: function () {
      return this.$store.state.uid;
    },
    signOut: function () {
      this.$store.dispatch({
        type: "signOut",
      });
    },
    addOrder: function () {
      this.$router.push({ name: "addOrder" });
    },
  },
  computed: {
    authorized() {
      return this.$store.state.authorized;
    },
    loggedUser() {
      return this.$store.state.loggedUser;
    },
  },
};
</script>

<style scoped>
.btn {
  margin-left: 5px;
}
.b-nav-item {
  margin: 5px;
}
</style>