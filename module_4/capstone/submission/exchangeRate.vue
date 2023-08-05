<script setup>
import {ref,onMounted} from "vue"


function getData() {
    fetch(
        `https://api.exchangerate.host/latest?base=EUR`
    )
    .then((res) => res.json())
    .then((fetchData) => {
        console.log("SUCCESS");
        rates.value = fetchData.rates; 
        console.log(rates)
    })
    .catch((err) => console.log(err));
}

const rates=ref({})
 const defaultRate = ref({
  values: "",
  option: "USD",
 
});
onMounted(() => {
    console.log(defaultRate.value.values + " " + defaultRate.value.option + " Hello")
  getData();

})
const exchangeRate = ref({
    values: "",
    option: "",
});

const convertedValue=ref(null)

function changeCurrency(){
    console.log(defaultRate.value.option+"hello world")
    console.log("a"+defaultRate.value.values)

    fetch(
        `https://api.exchangerate.host/latest?base=${defaultRate.value.option}`
    )
    .then((res) => res.json())
    .then((fetchData) => {
        rates.value = fetchData.rates; 
        console.log("rates"+rates.value[exchangeRate.value.option]);
    })
    .catch((err) => console.log(err));
}

function convertValue(){
    console.log("a"+defaultRate.value.values)

    convertedValue.value = Number(defaultRate.value.values) * Number(rates.value[exchangeRate.value.option]);
    console.log("value"+Number(defaultRate.value.values))
    console.log("rate"+Number(rates.value[exchangeRate.value.option]))
    console.log(convertedValue.value)
}
 



</script>
<template>
    <div id="container">
        <div id="wrapper">
            
            <div id="defaultRates">
                <select name="" id="" v-model="defaultRate.option" @change="changeCurrency">
                    <option :value="key" v-for="(rate,key) in rates" >
                        {{ key }}
                    </option>
                </select>
                <input type="text" v-model="defaultRate.values">
            </div>
            <div id="exchangeRates">
                <select name="" id="" v-model="exchangeRate.option">
                    <option :value="key" v-for="(rate,key) in rates" >
                        {{ key }}
                    </option>
                </select>
                <input type="text" v-model="convertedValue">
            </div>
        </div>
        <button id="button" @click="convertValue">Convert</button>
    </div>
</template>
<style scoped>
#container{
    width:100%;
    height: 1000px;
}
#button{
    margin-left: 800px;
}
#wrapper{
    margin-top: 200px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

#defaultRates{
    display: flex;
    flex-direction: column;
}
#exchangeRates{
    display: flex;
    flex-direction: column;
}
</style>