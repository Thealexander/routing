<template>
  <h1>About Page</h1>
  <hr />
  <!--  <h2>{{ name }}</h2> -->

  <button @click="onChangeName">Cambiar Nomber</button>
</template>

<script>
export default {
  data() {
    return {
      name: "Alexander",
    };
  },

  methods: {
    onChangeName() {
      //  console.log('Se cambiarael nombre d alejandra')
      this.name = "Alexandra";
    },
  },

  beforeCreate() {
    console.log("beforeCreate");
  },
  Created() {
    this.name = "Alexander Alejandro";
    console.log("Created");
    //Peticiones http
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
  errorCaptured() {
    console.log("errorCaptured");
  },
  renderTracked() {
    console.log("renderTracked");
  },
  renderTriggered() {
    console.log("renderTriggered");
  },
};
</script>

<style>
</style>