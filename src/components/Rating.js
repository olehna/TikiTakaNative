import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
export const Rating = ({ rating }) => {
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <ListItem
        leftElement={
          <Text style={styles.subtitle}>{rating.place.toString()}</Text>
        }
        title={rating.name}
        rightTitle={rating.rating.toString()}
        leftAvatar={{ source: { uri: rating.photo } }}
        rightTitleStyle={{ color: 'white', fontFamily: 'open-bold' }}
        titleStyle={{ color: 'white', fontFamily: 'open-regular' }}
        containerStyle={{
          backgroundColor: 'rgba(255,255,255,0)',
          borderBottomColor: 'rgba(255,255,255,0.2)',
        }}
        // containerStyle={[{ backgroundColor: 'rgba(29, 27, 27, 0.99)' }]}
        bottomDivider
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: 'rgb(255,255,255)',
    fontFamily: 'open-bold',
  },
});
