import React, { Component } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, View, TextInput, Button, FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const ToDoScreen = (props) => {

    const [data, setData] = React.useState([]);
    const todos = useSelector((state) => state.todos);
    console.log('Todo Screen ' + todos);

    todos.map((todo, index) => {
        console.log('Todo ' + todo.name);
    });

    const Item = ({ item, onPress, backgroundColor, textColor }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
            <View style={{ width: '100%', flexDirection : 'row' }}>
                <Text style={{ width: '50%', fontSize: 30, color: textColor }}>{item.name}</Text>
                <Text style={{ width: '50%', fontSize: 20, color: textColor }}> Amount : {item.amount}</Text>
            </View>
        </TouchableOpacity>
    );

    const [selectedId, setSelectedId] = React.useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={{ backgroundColor }}
                textColor={{ color }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={todos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container: {
        width : '100%',
        paddingTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    item: {
        width: '100%',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
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

export default ToDoScreen;