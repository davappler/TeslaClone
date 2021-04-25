import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.carContainer}>
        <ImageBackground 
          source={require("./assets/images/ModelX.jpeg")}
          style={styles.image}
          /> 
        <View style={styles.titles}>
          <Text style={styles.title}>Model s</Text>
          <Text style={styles.subtitle}>Starting at £69,000</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carContainer:{
    width:"100%",
    height:"100%",
  },
  titles:{
    marginTop:"45%",
    width:"100%",
    alignItems:"center"
  },
  title:{
    fontSize:40
  },
  subtitle:{
    fontSize:16,
    color:"#5e5e62"
  },
  image:{
    width:"100%",
    height:"100%",
    position:"absolute", //this is necessary to make it as background
  }
});
