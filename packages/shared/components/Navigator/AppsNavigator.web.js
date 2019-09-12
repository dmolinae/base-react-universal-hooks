import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import AppNavigatorSwitch from "./AppNavigatorSwitch";
import { View, Text } from 'react-native';

import DefaultHeader from "../DefaultLayout/DefaultHeader";
import DefaultFooter from "../DefaultLayout/DefaultFooter";
import DefaultSideMenu from "../DefaultLayout/DefaultSideMenu";

export default () => {
  return (
    <View style={{ flex: 1}}>
      <DefaultHeader />
      <View style={{flex: 1, flexDirection: 'row'}}>
        <DefaultSideMenu />
        <View style={{ flex: 1 }}>
          <Router>
            <AppNavigatorSwitch />
          </Router>
        </View>
      </View>
      <DefaultFooter />
    </View>
  );
};
