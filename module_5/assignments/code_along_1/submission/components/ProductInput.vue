<template>
    <div>
      <input type="text" v-model="message">
      <button @click="emits('message', message)">Emit Data</button>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue'
  
  const emits = defineEmits()
  const message = ref('')
  </script>