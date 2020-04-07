import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DATA } from '../data';

export const TopicScreen = ({ navigation }) => {
  const topicId = navigation.getParam('topicId');
  const topicText = navigation.getParam('topicText');

  const topic = DATA.find((elem) => elem.id === topicId);

  return (
    <View style={styles.center}>
      <Text>{topic.id}</Text>
      <Text>{topic.text}</Text>
    </View>
  );
};

TopicScreen.navigationOptions = ({ navigation }) => {
  const topicText = navigation.getParam('topicText');
  return {
    headerTitle: topicText,
  };
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
