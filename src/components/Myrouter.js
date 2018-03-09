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
    <Stack key="root" hideNavBar>
        <Scene key="createhome"
        component={CreateHome}
        title="CreateHome"
        />
        <Scene key="Createroom"
        component={CreateRoom}
        title="CreateRoom"
        />
        <Scene key="homescreen"
        component={HomeScreen}
        title="HomeScreen"
        initial/>
        <Scene key="persons"
        component={Persons}
        title="Persons"
        />
        <Scene key="addperson"
        component={AddPerson}
        title="AddPerson"
        />
        <Scene key="addroom"
        component={AddRoom}
        title="AddRoom"
        />
        <Scene key="searchroomer"
        component={SearchRoomer}
        title="searchroomer"
        />
    </Stack>
  </Router>
  );
  }

  export default Myrouter;
