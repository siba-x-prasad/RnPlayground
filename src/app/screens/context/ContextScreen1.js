import React, { useContext } from "react";
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import styles from '../../style/globalStyles';
import AppButton from "../../components/AppButton";
import ThingsContext from "./context";


const ContextScreen1 = ({ props, navigation }) => {

    const things = useContext(ThingsContext);

    console.log(things);

    const renderThings = data => {
        return data.map(thing => {
            return <ListItem key={thing.id} thing={thing} />
        })
    }

    passData = () => {
        navigation.navigate('screen2');
    };

    return (
        <SafeAreaView style={styles.baseContainer}>
            <StatusBar style="auto" />
            <View style={styles.baseContainer}>
                <Text style={styles.text}> Sibaprasad </Text>
                <AppButton
                    title='Pass Data'
                    onClick={passData}
                    isEnabled={true}
                />
                {/* <ul>
                    {renderThings(things)}
                </ul> */}
            </View>
        </SafeAreaView>


    )
};

export default ContextScreen1;


