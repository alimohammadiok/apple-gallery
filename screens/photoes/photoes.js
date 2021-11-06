import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, FlatList, Text, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Header from "../partialViews/header";
import PhotoesItems from './photoItems';
import AddPhoto from './addPhoto';

export default function ImagePickerExample() {
  const [photoes, setPhotoes] = useState([
    {name: 'test', uri: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png', key:1},
    {name: 'ali', uri: 'https://homepages.cae.wisc.edu/~ece533/images/peppers.png', key:2}
  ]);

  const pressHandler = (key)=> {
    setPhotoes((prevPhotoes)=> {
      return prevPhotoes.filter(photo => photo.key != key)
    })
  }

  const addSubmitHandler = async (name) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });


   
    console.log(result);

    if (!result.cancelled) {
      // setImage(result.uri);
       setPhotoes ((prevPhotoes)=> {
      return [
        {name:name, uri: result.uri, key: Math.random().toString()},
        ...prevPhotoes
      ]
    })
    }
  };
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

 

  return (
    <>
    <View style={styles.container}>
    <Header />
    <AddPhoto addSubmitHandler = {addSubmitHandler}/>

    <View style={styles.content}>
    <View style={styles.list}>

      <FlatList
        data={photoes}
        renderItem = {( {item })=> (
          <PhotoesItems item={item} pressHandler= {pressHandler} />
          
        )
        }
      />
    </View>
    </View>
    </View>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  content: {
    padding: 40,
  },
  list: {
    marginTop: 20

  }


}

)