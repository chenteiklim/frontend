<script setup> 
import { ref,computed } from 'vue';

const answer = ref('0');
let currentNumber = ref('0');
let currentOperation = ref(null);

function appendNumber(number) {
    if (currentOperation.value !== null) {
    // An operation has been performed, update only currentNumber
    currentNumber.value = number.toString();
    console.log(currentNumber.value);
  } else {
    // No operation performed yet, update both answer and currentNumber
    if (currentNumber.value === '0' || currentNumber.value === 0) {
      currentNumber.value = number.toString();
      console.log(currentNumber.value);
    } else {
      currentNumber.value += number.toString();
      console.log(currentNumber.value);
    }
    answer.value = currentNumber.value; // Update answer here as well
  }
}

function performOperation(operation) {
  currentOperation.value = operation;
  currentNumber.value = '0';
}

function calculateResult() {
  const num1 = parseFloat(answer.value);
  const num2 = parseFloat(currentNumber.value);
  console.log("e"+num1)
  console.log("f"+num2)
    if (currentOperation.value==='+'){
        
    answer.value = (num1 + num2).toString();
      console.log(answer.value)
    } 
    
      
  
  currentNumber.value = '0'; // Reset currentNumber after performing the operation.
  currentOperation.value = null;
}

function clear() {
  answer.value = '0';
  currentNumber.value = '0';
  currentOperation.value = null;
}

const displayValue = computed(() => {
  if (currentOperation.value === null) {
    // No operation, display answer
    return answer.value;
  } else {
    // An operation has been selected, display currentNumber
    return currentNumber.value;
  }
});

</script>

<template>
    <body>
<h1>Calculator</h1>
<div id="answer">
    {{ displayValue }}
</div>
<div id="button">    
    <button id="grid-item" @click="appendNumber(1)">1</button>
    <button id="grid-item" @click="appendNumber(2)">2</button>
    <button id="grid-item" @click="appendNumber(3)">3</button>
    <button id="grid-item" @click="appendNumber(4)">4</button>
    <button id="grid-item" @click="appendNumber(5)">5</button>
    <button id="grid-item" @click="appendNumber(6)">6</button>
    <button id="grid-item" @click="appendNumber(7)">7</button>
    <button id="grid-item" @click="appendNumber(8)">8</button>
    <button id="grid-item" @click="appendNumber(9)">9</button>
    <button id="grid-item" @click="performOperation('+')">+</button>
    <button id="grid-item" @click="performOperation('-')">-</button>
    <button id="grid-item" @click="calculateResult()">=</button>
    <button id="grid-item" @click="clear">C</button>

</div>
</body>
</template>

<style scoped>
body{
    display: flex;
    flex-direction: column;
    align-items:center;
}
#grid-item{
    font-size:20px;
}
#button{
    width:300px;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap:20px;
}
#answer{
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:20px;
    width:300px;
    height:100px;
}
</style>
