import {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ButtonComponent from './ButtonComponent';
import ModalComponent from './ModalComponent';
import {createGroup} from '../redux/features/group/groupSlice';
import {closeModal} from '../redux/features/modal/modalSlice';
import {useNavigation} from '@react-navigation/native';
import { storeData } from '../services/locaStorage';

const CreateGroup = () => {
  const dispatch = useDispatch();
  const saveUsers = useSelector(state => state.saveUsers);
  const saveGroup = useSelector(state => state.group);
  const [groupName, setGroupName] = useState({});
  const navigation = useNavigation()

  const ToPlayersList = async() => {
    //console.log(saveUsers)
    dispatch(createGroup({groupName, saveUsers}))
    await storeData(saveGroup.groupId, saveGroup)
    dispatch(closeModal())
    navigation.push('PlayersListScreen')
    
  };

  return (
    <ModalComponent>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: 'black',
          }}
          source={{
            uri: 'https://media.istockphoto.com/id/1060970238/vector/group-of-people-sign-icon-user-group-network-ui-website-navigation-social-network-icons.jpg?s=170667a&w=0&k=20&c=LZp8124qSQIG8Fu2PHIRrA09A-43wwkQy3Vjz4_Yw7Y=',
          }}
        />
        <Text style={{color: 'black'}}>Agregar foto</Text>
      </View>
      <Text style={styles.modalTitle}>Nombre Evento</Text>
      <Text style={{color: '#ccc', textAlign: 'center'}}>
        Guarda la lista de jugadores para el futuro
      </Text>
      <View
        style={{alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
        <TextInput
          style={styles.input}
          onChangeText={e => setGroupName(e)}
          defaultValue={groupName}
        />
      </View>
      <View style={{marginTop: 20, marginHorizontal: 20}}>
        <ButtonComponent
          onPress={() => ToPlayersList()}
          title={'A Jugar!'}
          bgcolor={'green'}
        />
      </View>
    </ModalComponent>
  );
};

export default CreateGroup;

const styles = StyleSheet.create({
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
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
});
