import React, { useContext } from "react";
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import styles from '../../style/globalStyles';
import ThingsContext from "./context";


const ContextScreen2 = ({ props, navigation }) => {

    const things = useContext(ThingsContext);

    const renderThings = things => {
        return things.map(thing => {
            return <ListItem key={thing.id} thing={thing} />
        })
    }


    return (
        <SafeAreaView style={styles.baseContainer}>
            <StatusBar style="auto" />
            <View style={styles.baseContainer}>
                <Text style={styles.appText}> Data Passing Through Context</Text>
                <ul>
                    {renderThings(things)}
                </ul>
            </View>
        </SafeAreaView>

    );
};

export default ContextScreen2;


