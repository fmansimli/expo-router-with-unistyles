import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

const TabOneScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Tab One Screen</Text>
    </View>
  );
};

export default TabOneScreen;

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.background,
    padding: theme.gap(2),
  },
}));
