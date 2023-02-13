import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [name, setName] = useState([
    { name: "Frank", key: "1" },
    { name: "Jone", key: "2" },
    { name: "Hola", key: "3" },
    { name: "Peter", key: "4" },
    { name: "Roues", key: "5" },
    { name: "Gilbert", key: "6" },


    { name: "Uld", key: "7" },
    { name: "Kavics", key: "8" },
    { name: "Pek", key: "9" },
    { name: "Hal", key: "10" }
  ]);

  return (
    <View style={styles.container}>

      <ScrollView>
        {name.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    /* alignItems: 'center',
     justifyContent: 'center', */
    marginTop: 20
  },
  item: {
    fontSize: 18,
    color: "blue",
    backgroundColor: "gainsboro",
    margin: 18,
    padding: 18

  }
});
