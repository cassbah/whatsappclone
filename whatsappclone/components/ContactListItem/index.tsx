import moment from "moment";
import React  from "react";
import { View, Text, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { ChatRoom, User } from "../../types";
import styles from "./styles";
import { useNavigation } from "@react-navigation/core";


export type ContactListItemPrpops={
    user:User;

}

const ContactListItem=(props: ContactListItemPrpops)=> {
    const {user}=props;
    
    const navigation=useNavigation();
    const onClick=()=>{
        //navigate to chatroom with this user
        
        }

    
    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
            <View style={styles.leftcontainer}>

                 <Image source={{uri:user.imageUrl}} style={styles.avatar}/>
            <View style={styles.midcontainer}>
                <Text style={styles.username}>{user.name} </Text>
            
            </View>
            </View>
           

            

           
           

        </View>
        </TouchableWithoutFeedback>
        
    )

};

export default ContactListItem;