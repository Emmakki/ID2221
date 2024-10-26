<template>
  <div class="about">
    <h1>Shannon Index</h1>
    <div>
      {{ loadedData }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const loadedData = ref();

onMounted(() => {
  fetch('http://localhost:5050/shannon')
    .then(response => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`);

        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        loadedData.value = data;
      });
    })
    .catch(err => {
      console.log('Fetch Error :-S', err);
    });
})
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
