import Header from "../header-footer/header";
import Footer from "../header-footer/footer";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import ListProfiles from "./Listprofiles";
export default function AllProfilesMain() {
return (
<View style={styles.container}>
<Header />
<Text style={styles.title}> All Profiles Ready to Start!</Text>
<ListProfiles /><Footer />
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
});