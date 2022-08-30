import React from "react";
import ReactEcharts from "echarts-for-react";
function Scatter() {

    const labelOption = {
        show: true,
        position: "insideBottom",
        distance: "15",
        align: "left",
        verticalAlign: "bottom",
        rotate: 0.1,
        formatter: '{c}  {name|{a}}',
        fontSize: 16,
        rich: {
          name: {}
        }
      };

  const option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow"
      }
    },
    legend: {
      data: ["Hue", "Color intensity"]
    },
    toolbox: {
      show: true,
      orient: "vertical",
      left: "right",
      top: "center"
    },

    xAxis: [
      {
        name:"Color intensity",
        type: "category",
        data: ['Hue  Color intensity', 'Hue  Color intensity','Hue  Color intensity','Hue  Color intensity', 'Hue  Color intensity'],
        axisTick: {
          alignWithLabel: true
        },
        
      }
    ],

    yAxis: [
      {
        type: "value",
        name: "Hue",
        position: "left"
      }
    ],
    series: [
      {
        name: "Hue",
        data: [5.64, 4.38, 5.68, 7.8,  4.32,],
        type: "scatter",
        label: labelOption,
        emphasis: {
            focus: 'series'
          },
        barGap: 0
      },
      {
        name: "Color intensity",
        data: [ 2.29,  1.28, 2.81, 2.18, 1.82],
        type: "scatter",
        label: labelOption,
        emphasis: {
            focus: 'series'
          },
        barGap: 0

      }
    ]
  };
  return <ReactEcharts width={20} height={100} option={option} />;
}

export default Scatter;
