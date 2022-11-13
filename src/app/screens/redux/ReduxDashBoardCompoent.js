import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { addPlace } from './actions/place';

class ReduxDashBoardCompoent extends Component {

    state = {
        placeName: '',
        places: []
    }

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === '') {
            return;
        }
        this.props.add(this.state.placeName);
    }

    placeNameChangeHandler = (value) => {
        this.setState({
            placeName: value
        });
    }

    placesOutput = () => {
        return (
            <FlatList style={styles.listContainer}
                data={this.props.places}
                keyExtractor={(item, index) => index.toString()}
                renderItem={info => (
                    <ListItem
                        placeName={info.item.value}
                    />
                )}
            />
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.listContainer}>
                    {this.placesOutput()}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    placeInput: {
        width: '70%'
    },
    placeButton: {
        width: '30%'
    },
    listContainer: {
        width: '100%'
    }
});

const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: (name) => {
            dispatch(addPlace(name))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxDashBoardCompoent) 