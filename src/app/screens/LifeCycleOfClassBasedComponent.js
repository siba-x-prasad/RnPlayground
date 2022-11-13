import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../style/globalStyles';

/**
 * For more information
 * https://www.netguru.com/blog/react-native-lifecycle
 */

class ClassBasedComponent extends Component {

    constructor({ props, route, navigation }) {
        super(props);
        this.state = {
            message: 'hello world',
            hasError: false,
            count: 0,
            isLoading: false,
        }
        console.log('Life Cycle => constructor Loaded');
    }

    // This can be called 
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Life Cycle => shouldComponentUpdate()');
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }

    // e.g add event listener 
    componentDidMount() {
        console.log('Life Cycle => componentDidMount()');
        this.setState({ message: 'I Got Changed after componentDidMount() call' })
        // fetch('https://api.mydomain.com')
        //     .then(response => response.json())
        //     .then(data => this.setState({ message: data.message })); // data.message = 'updated message'
    }

    // e.g remove event listener  
    componentWillUnmount() {
        console.log('Life Cycle => componentWillUnmount()');
        // el.removeEventListener()
    }

    componentDidUpdate(preProps) {
        console.log('Life Cycle => componentDidUpdate()');
        if (prevProps.selectedState !== this.props.selectedState) {
            fetch('https://pathToApi.com')
                .then(resp => resp.json())
                .then(respJson => {
                    // do what ever you want with your `response`

                    this.setState({
                        isLoading: false,
                        data: respJson,
                    });
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    componentDidCatch(error, info) {
        console.log('Life Cycle => componentDidCatch()');
        logComponentStackToMyService(info.componentStack);
        // logToExternalService may make an API call. 
    }

    static getDerivedStateFromError(error) {
        console.log('Life Cycle => static getDerivedStateFromError()');
        console.log(`Error log from getDerivedStateFromError: ${error}`);
        return { hasError: true };
    }

    render() {
        console.log('Life Cycle => render()');
        return (
            <View>
                {/* 'updated message' will be rendered as soon as fetch return data */}
                <Text>Siba : {this.state.message}</Text>
                <Button
                    title='Click'
                    color={this.props.color}
                    onPress={() => this.setState(state => ({ count: state.count + 1 }))}
                />
                <Text>Count: {this.state.count}</Text>
                { this.state.hasError &&
                    <Text> Something went wrong :( </Text>
                }
            </View>
        )
    }
}

export default ClassBasedComponent;