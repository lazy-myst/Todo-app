import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, KeyboardAvoidingView, Image, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard } from 'react-native';

export default function App() {
  const [task, setTask] = useState();
  const [list, setList] = useState([]);
  const [editMode, setEditMode] = useState(false)
  const [editIndex, setEditIndex] = useState()

  const addTask = () => {
    Keyboard.dismiss();
    setList([...list, task])
    setTask(null);
  }
  const delTask = (index) => {
    let tasksCopy = [...list];
    tasksCopy.splice(index, 1);
    setList(tasksCopy);
  }
  const editTask = (index) => {
    setEditMode(true)
    setTask(list[index])
    setEditIndex(index)
  }
  const updateTask = () => {
    Keyboard.dismiss()
    setEditMode(false)
    setTask('')
    const tempList = [...list]
    tempList[editIndex] = task
    setList(tempList)
  }
  const editIcon = {uri: 'https://icons.veryicon.com/png/o/miscellaneous/linear-icon-14/check-mark-14.png'}
  const addBtn = { uri: 'https://icons.veryicon.com/png/o/miscellaneous/feather-v423/send-21.png'}
  const conditionallyRenderImg = editMode ? editIcon : addBtn

  return (
    <View style={styles.container}>
      <View style={styles.mainSection}>
        <Text style={styles.title}>To Do App</Text>
        <View style={styles.tasksSection}>
          {
            list.map((item, index) => {
              return (
                <View key={index} style={styles.item}>
                  <View style={styles.leftSide}>
                    <TouchableOpacity onPress={() => editTask(index)}>
                      <Image
                        style={styles.editLogo}
                        source={{ uri: 'https://icons.veryicon.com/png/o/miscellaneous/omr/edit-272.png' }}
                      />
                    </TouchableOpacity>
                    <View style={styles.divider}></View>
                    <Text style={styles.taskText}>{item}</Text>
                  </View>
                  <TouchableOpacity onPress={() => delTask(index)}>
                    <Image
                      style={styles.deleteLogo}
                      source={{ uri: 'https://icons.veryicon.com/png/o/miscellaneous/rice-reading-applet/delete-307.png' }}
                    />
                  </TouchableOpacity>
                </View>
              )
            })
            //<Task key={index} text={item} />
          }
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.addTaskSection}
      >
        <TextInput style={styles.input} placeholder={'Add your task...'} value={task} onChangeText={text => setTask(text)}></TextInput>
        <TouchableOpacity onPress={() => editMode ? updateTask() : addTask()}>
          <View style={styles.btnCont}>
            <Image
              style={styles.Btn}
              source={conditionallyRenderImg}
            />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({

  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  taskText: {
    fontSize: 17,
  },
  leftSide: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  editLogo: {
    height: 15,
    width: 15,
    marginRight: 10,
  },
  deleteLogo: {
    height: 20,
    width: 20,
    marginRight: 5,
    marginLeft: 5
  },
  divider: {
    padding: 1,
    height: 20,
    backgroundColor: 'black',
    marginRight: 10,
    opacity: 0.5
  },
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
  mainSection: {
    paddingTop: 100,
    paddingHorizontal: 30,

  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  tasksSection: {
    marginTop: 30,
  },
  addTaskSection: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    width: 300,
  },
  btnCont: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 50
  },
  Btn: {
    height: 25,
    width: 25
  }
});
