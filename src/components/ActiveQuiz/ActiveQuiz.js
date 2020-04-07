import React from 'react';
import AnswersList from './AnswersList/AnswersList';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
// import Timer from "../UI/Timer/Timer";

export const ActiveQuiz = (props) => {
  return (
    <View style={styles.ActiveQuiz}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignContent: 'flex-end',
        }}
      >
        <Text style={styles.Title}>{props.topic}</Text>
        {/* <Timer /> */}
      </View>
      <View style={styles.imgWrap}>
        <ImageBackground style={styles.Image}>
          <Text style={styles.Progress}>1/2</Text>
        </ImageBackground>

        {/* <img src={props.ImgLink} alt="" style={styles.Image} /> */}
        {/* <small style={styles.Progress}>
          {props.answerNumber} / {props.quizLength}
        </small> */}
      </View>
      <Text style={styles.Question}>
        {/* <span style={styles.questText}>{props.question}</span> */}
      </Text>
      <AnswersList
      // state={props.state}
      // answers={props.answers}
      // onAnswerClick={props.onAnswerClick}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ActiveQuiz: {
    color: '#2D2D2D',
    flexDirection: 'column',
  },
  Question: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'rgb(246, 205, 99)',
    marginTop: 10,
    height: 100,
    textAlign: 'center',
    fontSize: 16,
  },
  questText: {
    maxWidth: 400,
  },
  Title: {
    fontSize: 32,
    alignSelf: 'flex-end',
  },
});
