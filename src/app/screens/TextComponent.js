import React from "react";
import stylessss from '../style/globalStyles';

// const TextComponent = ({ route, navigation }) => {
//   return (
//     <View style={styles.baseContainer}>
//          <Text style={styles.text}> This Is Text Component</Text>
//      </View>
//   );
// };

// export default TextComponent;



import { Text, View, StyleSheet, TextInput } from 'react-native';
import AppTextInput from "../components/AppInputText";
import ContainerView from "../components/ContainerView";

const width_proportion = '80%';
const height_proportion = '40%';

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  box: {
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B8D2EC',
  },
  inputDark: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    placeholderTextColor: "red",
    backgroundColor: 'white',
    fontSize: 18,
    color: '#000',
    alignSelf: 'center'
  },
  text: {
    fontSize: 18,
  },
});

export default TextComponent = () => (
  <ContainerView
    viewStyle={{ flex: 1 }}>
    <AppTextInput
      errorMessage='Invalid Email Id'>

    </AppTextInput>
  </ContainerView>
);