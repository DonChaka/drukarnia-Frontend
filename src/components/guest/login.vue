<template>
  <div>
    <pageHeader></pageHeader>
    <div v-if="!authorized">
    <b-form>
      <b-form-group id="input-group-1" label="Your Username:" label-for="input-1">
        <b-form-input id="input-1" v-model="user.username" required placeholder="Enter username"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="user.password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-button @click="login" variant="primary">Login</b-button>
    </b-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      errorForm: "",
      uid: '',
      user: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    login() {
      axios
        .post(this.$store.state.apiURL + "/users/login", {
          username: this.user.username,
          password: this.user.password,
        })
        .then((res) => {
          this.uid = res.data.uid;
          console.log("login.vue this.uid " + this.uid)
          this.$store.dispatch("saveUserLogged", this.user.username);
          this.$store.dispatch("saveUserId", this.uid)
          localStorage.setItem("access-token", res.data["token"]);
          localStorage.setItem("client", this.user.username);
          this.$router.push({ name: 'Home' });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    },
    computed: {
        authorized () {
            return this.$store.state.authorized
        }
  },
};
</script>

<style>
a:link {
  text-decoration: none;
  color: black;
}

a:visited {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: none;
  color: black;
}

a:active {
  text-decoration: none;
  color: black;
}
</style>