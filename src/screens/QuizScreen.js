import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { LinearGradient } from 'expo-linear-gradient';

export const QuizScreen = ({}) => {
  return (
    <LinearGradient colors={['#de3c5e', '#7ebead']} style={{ flex: 1 }}>
      <View style={styles.center}>
        {/* <ImageBackground>
          <View>
            <Text>1/2</Text>
          </View>
        </ImageBackground> */}

        <Text>QuizScreen</Text>
      </View>
    </LinearGradient>
  );
};

QuizScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'ИГРА',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
});
