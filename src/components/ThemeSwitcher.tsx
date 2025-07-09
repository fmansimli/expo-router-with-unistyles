import { useState } from "react";
import { Text, View } from "react-native";
import { StyleSheet, UnistylesRuntime } from "react-native-unistyles";

import { Switch } from "@expo/ui/swift-ui";

const ThemeSwitcher = () => {
  const [value, setValue] = useState(false);

  function changeHandler(value: boolean): void {
    setValue(value);
    if (value) {
      UnistylesRuntime.setTheme("dark");
    } else {
      UnistylesRuntime.setTheme("light");
    }
  }

  return (
    <View style={styles.container}>
      <Text>Switch Theme</Text>
      <Switch value={value} onValueChange={changeHandler} variant="switch" />
    </View>
  );
};

export default ThemeSwitcher;

const styles = StyleSheet.create(() => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
}));
