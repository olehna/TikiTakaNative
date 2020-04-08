import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { LinearGradient } from 'expo-linear-gradient';
import { ActiveQuiz } from '../components/ActiveQuiz/ActiveQuiz';
import { FinishedQuizScreen } from '../screens/FinishedQuizScreen';
import { Loader } from '../components/Loader';
import { connect } from 'react-redux';
import {
  fetchQuizById,
  quizAnswerClick,
  retryQuiz,
} from '../store/actions/quiz';

class QuizScreen extends React.Component {
  componentDidMount() {
    this.props.fetchQuizById('302ee0e35320');
    // this.props.fetchQuizById(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.props.retryQuiz();
  }

  render() {
    return (
      <LinearGradient colors={['#de3c5e', '#7ebead']} style={{ flex: 1 }}>
        <View style={styles.Quiz}>
          <View style={styles.QuizWrapper}>
            {this.props.loading || !this.props.quiz ? (
              <Loader />
            ) : this.props.isFinished ? (
              <FinishedQuizScreen
                results={this.props.results}
                quiz={this.props.quiz}
                onRetry={this.props.retryQuiz}
              />
            ) : (
              <ActiveQuiz
                answers={this.props.quiz[this.props.activeQuestion].answers}
                question={this.props.quiz[this.props.activeQuestion].question}
                ImgLink={this.props.quiz[this.props.activeQuestion].ImgLink}
                topic={this.props.quiz[this.props.activeQuestion].topic}
                // onAnswerClick={this.props.quizAnswerClick}
                quizLength={this.props.quiz.length}
                answerNumber={this.props.activeQuestion + 1}
                state={this.props.answerState}
              />
            )}
          </View>
        </View>
      </LinearGradient>
    );
  }
}

QuizScreen.navigationOptions = ({ navigation }) => ({

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
  Quiz: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  QuizWrapper: {
    width: '100%',
  },
});

function mapStateToProps(state) {
  return {
    results: state.quiz.results,
    isFinished: state.quiz.isFinished,
    activeQuestion: state.quiz.activeQuestion,
    answerState: state.quiz.answerState,
    quiz: state.quiz.quiz,
    loading: state.quiz.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizById: (id) => dispatch(fetchQuizById(id)),
    quizAnswerClick: (answerId) => dispatch(quizAnswerClick(answerId)),
    retryQuiz: () => dispatch(retryQuiz()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizScreen);
