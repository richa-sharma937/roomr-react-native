import React, { Component } from 'react';
import { Image, View, StyleSheet,Text,TouchableOpacity,TextInput,ScrollView,AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Commonheader from './Commonheader';
import styles from '../styles/commonstyles';
import one_person_png from '../images/icons8-user-male-48.png'
import multi_person_png from '../images/2person_gray.png'
import male_png from '../images/boy.png'
import female_png from '../images/girl.png'
import add_more_png from '../images/plus.png'
import DatePicker from 'react-native-datepicker'

class AddRoom extends Component {
    constructor(props){
      super(props); 
     this.state = {
      date:"",
      monthlycost:'',
      rooms:[],
      gender:'',
      suitable:'',
      backgroundcolorM:'white',
      backgroundcolorF:'white',
      backgroundcolorMultiple:'white',
      backgroundcolorSingle:'white'
    }
  }
  async componentDidMount(){

    let response = await AsyncStorage.getItem('rooms'); 
    let listOfTasks = await JSON.parse(response) || [];
    this.setState({rooms:listOfTasks});
  }
  async _addTask () {
    // alert(Actions);
    // AsyncStorage.removeItem('rooms')
    const rooms = [...this.state.rooms,
      {
       gender:this.state.gender,
       suitable:this.state.suitable,
       date:this.state.date,
       monthlycost:this.state.monthlycost
      } ]; 

    await AsyncStorage.setItem('rooms', 
      JSON.stringify(rooms)); 
      Actions.Createroom();
    }
  
    selectoption(option){
      if(option=='M'){
        this.setState({gender:'M'});
        this.setState({backgroundcolorM : '#412277'});
        this.setState({backgroundcolorF : 'white'});
      }else if(option=='F'){
        this.setState({gender:'F'});
        this.setState({backgroundcolorM : 'white'});
        this.setState({backgroundcolorF : '#412277'});
      }else if(option=='single'){
        this.setState({suitable:'single'});
        this.setState({backgroundcolorSingle : '#412277'});
        this.setState({backgroundcolorMultiple : 'white'});
      }else if(option=='multiple'){
        this.setState({suitable:'multiple'});
        this.setState({backgroundcolorSingle : 'white'});
        this.setState({backgroundcolorMultiple : '#412277'});
      }
    }
    render() {
      return (
        <View style={{flex:1,backgroundColor:'rgb(255,255,255)'}}>
          <Commonheader data={'Add a room'} nocolor={0}/>
          <View style={[{flex:0.8}]}>
            <ScrollView>
            <View style={{flex:0.4,backgroundColor:'rgb(247,246,246)'}}>
            <View style={{flex:0.2,flexDirection:'row',marginTop:10}}>
                <View style={{flex:0.5,marginLeft:40}}><Text style={{color:'black'}}>Suitable for</Text></View>
                <View style={{flex:0.5}}><Text style={{color:'black'}}>Male or female</Text></View>
            </View>


            <View style={{flex:0.3,flexDirection:'row'}}>
                <View style={{flex:0.25,marginLeft:40,margin:10,backgroundColor:this.state.backgroundcolorSingle,alignItems:'center',borderRadius:10}}>
                <TouchableOpacity onPress={(e)=>{this.selectoption('single')}}>
                  <Image source={one_person_png} style={{}}/>
                  </TouchableOpacity>
                  </View>
                <View style={{flex:0.25,margin:10,backgroundColor:this.state.backgroundcolorMultiple,alignItems:'center',borderRadius:10}}>
                <TouchableOpacity onPress={(e)=>{this.selectoption('multiple')}}>
                  <Image source={multi_person_png} />
                  </TouchableOpacity>
                </View>
                <View style={{flex:0.25,marginLeft:40,margin:10,backgroundColor:this.state.backgroundcolorM,alignItems:'center',borderRadius:10}}>
                <TouchableOpacity onPress={(e)=>{this.selectoption('M')}}>
                  <Image source={male_png} />
                  </TouchableOpacity>
                </View>
                <View style={{flex:0.25,margin:10,backgroundColor:this.state.backgroundcolorF,alignItems:'center',borderRadius:10}}>
                <TouchableOpacity onPress={(e)=>{this.selectoption('F')}}>
                  <Image source={female_png} />
                  </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:0.3,flexDirection:'row',marginTop:5}}>
                <View style={{flex:0.25,marginLeft:40}}><Text style={{color:'black'}}>1 person</Text></View>
                <View style={{flex:0.25}}><Text style={{color:'black'}}>2 sharing</Text></View>
                <View style={{flex:0.25,marginLeft:40}}><Text style={{color:'black'}}>Male</Text></View>
                <View style={{flex:0.25}}><Text style={{color:'black'}}>Female</Text></View>
            </View>
            
            <View style={{flex:0.1,flexDirection:'row',marginLeft:40,height:30,marginTop:10}}>
                <Text style={{color:'black'}}>Monthly cost</Text>
            </View>

          </View>
          <View style={{flex:0.1,marginLeft:40}}>
                <TextInput
                  placeholder="$550"
                  underlineColorAndroid="transparent"
                  onChangeText={(value)=>{this.setState({monthlycost:value})}}
                />
            </View>
          <View style={{flex:0.1,marginLeft:40,height:40,flexDirection:'row',alignItems:'center',backgroundColor:'rgb(247,246,246)'}}>
                <Text style={{color:'black'}}>Security deposit</Text>
            </View>

          <View style={{flex:0.1,marginLeft:40}}>
                <TextInput
                  placeholder="$550"
                  underlineColorAndroid="transparent"
                />
            </View>

          <View style={{flex:0.1,height:40,flexDirection:'row',alignItems:'center',backgroundColor:'rgb(247,246,246)'}}>
                <View style={{flex:0.5,marginLeft:40}}>
                <Text style={{color:'black'}}>Available from</Text>
                </View>
                <View style={{flex:0.5}}>
                <Text style={{color:'black'}}>Term length</Text>
                </View>
            </View>
          <View style={{flex:0.1,flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:0.5,marginLeft:40}}>
                <DatePicker
                  style={{borderColor: "rgba(255, 255, 255, 0.5)"}}
                  date={this.state.date}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateInput: {
                      borderWidth: 0
                    }
                  }}
                  onDateChange={(date) => {this.setState({date: date})}}
                />
                </View>
                <View style={{flex:0.5}}>
                <TextInput
                  placeholder="Long length"
                  underlineColorAndroid="transparent"
                />
                </View>
            </View>
          <View style={{flex:0.1,height:40,flexDirection:'row',alignItems:'center',backgroundColor:'rgb(247,246,246)'}}>
                <View style={{marginLeft:40}}><Text style={{color:'black'}}>Brief description of room</Text></View>
            </View>

          <View style={{flex:0.1,flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:0.5,marginLeft:40}}>
                <TextInput
                  placeholder="E.g. Downstaires with sunlight in morning"
                  underlineColorAndroid="transparent" 
                  multiline={true}
                  numberOfLines={10}
                />
                </View>
                {/* <View style={{flex:0.5}}><Text style={{color:'gray'}}>Term length</Text></View> */}
            </View>

          <View style={{flex:0.1,flexDirection:'row',alignItems:'center',backgroundColor:'rgb(247,246,246)'}}>
                <View style={{flex:0.5,marginLeft:40}}><Text style={{color:'black'}}>Photos of room</Text></View>
                <TouchableOpacity onPress={(e)=>{Actions.persons()}}>
                    <Image source={add_more_png} style={{width:50,height:50}}/>
                </TouchableOpacity>
            </View>
          <View style={{flex:0.1,flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:0.5,marginLeft:40}}></View>
                {/* <View style={{flex:0.5}}><Text style={{color:'gray'}}>Term length</Text></View> */}
            </View>
          </ScrollView>
          </View>
          {/* <Commonheader data={'Add room'} nocolor={1} color={'rgb(68,179,228)'} onclick={this._addTask}/> */}
          <View style={[{flex:0.1,backgroundColor:'rgb(68,179,228)'},styles.flexcontentmiddle]}>
            <TouchableOpacity onPress={(e)=>{this._addTask()}}>
                <Text style={[{fontSize:20,backgroundColor:'rgb(68,179,228)'},styles.textstyles,]}>Add room</Text>
            </TouchableOpacity>
            </View>
          
        </View>
      );
    }
  }
  
  export default AddRoom; 
