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
    fetch(this.$store.state.apiURL + "/filaments", { method: "get" })
      .then((Response) => {
        return Response.json();
      })
      .then((jsonData) => {
        this.orders = jsonData;
        console.log(this.orders)
        this.orders.forEach((element) => {
            let material = element.type;
          material += element.flexible ? " Flexible" : "";
          this.orderLabels.push({
            Marka: element.brand,
            Rodzaj: material,
            Kolor: element.colour,
            "Koszt za gram wydruku": element.cost
          });
        });
      });
  }
}
</script>

<style>

</style>