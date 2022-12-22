import { useNavigation } from '@react-navigation/native';
import {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ButtonComponent from '../components/ButtonComponent';
import {getData} from '../services/locaStorage';

const PlayersListScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const saveGroup = useSelector(state => state.group);
  const users = saveGroup.groupUsers;

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await getData('11faf734-0286-4cb2-9a3a-2c89a64fe6c5');
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   })();
  // }, []);

  const toDetailGroup = () => {
    navigation.push('cretaRoom')
  };

  console.log(saveGroup);
  return (
    <View
      style={{
        backgroundColor: '#848482',
        flex: 1,
        padding: 20,
        paddingBottom: 20,
      }}>
      <View style={{paddingHorizontal: 10, flex: 1}}>
        <Text> -- </Text>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 50,
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Jugadores</Text>
          <Text style={{fontSize: 20}}>{saveGroup.groupDate}</Text>
        </View>
        <ScrollView>
          {users.map((user, index) => {
            return (
              <Text
                key={index}
                style={{fontSize: 20, fontWeight: 'bold', paddingVertical: 5}}>
                {index + 1}. {user.name}
              </Text>
            );
          })}
        </ScrollView>
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <ButtonComponent
          onPress={() => toDetailGroup()}
          title={'Seleccionar'}
          bgcolor={'#0083E0'}
        />
      </View>
    </View>
  );
};

export default PlayersListScreen;
