<script setup>
    import ProductForm from '@/components/ProductForm.vue'
    import { ref, provide } from 'vue';
    function receiveEmitAgain(value){
        console.log(value)  
    }
    const inputStyle = ref({
      color: 'red',
      background: 'blue',
      padding: '10px 20px'
    });
    provide('inputStyle', inputStyle);

</script>
<template>
    <ProductForm @message="receiveEmitAgain"/>
</template>



