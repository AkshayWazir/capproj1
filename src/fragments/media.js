import React from 'react';
import {StyleSheet, View ,Image, Text, Button} from 'react-native';
import Speed from '../components/speed';
import Mediaimg from "../assets/media.png";


const Media = () => {
    
    return ( 
        <View>
            <Image style={{height:'100%',width:'100%'}} source={Mediaimg}>
            </Image>
        </View>
     );
}
 
export default Media;