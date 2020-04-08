import React from 'react';
import {AnswerItem} from './AnswerItem/AnswerItem';
import { View, FlatList, StyleSheet,Text } from 'react-native';

export const AnswersList = (props) => {
  return (
    // <FlatList
    //   data={props.answers}
    //   keyExtractor={(answer) => answer.id.toString()}
    //   renderItem={({ item }) => (
    //     <AnswerItem
    //       answer={item}
    //       state={props.state ? props.state[answer.id] : null}
    //     />
    //   )}
    // ></FlatList>

    // <FlatList ></FlatList>    // </FlatList>
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
    height:'100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
