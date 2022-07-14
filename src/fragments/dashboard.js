import React from 'react';
import {StyleSheet, View ,Image, Text, Button, ImageBackground} from 'react-native';
import CarImg from "../assets/car.png";
import Speed from '../components/speed';
import Dash from "../assets/dash.png";
const Dashboard=()=>{


    const styles = StyleSheet.create({
        container :{
            flex : 1,
            flexDirection : 'column',
            width : '100%',    
            backgroundColor: '#233581'
        },
        row1 : {
            flex:1,
            flexDirection : 'row',   
        },
        row2c2 : {
            flex:1,
            flexDirection : 'row',
            justifyContent:'center',
            alignContent:'center',
            marginBottom:10,
            
        },
        row2container:{
            top:25,
        },
        row2 : {
            flex:1,
            flexDirection : 'row',
        },

        carimage:{
            width: "50%",
            height: "100%",
        }
    
    });

    return (
        
        <View style={styles.container}>
            <View style = {styles.row1}>
                 <Image style ={styles.carimage} source={CarImg} />  
                <View style={styles.row2c2}>
                    <View style={styles.row2container}>
                  <Speed/>
                  </View>
                </View>

            </View>

            <View style = {styles.row2}>
            <Image style ={{height:'100%',width:'100%'}} source={Dash} />  

            </View>
         
        </View>
        
    )
}

export default Dashboard;