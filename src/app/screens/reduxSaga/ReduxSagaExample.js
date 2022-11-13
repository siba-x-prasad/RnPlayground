import React from "react";
import { SectionList, Text, View } from 'react-native';
import styles from '../../style/globalStyles';

const ReduxSagaComponent = ({ route, navigation }) => {
  return (
    <View style={styles.baseContainer}>
      <Text style={styles.text}>This Is Redux Saga </Text>
    </View>
  );
};

export default ReduxSagaComponent;