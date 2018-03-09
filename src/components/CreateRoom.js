import React, { Component } from 'react';
import { Image, View, StyleSheet,ImageBackground,Text,FlatList,TouchableOpacity,AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Commonheader from './Commonheader';
import styles from '../styles/commonstyles';
import createroom_png from '../images/createroom.png'
import backarrow from '../images/back-arrow.png'
import no_rooms_jpg from '../images/no_rooms.png'
import add_more_png from '../images/icons-plus.png'
import listicon_png from '../images/listicon.png'
import male_png from '../images/boy.png'
import female_png from '../images/girl.png'
import one_person_png from '../images/icons8-user-male-48.png'
import multi_person_png from '../images/2person_gray.png'

class CreateRoom extends Component {
    constructor(props){
      super(props);
      this.state = {
        list : [
        ] 
     }
  }
   async componentDidMount() {
    const roomslist = await AsyncStorage.getItem('rooms');
    if (roomslist) {
      this.setState({ list: JSON.parse(roomslist) });
    } else {
      this.setState({ list: [] });
    }
  }
    render() {
      let htmlconditionalcontent = '';
      if(this.state.list.length==0){
        htmlconditionalcontent = (
          <View style={[{flex:0.6,backgroundColor:'white',alignItems:'center',justifyContent:'center'}]}>
          <View>
          <TouchableOpacity onPress={(e)=>{Actions.addroom()}}>
            <Image style={{}} source={no_rooms_jpg} />
            </TouchableOpacity>
        </View>
        <View>
            <Text>No rooms!</Text>
        </View></View>);
        } else{
          htmlconditionalcontent = (
            <View style={[{flex:0.6,backgroundColor:'white'}]}>
            <FlatList
                data={ this.state.list }
                ItemSeparatorComponent = {this.FlatListItemSeparator}
                renderItem={({item}) =>{
                  let imgsrc='';
                  let single_multiple = '';
                  if(item.gender=='M')
                  {
                    imgsrc = male_png;
                  }else{
                    imgsrc = female_png;
                  }
                  if(item.suitable=='single')
                  {
                    single_multiple = one_person_png;
                  }else{
                    single_multiple = multi_person_png;
                  }
                  return(
                    <View style={{ borderRadius:10,flexDirection:'row',margin:20,height:50,flex: 1,backgroundColor:'rgb(247,246,246)',alignItems:'center'}}>
                    <View style={{flex:0.2,flexDirection:'row'}}>
                      <Image style={{}} source={listicon_png} />
                      <Image style={{width:30,height:30}} source={imgsrc} />
                    </View>
                    <View style={{width:2,height:35,backgroundColor:'#412277',margin:10}}>
                      </View>
                    <View style={{flex:0.5}}>
                      <Text>{item.date}</Text>
                    </View>
                    <View style={{width:2,height:35,backgroundColor:'#412277',margin:10}}>
                      </View>
                    <View style={{flex:0.1}}>
                      <Image style={{width:30,height:30}} source={single_multiple} />
                    </View>
                    <View style={{width:2,height:35,backgroundColor:'#412277',margin:10}}>
                      </View>
                    <View style={{flex:0.2}}>
                      <Text>{item.monthlycost}</Text>
                    </View>
                  </View>
                  )
                } 
                }
              />
          </View>);
        }
      return (
        <View style={{flex:1}}>
        <Commonheader data={'Create a new home'}  nocolor={1} color={'rgb(68,35,124)'}/>
        <View style={[{flex:0.4}]}>
            <View style={[{flex:0.5},styles.flexcontentmiddle]}>
              <Text style={{fontSize:20,color:'rgb(68,35,124)'}}>Rooms</Text>
              <Text style={[{fontSize:15,color:'gray'}]}>Add any available rooms</Text>
            </View>
            <View style={{flexDirection:'row',flex:0.5}}>
            <View style={[{flex:0.5,alignItems:'flex-end',marginLeft:180}]}>
              <Image source={createroom_png} style={{width:180,height:100}}/>
            </View>
            <View style={[{flex:0.5,alignItems:'flex-end',justifyContent:'flex-end'}]}>
            <TouchableOpacity onPress={(e)=>{Actions.addroom()}}>
              <Image source={add_more_png} style={{width:50,height:50,marginTop:1200,borderRadius:50}}/>
              </TouchableOpacity>
              </View>
              </View>
        </View>
        {htmlconditionalcontent}
        <View style={{backgroundColor:'white',alignItems:'flex-start',flex:0.2}}>
        <TouchableOpacity onPress={(e)=>{Actions.createhome()}}>
          <Image source={backarrow} style={{width:50,height:50,marginLeft:10,}}/>
          </TouchableOpacity>
        </View>
        </View>
      );
    }
  }
  
  export default CreateRoom; 