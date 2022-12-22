import {StyleSheet, Text, View, Button, Image, Pressable} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useEffect, useState} from 'react';
import NoPlayers from '../components/NoPlayers';
import { useSelector } from 'react-redux';
import { getAllKeys, getData } from '../services/locaStorage';


export const CreateRoomScreen = () => {
  const saveGroup = useSelector(state => state.group);
  const [data, setData] = useState('')

  useEffect(() => {
    (async () => {
      try {
        console.log(getAllKeys())
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  console.log('la de data es --------')
  console.log(data)
  console.log('fin-------------')
  return (
    <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={{fontSize: 25, color: 'white'}}>LOGO</Text>
        </View>
        <View style={styles.card}>
          <NoPlayers />
          <View style={styles.buttonHistory}>
            <ButtonComponent
              title={'Historial'}
              bgcolor={'orange'}
              icon={'clock-time-six-outline'}
              colorIcon={'white'}
              size={20}
            />
          </View>
        </View>
        <View style={{width: '80%'}}>
          <ButtonComponent title={'CONFIRMAR'} bgcolor={'#0083E0'} />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#848482',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
  logo: {
    width: 150,
    height: 58,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    borderRadius: 50,
    marginTop: 10,
  },
  card: {
    backgroundColor: 'white',
    width: '80%',
    height: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 20,
  },
  addPlayerCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonHistory: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
    width: '80%',
  },
  buttonContainer: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#68a0cf',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
});

