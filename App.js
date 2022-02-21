import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = 'sunguk'; 
  return ( 
    <View styles={styles.container}> 
      <Text styles={styles.text}>My name is {name}</Text>
      <StatusBar styles="auto" />
    </View>>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});
