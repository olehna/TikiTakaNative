import React from 'react';
import { createAppContainer, ThemeColors } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { MainScreen } from '../screens/MainScreen';
import { RatingScreen } from '../screens/RatingScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { QuizListScreen } from '../screens/QuizListScreen';
import { AuthScreen } from '../screens/AuthScreen';
import QuizScreen from '../screens/QuizScreen';
import { ProfileEditScreen } from '../screens/ProfileEditScreen';
import { Ionicons } from '@expo/vector-icons';

const navigatorOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#de3c5e',
      borderBottomWidth: 0,
    },
    headerTitleStyle:{
      fontFamily:'MullerNarrow-ExtraBold',
      // textAlign:"center", 
      // flex:1 ,
      fontSize:28,
    },
    headerTintColor: '#fff',
  },
};

const Navigator = createStackNavigator(
  {
    Main: MainScreen,
    QuizList: QuizListScreen,
    Quiz: QuizScreen,
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
    ProfileEdit: ProfileEditScreen,
  },
  navigatorOptions
);

const ContactsNavigator = createStackNavigator(
  {
    Contacts: ContactsScreen,
  },
  navigatorOptions
);

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen,
  },
  navigatorOptions
);

const RouteConfigs = {
  Main: {
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

  Auth: {
    screen: AuthNavigator,
    navigationOptions: {
      drawerLabel: 'Авторизация',
      drawerIcon: <Ionicons color={'white'} size={25} name="ios-log-in" />,
    },
  },

  Contacts: {
    screen: ContactsNavigator,
    navigationOptions: {
      drawerLabel: 'Свяжитесь с нами',
      drawerIcon: <Ionicons color={'white'} size={25} name="ios-mail" />,
    },
  },
};

const DrawerNavigatorConfig = {
  intialRouteName: Navigator,

  contentOptions: {
    activeTintColor: 'white',
    activeBackgroundColor: 'rgba(53, 51, 51, 0.9)',
    inactiveTintColor: 'rgba(255, 255, 255, 0.7)',
    labelStyle: {
      fontFamily: 'MullerNarrow-Light',
    },

    itemsContainerStyle: {
      marginVertical: 0,
    },
    iconContainerStyle: {
      opacity: 1,
    },
  },
  drawerBackgroundColor: 'rgba(29, 27, 27, 0.99)',
};

const MainNavigator = createDrawerNavigator(
  RouteConfigs,
  DrawerNavigatorConfig
);

export const AppNavigation = createAppContainer(MainNavigator);
