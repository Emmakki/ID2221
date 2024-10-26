<template>
  <div class="container">
    <v-chart
      ref="map"
      :option="option"
      style="background-color: #404a59"
    />
  </div>
    
</template>

<script setup lang="ts">
import { use, registerMap } from "echarts/core";
import { ScatterChart, EffectScatterChart } from "echarts/charts";
import {
  GeoComponent,
  TitleComponent,
  LegendComponent,
  TooltipComponent,
} from "echarts/components";
import { ref, shallowRef } from "vue";
import countriesMap from "../utils/countries.json";
import VChart from "vue-echarts";

use([
  ScatterChart,
  EffectScatterChart,
  GeoComponent,
  TitleComponent,
  LegendComponent,
  TooltipComponent
]);

registerMap("countries", countriesMap);

const props = defineProps<{
  loadedData: any,
}>();

const option = ref({
    textStyle: {
      fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
      fontWeight: 300
    },
    backgroundColor: "#abb1ba",
    tooltip: {
      trigger: "item"
    },
    legend: {
      orient: "vertical",
      right: "5%",
      top: "2%",
      data: ["Hotspot"],
      textStyle: {
        color: "#fff"
      }
    },
    geo: {
      map: "countries",
      itemStyle: {
        areaColor: "#7f8994",
        borderColor: "#111"
      },
      top: "4%",
      bottom: "0%"
    },
    series: [
      {
        name: "Hotspot",
        type: "scatter",
        coordinateSystem: "geo",
        data: props.loadedData,
        symbolSize: val => val[2] / 500,
        tooltip: {
          formatter: function (val) {
            return "Richness: " + val.value[2];
          }
        },
        itemStyle: {
          color: "#f45525"
        }
      },

    ]
  });

const map = shallowRef(null);

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
position: relative;
}
.container{
height: 900px;
width: 1320px;
}
</style>
