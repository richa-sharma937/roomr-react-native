/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import HomeScreen from './HomeScreen';
import CreateHome from './CreateHome';
import CreateRoom from './CreateRoom';
import Persons from './Persons';
import AddPerson from './AddPerson';
import AddRoom from './AddRoom';
import SearchRoomer from './SearchRoomerList';

const Myrouter = () => {
  return (
  <Router>
    <Stack key="root" >
        <Scene key="createhome"
        component={CreateHome}
        title="CreateHome" hideNavBar
        />
        <Scene key="Createroom"
        component={CreateRoom}
        title="CreateRoom" hideNavBar
        />
        <Scene key="homescreen"
        component={HomeScreen}
        title="HomeScreen" hideNavBar
        initial/>
        <Scene key="persons"
        component={Persons}
        title="Persons" hideNavBar
        />
        <Scene key="addperson"
        component={AddPerson}
        title="AddPerson" hideNavBar
        />
        <Scene key="addroom"
        component={AddRoom}
        title="AddRoom" hideNavBar
        />
        <Scene key="searchroomer" 
        component={SearchRoomer}
        title="Back"
        />
    </Stack>
  </Router>
  );
  }

  export default Myrouter;
