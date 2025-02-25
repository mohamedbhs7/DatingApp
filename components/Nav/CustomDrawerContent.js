import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

export default function CustomDrawerContent(props) {
  const { email, navigation } = props;

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.emailText}>Welcome, {email || "Guest"}!</Text>
      </View>

      <DrawerItemList {...props} />

      <Pressable style={styles.logoutButton} onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.logout}>Log Out</Text>
      </Pressable>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: { padding: 20, backgroundColor: "#f4f4f4", alignItems: "center" },
  emailText: { fontSize: 16, fontWeight: "bold" },
  logoutButton: { marginTop: 20, padding: 10, backgroundColor: "", alignItems: "right" },
  logoutText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
});
