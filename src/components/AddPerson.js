import React, { Component } from 'react';
import { Image, View, StyleSheet,Text,TouchableOpacity,TextInput,ScrollView,Platform,AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Commonheader from './Commonheader';
import styles from '../styles/commonstyles';
import camera_png from '../images/camera.png'
import add_more_png from '../images/plus.png'
import TagInput from 'react-native-tag-input';
import { RNCamera } from 'react-native-camera';
const inputProps = {
  keyboardType: 'default',
  placeholder: 'Type to add',
  autoFocus: true,
  style: {
    fontSize: 14,
    marginVertical: Platform.OS == 'ios' ? 10 : -2,
  },
};
class AddPerson extends Component {
    constructor(props){
      super(props);
      // asyncusers = 
     this.state = {
       tags:['Cooking','Music','Weekends','Coffee','Running'],
       text: "",
       cameraon:false,
       path:'https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/user-male-circle-blue-512.png',
       name:'',
       age:'',
      //  users:asyncusers
    }
  }
  setresetcamera(){
    this.setState({'cameraon':true});
  }
  onChangeTags = (tags) => {
    this.setState({ tags });
  }

  onChangeText = (text) => {
    this.setState({ text });

    const lastTyped = text.charAt(text.length - 1);
    const parseWhen = [',', ' ', ';', '\n'];

    if (parseWhen.indexOf(lastTyped) > -1) {
      this.setState({
        tags: [...this.state.tags, this.state.text],
        text: "",
      });
    }
  }

  labelExtractor = (tag) => tag;

  async componentDidMount(){

    let response = await AsyncStorage.getItem('users'); 
    let listOfUsers = await JSON.parse(response) || [];
    this.setState({users:listOfUsers});
  }
  async _addPerson () {
    if(this.state.name==''){
      alert('Name is mandatory.');
      return;
    }
    const users = [...this.state.users,
      {
       name:this.state.name,
       age:this.state.age,
       path:this.state.path
      } ]; 

      await AsyncStorage.setItem('users', 
        JSON.stringify(users)); 
      Actions.searchroomer();
    }
  
    render() {
      if(this.state.cameraon){
        // customstyle=;
       return( <View style ={{flex: 1,flexDirection: 'column',backgroundColor: 'black'}}>
           <RNCamera
               ref={ref => {
                 this.camera = ref;
               }}
               style = {stylecss.preview}
               type={RNCamera.Constants.Type.back}
               flashMode={RNCamera.Constants.FlashMode.on}
               permissionDialogTitle={'Permission to use camera'}
               permissionDialogMessage={'We need your permission to use your camera phone'}
           />
           <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
           <TouchableOpacity
               onPress={this.takePicture.bind(this)}
               style = {stylecss.capture}
           >
               <Text style={{fontSize: 14}}> SNAP </Text>
           </TouchableOpacity>
           </View>
           </View>
           );
   }else{
      return (
        <View style={{flex:1}}>
        {/* <ScrollView> */}
          <Commonheader data={'Add a new person'} nocolor={1} color={'rgb(68,35,124)'}/>
          
          <View style={[{flex:0.8}]}>

          <ScrollView>
          <View style={{flex:0.4,alignItems:'center',backgroundColor:'rgb(247,246,246)'}}>
            <View style={{flex:0.8,margin:20,}}>
            <TouchableOpacity onPress={(e)=>{this.setresetcamera()}}>
              <Image source={{uri:this.state.path}} style={{width:100,height:100,borderColor:'gray',borderRadius:80}}/>
            </TouchableOpacity>
            </View>
            <View style={{flex:0.2,flexDirection:'row'}}>
                <View style={{flex:0.5,marginLeft:40}}><Text style={{color:'black'}}>Name</Text></View>
                <View style={{flex:0.5}}><Text style={{color:'black'}}>Age</Text></View>
            </View>
          </View>
          <View style={{flex:0.1,flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:0.5,marginLeft:35}}>
                <TextInput  
                  placeholder="Anand"
                  underlineColorAndroid="transparent"
                  onChangeText={(value)=>{this.setState({name:value})}}
                  />
                  </View>
                <View style={{flex:0.5}}>
                <TextInput  
                  placeholder="26"
                  underlineColorAndroid="transparent"
                  onChangeText={(value)=>{this.setState({age:value})}}
                  />
                  </View>
            </View>
          <View style={{flex:0.1,flexDirection:'row',alignItems:'center',backgroundColor:'rgb(247,246,246)'}}>
                <View style={{flex:0.5,marginLeft:40}}><Text style={{color:'black'}}>Tags</Text></View>
                <View style={{flex:0.5}}>
                <TouchableOpacity onPress={(e)=>{Actions.persons()}}>
                    <Image source={add_more_png} style={{width:50,height:50}}/>
                </TouchableOpacity>
                </View>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',flex:0.4,margin:20,height:100}}>

          {/* <ScrollView> */}
          <TagInput
            value={this.state.tags}
            onChange={this.onChangeTags}
            labelExtractor={this.labelExtractor}
            text={this.state.text}
            tagContainerStyle={{height:50}}
            onChangeText={this.onChangeText}
            tagColor="#412277"
            tagTextColor="white"
            inputProps={inputProps}
            maxHeight={75}
          />

          {/* </ScrollView> */}
            </View>

          </ScrollView>
          </View>

          <View style={[{flex:0.1,backgroundColor:'rgb(68,179,228)'},styles.flexcontentmiddle]}>
            <TouchableOpacity onPress={(e)=>{this._addPerson();}}>
                <Text style={[{fontSize:20,backgroundColor:'rgb(68,179,228)'},styles.textstyles,]}>Add</Text>
            </TouchableOpacity>
            </View>
          {/* <Commonheader data={'Add'} nocolor={1} color={'rgb(68,179,228)'} onclick={'Actions.'}/> */}
          
        </View>
      );
    }
    }
    takePicture = async function() {
      if (this.camera) {
          console.log(this.props.loading);
        const options = { quality: 0.5, base64: true };
        const data = await this.camera.takePictureAsync(options)
        this.setState({
            path:data.uri,
            cameraon: false,
            loading:false
        });
  
        console.log(data.uri);
      }
    };
  }
  
  export default AddPerson; 
  const stylecss = StyleSheet.create({
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20
    },
    fullwidth: {
      flex: 1,
      flexDirection:'column',
      backgroundColor:'rgb(213,144,189)'
    },
    highlighttext: {
        fontWeight: 'bold',
        fontSize:30,
        color:'rgb(0,101,150)',
    },
    roundedimage: {
        width:200,
        height:500,
        flex:1,
        borderRadius: 100
    }
  });
