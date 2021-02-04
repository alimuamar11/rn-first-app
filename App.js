import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputText] = useState('Open up App.js to start working on your app!');
  return (
    // <View style={styles.container}>
    //   <Text>{outputText}</Text>
    //   <Button title="change text" onPress={() => setOutputText('Tulsan telah diperbarui') }/>
    // </View>
        // <View style={{padding: 40}}>
        //   <View style={{flexDirection: 'column',alignItems: 'flex-start'}}>
        //     <Button  title="Add"/>
        //     <TextInput placeholder="Course Goal" style={{borderBottomColor: 'black', borderBottomWidth: 1}}/>
        //     <Button  title="Add Again"/>
        //   </View>
        // </View>

        <View style={{padding: 20, flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{
            backgroundColor: 'red',
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text>1</Text>
          </View>
          <View style={{
            backgroundColor: 'green',
            width: 100,
            height: 100,
            justifyContent: 'flex-end',
            alignItems: 'center'
          }}>
            <Text>2</Text>
          </View>
          <View style={{
            backgroundColor: 'blue',
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Text>3</Text>

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
});
