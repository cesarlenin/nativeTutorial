import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

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
      {/* flatlist better for performence 
      doesnt load the whole list by default */}
     <FlatList
    //  keyExtractor={(item)=> item.id}
     data={people}
     renderItem={ ({item})=> (
       <Text style={styles.item}>{item.name}</Text>
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
