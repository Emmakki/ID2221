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

// const option2 = ref({
//   title: {
//     text: 'Traffic Sources',
//     left: 'center',
//   },
//   tooltip: {
//     trigger: 'item',
//     formatter: '{a} <br/>{b} : {c} ({d}%)',
//   },
//   legend: {
//     orient: 'vertical',
//     left: 'left',
//     data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
//   },
//   series: [
//     {
//       name: 'Traffic Sources',
//       type: 'pie',
//       radius: '55%',
//       center: ['50%', '60%'],
//       data: [
//         { value: 335, name: 'Direct' },
//         { value: 310, name: 'Email' },
//         { value: 234, name: 'Ad Networks' },
//         { value: 135, name: 'Video Ads' },
//         { value: 1548, name: 'Search Engines' },
//       ],
//       emphasis: {
//         itemStyle: {
//           shadowBlur: 10,
//           shadowOffsetX: 0,
//           shadowColor: 'rgba(0, 0, 0, 0.5)',
//         },
//       },
//     },
//   ],
// });
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

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}

.chart {
  height: 100vh;
  width: 100%;
}

.container {
  height: 50%;
  width: 50%;
}
</style>
