import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, Button, FlatList, TouchableOpacity } from 'react-native';
import { Settings} from './settings'
import { GoogleDriveScreen} from './googleDrive'
import { OneDriveScreen } from './oneDrive'
import { PhotoesScreen } from './photoes/photoes';
import { FilesScreen} from './files'
import { AntDesign } from '@expo/vector-icons'; 
export default function HomeScreen({navigation}) {
  const [services, setServices] = useState([
    {name: 'Files ',       logoSrc: require('../images/folder-desktop.svg'), relatedComponent: "FilesScreen"},
    {name: 'Photoes',    logoSrc: require('../images/apple-photo-gallery.svg'), relatedComponent: "PhotoesScreen"},
    {name: 'Google Drive', logoSrc: require('../images/google-drive-color.svg'), relatedComponent: "GoogleDriveScreen"},
    {name: 'One Drive', logoSrc: require('../images/onedrive-color.svg'), relatedComponent: "OneDriveScreen"},
  ])
    return (
        <View style={styles.container}>
         <FlatList  
          data={services}
          renderItem = {({item}) => (
            <>
            <TouchableOpacity 
            style= {{flexDirection: "row", marginTop: 10,  justifyContent: 'space-between' }}
            onPress={ 
              () => navigation.navigate(item.relatedComponent) }>
             <Image source={item.logoSrc}
             style={{width: 50, height: 50}}/>
             <Text style={{marginTop: 20}}>{item.name}</Text>
             <AntDesign name="rightcircle" size={24} color="black" style={{marginTop: 15}}/>
             </TouchableOpacity>
             <View  style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginTop: 10
              }}
            />
            </>
              )} 
          />
        </View>
    )
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});




