import { Pressable, Text, View, StyleSheet } from "react-native";

function CustomButton({ children, onClickHandler, type }) {
  return (
    <Pressable style={styles.parent} onPress={onClickHandler}>
      <View style={styles.btnBg}></View>
      <View style={{ ...styles.buttonStyle, backgroundColor: type === "reset" ? "#EB5757" : "#6FCF97" }}>
        <Text>{children}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  parent: {
    position: "relative",
  },
  buttonStyle: {
    backgroundColor: "#6FCF97",
    width: 120,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
  },
  btnBg: {
    width: 120,
    height: 50,
    backgroundColor: "#011928",
    position: "absolute",
    bottom: -3,
    right: -3,
  },
});

export default CustomButton;
