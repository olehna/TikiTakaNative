import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
  Linking,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { LinearGradient } from 'expo-linear-gradient';
import { IMAGES } from '../components/images';
import { Ionicons } from '@expo/vector-icons';

export const ContactsScreen = ({}) => {
  return (
    <LinearGradient colors={['#de3c5e', '#7ebead']} style={{ flex: 1 }}>
      <View style={styles.center}>
        <ImageBackground source={IMAGES['team']} style={styles.image}>
          <View style={styles.textWrap}>
            <Text style={styles.group}>Группа Орлы</Text>
            <Text style={styles.city}>Санкт-Петербург</Text>
            <Text style={styles.year}>2020</Text>
          </View>
        </ImageBackground>

        <View style={styles.namesContainer}>
          <Text style={styles.names}> Вика </Text>
          <Text style={styles.names}> Рома </Text>
          <Text style={styles.names}> Олег </Text>
          <Text style={styles.names}> Артём </Text>
        </View>
        <View style={styles.namesContainer}>
          <View style={styles.gits}>
            <TouchableHighlight
              onPress={() => Linking.openURL('https://github.com/gusarovika')}
            >
              <Ionicons color={'white'} size={40} name="logo-github" />
            </TouchableHighlight>
          </View>
          <View style={styles.gits}>
            <TouchableHighlight
              onPress={() => Linking.openURL('https://github.com/romarabotaet')}
            >
              <Ionicons color={'white'} size={40} name="logo-github" />
            </TouchableHighlight>
          </View>
          <View style={styles.gits}>
            <TouchableHighlight
              onPress={() => Linking.openURL('https://github.com/olehna')}
            >
              <Ionicons color={'white'} size={40} name="logo-github" />
            </TouchableHighlight>
          </View>
          <View style={styles.gits}>
            <TouchableHighlight
              onPress={() => Linking.openURL('https://github.com/off-art')}
            >
              <Ionicons color={'white'} size={40} name="logo-github" />
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>всем спасибо</Text>
          <Text style={styles.subtitle}>все свободны</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

ContactsScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Контакты',
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
  center: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  textWrap: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%',
  },
  namesContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  
  },
  names: {
    color: 'white',
    fontFamily: 'MullerNarrow-ExtraBold',
    fontSize: 28,
  },
  gits: {},
  group: {
    color: 'white',
    fontFamily: 'MullerNarrow-ExtraBold',
    fontSize: 24,
  },

  city: {
    color: 'white',
  },
  year: {
    color: 'white',
  },

  titleContainer: {
    alignItems: 'center',
    width: '100%',
    height: 250,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontFamily: 'MullerNarrow-ExtraBold',
    fontSize: 48,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.3)',
    fontFamily: 'MullerNarrow-Light',
    fontSize: 20,
  },
});
