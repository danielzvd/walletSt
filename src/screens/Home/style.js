import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
    backgroundColor: '#f2f4ff',
    elevation: 3,
    borderRadius: 10,
  },

  headerContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },

  documentIcon: { marginLeft: 10 },

  sideBySide: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 10,
  },

  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#899eff',
    marginLeft: 10,
  },

  percentage: {
    color: '#39a300',
    alignSelf: 'center',
    marginRight: 5,
    fontSize: 18,
  },

  dataContainer: {
    marginHorizontal: 10,
    marginBottom: 30,
  },

  dateAndHour: {
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10,
    color: '#9c9c9c',
  },

  //dataRow

  sideBySideDataRow: {
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
  percentageDataRow: {
    marginLeft: 90,
  },
  title: {
    color: '#595959',
  },

  //pieGrath

  graphBottomLabels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  labelsView: { flexDirection: 'row', alignItems: 'center' },
  labelEach: { height: 10, width: 10 },
});

export default styles;
