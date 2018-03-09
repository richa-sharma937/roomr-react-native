import React, { Component } from 'react';
import {  View, StyleSheet,Text,TouchableOpacity } from 'react-native';
import styles from '../styles/commonstyles';
export default class Commonheader extends Component {
    constructor(props){
        super(props);
        console.log(this.props._addTask);
       this.state = {
         data: props.data,
         nocolor: props.nocolor,
         color: props.color,
         onclick: props.onclick
      }
    }
    render() { 
        const colorstyle = (this.state.nocolor==1) ? {backgroundColor:this.state.color.toString()} : {};
        const textcolorstyle = (this.state.nocolor==1) ? {backgroundColor:this.state.color.toString()} : {color:'rgb(68,35,124)'};
        if(!this.state.onclick){
         return (
            <View style={[{flex:0.1,},styles.flexcontentmiddle,colorstyle]}>
                <Text style={[{fontSize:20,},styles.textstyles,textcolorstyle]}>{this.state.data}</Text>
            </View>
        );
        }else{
            return (
            <View style={[{flex:0.1,},styles.flexcontentmiddle,colorstyle]}>
            <TouchableOpacity onPress={(e)=>{this.props._addTask}}>
                <Text style={[{fontSize:20,},styles.textstyles,textcolorstyle]}>{this.state.data}</Text>
            </TouchableOpacity>
            </View>
        );
        }
    }
}