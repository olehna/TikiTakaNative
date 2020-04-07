import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DATA } from '../data';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { TopicList } from '../components/TopicList';

export const MainScreen = ({ navigation }) => {
  const openTopicHandler = (topic) => {
    navigation.navigate('Topic', { topicId: topic.id, topicText: topic.text });
  };

  return <TopicList data={DATA} onOpen={openTopicHandler} />;
};

MainScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Список тестов',
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
