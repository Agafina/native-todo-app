import { useState } from "react";
import { TextInput, View, StyleSheet, Button } from "react-native";

const TodoForm = ({ handleAdd }) => {
    const [text, setText] = useState('')

    const handleChange = (val) => {
        setText(val)
    }
    return ( 
        <View style={style.form}>
            <TextInput
             style={style.input} 
             placeholder="Enter Todo"
             onChangeText={handleChange}
            />
            <Button title="Add Todo" onPress={() => handleAdd(text)} color='coral' />
        </View>
     );
}
 const style = StyleSheet.create({
    form:{
        marginTop:20,
        paddingHorizontal:30
    },
    input:{
        fontSize:15,
        borderBottomWidth:1,
        borderBottomColor:'gray',
        padding:5,
        marginBottom:30
    }
 })
export default TodoForm;