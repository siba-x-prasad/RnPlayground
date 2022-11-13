import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const CounterScreen = () => {

    const counter = useSelector((state) => state.count);
    console.log('Count is '+counter.value);
    console.log('Count Type  '+ typeof counter);

    // counter.map((count, index) =>{
    //     console.log(count.text);
    // });

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}> 
                <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'black' }}> Count is {counter.value} </Text> 
            </View>

        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    appInput: {
        width: '70%',
        height: 40,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        placeholderTextColor: "#000",
        backgroundColor: 'white',
        color: "#000",
        fontSize: 18,
        borderRadius: 6,
        flexDirection: 'row',
    },
    placeButton: {
        width: '30%'
    },
    listContainer: {
        width: '100%'
    },
    appText: {
        width: '70%',
        height: 50,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        placeholderTextColor: "#000",
        backgroundColor: 'white',
        color: "#000",
        fontSize: 18,
        color: 'black',
        fontSize: 40,
        borderRadius: 6,
        flexDirection: 'row',
    },
});

export default CounterScreen;