import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';

export const Topic = ({ topic, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(topic)}>
      <View style={styles.topic}>
        <View style={styles.container}>
          <View style={styles.elevationLow}>
            <Image style={styles.image} source={{ uri: topic.img }}></Image>
          </View>
          <Text style={styles.title}>{topic.text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  topic: {
    // borderColor: 'black',
    // borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 15,
    marginRight: 10,
  },
  container: {
    width: 150,
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

  // imageContainer: {
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.8,
  //   shadowRadius: 2,
  // },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    color: '#fff',
    fontFamily: 'open-regular',
    textAlign: 'center',
  },
});
// const navigatorOptions = {
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
//     },
//     headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
//   },
// };
