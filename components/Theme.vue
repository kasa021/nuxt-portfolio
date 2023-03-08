<template>
  <div >
    <ul>Color mode: {{ $colorMode.value }}</ul>
    <select v-model="$colorMode.preference" class="select-color">
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
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