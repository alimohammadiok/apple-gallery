import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function AddPhoto({addSubmitHandler}){
 const [name, setName] = useState(null);

  return(
     <View style={{  alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={ ()=> addSubmitHandler(name)} />
    </View>
  )
}