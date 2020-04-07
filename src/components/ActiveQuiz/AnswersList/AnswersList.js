import React from 'react';
import AnswerItem from './AnswerItem/AnswerItem';
import { View, FlatList, StyleSheet } from 'react-native';

export const AnswersList = (props) => {
  return (
    <FlatList style={styles.AnswersList}>
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
    </FlatList>
  );
};

{
  /* <FlatList
data={QUIZ_DATA}
keyExtractor={(question) => question.id.toString()}
renderItem={({ item }) => <FinishQuestion question={item} />}
></FlatList> */
}

const styles = StyleSheet.create({
  AnswersList: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
