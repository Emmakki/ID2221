<template>
  <h1>Species Richness as a measure of Biodiversity</h1>
  <p>
    The cleaned data is processed to determine species richness by grouping it based on geographic coordinates. 
    This involves creating a grid system to aggregate and count distinct species observed in different areas. Species richness
    is an indicator of biodiversity within a given area, and can help identify areas where biodiversity is threatened or
    where we might need to be collecting more data. 
  </p>
  <div>
    <BiodiversityBubbleMap :loadedData="loadedData"></BiodiversityBubbleMap>
  </div>
</template>

<script setup lang="ts">
import BiodiversityBubbleMap from '@/components/BiodiversityBubbleMap.vue';
import { onMounted, ref } from 'vue';

const loadedData = ref([]);

onMounted(() => {
  fetch('http://localhost:5050/hotspots')
    .then(response => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`);

        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {

        for (const dataPoint in data) {
          if (dataPoint && data[dataPoint].species_richness > 100) {
            loadedData.value.push({
              'richness': data[dataPoint].species_richness, 
              'value': [data[dataPoint].lon_grid, data[dataPoint].lat_grid, data[dataPoint].species_richness],
            })
          }
        }
        console.log(loadedData.value);
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
