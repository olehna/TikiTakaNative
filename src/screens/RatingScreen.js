import React, { Component, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
// import { RATING_DATA } from '../rating_data';
import { Rating } from '../components/Rating';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from '../firebase';
import axios from 'axios'
export class RatingScreen extends Component {
  state = {
    rating: [],
    loading: false,
  }
  // async function useUsers() {
  // const [users, setUsers] = useState([])
  componentDidMount() {
    // const RATING_DATA = fetchUsers()
    this.fetchUsers()
    // console.log('rating ', RATING_DATA);
  }
    fetchUsers = async () => {
      const projectID = 'quiz-91601'
      const key = 'AIzaSyARZUqpQVEMgqIGUgFpJqPVFDqakbegp2A'
      const collection = `users`
      const url = `https://firestore.googleapis.com/v1beta1/projects/${projectID}/databases/(default)/documents/${collection}?key=${key}`
      // let RATING_DATA = []
      const userBase = await axios.get(url)
      const userList = await userBase.data.documents.map(doc => doc.fields);
      // console.log(userList[userList.length - 2].email.stringValue);
      console.log(userList);
      this.setState({
        rating: userList
      })
      // return userList
    }
  // console.log(Object.keys(userBase.data));
  // return userList
  // })
  // return userBase
  // }
  // useUsers()
  // const RATING_DATA = userList
  render() {
    return (
      <LinearGradient colors={['#de3c5e', '#7ebead']} style={{ flex: 1 }}>
        <View>
          <ScrollView>
            {this.state.rating.map((elem, index) => {
              return (
                <View key={index}>
                  <Rating user={elem} />
                </View>
              )
            })
            }
            {/* <FlatList
            data={RATING_DATA}
            keyExtractor={(rating, index) => index.toString()}
            renderItem={({ item }) => <Rating rightAnswers={item} />}
          /> */}
          </ScrollView>
        </View>
      </LinearGradient>
    );
  }
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


// import React from 'react';
// import { View, FlatList } from 'react-native';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// import { AppHeaderIcon } from '../components/AppHeaderIcon';
// import { RATING_DATA } from '../rating_data';
// import { Rating } from '../components/Rating';
// import { LinearGradient } from 'expo-linear-gradient';

// export const RatingScreen = ({}) => {
//   return (
//     <LinearGradient colors={['#de3c5e', '#7ebead']} style={{ flex: 1 }}>
//       <View>
//         <View>
//           <FlatList
//             data={RATING_DATA}
//             keyExtractor={(rating) => rating.place.toString()}
//             renderItem={({ item }) => <Rating rating={item} />}
//           />
//         </View>
//       </View>
//     </LinearGradient>
//   );
// };

// RatingScreen.navigationOptions = ({ navigation }) => ({
//   headerTitle: 'Рейтинг',
//   headerLeft: (
//     <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
//       <Item
//         title="Toggle Drawer"
//         iconName="ios-menu"
//         onPress={() => navigation.toggleDrawer()}
//       />
//     </HeaderButtons>
//   ),
// });
