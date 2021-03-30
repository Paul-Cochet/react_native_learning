import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StyleSheet, Text, ActivityIndicator, Image } from 'react-native';

const MovieDetails = ({ route, navigation }) => {
  const { itemId } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/'+ itemId +'?api_key=62be9c7726483a4cb9762e2141e787eb')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <SafeAreaView>
      <View>
        {isLoading ? <ActivityIndicator/> : (
          <View>
            <Text style={styles.title}>{data.title}</Text>
            <Image source={{uri: 'http://image.tmdb.org/t/p/w300'+data.poster_path}} style={styles.poster} />
            <View style={styles.info}>
              <Text style={styles.score}>Score: {data.vote_average.toFixed(1)}/10</Text>
              <Text style={styles.date}>Released on: {data.release_date}</Text>
            </View>
            <Text style={styles.description}>{data.overview}</Text>
          </View>
          )}
      </View>
    </SafeAreaView>
  );
  //
}

const styles = StyleSheet.create({
  poster: {
    height: 300,
    width: '50%',
    marginLeft: '25%',
  },
  description: {
    textAlign: 'justify',
    margin: 10
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10
  },
  info: {
    flexDirection: 'row'
  },
  score: {
    flex: 1,
    textAlign: 'center',
  },
  date: {
    flex: 1,
  }
});

export default MovieDetails