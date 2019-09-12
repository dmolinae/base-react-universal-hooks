import React from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from '../../../constants/colors';
import Texts from '../../../constants/texts';
import SideMenuGroup from './SideMenuGroup';

const SideMenu = () => {
  return (
    <View style={styles.container}>
      <SideMenuGroup text={Texts.sidemenu_group1}/>
      <SideMenuGroup text={Texts.sidemenu_group2}/>
      <SideMenuGroup text={Texts.sidemenu_group3}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    backgroundColor: Colors.light,
    borderColor: Colors.side_menu_primary,
    borderRightWidth: 0.1
  },
  shadow: {
    shadowColor: "#9a9a9a",
    shadowOffset: { width: 4, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 2
  },
  buttonContainer: {
    flex: 1,
  }
});

export default SideMenu;
