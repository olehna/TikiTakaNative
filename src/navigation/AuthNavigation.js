import { createStackNavigator } from 'react-navigation-stack'
import {LoginScreen} from '../screens/LoginScreen'
import { AuthScreen } from '../screens/AuthScreen';

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Signup: { screen: AuthScreen },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
)

export default AuthNavigation
