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
    fetch(this.$store.state.apiURL + "/printers", { method: "get" })
      .then((Response) => {
        return Response.json();
      })
      .then((jsonData) => {
        this.orders = jsonData;
        console.log(this.orders)
        this.orders.forEach((element) => {
          this.orderLabels.push({
            Marka: element.brand,
            Model: element.name,
            Jakość: element.quality,
            "Koszt za gram wydruku": element.cost
          });
        });
      });
  }
}
</script>

<style>

</style>