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
      <Text>{props.answer.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  AnswerItem: {
    backgroundColor: 'rgba(119, 119, 119,0.5)',
    borderRadius: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 15,
    marginBottom: 0,
    width: '48%',
    color: 'white',
    textAlign: 'center',
  },

  success: {
    backgroundColor: 'rgba(39, 176, 93, .7)',
  },

  error: {
    backgroundColor: 'rgba(181, 42, 48, .7)',
  },
});
