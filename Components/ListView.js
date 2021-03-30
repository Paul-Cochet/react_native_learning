import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, View, FlatList, StyleSheet, StatusBar, Button, Alert, TextInput, Pressable } from 'react-native';
import Item from './Item'

const ListView = ( {navigation} ) => {
  const [text, onChangeText] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const search = (query) => {
    fetch('https://api.themoviedb.org/3/search/movie?api_key=62be9c7726483a4cb9762e2141e787eb&query='+ query +'&page=1')
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {search(text)}, []);

  const renderItem = ({item}) => (
    <Pressable onPress={() => navigation.navigate('Movie Details', { itemId: item.id })} style={({pressed}) => [
      {
        backgroundColor: pressed
          ? '#6b705c'
          : 'white'
      }
    ]}>
      <Item title={item.title} imageSource={item.poster_path} overview={item.overview}/>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.validateInput}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="movie title"
        />
        <Button onPress={() => search(text)} title="Search" style={styles.button}></Button>
      </View>
      <View>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={(item) => renderItem(item)}
            ListFooterComponent={<View style={styles.footer}/>}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  input: {
    flex: 3,
    height: 40,
    marginLeft: 4,
    borderWidth: 1,
    paddingLeft: 8,
  },
  button: {
    flex: 1,
    marginTop: 16,
  },
  validateInput: {
    flexDirection: "row",
    margin: 12
  },
  footer: {
    height: 70
  }
});

export default ListView