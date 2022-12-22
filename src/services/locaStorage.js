import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (id, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(id, jsonValue);
  } catch (e) {
    console.log(e);
  }
  console.log('Done.');
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@key');
    const result = JSON.parse(jsonValue);
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  console.log('Done.');
};

export const getAllKeys = async () => {
  let keys = [];
  try {
    keys = await AsyncStorage.getAllKeys();
  } catch (e) {
    // read key error
  }

  console.log(keys);
  // example console.log result:
  // ['@MyApp_user', '@MyApp_key']
};
