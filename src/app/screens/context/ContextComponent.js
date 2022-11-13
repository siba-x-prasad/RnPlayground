import React from "react";
import { SafeAreaView,StatusBar,  Text, View } from 'react-native';
import styles from '../../style/globalStyles';
import AppButton from "../../components/AppButton";
import { ThingsProvider } from "./context";

const ContextComponent = ({ props, navigation }) => {

passData =  () =>{
  navigation.navigate('screen1');
};

// pretend we are fetching these 'things'
const things = [
  {id: 1, name: 'thing 1', length: 5},
  {id: 2, name: 'thing 2', length: 2},
  {id: 3, name: 'thing 3', length: 6},
  {id: 4, name: 'thing 4', length: 10},
  {id: 5, name: 'thing 5', length: 1}
]

  return (
    <ThingsProvider value = {things}>
      <SafeAreaView style={styles.baseContainer}>
        <StatusBar style="auto" />
        <View style={styles.baseContainer}>
          <AppButton
            title='Pass Data'
            onClick={passData}
            isEnabled={true}
          />
        </View>
      </SafeAreaView>
    </ThingsProvider>
  );
};

export default ContextComponent;


