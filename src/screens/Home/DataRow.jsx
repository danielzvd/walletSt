import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

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
      <View style={[styles.sideBySide]}>
        <View
          style={[styles.dataMark, { backgroundColor: greenOrRed('mark') }]}
        />
        <Text style={styles.title}>{name}</Text>
        <Text style={[styles.percentage, { color: greenOrRed() }]}>
          {percentage ? percentage + '%' : null}
        </Text>
      </View>
      <Text style={{ color: greenOrRed() }}>
        {name === 'Taxa interna de retorno' ? value + '%' : 'R$ ' + value}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sideBySide: {
    flexDirection: 'row',
  },
  sideBySideData: {
    marginTop: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dataMark: {
    height: '100%',
    width: 3,
    marginRight: 8,
  },
  percentage: {
    marginLeft: 90,
  },
  title: {
    color: '#595959',
  },
});

export default DataRow;
