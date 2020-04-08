import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Button } from 'react-native-elements';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { LinearGradient } from 'expo-linear-gradient';
import { QUIZ_DATA } from '../quiz_data';
import { FinishQuestion } from '../components/FinishQuestion';

export const FinishedQuizScreen = ({}) => {
  
  return (
    <LinearGradient colors={['#de3c5e', '#7ebead']} style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <View style={styles.container}>
            <View style={styles.status}>
              <Text style={styles.numberText}>№</Text>
            </View>
            <View style={styles.question}>
              <Text style={styles.questionText}>Вопрос</Text>
            </View>
            <View style={styles.rightAnswer}>
              <Text style={styles.answerText}>Правильный ответ</Text>
            </View>
          </View>
          <FlatList
            data={QUIZ_DATA}
            keyExtractor={(question) => question.id.toString()}
            renderItem={({ item }) => <FinishQuestion question={item} />}
          ></FlatList>
        </View>
        <View style={styles.resultContainer}>
          <View style={styles.result}>
            <Text style={styles.resultText}>Результат</Text>
            <Text style={styles.resultText}>6/10</Text>
          </View>
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
              // onPress={this.signUp}
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
            />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

FinishedQuizScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Игра завершена',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 2,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  status: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightAnswer: {
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    color: 'white',
    fontFamily: 'open-bold',
  },

  questionText: { fontSize: 12, fontFamily: 'open-bold', color: 'white' },
  answerText: {
    fontSize: 12,
    fontFamily: 'open-bold',
    color: 'white',
    textAlign: 'center',
  },
  resultContainer: {
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
