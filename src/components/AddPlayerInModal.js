import {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {createUsers} from '../redux/features/users/usersSlice';
import ButtonComponent from './ButtonComponent';
import CreateGroup from './CreateGroup';

const AddPlayerInModal = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [inputUser, setInputUser] = useState('');
  const [groupView, setgroupView] = useState(false);

  const addPlayer = () => {
    setUsers(users => [
      ...users,
      {
        id: users.length,
        name: inputUser,
      },
    ]);
    setInputUser('');
  };

  const deleteUser = id => {
    setUsers(users.filter(item => item.id !== id));
  };

  const toCreateGroup = () => {
    dispatch(createUsers(users));
    setgroupView(true);
  };

  return (
    <View>
      {!groupView ? (
        <>
          <Text style={styles.modalTitle}>Agregar juagadores</Text>
          <View style={styles.userView}>
            {users.map((user, index) => {
              return (
                <View key={index} style={styles.userCard}>
                  <Text style={{color: 'black'}}>{user.name}</Text>
                  <Pressable
                    style={{paddingLeft: 10, paddingRight: 5}}
                    onPress={() => deleteUser(user.id)}>
                    <Text
                      style={{
                        color: 'black',
                        textAlignVertical: 'center',
                        fontWeight: 'bold',
                      }}>
                      x
                    </Text>
                  </Pressable>
                </View>
              );
            })}
          </View>
          <Text style={{color: 'red', marginLeft: 19}}>Ingresa un nombre</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              onChangeText={e => setInputUser(e)}
              defaultValue={inputUser}
            />
            <Pressable style={styles.addbutton} onPress={() => addPlayer()}>
              <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>
                +
              </Text>
            </Pressable>
          </View>
          <View style={{marginTop: 30}}>
            <ButtonComponent
              onPress={() => toCreateGroup()}
              title={'Confirmar'}
              bgcolor={'green'}
            />
          </View>
        </>
      ) : (
        <CreateGroup />
      )}
    </View>
  );
};

export default AddPlayerInModal;

const styles = StyleSheet.create({
  userView: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  userCard: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    flexDirection: 'row',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  input: {
    color: 'black',
    padding: 0,
    paddingHorizontal: 5,
    width: '80%',
    height: 40,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginHorizontal: 20,
  },
  addbutton: {
    backgroundColor: '#68a0cf',
    alignItems: 'center',
    justifyContent: 'center',
    width: 42,
    height: 42,
    padding: 1,
    borderRadius: 5,
  },
});
