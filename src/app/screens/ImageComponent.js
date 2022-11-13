import React from "react";
import { SectionList, Text, View, StyleSheet, Image } from 'react-native';

const ImageComponent = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Load Image From Assets </Text>
      <Image
        source={require('../assets/my_image.jpeg')}
      />
<Text style={styles.text}> Load Image From URL </Text>
<Image
        source={{
          uri: 'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U',
        }}
      />
    </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  sectionHeaderStyle: {
    backgroundColor: '#CDDC89',
    fontSize: 20,
    padding: 5,
    color: '#fff',
  },
  sectionListItemStyle: {
    fontSize: 15,
    padding: 15,
    color: '#000',
    backgroundColor: '#F5F5F5',
  },
  listItemSeparatorStyle: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
});