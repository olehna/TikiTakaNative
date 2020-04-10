import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  AsyncStorage,
  ScrollView,
} from 'react-native';
import firebase from '../firebase';
import { Button } from 'react-native-elements';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { LinearGradient } from 'expo-linear-gradient';
import axios from 'axios';

export const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  const projectID = 'quiz-91601';
  const key = 'AIzaSyARZUqpQVEMgqIGUgFpJqPVFDqakbegp2A';
  const collection = `users`;
  const url = `https://firestore.googleapis.com/v1beta1/projects/${projectID}/databases/(default)/documents/${collection}?key=${key}`;

  findByMail = async (email) => {
    const userBase = await axios.get(url);
    const userList = await userBase.data.documents.map((doc) => doc.fields);
    const userInfo = userList.find(
      (elem) => elem.email['stringValue'] === email
    );
    console.log('USER FOUND:', userInfo);
    return userInfo;
  
  };
  signUp = async (useremail, userpassword, username) => {
    try {
      if (password.length < 6) {
        alert('введите минимум 6 символов');
        return;
      }
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(useremail, userpassword);

      const newUser = firebase.auth().currentUser;
      newUser 
        .updateProfile({
          userName: username,
          photoURL: "https://example.com/jane-q-user/profile.jpg"})
        .then(function () {
          console.log('success', newUser)
        })
        .catch(function (error) {
          console.log('error')
        });


      const datafetch = {
        fields: {
          email: { stringValue: useremail },
          userName: { stringValue: username },
          firstName: { stringValue: '' },
          lastName: { stringValue: '' },
          games: { integerValue: 0 },
          rightAnswers: { integerValue: 0 },
        },
      };
  
      const oneUserUrl = `https://firestore.googleapis.com/v1beta1/projects/${projectID}/databases/(default)/documents/${collection}/${newUser.uid}?key=${key}&updateMask.fieldPaths=games&updateMask.fieldPaths=rightAnswers&updateMask.fieldPaths=email&updateMask.fieldPaths=firstName&updateMask.fieldPaths=lastName&updateMask.fieldPaths=userName`


      const response = await fetch(oneUserUrl, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datafetch),
      });
      const data = response;
      console.log('created new user ', data);
      const userInfo = await findByMail(useremail);
     
      await AsyncStorage.setItem('games', '0');
      await AsyncStorage.setItem('rightAnswers', '0');
      // await AsyncStorage.setItem('UID', userInfo.userId.stringValue);
      await AsyncStorage.setItem('userId', user.user.uid);
      await AsyncStorage.setItem('email', useremail);
      await AsyncStorage.setItem('userName', username);
      const value = await AsyncStorage.getItem('email');
      navigation.navigate('Main');
    } catch (error) {
      console.log(error.toString());
    }
  };

  return (
    <LinearGradient colors={['#de3c5e', '#7ebead']} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={styles.elevationLow}>
            <Image
              style={styles.logo}
              source={require('../../assets/icon.png')}
            ></Image>
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Логин"
              autoCapitalize="none"
              placeholderTextColor="white"
              onChangeText={(val) => setLogin(val)}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              autoCapitalize="none"
              placeholderTextColor="white"
              onChangeText={(val) => setEmail(val)}
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              secureTextEntry={true}
              autoCapitalize="none"
              placeholderTextColor="white"
              onChangeText={(val) => setPassword(val)}
            />
            <View style={styles.buttons}>
              <Button
                title="Регистрация"
                color="rgb(176, 193, 71)"
                raised
                buttonStyle={{
                  backgroundColor: 'rgb(176, 193, 71)',
                  borderRadius: 25,
                  height: 50,
                }}
                onPress={() => signUp(email, password, login)}
              />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

AuthScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Авторизация',
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
  input: {
    width: 350,
    height: 55,
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontFamily: 'MullerNarrow-Light',
    borderBottomColor: 'rgba(255,255,255,0.3)',
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  elevationLow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 2 },
        shadowOpacity: 0.3,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  logo: {
    width: 150,
    height: 150,
  },
  buttons: {
    marginVertical: 20,
    height: 120,
    justifyContent: 'space-between',
    alignContent: 'center',
  },
});
