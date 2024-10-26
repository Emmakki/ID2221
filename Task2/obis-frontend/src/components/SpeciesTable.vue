<template>
  <div>
    <DataTable :value="props.data" paginator :rows="20" tableStyle="min-width: 50rem; max-width: 60rem">
      <Column field="scientificname" header="Scientic Name"></Column>
      <Column field="count_per_species" header="Data count"></Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { ref } from 'vue';

const props = defineProps<{
  data: any
}>()


const species = ref([
  {
    scientificname: "Oceanospirillales",
    count_per_species: 1397
  },
  ]) 
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
</style>
