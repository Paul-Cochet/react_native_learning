import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Item = ({ title, imageSource, overview }) => {
  return(
    <View style={styles.item}>
      <View>
        {imageSource === null ? <View style={styles.empty}><Icon name='image' size={90} style={styles.icon}/></View> : <Image source={{uri: 'http://image.tmdb.org/t/p/w300'+imageSource}} style={styles.image} />}
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.overview} numberOfLines={4} ellipsizeMode='tail'>{overview}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: '#b7b7a4',
    padding: 10,
    paddingLeft: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 140,
  },
  image: {
    flex: 1,
    width: 80,
    marginRight: 10,
    marginLeft: 5
  },
  empty: {
    flex: 1,
    height: 120,
    width: 80,
    backgroundColor: '#6b705c',
    marginLeft: 5,
    marginRight: 10
  },
  icon: {
    flex: 1,
    marginLeft: -5,
    marginTop: 15
  },
  details: {
    flex: 3,
    flexDirection: "column",
  },
  title: {
    fontSize: 22,
  },
  overview: {
    flex: 1,
  },
});

export default Item