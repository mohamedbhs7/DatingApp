import React from "react";
import { 
  StyleSheet, Text, View, SafeAreaView, useColorScheme 
} from "react-native";
import Header from "../header-footer/Header";
import Footer from "../header-footer/Footer";
import ListProfiles from "./ListProfiles";
import { Button } from "react-native";
import { useNavigation } from '@react-navigation/native';



export default function AllProfilesMain() {
  const colorScheme = useColorScheme(); 
  const navigation = useNavigation();
  const navigate = () => {
    navigation.navigate("AllCharacteristics"); 
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text 
        style={[
          styles.title, 
          colorScheme === "light" ? styles.lightText : styles.darkText
        ]}
      >
        All Profiles Ready to Start!
      </Text>
      <Button title="Go to Characteristics" onPress={navigate} />
        
      <ListProfiles />
      <Footer />

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginTop: 10,
    fontSize: 16,
  },
  lightText: {
    color: "red",
  },
  darkText: {
    color: "green",
  },
});

