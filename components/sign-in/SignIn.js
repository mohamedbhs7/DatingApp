import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { TextInput } from "react-native-paper";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("King");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/log-in.png")} style={styles.image} resizeMode="contain" />
      <TextInput mode="outlined" label="Email address" value={email} onChangeText={setEmail} style={styles.input} />
      <TextInput mode="outlined" label="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} />
      <Text style={styles.forgotPassword}>Forgot your Password?</Text>
      <Pressable 
  style={styles.buttonLogin} 
  onPress={() => navigation.navigate("DrawNavigation", { email })}>
  <Text style={styles.textStyle}>Log In</Text>
</Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: { width: 300, height: 200, marginTop: 50 },
  input: { marginBottom: 10, width: "80%", backgroundColor: "whitesmoke" },
  forgotPassword: { fontSize: 11, alignSelf: "center", color: "#8f8f8f", marginLeft: 130 },
  buttonLogin: { borderRadius: 20, padding: 10, width: 100, backgroundColor: "#e5d5da" },
  textStyle: { fontWeight: "bold", textAlign: "center" },
});
