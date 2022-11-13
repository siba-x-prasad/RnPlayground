import React from "react";
import { SectionList, Text, View } from 'react-native';
import styles from '../../style/globalStyles';

const ReduxThunkComponent = ({ route, navigation }) => {
  return (
    <View style={styles.baseContainer}>
      <Text style={styles.text}>This Is Redux Thunk </Text>
      
    </View>
  );
};

export default ReduxThunkComponent;
