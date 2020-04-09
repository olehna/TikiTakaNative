import React from 'react';
import { AnswerItem } from './AnswerItem/AnswerItem';
import { View, StyleSheet } from 'react-native';

export const AnswersList = (props) => {
  return (
    <View style={styles.AnswersList}>
      {props.answers.map((answer, index) => {
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
            state={props.state ? props.state[answer.id] : null}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  AnswersList: {
    height: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
