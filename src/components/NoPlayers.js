import {StyleSheet, Pressable, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {openModal} from '../redux/features/modal/modalSlice';
import AddPlayerInModal from './AddPlayerInModal';
import ModalComponent from './ModalComponent';

const NoPlayers = () => {
  const groupState = useSelector(store => store.group);
  const dispatch = useDispatch();
  return (
    <View style={styles.addPlayerCard}>
      <Icon name="clock-time-six-outline" size={40} color={'#ccc'} />
      <Text style={{color: '#ccc', fontSize: 20, margin: 20}}>
        No hay jugadores aún.
      </Text>
      <Pressable onPress={() => dispatch(openModal())}>
        <Text style={{fontSize: 22, color: '#0083E0', fontWeight: 'bold'}}>
          + Agregar Jugadores
        </Text>
      </Pressable>
      <ModalComponent modalTitle={'Agregar juagadores'}>
        <AddPlayerInModal />
      </ModalComponent>
    </View>
  );
};

export default NoPlayers;

const styles = StyleSheet.create({
  addPlayerCard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});
