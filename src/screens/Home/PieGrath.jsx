import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import { Circle, G, Line } from 'react-native-svg';

const PieGrath = ({ data }) => {
  const pieData = data.map(({ key, amount, color }) => ({
    value: amount,
    svg: { fill: color },
    key: key,
  }));

  const Labels = ({ slices }) => {
    return slices.map((slice, index) => {
      const { labelCentroid, pieCentroid, data } = slice;
      console.log(data.value);
      return (
        <G key={index}>
          <Line
            x1={labelCentroid[0]}
            y1={labelCentroid[1]}
            x2={pieCentroid[0]}
            y2={pieCentroid[1]}
            stroke={data.svg.fill}
          />
          <Circle
            cx={labelCentroid[0]}
            cy={labelCentroid[1]}
            r={20}
            fill={data.svg.fill}
          />
        </G>
      );
    });
  };

  return (
    <PieChart
      style={{ height: 350 }}
      data={pieData}
      innerRadius={'40%'}
      outerRadius={'65%'}
      labelRadius={'85%'}>
      <Labels />
    </PieChart>
  );
};

export default PieGrath;
