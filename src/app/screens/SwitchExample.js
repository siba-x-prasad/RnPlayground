import React, { useState } from "react";
import { SectionList, StyleSheet,Switch, Text, View } from 'react-native';
import globalStyles from '../style/globalStyles';

const SwitchComponent = ({ route, navigation }) => {

  const [isEnabled, setIsEnabled] = useState(false);
  const [text, setText] = useState('Disabled');

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    if(isEnabled){
      setText('Enabled');
    }
    else{
      setText('Disabled');
    }

  };
    
  return (
    <View style={globalStyles.baseContainer}>
     <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <Text style={globalStyles.appText}>
        {text }
      </Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});



export default SwitchComponent;