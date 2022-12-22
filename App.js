/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import {CreateRoomScreen} from './src/screens/CreateRoomScreen';
import PlayersListScreen from './src/screens/PlayersListScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="cretaRoom" component={CreateRoomScreen} />
          <Stack.Screen name="PlayersListScreen" component={PlayersListScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
