import React, { Component } from 'react';
import { Text, TextInput, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      tasks: ['Take out trash', 'Get groceries', 'Practice flute'],
      task: '',
      completedTasks: ['Bobs your uncle']
    }
  }

  addTask() {
    let tasks = [...this.state.tasks, this.state.task];
    this.setState({tasks});
    this.setState({task: ''})
  }

  deleteTask(task) {
    let completedTasks = this.state.completedTasks.filter((item) => {
      return item !== task
    });

    this.setState({
      completedTasks
    })
  }

  displayTasks(tasks) {
    return(
      tasks.map((task, index) => {
        return (
          <View key={index} style={styles.todoItem}>
            <Text>
              {task}
            </Text>
            <TouchableOpacity
              onPress={() => this.completeTask(task)}
            >
              <Text>&#10003;</Text>

            </TouchableOpacity>
          </View>
        )
      })
    )
  }

  displayCompletedTasks() {
    return(
      this.state.completedTasks.map((task, index) => {
        return (
          <View key={index} style={styles.completedTasks}>
            <Text>{task}</Text>
            <TouchableOpacity
              onPress={() => this.deleteTask(task) }
            >
              <Text>&#9747;</Text>

            </TouchableOpacity>
          </View>
        )
      })
    )
  }

  completeTask(task) {
    let completedTasks = [...this.state.completedTasks, task];
    let todoTasks = this.state.tasks.filter((aTask) => {
      return aTask !== task;
    });

    this.setState({
      tasks: todoTasks,
      completedTasks
    });
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}>To Do Master</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Add a Task"
          onChangeText={(text) => {
            this.setState({ task: text });
          }}
          onEndEditing={() => this.addTask()}
        />
        {
          this.displayTasks(this.state.tasks)
        }
        <View style={styles.completedHeader}>
          <Text style={styles.completedHeaderText}>Completed Tasks</Text>
        </View>
        {
          this.displayCompletedTasks()
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textInput: {
    height: 60,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    textAlign: 'center',
    margin: 10
  },
  todoItem: {
    flexDirection: 'row',
    height: 60,
    borderBottomWidth: 1,
    borderColor: 'black',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginBottom: 5,
  },
  completedTasks: {
    flexDirection: 'row',
    height: 60,
    borderBottomWidth: 1,
    borderColor: 'darkgrey',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginBottom: 5
  },
  completedTaskText: {
    fontStyle: 'italic'
  },
  completedHeader: {
    height: 60,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderColor: 'darkgrey',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 5,
  },
  completedHeaderText: {
    fontSize: 20
  }
});
