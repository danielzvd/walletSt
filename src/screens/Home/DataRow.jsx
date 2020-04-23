import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';

const DataRow = ({ name, value, percentage }) => {
  const greenOrRed = (mark) => {
    if (name !== 'Total investido' && name !== 'Total disponível') {
      if (parseFloat(value) > 0) {
        return '#39a300';
      }
      if (parseFloat(value) === 0) {
        return '#e09e02';
      }
      if (parseFloat(value) < 0) {
        return '#ff0000';
      } else return null;
    } else {
      if (mark === 'mark') {
        return '#5372ff';
      } else return '#595959';
    }
  };

  return (
    <View style={styles.sideBySideData}>
      <View style={[styles.sideBySideDataRow]}>
        <View
          style={[styles.dataMark, { backgroundColor: greenOrRed('mark') }]}
        />
        <Text style={styles.title}>{name}</Text>
        <Text style={[styles.percentageDataRow, { color: greenOrRed() }]}>
          {percentage ? percentage + '%' : null}
        </Text>
      </View>
      <Text style={{ color: greenOrRed() }}>
        {name === 'Taxa interna de retorno' ? value + '%' : 'R$ ' + value}
      </Text>
    </View>
  );
};

export default DataRow;
