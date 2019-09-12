import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import AppNavigatorSwitch from "./AppNavigatorSwitch";
import { View, StyleSheet } from 'react-native';

import Header from "../DefaultLayout/Header/Header";
import Footer from "../DefaultLayout/DefaultFooter";
import SideMenu from "../DefaultLayout/SideMenu/SideMenu";

export default () => {
  return (
    <View style={Styles.flex}>
      <Header />
      <View style={[Styles.flex, Styles.row]}>
        <SideMenu />
        <View style={Styles.flex}>
          <Router>
            <AppNavigatorSwitch/>
          </Router>
        </View>
      </View>
      <Footer />
    </View>
  );
};

const Styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  row: {
    flexDirection: 'row'
  }
});
