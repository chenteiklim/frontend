<script setup>

import { ref } from "vue";

      const data = ref(null)
      const selectedNumber=ref(1)
      const selectedOption=ref("people")
      const searchOptions=ref([
        "films",
        "planets",
        "people",
        "starships",
        "species",
        "vehicles",
      ])
    
  
  function getData() {
    fetch(
        `https://swapi.dev/api/${selectedOption.value}/${selectedNumber.value}`
    )
    .then((res) => res.json())
    .then((fetchData) => {
        console.log("SUCCESS");
        data.value=fetchData
        console.log(data)
    })
    .catch((err) => console.log(err));
    }
  
</script>

<template>
    <div class="wrapper">
        <div class="controls">
            <select name="" id="" v-model="selectedOption">
                <option
                    v-for="(option, index) in searchOptions"
                    :value="option"
                >
                    {{ option }}{{ index }}
                </option>
            </select>
            <input type="number" v-model="selectedNumber" />
            <button @click="getData">Search</button>
        </div>

    <h1 class="title">{{ selectedOption }} #{{ selectedNumber }}</h1>
        <div
            v-for="(obj, index, key) in data"
            
            class="characters"
        >
            <h3 class="subtitle" v-if="typeof obj === 'string'">
                {{ index }}{{ key }}
            </h3>
            <ul v-if="typeof obj === 'string'">
            {{
                obj
            }}
            </ul>
        </div>

        
        
    </div>
</template>

<style scoped>
</style>