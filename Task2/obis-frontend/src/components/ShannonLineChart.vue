<template>
  <div class="container">
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script setup lang="ts">
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';
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
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
]);

provide(THEME_KEY, 'light');


const props = defineProps<{
  years: any,
  values: any,
  cutoff: string,
}>();

const option = ref({
  title: {
    text: ' Change in Shannon Index since ' + props.cutoff,
    left: 'center'
  },
  xAxis: {
    type: 'category',
    data: props.years 
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: props.values,
      type: 'line',
      smooth: true
    }
  ]
});
</script>

<style scoped>
.chart {
  height: 70vh;
  width: 100%;
}

.container {
  height: 40%;
  width: 50%;
}
</style>
