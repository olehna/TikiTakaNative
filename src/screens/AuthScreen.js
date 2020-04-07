import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Button } from 'react-native-elements';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { LinearGradient } from 'expo-linear-gradient';

export const AuthScreen = ({}) => {
  return (
    <LinearGradient colors={['#de3c5e', '#7ebead']} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={styles.elevationLow}>
            <Image
              style={styles.logo}
              source={require('../../assets/icon.png')}
            ></Image>
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Никнейм"
              autoCapitalize="none"
              placeholderTextColor="white"
              // onChangeText={(val) => this.onChangeText('username', val)}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              autoCapitalize="none"
              placeholderTextColor="white"
              // onChangeText={(val) => this.onChangeText('email', val)}
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              secureTextEntry={true}
              autoCapitalize="none"
              placeholderTextColor="white"
              // onChangeText={(val) => this.onChangeText('password', val)}
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
                // onPress={this.signUp}
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
                // onPress={this.signUp}
              />
            </View>
          </View>
        </View>
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
    fontFamily: 'open-regular',
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
