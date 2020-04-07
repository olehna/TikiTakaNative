import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { LinearGradient } from 'expo-linear-gradient';
import { QUIZ_DATA } from '../quiz_data';
import { FinishQuestion } from '../components/FinishQuestion';

export const FinishedQuizScreen = ({}) => {
  return (
    <LinearGradient colors={['#de3c5e', '#7ebead']} style={{ flex: 1 }}>
      <View>
        <FlatList
          data={QUIZ_DATA}
          keyExtractor={(question) => question.id.toString()}
          renderItem={({ item }) => <FinishQuestion question={item} />}
        ></FlatList>
      </View>
    </LinearGradient>
  );
};

FinishedQuizScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Игра завершена',
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

// const styles = StyleSheet.create({
//   center: {
//     // flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//   },
// });
