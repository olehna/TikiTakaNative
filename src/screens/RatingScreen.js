import React from 'react';
import { View, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { RATING_DATA } from '../rating_data';
import { Rating } from '../components/Rating';
import { LinearGradient } from 'expo-linear-gradient';

export const RatingScreen = ({}) => {
  return (
    <LinearGradient colors={['#de3c5e', '#7ebead']} style={{ flex: 1 }}>
      <View>
        <View>
          <FlatList
            data={RATING_DATA}
            keyExtractor={(rating) => rating.place.toString()}
            renderItem={({ item }) => <Rating rating={item} />}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

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
