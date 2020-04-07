import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';

export const Topic = ({ props, onOpen }) => {
  return (
    <TouchableOpacity 
    activeOpacity={0.7} 
    // onPress={() => onOpen(topic)}
    >
      <View style={styles.topic}>
        <View style={styles.container}>
          {/* <View style={styles.elevationLow}>
            <Image style={styles.image} source={{ uri: topic.img }}></Image>
          </View>
          <Text style={styles.title}>{topic.text}</Text> */}
          <Text style={styles.title}>
            A
            {/* {props.text} */}
            </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

// import React, { Component } from "react";
// export default class QuizCard extends Component {
 
//   render() {
//     return (
//       <div className={classes.card}>
//         <div className={classes.cardImage}>
       
//           <img className={classes.img} src={`./img/iconCard/${this.props.icon}.png`} alt="" />
//         </div>
//         <div className={classes.cardTitle}>{this.props.name}</div>
//       </div>
//     );
//   }
// }


// .cardTitle {
//   font-family: "Open Sans", sans-serif;
//   color: #fff;
//   -webkit-backdrop-filter: blur(30px);
//   backdrop-filter: blur(30px);
//   width: 100%;
//   font-weight: bold;
//   font-size: 11px;
//   margin-top: 10px;
// }
// .card {
//   background-color: rgba(231, 227, 237, 0.3);
//   width: 160px;
//   height: 160px;
//   margin: 10px;
//   padding: 20px;
//   border-radius: 10px;
//   text-align: center;
//   font-size: 32px;
//   transition: all 0.4s;
//   cursor: pointer;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
// }

// .card:hover {
//   transform: scale(1.03);
//   box-shadow: 0 0 20px black;
// }

// .img {
//   width: 100%;
//   border-radius: 4px;
//   max-width: 100px;
// }

// @media (max-width: 900px) {
//   .card {
//     background-color: rgba(231, 227, 237, 0.3);
//     width: 140px;
//     height: 140px;
//     margin: 10px;
//     padding: 20px;
//     border-radius: 10px;
//     text-align: center;
//     font-size: 32px;
//     transition: all 0.4s;
//     cursor: pointer;
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//   }
//   .cardTitle {
//     font-size: 9px;
//   }
//   .img {
//     width: 100%;
//     border-radius: 4px;
//     max-width: 80px;
//   }
// }





const styles = StyleSheet.create({
  topic: {
    // borderColor: 'black',
    // borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 15,
    marginRight: 10,
  },
  container: {
    width: 150,
    alignItems: 'center',
  },
  elevationLow: {
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: 2 },
        shadowOpacity: 0.3,
      },
      android: {
        elevation: 5,
      },
    }),
  },

  // imageContainer: {
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.8,
  //   shadowRadius: 2,
  // },
  image: {
    width: 150,
    height: 150,
  },
  title: {
    color: '#fff',
    fontFamily: 'open-regular',
    textAlign: 'center',
  },
});
// const navigatorOptions = {
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
//     },
//     headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
//   },
// };
