import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from "react-redux";
import { fetchQuizes } from "../store/actions/quiz";
import { Topic } from '../components/Topic';
import { THEME } from '../theme';
import { LinearGradient } from 'expo-linear-gradient';

class TopicList extends React.Component
//  ({ data, onOpen }) => 
 {
  // renderQuizes() {
  //   return (
  //     this.props.quizes.length > 0 &&
  //     this.props.quizes.map((quiz, index) => {
  //       return (
  //         // <NavLink className={classes.link} to={"/quiz/" + quiz.id} key={index}>
  //           <Topic 
  //           name={quiz.name} 
  //           // icon={changeIconName(quiz.name)} 
  //           />
  //         // </NavLink>
  //       );
  //     })
  //   );
  // }

  componentDidMount() {
    this.props.fetchQuizes();
  }

  render() {
//     return (
//       // <div className={classes.QuizList}>
//       //   <div>
//       //     <h1 className={classes.title}>СПИСОК ИГР</h1>

//           // {this.props.loading && this.props.quizes.length !== 0 ? (
//           //   <Loader />
//           // ) : (
//             <div className={classes.cardList}>
//               <div className={classes.cardWrap}>{this.renderQuizes()}</div>
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }
// }

  return (
    <LinearGradient colors={['#de3c5e', '#7ebead']} style={{ flex: 1 }}>
      <View style={styles.wrapper}>
        <FlatList
          data={this.props.quizes}
          numColumns={2}
          keyExtractor={(topic) => topic.id.toString()}
          renderItem={({ item }) => <Topic topic={item} onOpen={onOpen} />}
        />
      </View>
    </LinearGradient>
  );
};
}
  const styles = StyleSheet.create({
    wrapper: {
      height: '100%',
      paddingVertical: 50,
      padding: 10,
      alignItems: 'center',
    },
  });
  
  

function mapStateToProps(state) {
  return {
    quizes: state.quiz.quizes,
    loading: state.quiz.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizes: () => dispatch(fetchQuizes()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicList);
