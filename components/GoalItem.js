import React from 'react'
import { StyleSheet, Text, View, Touchable, TouchableOpacity} from 'react-native'

const GoalItem = props => {
    return (
      <TouchableOpacity onPress={props.onDelete}>
        <View style={styles.output}>
            <Text>{props.title}</Text>
        </View>
      </TouchableOpacity>
    )
}

export default GoalItem

const styles = StyleSheet.create({
  output: {
    width: '90%',
    margin: 9,
    backgroundColor: '#ccc',
    borderColor: 'black',
    padding: 10
  }
})
