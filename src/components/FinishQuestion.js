import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export const FinishQuestion = ({ question }) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.container}>
        <View style={styles.status}>
          <Text>{question.id}</Text>
        </View>
        <View style={styles.question}>
          <Text style={styles.questionText}>{question.question}</Text>
        </View>
        <View style={styles.rightAnswer}>
          <Text style={styles.answerText}>{question.rightAnswerId}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.5)',
  },
  status: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    width: '60%',
  },
  rightAnswer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: { fontSize: 12, fontFamily: 'open-regular', color: 'white' },
  answerText: { fontSize: 14, fontFamily: 'open-regular', color: 'white' },
});
