import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
const TodoItems = ({ item, handleDelete }) => {
    return ( 
        <TouchableOpacity onPress={() => handleDelete(item.key)}>
            <View style={style.list}>
              <MaterialIcons name="delete" size={25} color='gray'/>
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
        flexDirection:'row',
       
    },
    text:{
        fontSize:18,
        paddingHorizontal:13,
        flex:1,
        
    }
})
export default TodoItems;