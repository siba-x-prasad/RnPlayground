import React from "react";
import { SafeAreaView, StyleSheet, View, StatusBar, TextInput, Pressable, Text, Alert, Button, ActivityIndicator, Image } from "react-native";
import { Redirect } from "react-router-native";
import AppButton from '../components/AppButton'
import TextField from '../components/TextField'
import styles from '../style/globalStyles';
import Spinner from "../components/Spinner";
import ContainerView from "../components/ContainerView";
import AppTextInput from "../components/AppInputText";

const LoginScreen = ({ route, navigation }) => {

    const [email, onChangeEmail] = React.useState("email Id");
    const [password, onChangePassword] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    validate = () => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 10000)

        if (!this.validateEmail(email)) {
            Alert.alert('Invalid Email Id')
        }
        else if (password == '') {
            Alert.alert('Invalid Password')
        }
        else {
            Alert.alert('Successfull')
        }
    }

    onLoginClick = () => {
        setIsLoading(true);
        Alert.alert('Login CLicked')
    }

    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };

    return (
        <SafeAreaView style={styles.baseContainer}>
            <ContainerView>
                <ContainerView viewStyle = {{flex : 1}}>
                    <Text>
                        Login
                    </Text>
                    <Image
                        style={{ ...internalStyle.image, alignItems : 'flex-end'}}
                        source={require('../assets/my_image.jpeg')}
                    />
                </ContainerView>

                <ContainerView 
                    viewStyle = {{flex: 1}}>
                    <AppTextInput
                        keyboard='email-address'
                        hint='Email'
                        text='Email Id'
                        onChangeText={onChangeEmail}
                        errorMessage='Invalid Email Id'
                    />

                    <AppTextInput
                        keyboard='default'
                        password={true}
                        hint='Password'
                        text={password}
                        onChangeText={onChangePassword}
                        errorMessage='Invalid Password'
                    />

                    <AppButton
                        title='Login'
                        onClick={onLoginClick}
                        isEnabled={true}
                    />

                    <Text
                        style={styles.appText}
                        onPress={() => {
                            setIsLoading(true);
                            Alert.alert('Redirecting')
                        }}
                    >
                        {"Have Account ? Login Now !"}
                    </Text>
                    {isLoading
                        ? <Spinner />
                        : null
                    }
                </ContainerView>
            </ContainerView>
        </SafeAreaView>
    );
}

const internalStyle = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    // styling the image
    image: {
        justifyContent: 'center',
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "red",
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#d3d3d3',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        placeholderTextColor: "#000000"
    },
    button: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        width: '80%',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        textAlign: 'center'
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
});


export default LoginScreen;