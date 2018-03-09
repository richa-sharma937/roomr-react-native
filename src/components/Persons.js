import React, { Component } from 'react';
import { Image, View, StyleSheet,Text,TouchableOpacity,TextInput,ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Commonheader from './Commonheader';
import styles from '../styles/commonstyles';
import search_png from '../images/search.png'
import gray_search_png from '../images/gray_search.png'
import addNewPerson from '../images/addNewPerson.png'
import add_more_png from '../images/icons-plus.png'

class Persons extends Component {
    constructor(props){
      super(props);
     this.state = {
    }
  }
    componentDidMount() {
    }
  
    render() {
      return (
        // <ScrollView>
        <View style={{flex:1}}>
          <Commonheader data={'Add a person'} nocolor={0} />
        <ScrollView>
          <View style={[{flex:0.1},styles.Searchinputstyle]}>
          <Text
             style={{flex:1,marginLeft:15}}
            //  placeholder="Search for a person"
            //  underlineColorAndroid="transparent"
             onPress={(e)=>{Actions.searchroomer()}}
          >Search for a person</Text>
          <Image source={search_png} style={styles.ImageStyle}/>
          </View>
          <View style={{flex:0.7,alignItems:'center',justifyContent:'center',margin:10}}>
            <View style={{flex:0.4}}>
              <TouchableOpacity onPress={(e)=>{Actions.searchroomer()}}>
                <Image source={gray_search_png} style={{borderRadius:10}}/>
              </TouchableOpacity>
            </View>
            <View style={{flex:0.2,justifyContent:'center',margin:10}}>
              <Text > Or </Text>
            </View>
            <View style={{flex:0.4}}>
              <TouchableOpacity onPress={(e)=>{Actions.addperson()}}>
                <Image source={addNewPerson} style={{borderRadius:10}}/>
              </TouchableOpacity>
            </View>

          </View>
          <View style={{flex:0.1,alignItems:'flex-end',margin:10}}>
          <TouchableOpacity onPress={(e)=>{Actions.addperson()}}>
            <Image source={add_more_png} style={{width:50,height:50}}/>
          </TouchableOpacity>
          </View>
          </ScrollView>
        </View>
         
      );
    }
  }
  
  export default Persons; 
