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
      data: ["Migration"],
      textStyle: {
        color: "#fff"
      }
    },
    geo: {
      map: "countries",
      emphasis: {
        label: {
          show: false
        },
        itemStyle: {
          areaColor: "#7f8994"
        }
      },
      itemStyle: {
        areaColor: "#7f8994",
        borderColor: "#111"
      },
      top: "4%",
      bottom: "0%"
    },
    series: [
      {
        name: "Migration",
        type: "scatter",
        coordinateSystem: "geo",
        data: props.loadedData,
        symbolSize: 20,
        tooltip: {
          formatter: function (val) {
            return "Year: " + val.value[2] + ", Temperature Region: " + val.value[3];
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
.chart {
  height: 100vh;
  position: relative;
}
.container{
  height: 500px;
  width: 820px;
}
</style>
