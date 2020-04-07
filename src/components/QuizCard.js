import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { IMAGES } from './images';

export default class QuizCard extends React.Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        // onPress={() => onOpen(topic)}
      >
        <View style={styles.quiz}>
          <View style={styles.container}>
            <View style={styles.elevationLow}>
              <Image
                style={styles.image}
                source={IMAGES[this.props.icon]}
              ></Image>
            </View>

            <Text style={styles.title}>{this.props.quiz.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  quiz: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 15,
    marginLeft: 15,
    marginRight: 15,
  },
  container: {
    width: 100,
    alignItems: 'center',
  },
  elevationLow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 2 },
        shadowOpacity: 0.3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    color: '#fff',
    fontFamily: 'open-regular',
    textAlign: 'center',
  },
});
