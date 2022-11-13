import React from "react";
import { SectionList, Text, View } from 'react-native';
import styles from '../style/globalStyles';

const Statemanagement = ({ route, navigation }) => {
  return (
    <View style={styles.baseContainer}>
      <Text style={styles.text}> This Is State management </Text>
    </View>
  );
};

export default Statemanagement;