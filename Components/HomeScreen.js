import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button, Alert, TextInput, Image } from 'react-native';
import Item from './Item'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>Hello World!</Text>
      <Button
        title='Look up a movie!'
        onPress={() => navigation.navigate('List View')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    marginTop: 250
  },
});

export default HomeScreen