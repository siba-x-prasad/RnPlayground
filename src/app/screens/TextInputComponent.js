import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const TextInputComponent = () => {
  const [text, setText] = useState('');
  const [emoji, setEmoji] = useState('😂');

  onEmojySelected = (txt) =>{
    setEmoji(txt);
  }

  return (
    <View style={{padding: 10}}>
      <View style={{flexDirection:'row'}}>
        <Text style={[emoji == '😁' ? styles.textEnabled : styles.textDisabled]} onPress={  () => this.onEmojySelected('😁')}>
        😁
        </Text>
        <Text style={[emoji == '🦅' ? styles.textEnabled : styles.textDisabled]} onPress={  () => this.onEmojySelected('🦅')}>
        🦅
        </Text>
        <Text style={[emoji == '🦆' ? styles.textEnabled : styles.textDisabled]} onPress={  () => this.onEmojySelected('🦆')}>
        🦆
        </Text>
        <Text style={[emoji == '🍻' ? styles.textEnabled : styles.textDisabled]} onPress={  () => this.onEmojySelected('🍻')}>
        🍻
        </Text>
        <Text style={[emoji == '🍇' ? styles.textEnabled : styles.textDisabled]} onPress={  () => this.onEmojySelected('🍇')}>
        🍇
        </Text>
      </View>
      <TextInput
        style={{ margin : 5,  paddingStart : 10,  height: 40,  borderRadius : 5, borderWidth : 1}}
        placeholder="Type here to translate!"
        placeholderTextColor='#000000'
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{ borderColor : 'black', borderWidth : 1, margin :5, borderRadius : 5,  padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && emoji).join(' ')}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
    textEnabled : {
      width : 60,
      height: 60,
      borderWidth: 2,
      borderRadius : 5,
      borderColor : 'green',
      backgroundColor : 'white',
      fontSize: 18,
      borderRadius: 6,
      textAlign : 'center',
      justifyContent : 'center',
      alignSelf : 'center',
      margin : 5,
      textAlignVertical: 'center',
    },
    textDisabled : {
      width : 60,
      height: 60,
      borderWidth: 1,
      padding: 10,
      borderRadius : 5,
      borderColor : 'black',
      backgroundColor : 'white',
      fontSize: 18,
      borderRadius: 6,
      flexDirection: 'row',
      margin : 5,
      textAlign : 'center',
      justifyContent : 'center',
      alignSelf : 'center',
      margin : 5,
      textAlignVertical: 'center',
    }
})

export default TextInputComponent;