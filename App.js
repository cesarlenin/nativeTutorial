import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const[name, setName] = useState('cesar');
  const[person, setPerson] = useState({ name: 'nayeli' , age : 25});

  const clickHandler= () => {
    setName('lenin');
    setPerson({ name: 'lexi' , age : 55});
  }

  return (
    <View style={styles.container}>
      <Text> My name is {name}</Text>
      <Text> her name is {person.name} and her age is {person.age}</Text>
      <View style= {styles.buttonContainer}>
        <Button title= 'update state' onPress={clickHandler} />
      </View>
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
  buttonContainer:{
    marginTop: 20,
  }
});
