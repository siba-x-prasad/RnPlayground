import React from "react";
import { Switch, StyleSheet, Button, Text, View, Alert } from 'react-native';
import globalStyles from '../style/globalStyles';
import AppButton from "../components/AppButton";
const ButtonComponent = ({ route, navigation }) => {

  const [show, setShow] = React.useState(false);
  const [showText, setShowText] = React.useState('Show');
  const [color, setColor] = React.useState('blue');

  onShowClick = () => {
    setShow(!show);
    if (show) {
      setColor('red');
      setShowText('Hide');
    }
    else {
      setColor('blue');
      setShowText('Show');
    }
  };

  return (
    <View style={globalStyles.baseContainer}>
      <Button
        color={color}
        style={styles.buttonStyle}
        title={showText}
        onPress={
          onShowClick
        }
      />
      {show &&
        <Button
          color='blue'
          style={styles.buttonStyle}
          title='This Button Is Visible'
        />
      }
      <Text> Enabled Button </Text>
      <AppButton
        title='ENabled'
        onClick={() => { Alert.alert('ENabled Clicked'); }}
        isEnabled={true}
      />
      <Text> Disabled Button </Text>
      <AppButton
        title='Disabled'
        onClick={() => { Alert.alert('Disabled Clicked'); }}
        isEnabled={false}
      />
      <Text>Pass dsta through style </Text>
      <AppButton
        buttonStyle={{ backgroundColor: 'red' }}
        textStyle={{ color: 'white' }}
        title='Disabled'
        onClick={() => { Alert.alert('Disabled Clicked'); }}
        isEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ButtonComponent;