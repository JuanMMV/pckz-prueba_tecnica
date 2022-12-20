import {StyleSheet, Text, View, Button, Image} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';

export const CreateRoomScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={{fontSize: 25, color: 'white'}}>LOGO</Text>
      </View>
      <View style={styles.card}>
        <Image source={require('../../assets/clock.svg')} />
        <Text style={{color:'#ccc', fontSize:20}}>No hay jugadores aún.</Text>
        <Text style={{fontSize:22}}>+ Agregar Jugadores</Text>
      </View>
      <View style={{width: '80%'}}>
        <ButtonComponent title={'BOTON titulo'} color= {'#3580FF'}/>
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
    paddingVertical:20,
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
  logo: {
    width: 150,
    height: 58,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    borderRadius: 50,
    marginTop:10
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
