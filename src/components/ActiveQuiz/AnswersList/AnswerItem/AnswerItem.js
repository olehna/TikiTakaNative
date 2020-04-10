import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const AnswerItem = (props) => {
  const styleArr = [styles.AnswerItem];

  if (props.state) {
    styleArr.push(styles[props.state]);
  }
 
  return (
    <TouchableOpacity
      style={styleArr}
      activeOpacity={0.7}
      onPress={() => props.onAnswerClick(props.answer.id)}
    >
      <View>
        <Text style={styles.AnswerText}>{props.answer.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  AnswerItem: {
    height: 70,
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
    fontFamily: 'MullerNarrow-Light',
  },

  success: {
    backgroundColor: 'rgba(39, 176, 93, .7)',
  },

  error: {
    backgroundColor: 'rgba(181, 42, 48, .7)',
  },
});
