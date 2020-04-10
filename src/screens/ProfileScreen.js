import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  AsyncStorage,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar, Button } from 'react-native-elements';
import { RATING_DATA } from '../rating_data';
import axios from 'axios';
const info = RATING_DATA[0];
export class ProfileScreen extends Component {
  state = {
    users: [],
    userId: '',
    userName: '',
    userGames: '',
    userRightAnswers: '',
    userFirstName: '',
    userLastName: '',
    userEmail: '',
    refreshing: false,
    results: [],
  };
  componentDidMount() {
    this.getUser();
  }
  getUser = async () => {
    const userEmail = await AsyncStorage.getItem('email');
    const userId = await AsyncStorage.getItem('userId');
    const projectID = 'quiz-91601';
    const key = 'AIzaSyARZUqpQVEMgqIGUgFpJqPVFDqakbegp2A';
    const collection = `users`;
    const url = `https://firestore.googleapis.com/v1beta1/projects/${projectID}/databases/(default)/documents/${collection}/${userId}?key=${key}`;
    const userInfo = await axios.get(url);
    const data = userInfo.data.fields;
    this.setState({
      userId: userId,
      userEmail: data.email.stringValue,
      userName: data.userName.stringValue,
      userGames: data.games.integerValue,
      userRightAnswers: data.rightAnswers.integerValue,
      userFirstName: data.firstName.stringValue,
      userLastName: data.lastName.stringValue,
      results: [
        { Игры: data.games.integerValue },
        { 'Правильные ответы': data.rightAnswers.integerValue },
        {
          'Неправильные ответы':
            data.games.integerValue * 10 - data.rightAnswers.integerValue,
        },
      ],
      refreshing: false,
    });
  };

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true,
      },
      () => {
        this.getUser();
      }
    );
  };

  clearStorage = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      await AsyncStorage.multiRemove(keys);
      console.log('REMOVED KEYS', keys);
    } catch (error) {
      console.log('CANT REMOVE KEYS');
    }
  };

  render() {
    console.log('THIS STATE:', this.state);
    return (
      <LinearGradient colors={['#de3c5e', '#7ebead']} style={{ flex: 1 }}>
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.handleRefresh()}
            />
          }
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={styles.avaAndName}>
            <View style={styles.avaContainer}>
              <Avatar
                rounded
                size={150}
                source={{
                  uri: info.photo,
                }}
                containerStyle={{ borderWidth: 4, borderColor: 'white' }}
              />
            </View>
            <Text style={styles.name}>{this.state.userName}</Text>
          </View>

          <View style={styles.statisticsContainer}>
            <View style={styles.statistics}>
              <FlatList
                data={this.state.results}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View style={{ alignItems: 'center' }}>
                    <Text style={styles.title}>{Object.keys(item)[0]}</Text>
                    <Text style={styles.number}>{Object.values(item)[0]}</Text>
                  </View>
                )}
              />
            </View>
          </View>

          <View>
            <Button
              type="solid"
              title="Выйти"
              raised
              buttonStyle={{
                backgroundColor: 'white',
                borderRadius: 25,
                height: 50,
                width: 200,
              }}
              titleStyle={{ color: 'rgba(0,0,0,0.7)' }}
              onPress={() =>
                this.clearStorage().then(() =>
                  this.props.navigation.navigate('Auth')
                )
              }
            />
          </View>
        </ScrollView>
      </LinearGradient>
    );
  }
}
ProfileScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Профиль',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
  // headerRight: (
  //   <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
  //     <Item
  //       title="Edit"
  //       iconName="ios-create"
  //       onPress={() => console.log('Переход на редактирование профиля')}
  //     />
  //   </HeaderButtons>
  // ),
});
const styles = StyleSheet.create({
  center: {
    flex: 1,
    width: '100%',
  },
  avaContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: 'rgba(255,255,255,1)',
    borderWidth: 3,
    backgroundColor: 'rgba(255,255,255,1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avaAndName: {
    alignItems: 'center',
  },
  name: {
    color: 'rgba(255,255,255,1)',
    fontFamily: 'open-bold',
    fontSize: 26,
  },
  rating: {
    color: 'rgba(255,255,255,0.7)',
    fontFamily: 'open-regular',
    fontSize: 18,
  },
  statisticsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: '50%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
    marginBottom: 10,
  },

  statistics: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  title: {
    color: 'white',
    fontFamily: 'open-regular',
    fontSize: 26,
  },
  number: {
    color: 'white',
    fontFamily: 'open-bold',
    fontSize: 40,
  },
});
