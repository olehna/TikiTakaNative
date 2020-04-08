import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const errorIcon = (
  <FontAwesome5
    name={'times'}
    solid
    color={'rgba(240, 87, 108, 0.7)'}
    size={20}
  />
);
const successIcon = (
  <FontAwesome5 name={'check'} solid color={'rgb(46, 182, 53)'} size={20} />
);

export const FinishQuestion = ({ question }) => {
  
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View style={styles.container}>
        <View style={styles.status}>
          {/* <Text>{question.id}</Text> */}
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: '100%',
              padding: 5,
            }}
          >
            <View>{successIcon}</View>
          </View>
        </View>
        <View style={styles.question}>
          <Text style={styles.questionText}>{question.question}</Text>
        </View>
        <View style={styles.rightAnswer}>
          <Text style={styles.answerText}>
            {question.answers[question.rightAnswerId - 1].text}
          </Text>
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
