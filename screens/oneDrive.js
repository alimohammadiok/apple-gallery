import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export default function OneDriveScreen() {

  const photoHandler = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
});
  }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome to One Drive Screen</Text>
            <Button title='upload' onPress={photoHandler}></Button>
        </View>
    )
}