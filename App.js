import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const name = 'sunguk'; 
  return ( 
    <View style={styles.container}> 
      <Text style={styles.text}>My name is {name}</Text>
      <StatusBar Style="auto" />
    </View>>
    {});
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
