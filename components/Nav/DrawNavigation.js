import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useRoute } from "@react-navigation/native";
import TabNavigation from "./TabNavigation";
import CustomDrawerContent from "./CustomDrawerContent";

const Drawer = createDrawerNavigator();

export default function DrawNavigation() {
  const route = useRoute();
  const { email } = route.params || {}; // Get email from SignIn

  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} email={email} />}>
      <Drawer.Screen name="Home" component={TabNavigation} />
    </Drawer.Navigator>
  );
}
