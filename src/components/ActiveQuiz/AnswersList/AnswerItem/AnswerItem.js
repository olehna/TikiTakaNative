import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const AnswerItem = (props) => {
  // const cls = [styles.AnswerItem];

  // if (props.state) {
  //   cls.push(classes[props.state]);
  // }

  return (
    <View
      style={styles.AnswerItem}
      // className={cls.join(' ')}
      // onClick={() => props.onAnswerClick(props.answer.id)}
    >
      <Text style={styles.AnswerText}>{props.answer.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  AnswerItem: {
    height: 60,
    backgroundColor: 'rgba(119, 119, 119,0.5)',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginBottom: 0,
    width: '49%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  AnswerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'open-bold',
  },

  success: {
    backgroundColor: 'rgba(39, 176, 93, .7)',
  },

  error: {
    backgroundColor: 'rgba(181, 42, 48, .7)',
  },
});
