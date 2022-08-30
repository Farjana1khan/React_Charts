import React from "react";
import ReactEcharts from "echarts-for-react";
function Barchart() {

    const labelOption = {
        show: true,
        position: "insideBottom",
        distance: "15",
        align: "left",
        verticalAlign: "middle",
        rotate: 90,
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
      data: ["Alcohol", "Malic Acid"]
    },
    toolbox: {
      show: true,
      orient: "vertical",
      left: "right",
      top: "center"
    },

    xAxis: [
      {
        type: "category",
        data: ['Alcohol Malic Acid', 'Alcohol Malic Acid', 'Alcohol Malic Acid', 'Alcohol Malic Acid', 'Alcohol Malic Acid','Alcohol Malic Acid','Alcohol Malic Acid',],
        axisTick: {
          alignWithLabel: true
        },
     
      }
    ],

    yAxis: [
      {
        type: "value",
        name: "Alcohol",
        position: "left"
      }
    ],
    series: [
      {
        name: "Alcohol",
        data: [1, 2, 3, 4, 5, 6, 7],
        type: "bar",
        label: labelOption,
        emphasis: {
            focus: 'series'
          },
        barGap: 0
      },
      {
        name: "Malic Acid",
        data: [14.23, 13.16, 13.16, 14.37, 13.24, 14.2,  14.39],
        type: "bar",
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

export default Barchart;
