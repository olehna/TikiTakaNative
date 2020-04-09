import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { fetchQuizes } from '../store/actions/quiz';
import {QuizCard} from './QuizCard';
import { Loader } from '../components/Loader';
import { changeIconName } from './utils/changeIconName';

class QuizList extends React.Component {
  componentDidMount() {
    this.props.fetchQuizes();
  }

  renderQuizes() {
    return (
      <FlatList
        data={this.props.quizes}
        contentContainerStyle={{ alignItems: 'center' }}
        style={{ width: '100%' }}
        numColumns={3}
        keyExtractor={(quiz) => quiz.id.toString()}
        renderItem={({ item }) => (
          <QuizCard
            quiz={item}
            icon={changeIconName(item.name)}
            onOpen={this.props.onOpen}
          />
        )}
      />
    );
  }

  render() {
    return this.props.loading ? (
      <Loader />
    ) : (
      <View style={styles.wrapper}>{this.renderQuizes()}</View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
  },
});

function mapStateToProps(state) {
  return {
    quizes: state.quiz.quizes,
    loading: state.quiz.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizes: () => dispatch(fetchQuizes()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuizList);
