import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const ButtonComponent = ({onPress, title, color}) => {
  return (
    <TouchableOpacity onPress={onPress} style = {styles(color).buttonContainer}>
      <Text style={styles(color).buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonComponent

const styles = (color) => StyleSheet.create({
  buttonContainer: {
    elevation: 0.2,
    backgroundColor: color,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  }
});