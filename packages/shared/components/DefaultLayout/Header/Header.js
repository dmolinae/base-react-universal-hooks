import React from 'react';
import { View, Text, Button, StyleSheet } from "react-native";

import HeaderButton from './HeaderButton.js';

import Colors from '../../../constants/colors.js'
import Texts from '../../../constants/texts.js'

const Header = (props) => {

  const goToHome = () => {
    props.navigation.navigate('Home')
  }

  const goToSecond = () => {
    props.navigation.navigate('Second')
  }

  return (
    <View style={[styles.shadow, styles.container]}>
      <View style={styles.buttonContainer}>
        <HeaderButton text={Texts.header_menu1} onPress={goToHome}/>
        <HeaderButton text={Texts.header_menu2} onPress={goToSecond}/>
        <HeaderButton text={Texts.header_menu3}/>
        <HeaderButton text={Texts.header_menu4}/>
        <HeaderButton text={Texts.header_menu5}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: Colors.dark,
  },
  shadow: {
    shadowColor: "#9a9a9a",
    shadowOffset: { width: 4, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 2
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
});

export default Header;
