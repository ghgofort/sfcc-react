'use strict';

/*
 * SectionCard.js
 * A Layout component for seperation of sections within a scene.
 */

import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

const SectionCard = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
   padding: 5,
   backgroundColor: '#fff',
   justifyContent: 'center',
   position: 'relative',
   marginTop: 10,
   marginBottom: 0,
   margin: 10,
   borderRadius: 5,
 }
});

export default SectionCard;
