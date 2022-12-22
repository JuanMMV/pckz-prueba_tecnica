import React from 'react';
import {Modal, Pressable, Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateStateModal, closeModal} from '../redux/features/modal/modalSlice';

const ModalComponent = ({children}) => {
  const modal = useSelector(state => state.modalState);
  const dispatch = useDispatch();
  // console.log(dispatch(openModal()));
  // console.log(modal.modalVisible);
  return (
    <>
      <Modal
        visible={modal.modalVisible}
        transparent={true}
        animationType={'fade'}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Pressable
              style={styles.buttonClose}
              onPress={() => dispatch(closeModal())}>
              <Text style={{fontSize: 15, color: 'white', fontWeight: 'bold'}}>
                X
              </Text>
            </Pressable>

            <View>{children}</View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    backgroundColor: 'white',
    margin: 30,
    borderRadius: 16,
    paddingHorizontal: 30,
    paddingVertical: 20,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    position: 'absolute',
    right: -10,
    top: -10,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    borderRadius: 20,
    padding: 4,
  },
});
