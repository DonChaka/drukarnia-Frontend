<template>
  <div>
    <pageHeader></pageHeader>
    <template>
      <div>
        <b-table striped hover :items="orderLabels"></b-table>
      </div>
    </template>
  </div>
</template>

<script>
export default {
    data() {
    return {
      orders: [],
      orderLabels: [],
    };
  },
  methods: {
  },
  mounted: function () {
    if(!this.$store.state.authorized)
      this.$router.push({ name: 'login' });
    fetch(this.$store.state.apiURL + "/orders/" + this.$store.state.uid, { method: "get" })
      .then((Response) => {
        return Response.json();
      })
      .then((jsonData) => {
        this.orders = jsonData;
        console.log(this.orders)
        this.orders.forEach((element) => {
          let material = element.filament.type;
          material += element.filament.flexible ? " Flexible" : "";
          this.orderLabels.push({
            Drukarka: element.printer.brand + " " + element.printer.name,
            Filament: element.filament.brand,
            Materiał: material,
            Kolor: element.filament.colour
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