import { Tabs } from "expo-router";

const RootLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="second" />
      <Tabs.Screen name="third" />
      <Tabs.Screen name="settings" />
    </Tabs>
  );
};

export default RootLayout;
