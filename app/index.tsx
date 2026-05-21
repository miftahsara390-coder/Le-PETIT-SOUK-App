import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, View, StyleSheet, ImageBackground, TouchableOpacity, } from "react-native";
import { router } from "expo-router";

export default function Index () {
  return (
    <ImageBackground
      source={require("../assets/images/bg.jpg",)}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        
        <View style={styles.content}>
          <Text style={styles.title}>BIENVENUE AU PETIT SOUK</Text>
          <Text style={styles.subtitle}>
            L'authenticité Marocaine au Cœur de Beni Mellal.
          </Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>router.push("/menu")}
        >
          <Text style={styles.buttonText}>
            DECOUVRIR LE MENU DU JOUR →
          </Text>
        </TouchableOpacity>

      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 50,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    backgroundColor:"#b88e6b9a",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 10,
    padding:10,
  },
  subtitle: {
    backgroundColor:"#b88e6b9a",
    fontSize: 20,
    textAlign: "center",
    marginTop:0,
    
  },
  button: {
    backgroundColor: "#EAC02B",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontWeight: "bold",
  },
});