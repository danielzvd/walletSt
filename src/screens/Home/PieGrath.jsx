import React, { useEffect, useState } from 'react';
import { VictoryPie } from 'victory-native';
import { View, Text } from 'react-native';
import styles from './style';

const DISTANCE_FROM_INNER_RADIUS = 60;

const PieGrath = ({ data, opacity }) => {
  const pieData = data.map(({ key, amount, title }) => ({
    y: amount,
    key: key,
    title: title,
  }));

  const pieColor = data.map((each) => each.color);

  const [label, setLabel] = useState();

  useEffect(() => {
    const aux = [];
    data.map((each) => aux.push(each.amount + '%'));

    setLabel(aux);
  }, [data]);

  return (
    <View>
      <VictoryPie
        data={pieData}
        colorScale={pieColor}
        animate={{ easing: 'exp' }}
        height={300}
        innerRadius={50}
        labelPosition="centroid"
        labelRadius={({ innerRadius }) =>
          innerRadius + DISTANCE_FROM_INNER_RADIUS
        }
        padAngle={1}
        labels={label}
        style={{
          data: {
            fillOpacity: 0.7,
          },
          labels: {
            fontSize: 14,
            strokeWidth: 0.1,
            fillOpacity: opacity,
          },
        }}
      />
      <View style={styles.graphBottomLabels}>
        {data.map((each) => {
          return (
            <View key={each.key} style={styles.labelsView}>
              <View
                style={[styles.labelEach, { backgroundColor: each.color }]}
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
