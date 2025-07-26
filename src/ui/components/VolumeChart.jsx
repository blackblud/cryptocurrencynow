import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import timestampDateMinute from '../../core/services/timestampDateMinute';
import timestampDateHour from '../../core/services/timestampDateHour';
import timestampDateDay from '../../core/services/timestampDateDay';
import nFormatter from '../../core/services/nFormatter';
import numberCommas from '../../core/services/numberCommas';
import { BasicTooltip } from '@nivo/tooltip';
import distributedCopy from '../../core/services/distributedCopy';

export default function CoinChart(props) {
  var VolumeData = [];

  if (props.data.total_volumes) {
    for (let volume = 0; volume < props?.data?.total_volumes?.length; volume++) {
      var temp = {};
      if (props.days === 1) {
        temp.date = timestampDateMinute(props.data.total_volumes[volume][0]);
      } else if (props.days >= 2 && props.days <= 90) {
        temp.date = timestampDateHour(props.data.total_volumes[volume][0]);
      } else if (props.days >= 91) {
        temp.date = timestampDateDay(props.data.total_volumes[volume][0]);
      } else {
        temp.date = timestampDateDay(props.data.total_volumes[volume][0]);
      }

      if (props.data.total_volumes[volume][1] < 1) {
        temp.Volume = props.data.total_volumes[volume][1].toFixed(10);
      } else {
        temp.Volume = Math.round(props.data.total_volumes[volume][1]);
      }
      VolumeData.push(temp);
    }
  }

  if (VolumeData.length > 250 && VolumeData.length < 290) {
    VolumeData = distributedCopy(VolumeData, 80);
  } else if (VolumeData.length > 150 && VolumeData.length < 170) {
    VolumeData = distributedCopy(VolumeData, 98);
  } else if (VolumeData.length > 700 && VolumeData.length < 725) {
    //1m 111 -> 110
    VolumeData = distributedCopy(VolumeData, 110);
  } else if (VolumeData.length > 2150 && VolumeData.length < 2175) {
    //3m 111 -> 110
    VolumeData = distributedCopy(VolumeData, 110);
  } else if (VolumeData.length > 175 && VolumeData.length < 190) {
    //6m
    VolumeData = distributedCopy(VolumeData, 110);
  } else if (VolumeData.length > 350 && VolumeData.length < 375) {
    //1y 178 -> 177
    VolumeData = distributedCopy(VolumeData, 177);
  } else {
    //max
    VolumeData = distributedCopy(VolumeData, 177);
  }

  const BarTooltip = (props) => {
    return <BasicTooltip id={props.indexValue} value={'$' + numberCommas(props.value)} />;
  };

  return (
    <ResponsiveBar
      data={VolumeData}
      keys={['Volume']}
      colors={['#d1d5db']}
      indexBy="date"
      margin={{ top: 5, right: 20, bottom: 10, left: 55 }}
      padding={0.2}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={{ format: (v) => `${nFormatter(v)}`, tickValues: 4, tickSize: 5, tickPadding: 8, tickRotation: 0 }}
      enableLabel={false}
      labelSkipWidth={12}
      tooltip={BarTooltip}
      theme={{
        tooltip: {
          container: {
            background: '#ffffff',
            color: '#333333',
            fontSize: 12,
            borderRadius: 6,
          },
        },
      }}
    />
  );
}
