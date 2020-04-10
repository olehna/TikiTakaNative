// import React, { useState } from 'react';
// import {
//   View,
//   TextInput,
//   StyleSheet,
//   Image,
//   Platform,
//   TouchableWithoutFeedback,
//   Keyboard,
//   AsyncStorage,
//   ScrollView
// } from 'react-native';
// import firebase from '../firebase';
// import { Button } from 'react-native-elements';
// import { HeaderButtons, Item } from 'react-navigation-header-buttons';
// import { AppHeaderIcon } from '../components/AppHeaderIcon';
// import { LinearGradient } from 'expo-linear-gradient';

// export class Logout extends React.Component {
  
//   componentDidMount() {
//     this.clearStorage()
    
//   }
//   clearStorage = async () => {
//     try {
//       const keys = await AsyncStorage.getAllKeys();
//       await AsyncStorage.multiRemove(keys);
//       console.log('REMOVED KEYS', keys);
//     } catch (error) {
//       console.log('CANT REMOVE KEYS');
//     }
//   };
//   signUp = async (useremail, userpassword, username) => {
//     try {
//       if (password.length < 6) {
//         alert('введите минимум 6 символов');
//         return;
//       }
//       const user = await firebase
//         .auth()
//         .createUserWithEmailAndPassword(useremail, userpassword);
//       const datafetch = {
//         fields: {
//           email: { stringValue: useremail },
//           userName: { stringValue: username },
//           firstName: { stringValue: '' },
//           lastName: { stringValue: '' },
//           games: { integerValue: 0 },
//           rightAnswers: { integerValue: 0 },
//           userId: { stringValue: user.user.uid },
//         },
//       };
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(datafetch),
//       });
//       const data = response;
//       console.log('created new user ', data); /// how to get UID??
//       // const userId = await fetch(url)
//       await AsyncStorage.setItem('userId', user.user.uid);
//       await AsyncStorage.setItem('email', useremail);
//       await AsyncStorage.setItem('userName', username);
//       const value = await AsyncStorage.getItem('email');
//       console.log(value);
//       navigation.navigate('Main');
//     } catch (error) {
//       console.log(error.toString());
//     }
//   };
//   logIn = async (useremail, userpassword) => {
//     try {
//       const user = await firebase
//         .auth()
//         .signInWithEmailAndPassword(useremail, userpassword);
//       await AsyncStorage.setItem('userId', user.user.uid);
//       await AsyncStorage.setItem('email', useremail);
//       console.log('asuncstor', Number(user.user.uid));
//       const oneUserUrl = `https://firestore.googleapis.com/v1beta1/projects/${projectID}/databases/(default)/documents/${collection}/${user.user.uid}?key=${key}&updateMask.fieldPaths=userId`;
//       const updatFetch = {
//         fields: {
//           userId: { stringValue: user.user.uid },
//         },
//       };
//       const response = await fetch(oneUserUrl, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(updatFetch),
//       });
//       console.log(response);
//       navigation.navigate('Main');
//     } catch (error) {
//       console.log('что-то пошло не так');
//     }
//   };

