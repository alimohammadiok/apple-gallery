import React from 'react';
import { Button, Image, View, TouchableOpacity, Text } from 'react-native';

export default function PhotoesItems({item, pressHandler}) {
  
  return(
    <TouchableOpacity onPress= { () => pressHandler(item.key)}>
    <View>
        <Text>{item.name}</Text>
        <Image source={{ uri: item.uri }} style={{ width: 100, height: 100 }} />
     </View> 
    </TouchableOpacity>
  )
}