import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MENU_DATA from "../data/data";


export default function MenuScreen() {

  const renderMenuItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.menuItem}>
     
      <Image
        source={typeof item.image === 'string' ? { uri: item.image } : item.image}
        style={styles.foodImage}
      />
      
     
      <View style={styles.textContainer}>
        <Text style={styles.foodTitle}>{item.title}</Text>
        <Text style={styles.foodCategory}>{item.category}</Text>
      </View>
      
   
      <Text style={styles.arrow}>{">"}</Text>

     
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>{item.price.split(' ')[0]}</Text>
        <Text style={styles.currencyText}>{item.price.split(' ')[1]}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
   
    <SafeAreaView style={styles.container}>
    <TouchableOpacity style={styles.accueilButton}>
  <Text style={styles.accueilText}>Accueil</Text>
</TouchableOpacity>
     <View style={styles.content}>
               <Text style={styles.Brandtitle}> LE PETIT SOUK</Text>
               <Text style={styles.BrandSubtitle}>
                GASTROMIE MAROCAINE</Text>
             </View>
     
      <Image source={require("../assets/images/logo-menu.webp")}  style={styles.headerImage}/>
      <FlatList
        data={MENU_DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderMenuItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />

   
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>PASSER COMMANDE</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dfbb8a', 
  },
  accueilButton: {
    position: 'absolute',
    top: 36,
    left: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'rgb(255, 89, 0)',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
    zIndex: 10,
  },
  accueilText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#ffffff',
    letterSpacing: 0.5,
  },
  content: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(240, 209, 192, 0.07)',
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(165, 128, 104)',
  },
  Brandtitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0c0c0c',
    letterSpacing: 2,
    marginBottom: 4,
  },
  BrandSubtitle: {
    fontSize: 14,
    color: '#020202',
    fontStyle: 'italic',
    letterSpacing: 1,
    fontWeight: '600',
  },
  listContent: {
    padding: 16,
    paddingBottom: 100, 
  },
  headerImage:{
width:500,
height:200,

  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 144, 9, 0.77)', 
    padding: 12,
    borderRadius: 25, 
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  foodImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ddd',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 12,
  },
  foodTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#3e2723',
  },
  foodCategory: {
    fontSize: 13,
    color: '#5d4037',
    marginTop: 2,
    fontStyle: 'italic',
  },
  arrow: {
    fontSize: 18,
    color: '#c0603e',
    opacity: 0.6,
    marginHorizontal: 10,
  },
  priceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 60,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3e2723',
  },
  currencyText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#3e2723',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  button: {
    backgroundColor: 'rgb(255, 89, 0)', 
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1.2,
  },
});