import React from 'react';
import { Message } from '../../types';
import { Text } from 'react-native';
import { View } from '../Themed';
import moment from 'moment';
import Colors from "../../constants/Colors";
//import styles from '../chatlistitem/style';
import styles from './styles';
//import { Colors } from 'react-native/Libraries/NewAppScreen';



export type ChatMessageProps={
    message:Message;
}

const ChatMessage=(props:ChatMessageProps)=>{

    const {message}=props;

    const isMyMessage=()=>{
        return message.user.id==='u1';
    }
    return(
        <View style={styles.container}>
            <View style={[
                styles.messageBox,
                {backgroundColor: isMyMessage() ? '#DCF8CF' : 'white'},
                {marginLeft: isMyMessage() ? 50 : 0},
                {marginRight: isMyMessage() ? 0 : 50},

            ]}>
                {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
                <Text style={styles.message}>{message.content}</Text>
                <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
            </View>
            
        </View>
        //DCF8CF
        
    )
    
}

export default ChatMessage;