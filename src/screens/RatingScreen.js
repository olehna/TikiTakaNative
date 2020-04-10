import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { Rating } from '../components/Rating';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';
import { Loader } from '../components/Loader';
export class RatingScreen extends Component {
  state = {
    rating: [
      {
        email: { stringValue: '' },
        firstName: { stringValue: '' },
        games: { integerValue: '' },
        lastName: { stringValue: '' },
        rightAnswers: { integerValue: '' },
        userId: { stringValue: '' },
        userName: { stringValue: '' },
      },
    ],
    loading: true,
    refreshing: false,
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    const projectID = 'quiz-91601';
    const key = 'AIzaSyARZUqpQVEMgqIGUgFpJqPVFDqakbegp2A';
    const collection = `users`;
    const url = `https://firestore.googleapis.com/v1beta1/projects/${projectID}/databases/(default)/documents/${collection}?key=${key}`;
    const userBase = await axios.get(url);
    const userList = await userBase.data.documents.map((doc) => doc.fields);
    this.setState({
      rating: userList,
      loading: false,
      refreshing: false,
    });
  };

  handleRefresh = () => {
    this.setState(
      {
        refreshing: true,
      },
      () => {
        this.fetchUsers();
      }
    );
  };

  fairRating = (el) => {
    let coef;
    if (el.games) {
      if (el.games.integerValue < 5) {
        coef = 0.5;
      } else if (el.games.integerValue >= 5 && el.games.integerValue < 10) {
        coef = 0.8;
      } else if (el.games.integerValue >= 10 && el.games.integerValue < 25) {
        coef = 0.9;
      } else {
        coef = 1;
      }
      if (el.rightAnswers) {
        return Math.round(el.rightAnswers.integerValue * coef);
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };

  render() {
    return (
      <LinearGradient colors={['#de3c5e', '#7ebead']} style={{ flex: 1 }}>
        {this.state.loading ? (
          <Loader />
        ) : (
          <View>
            <ScrollView>
              <View>
                <View style={styles.HeadContainer}>
                  <View style={styles.usernameRow}>
                    <Text style={styles.usernameHeadText}>Имя</Text>
                  </View>
                  <View style={styles.games}>
                    <Text style={styles.gamesHeadText}>Игры</Text>
                  </View>
                  <View style={styles.points}>
                    <Text style={styles.pointsHeadText}>Балл</Text>
                  </View>
                </View>
                <View>
                  <FlatList
                    data={this.state.rating
                      .sort((a, b) => this.fairRating(b) - this.fairRating(a))
                      .filter(
                        (elem) =>
                          elem.games !== undefined &&
                          elem.games.integerValue > 0
                      )}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                      // <View style={styles.RowContainer}>
                      <View>
                        <Text>{item.userName.stringValue.toString()}</Text>
                        <Text>{item.games.integerValue.toString()}</Text>
                        <Text>{item.rightAnswers.integerValue.toString()}</Text>
                      </View>
                    )}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                  />

                  {/* {this.state.rating
                    .sort((a, b) => this.fairRating(b) - this.fairRating(a))
                    .map((elem, index) => {
                      return <Rating user={elem} key={index} />; */}
                  {/* })} */}
                </View>
              </View>
            </ScrollView>
          </View>
        )}
      </LinearGradient>
    );
  }
}
RatingScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Рейтинг',
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
  HeadContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  games: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  usernameRow: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  gamesHeadText: {
    color: 'white',
    fontFamily: 'MullerNarrow-ExtraBold',
    fontSize: 20,
  },

  usernameHeadText: {
    fontSize: 20,
    fontFamily: 'MullerNarrow-ExtraBold',
    color: 'white',
  },

  points: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pointsHeadText: {
    fontSize: 20,
    fontFamily: 'MullerNarrow-ExtraBold',
    color: 'white',
    textAlign: 'center',
  },
  RowContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.5)',
  },
  gamesRowText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'MullerNarrow-Light',
  },
  gamesRow: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    width: '60%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  pointsRow: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  usernameRowText: {
    fontSize: 18,
    fontFamily: 'MullerNarrow-Light',
    color: 'white',
  },
  pointsRowText: {
    fontSize: 18,
    fontFamily: 'MullerNarrow-Light',
    color: 'white',
  },
});
