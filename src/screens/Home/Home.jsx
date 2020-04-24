import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text } from 'react-native';
import PieGrath from './PieGrath';
import DataRow from './DataRow';
import ItemSeparator from '!/components/ItemSeparator/ItemSeparator';
import { useIsFocused } from '@react-navigation/native';
import styles from './style';

import { useTheme } from '!/hooks/use-theme';

const Home = ({ navigation }) => {
  const { theme, changeTheme } = useTheme();
  const isFocused = useIsFocused();
  const [opacity, setOpacity] = useState(0);
  const [data, setData] = useState(defaultData);

  useEffect(() => {
    if (isFocused) {
      setOpacity(1);
      setData([
        {
          key: 1,
          amount: 55.55,
          color: theme.acoesColor,
          title: 'Ações',
        },
        {
          key: 2,
          amount: 4.45,
          color: theme.fundoImbColor,
          title: 'Fundos',
        },
        {
          key: 3,
          amount: 29.1,
          color: theme.etfColor,
          title: 'ETF',
        },
        {
          key: 4,
          amount: 10.9,
          color: theme.tesouroDirColor,
          title: 'Tesouro',
        },
      ]);
    } else {
      setOpacity(0);
      setData(defaultData);
    }
  }, [isFocused]);

  useEffect(() => {}, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.cardColor }]}>
      <View style={styles.headerContainer}>
        <View style={styles.sideBySide}>
          <Icon
            name="file-document-outline"
            color={theme.secondaryColor}
            size={28}
            style={styles.documentIcon}></Icon>
          <Text style={[styles.textTitle, { color: theme.secondaryColor }]}>
            Summary
          </Text>
        </View>
        <View style={styles.sideBySide}>
          <Text style={[styles.percentage, { color: theme.successColor }]}>
            10.00 %
          </Text>
          <Icon name="trending-up" size={28} color={theme.successColor}></Icon>
        </View>
      </View>
      <ItemSeparator />
      <View style={styles.dataContainer}>
        <DataRow name="Total investido" value={'1000,00'} />
        <DataRow name="Valorização" value={'100,00'} percentage="10" />
        <DataRow name="Total disponível" value={'1100,00'} />
        <DataRow name="Rendimentos" value={'0,00'} percentage="0" />
        <DataRow name="Taxa interna de retorno" value={'10'} />
      </View>
      <PieGrath data={data} opacity={opacity} />
      <Text style={[styles.dateAndHour, { color: theme.dateAndHourColor }]}>
        21/04/2020 às 17h06
      </Text>
    </View>
  );
};

const defaultData = [
  {
    key: 1,
    amount: 0,
    color: '#f2f4ff',
    title: '',
  },
  {
    key: 2,
    amount: 0,
    color: '#f2f4ff',
    title: '',
  },
  {
    key: 3,
    amount: 0,
    color: '#f2f4ff',
    title: '',
  },
  {
    key: 4,
    amount: 100,
    color: '#006aff',
    title: '',
  },
];

export default Home;
