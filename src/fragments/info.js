import React from 'react';
import {StyleSheet, View ,Image, Text, Button} from 'react-native';
import Animated , {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    useDerivedValue,
    useAnimatedSensor,
    SensorType,
  } from 'react-native-reanimated';
  import { accelerometer } from "react-native-sensors";

const Info = () => {
    const animatedSensor = useAnimatedSensor(SensorType.ACCELEROMETER, {
        interval: 100,
      });


  //     const subscription = accelerometer.subscribe(({ x, y, z, timestamp }) =>
  // console.log({ x, y, z, timestamp }));

      const animatedStyles = useAnimatedStyle(() => {
        const rotationSpeed = animatedSensor.sensor.value.z;
      

        return {
            transform: [{rotate: `${(rotationSpeed/2)*120}deg`}],
          };
        });

        const styles = StyleSheet.create({
            container :{
                flex : 1,
                flexDirection : 'row',
                width : '100%', 
                height: '100%',   
                backgroundColor: 'black'  ,
                alignItems: 'center',
                justifyContent: 'center'
            },
            meter :{
                height: 300,
                width: 50,
                position:'absolute',
                left:220,
                backgroundColor: '#fff',
                borderTopLeftRadius: 50,
                borderTopRightRadius: 50,
                transform: [
                  {
                    rotate: "200deg",
                 }]
                },
                border:{
                    position:'relative',
                    height:350,
                    width:500,
                    borderTopLeftRadius:300,
                    borderTopRightRadius:300,
                    backgroundColor:'transparent' ,
                    borderWidth:2,
                    borderColor:'white'

                }
            })
    
        return (
            <View style={styles.container}>
                <View style={styles.border}>
                
                <Animated.View style={[styles.meter,animatedStyles]} />
                </View>
             
            </View>
        )
  

}
 
export default Info;