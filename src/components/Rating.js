import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export const Rating = ({ user, fairRating }) => {
  return (
    
      <View style={styles.RowContainer}>
        <View style={styles.username}>
          <Text style={styles.usernameRowText}>
            {user.userName
              ? user.userName.stringValue.toString()
              : 0}
          </Text>
        </View>
        <View style={styles.gamesRow}>
          <View>
            <Text style={styles.gamesRowText}>
              {user.games ? user.games.integerValue.toString() : 0}
            </Text>
          </View>
        </View>
        <View style={styles.pointsRow}>
          <Text style={styles.pointsRowText}>
            {user.rightAnswers ? fairRating(user).toString() : 0}
          </Text>
        </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  RowContainer: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.5)',
  },
  gamesRowText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'MullerNarrow-Light',
  },
  gamesRow: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  username: {
    width: '60%',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  pointsRow: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  usernameRowText: {
    fontSize: 18,
    fontFamily: 'MullerNarrow-Light',
    color: 'white',
  },
  pointsRowText: {
    fontSize: 18,
    fontFamily: 'MullerNarrow-Light',
    color: 'white',
  },
});
