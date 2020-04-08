import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const errorIcon = (
  <FontAwesome5 name={'times'} solid color={'rgb(240, 87, 108)'} size={20} />
);
const successIcon = (
  <FontAwesome5 name={'check'} solid color={'rgb(46, 182, 53)'} size={20} />
);

export const FinishedQuiz = (props) => {
  // console.log(props)
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++;
    }

    return total;
  }, 0);

  return (
    <View style={{height:'100%'}}>
      <View
        style={{
          alignItems: 'center',
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        <View style={styles.result}>
          <Text style={styles.resultText}>Результат</Text>
          <Text style={styles.resultText}>
            {successCount} / {props.quiz.length}
          </Text>
        </View>
      </View>
      <ScrollView>
        <View>
          <View style={styles.HeadContainer}>
            <View style={styles.status}>
              <Text style={styles.numberText}>№</Text>
            </View>
            <View style={styles.questionRow}>
              <Text style={styles.questionHeadText}>Вопрос</Text>
            </View>
            <View style={styles.rightAnswer}>
              <Text style={styles.answerHeadText}>Правильный ответ</Text>
            </View>
          </View>
          {props.quiz.map((quizItem, index) => {
            return (
              <View style={styles.RowContainer} key={index}>
                <View style={styles.status}>
                  <View
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 12.5,
                      height: 25,
                      width: 25,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <View>
                      {props.results[quizItem.id] === 'error'
                        ? errorIcon
                        : successIcon}
                    </View>
                  </View>
                </View>
                <View style={styles.question}>
                  <Text style={styles.questionRowText}>
                    {quizItem.question}
                  </Text>
                </View>
                <View style={styles.rightAnswer}>
                  <Text style={styles.answerRowText}>
                    {quizItem.rightAnswerId}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
        <View style={styles.resultContainer}>
          <View style={styles.buttons}>
            <Button
              type="solid"
              title="Рейтинг"
              raised
              buttonStyle={{
                backgroundColor: 'white',
                borderRadius: 25,
                height: 50,
                width: 150,
              }}
              titleStyle={{ color: 'rgba(0,0,0,0.7)' }}
              
              onPress={() => props.onRetry() && props.navigation.navigate('Rating')}
              // onPress={() => props.navigation.navigate('Rating')}
            />
            <Button
              title="Главное меню"
              color="rgb(176, 193, 71)"
              raised
              buttonStyle={{
                backgroundColor: 'rgb(176, 193, 71)',
                borderRadius: 25,
                height: 50,
                width: 150,
              }}
              onPress={() => props.navigation.navigate('Main')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  HeadContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  RowContainer: {
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
  questionRow: {
    width: '65%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  question: {
    width: '65%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  rightAnswer: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    color: 'white',
    fontFamily: 'open-bold',
  },
  questionHeadText: { fontSize: 12, fontFamily: 'open-bold', color: 'white' },
  answerHeadText: {
    fontSize: 12,
    fontFamily: 'open-bold',
    color: 'white',
    textAlign: 'center',
  },
  questionRowText: { fontSize: 12, fontFamily: 'open-regular', color: 'white' },
  answerRowText: { fontSize: 14, fontFamily: 'open-regular', color: 'white' },

  resultContainer: {
    marginTop: 20,
    height: 110,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  result: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
  },
  resultText: {
    fontFamily: 'open-bold',
    fontSize: 32,
    color: 'white',
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignContent: 'center',
    paddingBottom: 10,
  },
});
