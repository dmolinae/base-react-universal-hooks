import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Colors from '../../../constants/colors';
import Hoverable from '../../../lib/Hoverable';

const SideMenuGroup = (props) => {
  const iconProps = {
    color: Colors.dark,
    size: 30
  }
  return (
    <Hoverable>
      {hover => (
        <TouchableOpacity style={[styles.container, hover && styles.containerHover]}>
          <View style={styles.row}>
            <MaterialIcons name='keyboard-arrow-right' {...iconProps}/>
            <Text style={styles.text}>{props.text}</Text>
          </View>
        </TouchableOpacity>
      )}
    </Hoverable>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 5,
    marginTop: 5,
    backgroundColor: Colors.side_menu_primary,
  },
  containerHover: {
    backgroundColor: Colors.side_menu_hover
  },
  text: {
    color: Colors.dark,
    fontSize: 18,
    paddingLeft: 10,
    fontWeight: 'bold'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default SideMenuGroup;
