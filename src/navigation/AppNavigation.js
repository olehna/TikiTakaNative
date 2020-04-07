import React from 'react';
import { createAppContainer, ThemeColors } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native';
import { MainScreen } from '../screens/MainScreen';
import { TopicScreen } from '../screens/TopicScreen';
import { RatingScreen } from '../screens/RatingScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { AuthScreen } from '../screens/AuthScreen';
import { QuizScreen } from '../screens/QuizScreen';
import { FinishedQuizScreen } from '../screens/FinishedQuizScreen';

import { ProfileEditScreen } from '../screens/ProfileEditScreen';

import { Ionicons } from '@expo/vector-icons';

import { THEME } from '../theme';

const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: THEME.RASP_COLOR,
      borderBottomWidth: 0,
    },
    headerTintColor: '#fff',
  },
};

const Navigator = createStackNavigator(
  {
    Main: MainScreen,
    Topic: TopicScreen,
  },
  navigatorOptions
);

const RatingNavigator = createStackNavigator(
  {
    Rating: RatingScreen,
  },
  navigatorOptions
);

const ProfileNavigator = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  navigatorOptions
);

const ContactsNavigator = createStackNavigator(
  {
    Contacts: ContactsScreen,
  },
  navigatorOptions
);

const AboutNavigator = createStackNavigator(
  {
    About: AboutScreen,
  },
  navigatorOptions
);

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
  },
  navigatorOptions
);

// to delete
const ProfileEditNavigator = createStackNavigator(
  {
    ProfileEdit: ProfileEditScreen,
  },
  navigatorOptions
);

const QuizNavigator = createStackNavigator(
  {
    Quiz: QuizScreen,
  },
  navigatorOptions
);

const FinishedQuizNavigator = createStackNavigator(
  {
    FinishedQuiz: FinishedQuizScreen,
  },
  navigatorOptions
);
//

const RouteConfigs = {
  Topics: {
    screen: Navigator,
    navigationOptions: {
      drawerLabel: 'Главная',
      drawerIcon: <Ionicons color={'white'} size={25} name="ios-book" />,
    },
  },
  Rating: {
    screen: RatingNavigator,
    navigationOptions: {
      drawerLabel: 'Рейтинг',
      drawerIcon: <Ionicons color={'white'} size={25} name="ios-ribbon" />,
    },
  },
  Profile: {
    screen: ProfileNavigator,
    navigationOptions: {
      drawerLabel: 'Профиль',
      drawerIcon: <Ionicons color={'white'} size={25} name="ios-person" />,
    },
  },
  About: {
    screen: AboutNavigator,
    navigationOptions: {
      drawerLabel: 'О приложении',
      drawerIcon: <Ionicons color={'white'} size={25} name="ios-star" />,
    },
  },
  Auth: {
    screen: AuthNavigator,
    navigationOptions: {
      drawerLabel: 'Авторизация',
      drawerIcon: <Ionicons color={'white'} size={25} name="ios-log-in" />,
    },
  },
  Logout: {
    screen: AuthNavigator,
    navigationOptions: {
      drawerLabel: 'Выйти',
      drawerIcon: <Ionicons color={'white'} size={25} name="ios-log-out" />,
    },
  },
  Contacts: {
    screen: ContactsNavigator,
    navigationOptions: {
      drawerLabel: 'Свяжитесь с нами',
      drawerIcon: <Ionicons color={'white'} size={25} name="ios-mail" />,
    },
  },

  // to delete
  ProfileEdit: {
    screen: ProfileEditNavigator,
    navigationOptions: {
      drawerLabel: 'ProfileEdit',
    },
  },

  Quiz: {
    screen: QuizNavigator,
    navigationOptions: {
      drawerLabel: 'Quiz',
    },
  },

  FinishedQuiz: {
    screen: FinishedQuizNavigator,
    navigationOptions: {
      drawerLabel: 'FinishedQuiz',
    },
  },

  //
};

const DrawerNavigatorConfig = {
  intialRouteName: Navigator,

  contentOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: 'rgba(53, 51, 51, 0.9)',
    inactiveTintColor: 'rgba(255, 255, 255, 0.7)',
    labelStyle: {
      fontFamily: 'open-regular',
    },

    itemsContainerStyle: {
      marginVertical: 0,
    },
    iconContainerStyle: {
      opacity: 1,
    },
  },
  drawerBackgroundColor: 'rgba(29, 27, 27, 0.99)', // sets background color of drawer
};

const MainNavigator = createDrawerNavigator(
  RouteConfigs,
  DrawerNavigatorConfig
);

export const AppNavigation = createAppContainer(MainNavigator);
