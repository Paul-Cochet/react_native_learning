import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Components/HomeScreen'
import ListView from './Components/ListView'
import MovieDetails from './Components/MovieDetails'

const Stack = createStackNavigator();

const App = () => {
  const [text, onChangeText] = React.useState(null);
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="List View" options={{ title: 'Movie list' }} component={ListView}/>
        <Stack.Screen name="Movie Details" component={MovieDetails}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;