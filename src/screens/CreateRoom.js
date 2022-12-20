import {StyleSheet, Text, View, Button} from 'react-native';

export const CreateRoom = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={{fontSize: 25, color: 'white'}}>LOGO</Text>
      </View>
      <View style={styles.card}>
        <Text>Hola</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Enviar" />
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
    justifyContent: 'flex-start',
    paddingTop: 30,
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
