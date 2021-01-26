import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Touchable} from 'react-native';

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

  const pressHandler = (key) => {
    console.log(key);
    setPeople((prevPeople) =>{
      return prevPeople.filter(person => person.key != key)
    })
  }

  return (
    <View style={styles.container}>

     <FlatList
     data={people}
     renderItem={ ({item})=> (
       <TouchableOpacity onPress= {()=> pressHandler(item.key)}>
       <Text style={styles.item}>{item.name}</Text>
       </TouchableOpacity>
     )}
     />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item:{
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }

});
