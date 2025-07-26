import React from "react";
import { ResponsiveLine } from "@nivo/line";
import timestampDateMinute from "../../core/services/timestampDateMinute";
import timestampDateHour from "../../core/services/timestampDateHour";
import timestampDateDay from "../../core/services/timestampDateDay";
import numberCommas from "../../core/services/numberCommas";
import { BasicTooltip } from "@nivo/tooltip";

export default function PriceChart(props) {
  // const LineTooltip = (props) => {
  //   return <BasicTooltip id={props.point.data.xFormatted} value={"$" + numberCommas(props.point.data.y)} color={"#0ecb81"} enableChip />;
  // };

  const PriceData = [
    {
      id: "CryptoChartPrice",
      color: "#0ecb81",
      data: [],
    },
  ];

  var minValue = props?.data?.prices[0][1];
  var maxValue = props?.data?.prices[0][1];

  if (props?.data?.prices) {
    for (let price = 0; price < props?.data?.prices?.length; price++) {
      if (props.data.prices[price][1] > maxValue) maxValue = props.data.prices[price][1];
      if (props.data.prices[price][1] < minValue) minValue = props.data.prices[price][1];

      var temp = {};

      if (props.days === 1) {
        temp.x = timestampDateMinute(props.data.prices[price][0]);
      } else if (props.days >= 2 && props.days <= 90) {
        temp.x = timestampDateHour(props.data.prices[price][0]);
      } else if (props.days >= 91) {
        temp.x = timestampDateDay(props.data.prices[price][0]);
      } else {
        temp.x = timestampDateDay(props.data.prices[price][0]);
      }

      if (props.data.prices[price][1] < 1) {
        temp.y = props.data.prices[price][1].toFixed(10);
      } else if (props.data.prices[price][1] < 100) {
        temp.y = props.data.prices[price][1].toFixed(3);
      } else {
        temp.y = Math.trunc(props.data.prices[price][1] * 100) / 100;
      }

      PriceData[0].data.push(temp);
    }
  }

  const minChart = minValue - minValue / 50;
  const maxChart = maxValue + maxValue / 150;
  const absChart = (minValue + maxValue) / 2;

  const minChartValue = Math.round((1 - (maxChart - minValue) / (maxChart - minChart)) * 100);
  const absChartValue = Math.round((1 - (maxChart - absChart) / (maxChart - minChart)) * 100);

  // console.log("PD - ", PriceData);

  return (
    <ResponsiveLine
      data={PriceData}
      margin={{ top: 10, right: 20, bottom: 5, left: 55 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: minChart,
        max: maxChart,
        stacked: true,
        reverse: false,
      }}
      curve={"linear"}
      theme={{
        tooltip: {
          container: {
            background: "#ffffff",
            color: "#333333",
            fontSize: 12,
            borderRadius: 6,
          },
        },
      }}
      colors={["#0ecb81"]}
      // defs={[
      //   {
      //     id: "gradientC",
      //     type: "linearGradient",
      //     colors: [
      //       // { offset: minChartValue, color: "#0ecb81" },
      //       // { offset: absChartValue, color: "#0ecb81" },
      //       { offset: 100, color: "#f6465d" },
      //     ],
      //   },
      // ]}
      fill={[{ match: "*", id: "gradientC" }]}
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={{
        orient: "left",
        tickSize: 5,
        tickPadding: 8,
        tickRotation: 0,
        legend: "",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      lineWidth={2}
      // tooltip={LineTooltip}
      pointSize={0}
      enableGridX={false}
      pointLabelYOffset={-12}
      enableArea={true}
      areaOpacity={0.5}
      areaBaselineValue={minValue - minValue / 50}
      crosshairType="cross"
      useMesh={true}
      legends={[]}
      motionConfig="default"
    />
  );
}
