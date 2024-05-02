import { View,Text, StyleSheet } from "react-native";

const Header = () => {
    return ( 
        <View style={style.header}>
            <Text style= {style.text}>Add Todos</Text>
        </View>
     );
}
 
const style = StyleSheet.create({
    header:{
        padding:20,
        backgroundColor:'coral',
    },
    text:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'
    }
})
export default Header;