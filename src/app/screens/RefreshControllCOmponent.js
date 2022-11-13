import React from "react";
import { SectionList, Text, View } from 'react-native';
import styles from '../style/globalStyles';

const RefreshControlComponent = ({ route, navigation }) => {
  return (
    <View style={styles.baseContainer}>
      <Text style={styles.text}> This Is Refresh Control</Text>
    </View>
  );
};

export default RefreshControlComponent;