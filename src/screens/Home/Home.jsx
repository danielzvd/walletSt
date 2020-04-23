import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text } from 'react-native';
import PieGrath from './PieGrath';
import DataRow from './DataRow';
import ItemSeparator from '!/components/ItemSeparator/ItemSeparator';
import styles from './style';

const Home = () => {
  const [data, setData] = useState([
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
      amount: 100,
      color: '#006aff',
      title: '',
    },
  ]);

  useEffect(() => {
    setData([
      {
        key: 1,
        amount: 50,
        color: '#ff0084',
        title: 'Ações',
      },
      {
        key: 2,
        amount: 35,
        color: '#ea00ff',
        title: 'Tesouro',
      },
      {
        key: 3,
        amount: 15,
        color: '#006aff',
        title: 'Fundos',
      },
    ]);
  }, []);
  /*
    color: '#ffaa00',
    color: '#9a6bff',
 */
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.sideBySide}>
          <Icon
            name="file-document-outline"
            color="#899eff"
            size={28}
            style={{ marginLeft: 10 }}></Icon>
          <Text style={styles.textTitle}>Summary</Text>
        </View>
        <View style={styles.sideBySide}>
          <Text style={styles.percentage}>10.00 %</Text>
          <Icon name="trending-up" size={28} color={'#39a300'}></Icon>
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
      <PieGrath data={data} />
      <Text style={styles.dateAndHour}>21/04/2020 às 17h06</Text>
    </View>
  );
};

export default Home;
