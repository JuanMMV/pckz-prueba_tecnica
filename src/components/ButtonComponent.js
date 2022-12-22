import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

TouchableOpacity.defaultProps = {activeOpacity: 0.8};

const ButtonComponent = ({onPress, title, bgcolor, icon, size, colorIcon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles(bgcolor).buttonContainer}>
      {icon ? (
        <Icon
          name={icon}
          size={size}
          color={colorIcon}
          style={{marginRight:5}}
        />
      ) : (
        ''
      )}
    
      <Text style={styles(bgcolor).buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = bgcolor =>
  StyleSheet.create({
    buttonContainer: {
      elevation: bgcolor === 'white' ? 0 : 0.5,
      backgroundColor: bgcolor,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
    },
    buttonText: {
      fontSize: 18,
      color: bgcolor === 'white' ? 'blue': '#fff',
      fontWeight: 'bold',
      alignSelf: 'center',
    },
  });
