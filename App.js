import { StatusBar } from 'expo-status-bar';
import { StyleSheet,SafeAreaView ,Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import { useState } from 'react';
import TodoItems from './components/TodoItems';

export default function App() {

  const [todos, setTodos] = useState([
   { text: 'Eat a pizza', key: 1},
   { text: 'Get a new house', key: 2},
   { text: 'get driving lessons', key: 3},
  ])

    const handleDelete = (key) => {
      setTodos((prevTodos) => {
       return prevTodos.filter(todo => todo.key != key)
      })
    }

    const handleAdd = (text) => {
      if(text.lenght >3){

        setTodos((prevTodos) => {
          return [{
            text: text , key: Math.random().toString()
          },
          ...prevTodos
        ]
        })
      }else{
        Alert.alert('OPPS', 'Todo is too Short must be atleast 4 chars', [
          {text: 'understood'}
        ])
      }
    }
  return (
   <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <SafeAreaView style={styles.container}>
        <View>
          <Header />
        </View>
        <View>
          <TodoForm handleAdd={handleAdd} />
        </View>
        <View>
            <FlatList 
            data={todos}
             renderItem={({ item }) => (
              <TodoItems item={item} handleDelete={handleDelete} />
             )}
            />
        </View>
      </SafeAreaView>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
