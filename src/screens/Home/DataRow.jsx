import React from 'react';
import { View, Text } from 'react-native';

import styles from './style';
import { useTheme } from '!/hooks/use-theme';

const DataRow = ({ name, value, percentage }) => {
  const { theme, changeTheme } = useTheme();
  const greenOrRed = (mark) => {
    if (name !== 'Total investido' && name !== 'Total disponível') {
      if (parseFloat(value) > 0) {
        return theme.successColor;
      }
      if (parseFloat(value) === 0) {
        return theme.warningColor;
      }
      if (parseFloat(value) < 0) {
        return theme.dangerColor;
      } else return null;
    } else {
      if (mark === 'mark') {
        return theme.primaryColor;
      } else return theme.textColor;
    }
  };

  return (
    <View style={styles.sideBySideData}>
      <View style={[styles.sideBySideDataRow]}>
        <View
          style={[styles.dataMark, { backgroundColor: greenOrRed('mark') }]}
        />
        <Text style={{ color: theme.textColor }}>{name}</Text>
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
