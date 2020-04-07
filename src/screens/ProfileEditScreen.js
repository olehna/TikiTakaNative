import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { LinearGradient } from 'expo-linear-gradient';
import { RATING_DATA } from '../rating_data';
import { Avatar } from 'react-native-elements';

const info = RATING_DATA[0];

export const ProfileEditScreen = ({}) => {
  return (
    <LinearGradient colors={['#de3c5e', '#7ebead']} style={{ flex: 1 }}>
      <View style={styles.center}>
        <View style={styles.avaAndText}>
          <View>
            <Avatar
              rounded
              size={150}
              source={{
                uri: info.photo,
              }}
              containerStyle={{ borderWidth: 4, borderColor: 'white' }}
              showEditButton
              onEditPress={() => console.log('Edit button pressed')}
            />
          </View>
        </View>
        <View style={styles.editContainer}>
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
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

ProfileEditScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Профиль',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Back"
        iconName="ios-arrow-back"
        onPress={() => console.log('Вернуться назад')}
      />
    </HeaderButtons>
  ),
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Save changes"
        iconName="ios-checkmark-circle-outline"
        onPress={() => console.log('Сохранить изменения')}
      />
    </HeaderButtons>
  ),
});
const styles = StyleSheet.create({
  center: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  avaAndText: {
    marginVertical: 25,
    alignItems: 'center',
  },
  text: {
    color: 'rgba(255,255,255,1)',
    fontFamily: 'open-regular',
    fontSize: 18,
  },
  editContainer: {
    alignItems: 'center',
    width: '90%',
    height: '50%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
  },
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
});
