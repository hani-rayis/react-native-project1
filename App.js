import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';


export default function App() {

let [count, setCount] = useState (0)

  return (
    <View style={styles.container}>
      <Text style={styles.baaText}> {baaText()} </Text>
      
     <CounterSheep>{count}</CounterSheep> 
      <Text style={styles.text}>{count}</Text>
      <Text style={styles.text}>🐑 sheep counter 🐑
      {"\n"}
      </Text>
      <Text><TouchableOpacity style={styles.button} onPress={buttonPressed}><Text style={styles.buttonText}>Count the sheep!</Text></TouchableOpacity>  
      {"\n"}
      </Text>
      <Text><TouchableOpacity style={styles.button} onPress={buttonReset}><Text style={styles.buttonText}>Reset</Text></TouchableOpacity> 
      {"\n"}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
  

function buttonPressed() {
  console.log ("${count}")
  setCount(count + 1)
};

function buttonReset() {
  console.log ("${count}")
  setCount(0)
};

function baaText() {
  if (count>=10) {
    return "10th baa! 🐑"
  }
};

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text:{
    fontFamily:'monospace',
    fontSize: 30,
    fontWeight: 'bold',
  },

  button:{
    backgroundColor: 'lightblue',
    borderRadius: 10,
    padding:20,
  },

  buttonText:{
    fontFamily:'monospace',
    fontSize:22,
    fontWeight: 'bold',
    
  },
  
  baaText:{
    fontSize:40,
    fontWeight: 'bold',
    
  },

});
