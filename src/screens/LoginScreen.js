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

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState('');
  // const [isAuth, setIsAuth] = useState(false);
  const projectID = 'quiz-91601';
  const key = 'AIzaSyARZUqpQVEMgqIGUgFpJqPVFDqakbegp2A';
  const collection = `users`;
  const url = `https://firestore.googleapis.com/v1beta1/projects/${projectID}/databases/(default)/documents/${collection}?key=${key}`;
 
  findByMail = async (email) => {
    // const userEmail = await AsyncStorage.getItem('email');
    // this.setState = ({ userEmail: userEmail })
    // console.log(this.state.userEmail);
    // const projectID = 'quiz-91601';
    // const key = 'AIzaSyARZUqpQVEMgqIGUgFpJqPVFDqakbegp2A';
    // const collection = `users`;
    // const url = `https://firestore.googleapis.com/v1beta1/projects/${projectID}/databases/(default)/documents/${collection}?key=${key}`;
    // let RATING_DATA = []
    const userBase = await axios.get(url);
    const userList = await userBase.data.documents.map((doc) => doc.fields);
    const userInfo = userList.find(
      (elem) => elem.email['stringValue'] === email
    );
    console.log('USER FOUND');
    return userInfo
  }
  
 
  logIn = async (useremail, userpassword) => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(useremail, userpassword);
      await AsyncStorage.setItem('userId', user.user.uid);
      await AsyncStorage.setItem('email', useremail);
      // console.log('asuncstor', Number(user.user.uid));
      const oneUserUrl = `https://firestore.googleapis.com/v1beta1/projects/${projectID}/databases/(default)/documents/${collection}/${user.user.uid}?key=${key}&updateMask.fieldPaths=userId`;
      const updatFetch = {
        fields: {
          userId: { stringValue: user.user.uid },
        },
      };
      const response = await fetch(oneUserUrl, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatFetch),
      });
      const userInfo = await findByMail(useremail)
      await AsyncStorage.setItem('UID', userInfo.userId.stringValue);
      await AsyncStorage.setItem('games', userInfo.games.integerValue)
      await AsyncStorage.setItem('rightAnswers', userInfo.rightAnswers.integerValue)
      // console.log(await AsyncStorage.getItem('UID'));
      // console.log(response);
      navigation.navigate('Main');
    } catch (error) {
      console.log('что-то пошло не так');
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
                type="solid"
                title="Войти"
                raised
                buttonStyle={{
                  backgroundColor: 'white',
                  borderRadius: 25,
                  height: 50,
                }}
                titleStyle={{ color: 'rgba(0,0,0,0.7)' }}
                onPress={() => logIn(email, password)}
              />
              <Button
                title="Регистрация"
                color="rgb(176, 193, 71)"
                raised
                buttonStyle={{
                  backgroundColor: 'rgb(176, 193, 71)',
                  borderRadius: 25,
                  height: 50,
                }}
                onPress={() => navigation.navigate('Signup')}
            
              />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

LoginScreen.navigationOptions = ({ navigation }) => ({
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
