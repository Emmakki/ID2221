<template>
  <div>
    <h1>Shannon Index</h1>
    <p>
      The Shannon index is computed to assess biodiversity over the years. This index considers the proportions of
      species observed, providing insights into the diversity of species within the dataset. 
    </p>
    <br>
    <p>
      As we can see, this metric varies a lot over time, and data is quite noisy. Generally this metric has increased over
      time as we have started to collect more data and had better methods of data storage. However, when we limit our window of analysis to the last 20 years,
      we see a startling decline. Most recent years of data might still be getting collected, but this is a quite worrisome
      trend to observe. 
    </p>
    <br>
    <div class="charts">
      <ShannonLineChart :years=years1750 :values="shannon1750" :cutoff="'1750'"></ShannonLineChart>
      <ShannonLineChart :years=years1980 :values="shannon1980" :cutoff="'1980'"></ShannonLineChart>
    </div>
  </div>
</template>

<script setup lang="ts">
import ShannonLineChart from '@/components/ShannonLineChart.vue';
import { onMounted, ref } from 'vue';

const loadedData = ref();
const years1750 = ref([]);
const shannon1750 = ref([]);
const years1980 = ref([]);
const shannon1980 = ref([]);

onMounted(() => {
  fetch('http://localhost:5050/shannon')
    .then(response => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`);
        return;
      }
      response.json().then(function(data) {
        loadedData.value = data;
        data = data.sort((a: any, b: any) => {
          if (a.date_year < b.date_year) {
            return -1;
          }
          return 1;
        });

        for (const dataPoint in data) {
          if (dataPoint && data[dataPoint].date_year >= 1750) {
            years1750.value.push(data[dataPoint].date_year);
            shannon1750.value.push(data[dataPoint].shannon_index);
          }
          if (dataPoint && data[dataPoint].date_year >= 1980) {
            years1980.value.push(data[dataPoint].date_year);
            shannon1980.value.push(data[dataPoint].shannon_index);
          }
        }
      });
    })
    .catch(err => {
      console.log('Fetch Error :-S', err);
    });
})
</script>

<style>
.charts {
  display: flex;
  flex-direction: row;
}
</style>