//   return (
//     <LinearGradient colors={['#de3c5e', '#7ebead']} style={{ flex: 1 }}>
//       <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//         <ScrollView
//           contentContainerStyle={{
//             flexGrow: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//           }}
//         >
//           <View style={styles.elevationLow}>
//             <Image
//               style={styles.logo}
//               source={require('../../assets/icon.png')}
//             ></Image>
//           </View>
//           <View>
//             {/* <TextInput
//               style={styles.input}
//               placeholder="Логин"
//               autoCapitalize="none"
//               placeholderTextColor="white"
//               onChangeText={(val) => setLogin(val)}
//             /> */}
//             <TextInput
//               style={styles.input}
//               placeholder="Email"
//               autoCapitalize="none"
//               placeholderTextColor="white"
//               onChangeText={(val) => setEmail(val)}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Пароль"
//               secureTextEntry={true}
//               autoCapitalize="none"
//               placeholderTextColor="white"
//               onChangeText={(val) => setPassword(val)}
//             />
//             <View style={styles.buttons}>
//               <Button
//                 type="solid"
//                 title="Войти"
//                 raised
//                 buttonStyle={{
//                   backgroundColor: 'white',
//                   borderRadius: 25,
//                   height: 50,
//                 }}
//                 titleStyle={{ color: 'rgba(0,0,0,0.7)' }}
//                 onPress={() => logIn(email, password)}
//               />
//               <Button
//                 title="Регистрация"
//                 color="rgb(176, 193, 71)"
//                 raised
//                 buttonStyle={{
//                   backgroundColor: 'rgb(176, 193, 71)',
//                   borderRadius: 25,
//                   height: 50,
//                 }}
//                 onPress={() => navigation.navigate('Signup')}
//                 // onPress={()=> navigation.navigate('Main')}
//               />
//             </View>
//           </View>
//         </ScrollView>
//       </TouchableWithoutFeedback>
//     </LinearGradient>
//   );
// };
// // <LinearGradient colors={['#de3c5e', '#7ebead']} style={{ flex: 1 }}>
// //   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
// //     <View style={styles.container}>
// //       <View style={styles.elevationLow}>
// //         <Image
// //           style={styles.logo}
// //           source={require('../../assets/icon.png')}
// //         ></Image>
// //       </View>
// //       <View>
// //         <TextInput
// //           style={styles.input}
// //           placeholder="Никнейм"
// //           autoCapitalize="none"
// //           placeholderTextColor="white"
// //           // onChangeText={(val) => this.onChangeText('username', val)}
// //         />
// //         <TextInput
// //           style={styles.input}
// //           placeholder="Email"
// //           autoCapitalize="none"
// //           placeholderTextColor="white"
// //           // onChangeText={(val) => this.onChangeText('email', val)}
// //         />
// //         <TextInput
// //           style={styles.input}
// //           placeholder="Пароль"
// //           secureTextEntry={true}
// //           autoCapitalize="none"
// //           placeholderTextColor="white"
// //           // onChangeText={(val) => this.onChangeText('password', val)}
// //         />
// //         <View style={styles.buttons}>
// //           <Button
// //             type="solid"
// //             title="Войти"
// //             raised
// //             buttonStyle={{
// //               backgroundColor: 'white',
// //               borderRadius: 25,
// //               height: 50,
// //             }}
// //             titleStyle={{ color: 'rgba(0,0,0,0.7)' }}
// //             // onPress={this.signUp}
// //           />
// //           <Button
// //             title="Регистрация"
// //             color="rgb(176, 193, 71)"
// //             raised
// //             buttonStyle={{
// //               backgroundColor: 'rgb(176, 193, 71)',
// //               borderRadius: 25,
// //               height: 50,
// //             }}
// //             onPress={() => navigation.navigate('Main')}
// //           />
// //         </View>
// //       </View>
// //     </View>
// //   </TouchableWithoutFeedback>
// // </LinearGradient>
// //   );
// // };

// LoginScreen.navigationOptions = ({ navigation }) => ({
//   headerTitle: 'Авторизация',
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

// const styles = StyleSheet.create({
//   input: {
//     width: 350,
//     height: 55,
//     margin: 10,
//     padding: 8,
//     color: 'white',
//     borderRadius: 14,
//     fontSize: 18,
//     fontFamily: 'MullerNarrow-Light',
//     borderBottomColor: 'rgba(255,255,255,0.3)',
//     borderBottomWidth: 1,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//   },
//   elevationLow: {
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: { height: 2 },
//         shadowOpacity: 0.3,
//       },
//       android: {
//         elevation: 5,
//       },
//     }),
//   },
//   logo: {
//     width: 150,
//     height: 150,
//   },
//   buttons: {
//     marginVertical: 20,
//     height: 120,
//     justifyContent: 'space-between',
//     alignContent: 'center',
//   },
// });
