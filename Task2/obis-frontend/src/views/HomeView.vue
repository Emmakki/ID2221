<template>
  <main>
    <h1>Analyzing Ocean Biodiversity Data</h1>
    <h2>ID221 Task 2 Project</h2>
    <h3>By Emma Bibard Grau and Emma Raible</h3>
    <br>
    <p>
      Climate change is driving significant shifts in ocean conditions, including rising temperatures, acidification, and
      altered currents, which impact marine biodiversity and species distribution. Using the Ocean Biodiversity Information 
      System (OBIS) dataset, this project aims to analyze these changes, uncover patterns in marine biodiversity,
      and assess the ecological effects of climate-driven ocean shifts. Understanding these dynamics is essential for 
      predicting biodiversity trends and guiding conservation and climate adaptation strategies.
    </p>
    <br>
    <p>
      Please explore different areas of this data by navigating through the different tabs on the left. Below is a brief table 
      summarizing the observed counts for each species in our dataset. 
    </p>
    <br>
    <SpeciesTable v-if="tableLoaded" :data="statisticsTable"></SpeciesTable>
    <div v-else>
      Loading
    </div>
  </main>
</template>

<script setup lang="ts">
import SpeciesTable from '@/components/SpeciesTable.vue';
import { onMounted, ref } from 'vue';

const statisticsTable = ref([]);
const tableLoaded = ref(false);

onMounted(() => {
  fetch('http://localhost:5050/statistics')
    .then(response => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        statisticsTable.value = data;
        tableLoaded.value = true;
      });
    })
    .catch(err => {
      console.log('Fetch Error :-S', err);
    });
});

</script>
