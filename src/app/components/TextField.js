import React from "react";
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';

const TextField = (props) =>{
    const [text, onChangeText] = React.useState('');

return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}  
                keyboardType = {props.keyboard}
                secureTextEntry = {props.password}
                placeholder={props.hint}
                onChangeText={onChangeText}
                value={text}
            />
            { text == '' ? (
             <Text style={styles.errorMessage}>
                {props.errorMessage}
             </Text>
            ) : null  }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop : 10,
        width: "70%",
    },
    input : {
        width : 300,
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius : 5,
        placeholderTextColor : "#000",
        backgroundColor : 'white',
        fontSize: 18,
        borderRadius: 6,
        flexDirection: 'row',
      },
    errorMessage: {
      fontSize: 10,
      color:"red"
    }
  });

  export default TextField;