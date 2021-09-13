import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    avatar:{
        width:60,
        height:60,
        marginRight:15,
        borderRadius:50,
    },
    container:{
        flexDirection:'row',
        width:"100%",
        justifyContent:'space-between',
        padding:10,
        backgroundColor:'white',

    },
    username:{
        fontWeight:'bold',
        fontSize:16,

    },
    midcontainer:{
        justifyContent:'space-around',


    },
    leftcontainer:{
        flexDirection:'row',


    },
    lastmessage:{
        fontSize:16,
        color:'grey',

    },
    time:{
        fontSize:16,
        color:'grey',

    }
    
});

export default styles;