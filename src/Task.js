import React, { Component } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Alert } from 'react-native';

export default class Task extends Component {
  completeTask() {
    
  }
  render() {
    return(
      <View>
        <Text>{this.props.text}</Text>
        <TouchableOpacity
          onPress={() => this.completeTask()}
        >
          <Text>&#10003;</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//
// })
