import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    {name: 'shaun', key: '1'},
    {name: 'cesar', key: '2'},
    {name: 'lenin', key: '3'},
    {name: 'morales', key: '4'},
    {name: 'nayeli', key: '5'},
    {name: 'daniel', key: '6'},
    {name: 'alexis', key: '7'},
  ])

  return (
    <View style={styles.container}>

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

});
