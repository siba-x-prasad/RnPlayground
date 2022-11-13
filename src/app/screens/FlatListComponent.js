import React, { useEffect, useState }  from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Button,
    Image,
    useColorScheme,
    View,
    FlatList,
    ActivityIndicator
  } from 'react-native';
import { Redirect } from "react-router-native";

const FlatListComponent = ({ navigation }) => {

    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [data, setData] = useState([]);
  
    const getMovies = async () => {
       try {
        const response = await fetch('https://api.punkapi.com/v2/beers?page=1&per_page=20');
        const json = await response.json();
        console.log('Api Result '+json);
        setData(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
  
    useEffect(() => {
        console.log('Api Called');
      getMovies();
    }, []);


   const redirect = (screenName) => {

    navigation.navigate(screenName, {
      itemId: 12345,
      otherParam: 'anything you want here',
    })
  }

  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
         <Image
            style={{  height: 100, width: 80, 
                alignSelf: 'stretch' }}
            source={{
                uri: item.image_url
            }}
            resizeMode="contain"
            resizeMethod="resize"
        />
        <View>
            <Text style={styles.title}> Name : {item.name} </Text>
            <Text> {item.tagline}</Text>
        </View>
  </View>
  );

    return (
      <View style={styles.container}>
      {isLoading &&
          <ActivityIndicator 
                animating={isLoading}
                size="large"
                hidesWhenStopped={true} color="#0000ff" />
      }
      {data && 
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
        />
      }
      </View>
    );
  };

  const styles = StyleSheet.create({
    container : {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center' ,
        backgroundColor : '#d3d3d3'
    },
    itemContainer : {
        flex: 1, 
        flexDirection : "row",
        alignItems: 'flex-start',
        justifyContent: 'flex-start' ,
        backgroundColor : '#d3d3d3',
        margin: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius : 5
    },
    itemContainerText : {
        flex: 2, 
        flexDirection : "column",
        alignItems: 'center',
        justifyContent: 'center' 
    },
    input : {
        width: '80%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius : 10,
        placeholderTextColor : "#000000"
      },
      button: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        elevation: 3,
        backgroundColor: 'black',
        padding : 10,
        margin: 12,
        borderWidth: 1,
        borderRadius : 10,
      },
      text: {
        width:'80%',
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
})

export default FlatListComponent;