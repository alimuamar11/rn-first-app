import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder= "Course Goal" style={styles.input}/>
        <Button title="ADD" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 10
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  }

});
