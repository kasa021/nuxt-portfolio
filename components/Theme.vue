<template>
  <div>
    <div v-if="colorMode.preference === 'light'">
      <button class="select-color" @click="colorMode.preference = 'dark'">
        <IconLight />
      </button>
    </div>
    <div v-else-if="colorMode.preference === 'dark'">
      <button class="select-color" @click="colorMode.preference = 'light'">
        <iconDark />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

console.log(colorMode.preference)
</script>

<style >
body {
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}

.dark-mode .select-color {
  background-color: #091a28;
  color: #ebf4f1;
}

.select-color {
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.8);
}
</style>