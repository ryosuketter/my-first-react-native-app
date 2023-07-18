import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Linking } from 'react-native';

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => Linking.openURL('https://example.com')}>
        <Text style={styles.link}>https://example.com</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'lightgrey',
    paddingTop: 10,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
  },
});
