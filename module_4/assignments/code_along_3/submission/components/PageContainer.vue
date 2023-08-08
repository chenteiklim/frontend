<template>
    <div id="page-container">
      <ClientPage />
      Second Page
    </div>
  </template>
  
  <script setup>
  import ClientPage from "@/components/ClientPage.vue";
  import { ref, onBeforeMount, onMounted } from "vue";
    const components= ref(ClientPage)
    
onBeforeMount(() => {
  console.log("beforeCreate()");
});

onMounted(() => {
  console.log("created()");
});
  </script>
  
  <style scoped>
  div#page-container {
    padding:20px;
    border: 2px solid green;
  }
  </style>