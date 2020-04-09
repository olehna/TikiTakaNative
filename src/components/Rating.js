import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
export const Rating = ({ user }) => {
  console.log(user);
  return (
    <TouchableOpacity activeOpacity={0.7}>
      {/* <Text >
        {user.email.stringValue}
      </Text> */}
      <ListItem
        leftElement={
          <Text
           style={styles.subtitle}>{user.games.integerValue.toString()}</Text>
        }
        title={user.email.stringValue.toString()}
        rightTitle={user.rightAnswers.integerValue.toString()}
        // leftAvatar={{ source: { uri: rating.photo } }}
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

// import React from 'react';
// import { StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { ListItem } from 'react-native-elements';
// export const Rating = ({ rating }) => {
//   return (
//     <TouchableOpacity activeOpacity={0.7}>
//       <ListItem
//         leftElement={
//           <Text style={styles.subtitle}>{rating.place.toString()}</Text>
//         }
//         title={rating.name}
//         rightTitle={rating.rating.toString()}
//         leftAvatar={{ source: { uri: rating.photo } }}
//         rightTitleStyle={{ color: 'white', fontFamily: 'MullerNarrow-ExtraBold', }}
//         titleStyle={{ color: 'white', fontFamily: 'MullerNarrow-Light', fontSize:20 }}
//         containerStyle={{
//           backgroundColor: 'rgba(255,255,255,0)',
//           borderBottomColor: 'rgba(255,255,255,0.2)',
//         }}
//         // containerStyle={[{ backgroundColor: 'rgba(29, 27, 27, 0.99)' }]}
//         bottomDivider
//       />
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   subtitle: {
//     color: 'rgb(255,255,255)',
//     fontFamily: 'MullerNarrow-ExtraBold',
//   },
// });


