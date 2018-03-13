import React, { Component } from 'react';
import { Image, View, StyleSheet,ImageBackground,Text,FlatList,TouchableOpacity,AsyncStorage,ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import styles from '../styles/commonstyles';
import Commonheader from './Commonheader';
import ok_png from '../images/checkmark.png'
import add_more_png from '../images/icons-plus.png'
import minion_jpg from '../images/minion.jpg'
import roomerjson from './roomerJson';

class CreateHome extends Component {
  constructor(props){
    super(props);
   this.state = {
     list : [
       {
       onclick:1,
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfHQscMOymQ5qNWrM7Ky27w1hlci3y2p3WxCPv3Yg8mbU2Rjp',
        title:'',
       }
     ],
  }
}
FlatListItemSeparator = () => {
  return (
    <View
      style={{
        // height: 20,
        width: "100%",
        margin: 10,
        // backgroundColor: "black",
      }}
    />
  );
}
  async componentDidMount() {
    const data = await AsyncStorage.getItem('personselected');
        if(data){
          let ar = JSON.parse(data);
           ar.push({
            onclick:1,
            image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQfHQscMOymQ5qNWrM7Ky27w1hlci3y2p3WxCPv3Yg8mbU2Rjp',
            title:''
           });
            this.setState({list: ar});
        }
  }

  render() {
    return (
      <View style={{flex:1}}>
      {/* <ScrollView> */}
      <Commonheader data={'Create a new home'}  nocolor={1} color={'rgb(68,35,124)'}/>
        <View style={[{flex:0.3}]}>
            <View style={[{flex:0.5},styles.flexcontentmiddle]}>
              <Text style={{fontSize:20,color:'rgb(68,35,124)'}}>Housemates</Text>
              <Text style={[{fontSize:15,color:'gray'}]}>Tell us who you live with</Text>
            </View>
            <View style={{flexDirection:'row',flex:0.5}}>
            <View style={[{flex:0.5,alignItems:'flex-end',marginLeft:180}]}>
              <Image source={minion_jpg} style={{width:180,height:100}}/>
            </View>
            <View style={[{flex:0.5,alignItems:'flex-end',justifyContent:'flex-end'}]}>
            <TouchableOpacity onPress={(e)=>{Actions.persons()}}>
              <Image source={add_more_png} style={{width:50,height:50,marginTop:1200,borderRadius:50}}/>
              </TouchableOpacity>
              </View>
              </View>
        </View>
        <View style={[{flex:0.5,backgroundColor:'floralwhite'}]}>
        <ScrollView>
        <FlatList
         horizontal={false}
         contentContainerStyle={{flex: 1,alignItems: 'center',justifyContent:'center',marginTop:10}}
         numColumns={3}
          data={ this.state.list }
          ItemSeparatorComponent = {this.FlatListItemSeparator}
          renderItem={({item}) =>{
            let action='';
            // if(item.onclick==1)
            //    action = Actions.searchroomer();
            // else
            //    action='';
            return(
              <View style={{marginLeft:10,marginRight:10,marginBottom:0,marginTop:10}}>
                <View>         
                <TouchableOpacity onPress={(e)=>{(item.onclick==1)?Actions.searchroomer():''}}>   
                  <Image source={{uri:item.image}} style={{width:80,height:80,borderRadius:240}}  />
                </TouchableOpacity>
                </View>
                <View style={{backgroundcolor:'rgb(117,192,232)',alignItems: 'center'}}>
                  <Text style={{fontWeight:'bold'}}> {item.title} </Text>
                </View>
             </View>
            )
          } 
          }
        />
        </ScrollView>
        </View>
        <View style={{alignItems:'flex-end',marginRight:15,flex:0.1}}>
        <TouchableOpacity onPress={(e)=>{Actions.Createroom()}}>
          <Image source={ok_png} style={{width:50,height:50,}}/>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default CreateHome; 
