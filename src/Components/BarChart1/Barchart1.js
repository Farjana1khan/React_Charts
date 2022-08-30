import React from "react";
import ReactEcharts from "echarts-for-react";
function Barchart1() {

    const labelOption = {
        show: true,
        position: "insideLeft",
        distance: "31",
        align: "left",
        width: "40px",
        verticalAlign: "middle",
        rotate: 1,
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

    yAxis: [
      {
        name: "Malic Acid",
        type: "category",
        data: ['Alcohol Malic Acid', 'Alcohol Malic Acid', 'Alcohol Malic Acid'],
        axisTick: {
          alignWithLabel: true
        },
     
      }
    ],

    xAxis: [
      {
        type: "value",
        name: "Alcohol",
     
      }
    ],
    series: [
      {
        name: "Alcohol",
        data: [1, 2, 3],
        type: "bar",
        label: labelOption,
        emphasis: {
            focus: 'series'
          },
        barGap: 0
      },
      {
        name: "Malic Acid",
        data: [14.23, 13.16, 13.16],
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

export default Barchart1;
