import React, { useState } from "react";
import { 
  StyleSheet, View, Pressable, Image, Modal 
} from "react-native";
import { Text, Card } from "@rneui/themed";
import { faker } from "@faker-js/faker";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function User({
  firstName,
  lastName,
  pictureUser,
  cellPhone,
  countryUser,
  ageUser,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [quote, setQuote] = useState("");

  
  const generateQuote = () => {
    setQuote(faker.lorem.sentence()); // Generating a random sentence
  };

  
  const handleOpenModal = () => {
    generateQuote();
    setModalVisible(true);
  };

  return (
    <Card containerStyle={styles.cardContainer}>
      
      <Card.Title style={styles.cardTitle}>

      <Pressable onPress={handleOpenModal} style={styles.plusButton}>
          <Image source={require("../assets/plus-sign.png")} style={styles.plusIcon} />
        </Pressable>
        {firstName} {lastName}
        
      </Card.Title>
      <Card.Divider />

      
      <View style={styles.userInfo}>
        <Card.Image source={{ uri: pictureUser }} style={styles.userImage} />
        <View>
          <Text style={styles.label}>Phone: <Text style={styles.value}>{cellPhone}</Text></Text>
          <Text style={styles.label}>Country: <Text style={styles.value}>{faker.location.country()}</Text></Text>
          <Text style={styles.label}>Age: <Text style={styles.value}>{ageUser}</Text></Text>
          <Text style={styles.label}>Job: <Text style={styles.value}>{faker.person.jobType()}</Text></Text>
        </View>
      </View>

      
      <Modal visible={modalVisible} transparent animationType="slide">
        <Pressable style={styles.modalContainer} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
          
            <Text style={styles.modalGreeting}>Hi, my name is {firstName} {lastName}</Text>

            
            <Image source={{ uri: pictureUser }} style={styles.modalImage} />

            
            <Text style={styles.quoteText}>{quote}</Text>

            
            <View style={styles.socialIcons}>
              <FontAwesome name="instagram" size={40} color="#E1306C" />
              <FontAwesome name="facebook" size={40} color="#1877F2" />
              <FontAwesome name="whatsapp" size={40} color="#25D366" />
              <Image source={require("../assets/tiktok.png")} style={styles.icon} />
            </View>

            
            <Pressable onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeText}>Close</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 30,
    shadowRadius: 10,
  },
  cardTitle: {
    fontSize: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  plusButton: {
    marginLeft: 10,
  },
  plusIcon: {
    width: 24,
    height: 24,
  },
  userInfo: {
    flexDirection: "row",
  },
  userImage: {
    width: 90,
    height: 100,
    borderRadius: 80,
    marginHorizontal: 9,
  },
  label: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: "bold",
  },
  value: {
    fontWeight: "500",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: 300,
  },
  modalGreeting: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginBottom: 10,
  },
  quoteText: {
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "center",
    marginVertical: 10,
    color: "#555",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginVertical: 10,
  },
  icon: {
    width: 40,
    height: 40,
  },
  closeButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  closeText: {
    color: "white",
    fontWeight: "bold",
  },
});
