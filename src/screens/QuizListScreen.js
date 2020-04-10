import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { LinearGradient } from 'expo-linear-gradient';
import QuizList from '../components/QuizList';

export class QuizListScreen extends React.Component {
  openQuizHandler = (quiz) => {
    this.props.navigation.navigate({
      routeName: 'Quiz',
      param: { quizId: quiz },
    });
  };

  render() {
    return (
      <LinearGradient colors={['#de3c5e', '#7ebead']} style={{ flex: 1 }}>
        <QuizList onOpen={this.openQuizHandler} />
      </LinearGradient>
    );
  }
} 

QuizListScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'О нас',
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
