import React from 'react';
import {AnswersList} from './AnswersList/AnswersList';
import {AnswerItem} from './AnswersList/AnswerItem/AnswerItem'
import { View, Text, ImageBackground, StyleSheet, FlatList } from 'react-native';
// import Timer from "../UI/Timer/Timer";

export const ActiveQuiz = (props) => {
  console.log(props);
  return (
    <View style={styles.ActiveQuiz}>
      <View
        style={{
          justifyContent: 'space-between',
          alignContent: 'flex-end',
        }}
      >
        <Text style={styles.Title}>{props.topic}</Text>
        {/* <Timer /> */}
      </View>
      <View style={styles.imgWrap}>
        <ImageBackground
        imageStyle={{ borderRadius: 10 }}
          style={styles.Image}
          source={{ uri: props.ImgLink }}
          alt=""
        >
          <Text style={styles.Progress}>
            {props.answerNumber} / {props.quizLength}
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.Question}>
        <Text style={styles.questText}>{props.question}</Text>
     </View>
     <AnswersList
     state={props.state}
        answers={props.answers}
        // onAnswerClick={props.onAnswerClick}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ActiveQuiz: {
    height: '100%',
    color: '#2D2D2D',
    flexDirection: 'column',
    padding:5,
    margin:5,
  },
  Question: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'rgb(246, 205, 99)',
    marginTop: 10,
    height: 100,
  },
  questText: {
    width: '95%',
    textAlign: 'center',
    fontSize: 18,
  },
  Title: {
    fontSize: 28,
    fontFamily: 'open-bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
    color: 'white',
  },
  Image: {
    height: 250,
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  Progress: {
    width: 50,
    textAlign: 'center',
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5,
  },
});
