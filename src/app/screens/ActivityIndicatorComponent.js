import React from "react";
import { Text, View, ActivityIndicator, Button, StyleSheet } from 'react-native';
import styles from '../style/globalStyles';


const ActivityIndicatorComponent = ({ route, navigation }) => {

  const [title, setTitle] = React.useState('ShowProgress');
  const [animating, setAnimating] = React.useState(false);

  onShowProgress = () => {
    if (animating) {
      setTitle('Hide Progress');
    }
    else {
      setTitle('Show Progress');
    }
    setAnimating(!animating);
  }

  return (
    <View style={styles.baseContainer}>
      <Text style={styles.text}> This Is Activity Indicator </Text>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
      <Button
        title="Show Progress"
        onPress={onShowProgress}
      >

      </Button>
      <ActivityIndicator
        animating={animating}
        color='#bc2b78'
        size="large"
        style={styles.activityIndicator} />
    </View>
  );
};


const style = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
});

export default ActivityIndicatorComponent;