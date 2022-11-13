import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './slices/counterSlice';
import { connect } from 'react-redux';
import { todoAdded, todoToggled } from './slices/TodoSlice';
import { color } from 'react-native-reanimated';

const ReduxDashBoard = (props) => {

    // const count = useSelector((state) => state.count);
    // console.log('Count '+count);
    const dispatch = useDispatch()

    const [text, setText] = React.useState('');
    const [amount, setAmount] = React.useState('');
    const [counter, setCounter] = React.useState('');
    const [todoList, setTodoList] = React.useState([]);

    todoSubmitHandler = () => {
        console.log('To do '+text);
        // if (text.trim() === '') {
        //     return;
        // }
        dispatch(todoAdded({ name : text, amount : amount }));
        setText('');
        setAmount('');
    }

    todoChangeHandler = () => {
        setTodo(text);
    }

    incrementCount = () => {
        dispatch(increment());
    };

    decrementCount = () => {
        dispatch(decrement());
    };

    counterSubmitHandler = () => {
        console.log('counter '+counter);
        dispatch(incrementByAmount(Number(counter)));
    }

    return (
        <View style={styles.container}>
            <Text  style = {styles.actionTitle}> To Do </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Add Todo"
                    style={styles.appInput}
                    onChangeText={setText}
                ></TextInput>
                 <TextInput
                    placeholder="Amount"
                    style={styles.appInput}
                    onChangeText={setAmount}
                ></TextInput>
               
            </View>
            <Button title='Add'
                    style={styles.placeButton}
                    onPress={todoSubmitHandler}
                />

            <Text  style = {styles.actionTitle}> Counter </Text>
            <View style={{ ...styles.inputContainer, margin: 10, }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }} onPress={decrementCount}> Decrement </Text>
                <TextInput style={{ ...styles.appInput, width: '30%', textAlign: 'center' }} onChangeText={setCounter} > </TextInput>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }} onPress={incrementCount}> Increment </Text>
            </View>
            <Button title='Submit Counter'
                style={styles.placeButton}
                onPress={counterSubmitHandler}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    actionTitle: {
        height : 50,
        width  : '100%',
        fontSize : 20,
        textAlign : 'center',
        backgroundColor : 'black',
        color : 'white',
        marginBottom : 20,
        marginTop : 20,
        padding : 10
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    appInput: {
        width: '50%',
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
        width: '30%',
        borderRadius: 6,
        borderWidth: 1,
        borderColor: 'black'
    },
    listContainer: {
        width: '100%'
    },
    appText: {
        width: '30%',
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

const mapStateToProps = state => {
    return {
        places: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (name) => {
            dispatch(addPlace(name))
        }
    }
}

export default ReduxDashBoard;// connect(mapStateToProps, mapDispatchToProps)(ReduxDashBoard) 