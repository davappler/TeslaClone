import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Dimensions} from 'react-native';
import Header from "./components/Header/index"
import CarsList from "./components/CarsList/index"

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <CarsList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // height:Dimensions.get('window').height
  },
});
