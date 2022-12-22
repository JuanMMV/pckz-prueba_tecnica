import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddPlayerInModal from '../components/AddPlayerInModal';
import ModalComponent from '../components/ModalComponent';

const Stack = createNativeStackNavigator();

const AddGroupModal = () => {
  return (
    <ModalComponent>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="AddPlayerInModal" component={AddPlayerInModal} />
        </Stack.Navigator>
    </ModalComponent>
  );
};

export default AddGroupModal;
