import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export const FinishQuestion = ({ question }) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.container}>
        <View style={styles.status}>
          <Text>{question.id}</Text>
        </View>
        <View style={styles.question}>
          <Text>{question.question}</Text>
        </View>
        <View style={styles.rightAnswer}>
          <Text>{question.rightAnswerId}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
  },
  status: {
    borderWidth: 1,
  },
  question: { borderWidth: 1 },
  rightAnswer: { borderWidth: 1 },
});
