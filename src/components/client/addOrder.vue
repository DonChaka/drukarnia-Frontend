<template>
  <div>
    <pageHeader></pageHeader>
    <div v-if="authorized">
      <b-form>
        <b-form-group id="input-group-1" label="Printer:" label-for="input-1">
          <b-form-select id="input-1" v-model="form.printerId" :options="printerLabels" required></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-2" label="Filament:" label-for="input-1">
          <b-form-select id="input-2" v-model="form.filamentId" :options="filamentLabels" required></b-form-select>
        </b-form-group>

        <b-button @click="onSubmit">Submit</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      printers: [],
      printerLabels: [],
      filaments: [],
      filamentLabels: [],
      form: {
        userId: this.$store.state.uid,
        printerId: "",
        filamentId: "",
      },
    };
  },
  methods: {
    onSubmit() {
      axios
        .post(this.$store.state.apiURL + "/orders", this.form)
        .then((res) => {
          console.log(res);
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted: function () {
    fetch(this.$store.state.apiURL + "/printers/all", { method: "get" })
      .then((Response) => {
        return Response.json();
      })
      .then((jsonData) => {
        this.printers = jsonData;
        this.printers.forEach((element) => {
          this.printerLabels.push({
            text: element.brand + " " + element.name,
            value: element.id,
          });
        });
      });
    fetch(this.$store.state.apiURL + "/filaments", { method: "get" })
      .then((Response) => {
        return Response.json();
      })
      .then((jsonData) => {
        this.filaments = jsonData;
        this.filaments.forEach((element) => {
            let label = element.brand + " " + element.colour;
            label += element.flexible ? " Flexible" : ""; 
          this.filamentLabels.push({
            text: label,
            value: element.id,
          });
        });
      });
  },
  computed: {
    authorized() {
      return this.$store.state.authorized;
    },
  },
};
</script>

<style>
</style>