import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import styles from './styles';
import { View } from '../Themed';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core';


const NewMessageButton=()=>{
    const navigation=useNavigation();

    const onPress=()=>{

        navigation.navigate('Contacts');

    }
    return(

        
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>

              <MaterialCommunityIcons 
                 name="message-reply-text" 
                 size={28} color="white"
              />

            </TouchableOpacity>

        </View>

        
    )
}

export default NewMessageButton;