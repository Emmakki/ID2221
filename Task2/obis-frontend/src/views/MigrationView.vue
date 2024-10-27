<template>
  <h1>Migration Data</h1>
  <br>
  <p>
    The sea surface temperature (SST) data is categorized into three regions: cold, temperate, and warm, based on its 
    value. This classification helps explore the relationship between temperature and species movement. 
  </p>
  <br>
  <div v-if="species.length > 0" class="data-view">
    <div class="charts">
      <MigrationBarChart :counts="counts1910" year="1910"></MigrationBarChart>
      <MigrationBarChart :counts="counts2010" year="2010"></MigrationBarChart>
    </div>
    <p>
      A simple way to view changes in migration patterns is in the bar charts above. However, we have also grouped the data 
      by species, year, and temperature region to calculate the average latitude and longitude for each 
      species over time. Below you can select a species and view data on it's migration patterns over time. We have limited 
      the set of species to those with at least 2000 data points in the OBIS dataset. 
    </p>
    <br>
    <Select v-model="selectedSpecies" @change="getMigrationData" :options="species" optionLabel="scientificname" placeholder="Select a Species" class="w-full md:w-56 mb-2" />
    <div v-if="selectedSpecies !== null">
      <Card class="card">
          <template #content>
              <p class="m-0">
                  Conservation status: {{ selectedSpecies.redlist_category !== null ? selectedSpecies.redlist_category : 'No data'}}
              </p>
              <p class="m-0">
                  Family: {{ selectedSpecies.family }}
              </p>
              <p class="m-0">
                  Genus: {{ selectedSpecies.genus }}
              </p>
              <p v-if="selectedSpecies.is_marine === '1.0'" class="m-0">
                  Marine species
              </p>
              <p v-if="selectedSpecies.is_brackish === '1.0'" class="m-0">
                  Brackish species
              </p>
              <p v-if="selectedSpecies.is_freshwater === '1.0'" class="m-0">
                  Freshwater species
              </p>
              <p v-if="selectedSpecies.is_terrestrial === '1.0'" class="m-0">
                  Terrestrial species
              </p>
              <MigrationBubbleMap v-if="selectedSpeciesMigrationData.length > 0" :loadedData="selectedSpeciesMigrationData"></MigrationBubbleMap>
              <ProgressSpinner v-else />
          </template>
      </Card>
    </div>
  </div>
  <ProgressSpinner v-else/>

</template>

<script setup lang="ts">
import MigrationBarChart from '@/components/MigrationBarChart.vue';
import { onMounted, ref } from 'vue';
import Select from 'primevue/select';
import Card from 'primevue/card';
import MigrationBubbleMap from '@/components/MigrationBubbleMap.vue';
import ProgressSpinner from 'primevue/progressspinner';

const counts1910 = ref([0, 0, 0]);
const counts2010 = ref([0, 0, 0]);
const species = ref([]);
const selectedSpecies = ref(null);
const selectedSpeciesMigrationData = ref([]);

async function getMigrationData() {
  selectedSpeciesMigrationData.value = [];
  fetch(`http://localhost:5050/migrationInfo/${selectedSpecies.value.scientificname}`)
    .then(response => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`);
        return;
      }
      response.json().then(function(data) {
        // selectedSpeciesMigrationData.value = data;
        for (const dataPoint in data) {
          selectedSpeciesMigrationData.value.push({
            'value': [data[dataPoint].avg_longitude, data[dataPoint].avg_latitude, data[dataPoint].date_year, data[dataPoint].temperature_region],
          });
        }
      });
    })
    .catch(err => {
      console.log('Fetch Error :-S', err);
    });
}

onMounted(async () => {
  fetch(`http://localhost:5050/migrationsAggregated/${1910}/${'warm'}`)
    .then(response => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`);
        return;
      }
      response.json().then(function(data) {
        counts1910.value[0] = +data[0].total;
      });
    })
    .catch(err => {
      console.log('Fetch Error :-S', err);
    });

    fetch(`http://localhost:5050/migrationsAggregated/${1910}/${'temperate'}`)
    .then(response => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`);
        return;
      }
      response.json().then(function(data) {
        counts1910.value[1] = +data[0].total;
      });
    })
    .catch(err => {
      console.log('Fetch Error :-S', err);
    });

    fetch(`http://localhost:5050/migrationsAggregated/${1910}/${'cold'}`)
    .then(response => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`);
        return;
      }
      response.json().then(function(data) {
        counts1910.value[2] = +data[0].total;
      });
    })
    .catch(err => {
      console.log('Fetch Error :-S', err);
    });

    fetch(`http://localhost:5050/migrationsAggregated/${2010}/${'warm'}`)
    .then(response => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`);
        return;
      }
      response.json().then(function(data) {
        counts2010.value[0] = +data[0].total;
      });
    })
    .catch(err => {
      console.log('Fetch Error :-S', err);
    });

    fetch(`http://localhost:5050/migrationsAggregated/${2010}/${'temperate'}`)
    .then(response => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`);
        return;
      }
      response.json().then(function(data) {
        counts2010.value[1] = +data[0].total;
      });
    })
    .catch(err => {
      console.log('Fetch Error :-S', err);
    });

    fetch(`http://localhost:5050/migrationsAggregated/${2010}/${'cold'}`)
    .then(response => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`);
        return;
      }
      response.json().then(function(data) {
        counts2010.value[2] = +data[0].total;
      });
    })
    .catch(err => {
      console.log('Fetch Error :-S', err);
    });


  fetch('http://localhost:5050/statistics')
    .then(response => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`);
        return;
      }
      response.json().then(function(data) {
        species.value = data;
      });
    })
    .catch(err => {
      console.log('Fetch Error :-S', err);
    });
})
</script>

<style scoped>
.charts {
  display: flex;
}

.card {
  height: 680px;
}
</style>
