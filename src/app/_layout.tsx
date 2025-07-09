import { Tabs } from "expo-router";
import { useUnistyles } from "react-native-unistyles";

const RootLayout = () => {
  const { theme } = useUnistyles();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.tabBackground,
        },
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="second" />
      <Tabs.Screen name="third" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
};

export default RootLayout;
