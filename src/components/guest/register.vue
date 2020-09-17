<template>
  <div v-if="!authorized">
    <pageHeader></pageHeader>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Your Username:" label-for="input-1">
        <b-form-input id="input-1" v-model="form.username" required placeholder="Enter username"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          required
          placeholder="Enter password"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Email address:" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'register',
    data() {
      return {
        form: {
          email: '',
          username: '',
          password: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        axios.post(this.$store.state.apiURL + '/users', {
        'email': this.form.email,
        'password': this.form.password,
        'username': this.form.username,
      })
            .then(res => {
                console.log(res)
                window.location = '/login'
            })
            .catch(err => {
                console.log(err)
            })
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
      }
    },
    computed: {
        authorized () {
            return this.$store.state.authorized
        }
    }
}
</script>

<style scoped>
.btn {
  margin-right: 10px;
}
</style>