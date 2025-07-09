import { Text, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import ThemeSwitcher from "../components/ThemeSwitcher";

const TabSettingsScreen = () => {
  console.log("settings screen rendered");

  return (
    <View style={styles.container}>
      <Text>Tab Settings Screen</Text>

      <ThemeSwitcher />
    </View>
  );
};

export default TabSettingsScreen;

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.background,
    padding: theme.gap(2),
    gap: 25,
  },
}));
