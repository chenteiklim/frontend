<template>
    <div>
      <input :style="inputStyle" type="text" v-model="message">
      <button :style="inputStyle" @click="emits('message', message)" >Emit Data</button>
    </div>
  </template>
  
  <script setup>
  import { inject } from 'vue';
  import { ref} from 'vue'
  const inputStyle = inject('inputStyle')
  const emits = defineEmits()
  const message = ref('')
  </script>