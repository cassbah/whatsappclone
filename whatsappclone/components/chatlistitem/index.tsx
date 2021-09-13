import moment from "moment";
import React  from "react";
import { View, Text, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { ChatRoom } from "../../types";
import styles from "./style";
import { useNavigation } from "@react-navigation/core";


export type ChatListItemPrpops={
    chatRoom:ChatRoom;

}

const ChatListItem=(props: ChatListItemPrpops)=> {
    const {chatRoom}=props;
    const user=chatRoom.users[1];
    const navigation=useNavigation();
    const onClick=()=>{
        navigation.navigate('ChatRoom', {
            id:chatRoom.id,
            name: user.name,
        })

    }
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
            <View style={styles.leftcontainer}>

                 <Image source={{uri:user.imageUri}} style={styles.avatar}/>
            <View style={styles.midcontainer}>
                <Text style={styles.username}>{user.name} </Text>
            <Text style={styles.lastmessage}>{chatRoom.lastMessage.content}</Text>
            </View>
            </View>
           

            

           
            <Text style={styles.time}>
                {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
            </Text>

        </View>
        </TouchableWithoutFeedback>
        
    )

};

export default ChatListItem;