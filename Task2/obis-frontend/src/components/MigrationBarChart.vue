<template>
  <div class="container">
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script setup lang="ts">
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  
} from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

use([
  CanvasRenderer,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

provide(THEME_KEY, 'light');


const props = defineProps<{
  counts: any,
  year: string,
}>();

const option = ref({
  title: {
    text: 'Average migration areas in ' + props.year,
    left: 'center',
  },
  xAxis: {
    type: 'category',
    data: ['Warm', 'Temperate', 'Cold']
  },
  yAxis: {
    type: 'value',
    label: 'Count'
  },
  series: [
    {
      data: props.counts,
      type: 'bar'
    }
  ]
});
</script>


<style scoped>
.chart {
  height: 50vh;
  width: 100%;
}

.container {
  height: 40%;
  width: 50%;
}
</style>
