import axios from '../../axios/axios-quiz';
import { AsyncStorage } from 'react-native';
import firebase from '../../firebase';
import {
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZES_ERROR,
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FINISH_QUIZ,
  QUIZ_NEXT_QUESTION,
  QUIZ_RETRY,
  QUIZ_SET_STATE,
  QUIZ_SET_TIMER,
} from './actionTypes';

export function fetchQuizes() {
  return async (dispatch) => {
    dispatch(fetchQuizesStart());
    try {
      const response = await axios.get('/quiz.json');

      const quizes = [];

      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `${response.data[key][0].topic}`,
        });
      });

      let uniqueTopics = () => {
        let passedVals = [];
        const newArr = quizes
          .sort(() => Math.random() - 0.5)
          .filter(
            (el) => !passedVals.includes(el.name) && passedVals.push(el.name)
          );
        return newArr;
      };

      dispatch(fetchQuizesSuccess(uniqueTopics()));
    } catch (e) {
      dispatch(fetchQuizesError(e));
    }
  };
}

export function fetchQuizById(quizId) {
  return async (dispatch) => {
    dispatch(fetchQuizesStart());

    try {
      const response = await axios.get(`/quiz/${quizId}.json`);
      const quiz = response.data;

      dispatch(fetchQuizSuccess(quiz));
    } catch (e) {
      dispatch(fetchQuizesError(e));
    }
  };
}

export function fetchQuizSuccess(quiz) {
  return {
    type: FETCH_QUIZ_SUCCESS,
    quiz,
  };
}

export function fetchQuizesStart() {
  return {
    type: FETCH_QUIZES_START,
  };
}

export function fetchQuizesSuccess(quizes) {
  return {
    type: FETCH_QUIZES_SUCCESS,
    quizes,
  };
}

export function fetchQuizesError(e) {
  return {
    type: FETCH_QUIZES_ERROR,
    error: e,
  };
}

export function quizSetState(answerState, results) {
  return {
    type: QUIZ_SET_STATE,
    answerState,
    results,
  };
}

export function finishQuiz() {
  return {
    type: FINISH_QUIZ,
  };
}

export function quizNextQuestion(number) {
  return {
    type: QUIZ_NEXT_QUESTION,
    number,
  };
}

export function justRetryQuiz() {
  return {
    type: QUIZ_RETRY,
  };
}

export function retryQuiz() {
  return async (dispatch) => {
    dispatch(justRetryQuiz());

    try {
      dispatch(fetchQuizes());
    } catch (e) {
      dispatch(fetchQuizesError(e));
    }
  };
}

export function setTimer(second) {
  return {
    type: QUIZ_SET_TIMER,
    second,
  };
}

export function quizAnswerClick(answerId) {
  return (dispatch, getState) => {
    const state = getState().quiz;
    const question = state.quiz[state.activeQuestion];
    const results = state.results;
    const saveResult = async () => {
      const rightAnswers = Object.values(results).filter(
        (elem) => elem === 'success'
      ).length;
      console.log('right answers for game', rightAnswers);
      const UID = await AsyncStorage.getItem('userId');
      const games = await AsyncStorage.getItem('games');
      console.log('games from AsyncStorage = ', games);
      const totalRightAnswers = Number(
        await AsyncStorage.getItem('rightAnswers')
      );
      console.log('answers from AS = ', totalRightAnswers);
      // const games = await AsyncStorage.getItem('games') + 1;
      const newGames = (+games + 1).toString();
      await AsyncStorage.setItem('games', newGames);
      console.log('newGames = ', newGames);
      const newtotalRight = (+totalRightAnswers + +rightAnswers).toString();
      await AsyncStorage.setItem('rightAnswers', newtotalRight);
      console.log('newtotalRight= ', newtotalRight);
      const projectID = 'quiz-91601';
      const key = 'AIzaSyARZUqpQVEMgqIGUgFpJqPVFDqakbegp2A';
      const collection = `users`;
      const oneUserUrl = `https://firestore.googleapis.com/v1beta1/projects/${projectID}/databases/(default)/documents/${collection}/${UID}?key=${key}&updateMask.fieldPaths=games&updateMask.fieldPaths=rightAnswers`;
      const updatFetch = {
        fields: {
          games: { integerValue: +games + 1 },
          rightAnswers: { integerValue: +totalRightAnswers + +rightAnswers },
        },
      };
      const response = await fetch(oneUserUrl, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatFetch),
      });
      console.log('result saved');
    };
    if (state.answerState) {
      const key = Object.keys(state.answerState)[0];
      if (state.answerState[key] === 'success') {
        return;
      }
    }
    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success';
      }
      dispatch(quizSetState({ [answerId]: 'success' }, results));
      const timeout = window.setTimeout(() => {
        if (isQuizFinished(state)) {
          dispatch(finishQuiz());
          saveResult();
        } else {
          dispatch(quizNextQuestion(state.activeQuestion + 1));
        }
        window.clearTimeout(timeout);
      }, 500);
    } else {
      results[question.id] = 'error';
      dispatch(quizSetState({ [answerId]: 'error' }, results));
      const timeout = window.setTimeout(() => {
        if (isQuizFinished(state)) {
          dispatch(finishQuiz());
          saveResult();
        } else {
          dispatch(quizNextQuestion(state.activeQuestion + 1));
        }
        window.clearTimeout(timeout);
      }, 500);
    }
  };
}

// export function quizAnswerClick(answerId) {
//   return (dispatch, getState) => {
//     const state = getState().quiz;

//     if (state.answerState) {
//       const key = Object.keys(state.answerState)[0];
//       if (state.answerState[key] === 'success') {
//         return;
//       }
//     }

//     const question = state.quiz[state.activeQuestion];
//     const results = state.results;

//     if (question.rightAnswerId === answerId) {
//       if (!results[question.id]) {
//         results[question.id] = 'success';
//       }

//       dispatch(quizSetState({ [answerId]: 'success' }, results));

//       const timeout = window.setTimeout(() => {
//         if (isQuizFinished(state)) {
//           dispatch(finishQuiz());
//           // firebase
//           //   .firestore()
//           //   .collection('users')
//           //   .doc(localStorage.userId)
//           //   .update({
//           //     games: firebase.firestore.FieldValue.increment(1),
//           //     rightAnswers: firebase
//           //       .firestore.FieldValue.increment(
//           //         Object.values(results).filter(
//           //           elem => elem === 'success').length)
//           //   })
//           // console.log(results)
//         } else {
//           dispatch(quizNextQuestion(state.activeQuestion + 1));
//         }
//         window.clearTimeout(timeout);
//       }, 500);
//     } else {
//       results[question.id] = 'error';
//       dispatch(quizSetState({ [answerId]: 'error' }, results));

//       const timeout = window.setTimeout(() => {
//         if (isQuizFinished(state)) {
//           dispatch(finishQuiz());
//           // firebase
//           //   .firestore()
//           //   .collection('users')
//           //   .doc(localStorage.userId)
//           //   .update({
//           //     games: firebase.firestore.FieldValue.increment(1),
//           //     rightAnswers: firebase
//           //       .firestore.FieldValue.increment(
//           //         Object.values(results).filter(
//           //           elem => elem === 'success').length)
//           //   })
//         } else {
//           dispatch(quizNextQuestion(state.activeQuestion + 1));
//         }
//         window.clearTimeout(timeout);
//       }, 500);
//     }
//   };
// }

function isQuizFinished(state) {
  return state.activeQuestion + 1 === state.quiz.length;
}
