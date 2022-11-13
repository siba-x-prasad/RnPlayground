import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    FlatList,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Button,
    Image,
    StatusBar,
    useColorScheme,
    StyleSheet
} from "react-native";
import DASHBOARD_ITEMS from '../utilities/Constants'
import { Redirect } from "react-router-native";

const Stack = createNativeStackNavigator();

const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.itemContainer, backgroundColor]}>
        <Text style={styles.itemContainerText}>{item.title}</Text>
    </TouchableOpacity>
);

const DashboardComponent = ({ route, navigation }) => {

    const [selectedId, setSelectedId] = React.useState(null);

    redirectScreen = (item) =>{
        setSelectedId(item.id)
        navigation.navigate(item.screen);
    };

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'red' : 'blue';

        return (
            <Item
                item={item}
                onPress={() => redirectScreen(item)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DASHBOARD_ITEMS}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    itemContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#d3d3d3',
        margin: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
    },
    itemContainerText: {
        flex: 2,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color : '#ff0000'
    },
});


export default DashboardComponent;
