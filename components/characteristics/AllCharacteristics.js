import Header from "../header-footer/Header";
import Footer from "../header-footer/Footer";
import { StyleSheet, Text, View, SectionList, StatusBar } from "react-native";
import React, { useState } from "react";
import { CheckBox } from "@rneui/themed";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/core";

export default function AllCharacteristics() {
  const DATA = [
    {
      title: "Interests and Hobbies",
      data: [
        "Music",
        "Art",
        "Reading",
        "Travel",
        "Sports",
        "Dance",
        "Photography",
        "Learning Languages",
        "Writting",
        "Community Involvment",
      ],
    },
    {
      title: "Personality Characteristics",
      data: [
        " Adventurous",
        "Appreciative",
        "Charming",
        "Caring",
        "Calm",
        "Clear-Headed",
        "Cooperative",
        "Creative",
        "Cultured",
        "Disciplined",
        "Dramatic",
        "Dynamic",
        "Romantic",
      ],
    },
    {
      title: "Gender",
      data: ["Male", "Female", "Other"],
    },
    {
      title: "Physical Characteristics",
      data: [
        "Chubby",
        "Medium Build",
        "Athletic",
        "Fit",
        "Tall",
        "Average Height",
        "White",
        "Black Complexion",
        "Blue-eyes",
        "Blond",
      ],
    },
  ];

  const [checkedItems, setCheckedItems] = useState({});

  const renderCharacteristics = ({ item, section, index }) => {
  
    const key = `${section.title}-${item}-${index}`;
    
    return (
      
      <View style={styles.item}>
        
        <CheckBox
          title={item}
          checkedIcon="heart"
          uncheckedColor="purple"
          checkedColor="red"
          checked={checkedItems[key] || false}
          onPress={() => {
            setCheckedItems({ ...checkedItems, [key]: !checkedItems[key] });
          }}
          containerStyle={{ backgroundColor: "pink", height: 40 }}
        />
      </View>
    );
  };

  const renderCharacteristicsHeader = ({ section }) => (


    
    <Text style={styles.header}>{section.title}</Text>
  );
    const navigation = useNavigation();
    const navigate = () => {
      navigation.navigate("AllProfiles");
    };

  return (
    <View style={styles.container}>

      <StatusBar backgroundColor="pink" barStyle="dark-content" />
      <Header />
      

      <View style={styles.textContainer}>
      <Button title="Go to All Profiles" onPress={navigate} />

        <Text style={styles.title1}> User Characteristics</Text>
      </View>
      <View style={styles.listContainer}>

        <SectionList
          keyExtractor={(item, index) => item + index}
          sections={DATA}
          renderItem={renderCharacteristics}
          renderSectionHeader={renderCharacteristicsHeader}
          stickySectionHeadersEnabled={false}
        />
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    backgroundColor: "pink",
    padding: 10,
    marginVertical: 8,
    width: 270,
    marginHorizontal: 20,
    borderRadius: 20,
  },
  header: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  title: {
    fontSize: 14,
    color: "black",
    marginLeft: 10,
  },
  title1: {
    fontSize: 20,
    marginTop: 20,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginTop: 20,
  },
  listContainer: {
    flex: 1,
    marginTop: 40,
  },
});