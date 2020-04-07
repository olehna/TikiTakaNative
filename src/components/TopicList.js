import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Topic } from '../components/Topic';
import { THEME } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';

export const TopicList = ({ data, onOpen }) => {
  return (
    <LinearGradient colors={['#de3c5e', '#7ebead']} style={{ flex: 1 }}>
      <View style={styles.wrapper}>
        <FlatList
          data={data}
          numColumns={2}
          keyExtractor={(topic) => topic.id.toString()}
          renderItem={({ item }) => <Topic topic={item} onOpen={onOpen} />}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    paddingVertical: 50,
    padding: 10,
    alignItems: 'center',
  },
});
