import { NavigationContainer } from '@react-navigation/native'; 
import React  from "react"; 
import { View, Text } from 'react-native';
import {
    useComponentDidMount,
    useComponentDidUpdate,
    useComponentWillUnmount
  } from "../utilities/MyReactHook";
import styles from '../style/globalStyles';

const LifeCycleOfFunctionalComponent = (props) => {

    useComponentDidMount(() => {
        console.log("Component did mount!");
      });
    
      useComponentDidUpdate(() => {
        console.log("Component did update!");
      });
    
      useComponentDidUpdate(() => {
        console.log("myProp did update!");
      }, [props]);
    
      useComponentWillUnmount(() => {
        console.log("Component will unmount!");
      });

  return (
    <View style= {styles.baseContainer}>
        <Text style = {styles.text}> Life Cycle of FUnctional Component </Text>
    </View>
  );
};

export default LifeCycleOfFunctionalComponent;