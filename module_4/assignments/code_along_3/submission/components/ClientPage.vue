<template>
    <div id="client-pages">
      <ClientList />
      Third Page
    </div>
  </template>
  
  <script>
  import ClientList from "@/components/ClientList.vue";
  export default {
    components: { ClientList },
    beforeCreate() {
      console.log("beforeCreate()");
    },
    created() {
      console.log("create()");
    },
    mounted() {
      console.log("mounted()");
    },
  };
  </script>
  
  <style scoped>
  div#client-pages {
    padding:20px;
    border: 2px solid blue;
  }
  </style>