<template>
  <div id="app">
    <PageContainer />
    Main page
  </div>
  
</template>

<script setup>
import PageContainer from "@/components/PageContainer.vue";
import {ref} from "vue"
const components= ref(PageContainer) 

</script>

<style scoped>
div#app {
  
  border: 2px solid purple;
  padding: 20px;
  
}
</style>