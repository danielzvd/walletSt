import React, { useEffect, useState } from 'react';
import { VictoryPie } from 'victory-native';
import { View, Text } from 'react-native';

const PieGrath = ({ data }) => {
  const pieData = data.map(({ key, amount, title }) => ({
    y: amount,
    key: key,
    title: title,
  }));
  const pieColor = data.map((each) => each.color);
  const [label, setLabel] = useState();

  useEffect(() => {
    const aux = [];
    data.map((each) => aux.push(each.amount));

    setLabel(aux);
  }, [data]);

  return (
    <View>
      <VictoryPie
        data={pieData}
        colorScale={pieColor}
        animate={{ easing: 'exp' }}
        height={330}
        innerRadius={60}
        labelPosition="centroid"
        labelRadius={({ innerRadius }) => innerRadius + 65}
        padAngle={2}
        labels={label}
        style={{
          data: {
            fillOpacity: 0.7,
          },
          labels: {
            fontSize: 16,
            stroke: '#525252',
            strokeWidth: 0.1,
          },
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 20,
        }}>
        {data.map((each) => {
          return (
            <View
              key={each.key}
              style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View
                style={{ height: 10, width: 10, backgroundColor: each.color }}
              />
              <Text style={{ color: each.color, marginLeft: 5 }}>
                {each.title}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default PieGrath;
