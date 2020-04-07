import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { LinearGradient } from 'expo-linear-gradient';
import { Avatar } from 'react-native-elements';
import { RATING_DATA } from '../rating_data';

const info = RATING_DATA[0];
export const ProfileScreen = ({}) => {
  return (
    <LinearGradient colors={['#de3c5e', '#7ebead']} style={{ flex: 1 }}>
      <View style={styles.center}>
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
          <Text style={styles.name}>{info.name}</Text>
          <Text style={styles.rating}>Рейтинг: {info.rating}</Text>
        </View>
        <View style={styles.statisticsContainer}>
          <View style={styles.progressBar}></View>
          <View style={styles.statistics}>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.title}>Победы</Text>
              <Text style={styles.number}>14</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={styles.title}>Поражения</Text>
              <Text style={styles.number}>88</Text>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

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
  headerRight: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Edit"
        iconName="ios-create"
        onPress={() => console.log('Переход на редактирование профиля')}
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
    marginVertical: 25,
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
    width: '90%',
    height: '50%',
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 10,
  },
  progressBar: {
    marginVertical: 20,
    height: 20,
    width: '90%',
    borderRadius: 10,
    backgroundColor: 'green',
  },
  statistics: {
    width: '100%',
    flexDirection: 'row',
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
    fontSize: 48,
  },
});
