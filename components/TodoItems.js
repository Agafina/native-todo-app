import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TodoItems = ({ item, handleDelete }) => {
    return ( 
        <TouchableOpacity onPress={() => handleDelete(item.key)}>
            <View style={style.list}>
              <Text style={style.text}>{item.text}</Text>
            </View>
        </TouchableOpacity>
     );
}
 
const style = StyleSheet.create({
    list:{
        paddingHorizontal:15,
        margin:15,
        borderWidth:1,
        padding:15,
        borderBlockColor:'gray',
    },
    text:{
        fontSize:15,
    }
})
export default TodoItems;