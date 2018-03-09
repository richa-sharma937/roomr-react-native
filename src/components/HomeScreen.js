import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,TouchableOpacity,
  View
} from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'
import { Router, Stack, Scene, Actions } from 'react-native-router-flux';
import create_home_png from '../images/add_home1.jpg';
import begin_search_png from '../images/search_room.jpg'; 
import SplashScreen from 'react-native-splash-screen';
import styles from '../styles/commonstyles';
import Commonheader from './Commonheader';
export default class HomeScreen extends Component {
    componentDidMount() {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }
  render() {
    return ( <View style={{flex:1}}>

      <Commonheader data={'Create a profile'} nocolor={1} color={'rgb(68,35,124)'}/>
        <View style={{flex:0.8}}>
            <View style={{flex:0.5,marginBottom:10}}>
              <Card
                flexDirection='column'
                containerStyle={{ flex:1,borderRadius: 10,backgroundColor:'rgb(68,35,124)' }}
                image={create_home_png}
                imageStyle={{
                    borderTopLeftRadius:10,
                    borderTopRightRadius:10,
                    overflow: 'hidden',
                  }}>
            <TouchableOpacity onPress={()=>{Actions.createhome()}}> 
                  <View style={styles.flexcontentmiddle}>
                  <Text style={[{fontSize: 20},styles.textstyles]}>
                      Create a Home
                  </Text>
                <Text style={[{fontSize: 10},styles.flexcontentmiddle]}>
                    I have a room for a new housemate.
                </Text>
                </View>
                {/* <Button
                    icon={{name: 'code'}}
                    backgroundColor='#03A9F4'
                    fontFamily='Lato'
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='VIEW NOW' /> */}
                </TouchableOpacity>
                </Card>
            </View>
            <View style={{flex:0.5}}>
              <Card
                flexDirection='column'
                containerStyle={{ flex:1,backgroundColor:'rgb(244,130,60)', borderRadius: 10 }}
                image={begin_search_png}
                imageStyle={{
                    borderTopLeftRadius:10,
                    borderTopRightRadius:10,
                    overflow: 'hidden'
                  }}>
                <View style={styles.flexcontentmiddle}>
                  <Text style={[{fontSize: 20},styles.textstyles]}>
                      Begin a search
                  </Text>
                <Text style={[{fontSize: 10},styles.flexcontentmiddle]}>
                    I want to find a new home.
                </Text>
                </View>
                </Card>
            </View>
            </View >
            <View style={[{flex:0.1},styles.flexcontentmiddle]}>
                <Text>
                    Skip & Browse
                </Text>
            </View>
            </View>
            )
        }
    }
    