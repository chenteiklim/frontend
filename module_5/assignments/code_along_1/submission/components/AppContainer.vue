<script setup>
    import ProductForm from '@/components/ProductForm.vue'
    function receiveEmitAgain(value){
        console.log(value)
    }
</script>
<template>
    <ProductForm @message="receiveEmitAgain"/>
</template>