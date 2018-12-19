import { Navigation } from "react-native-navigation";

import AuthScreen from './src/screens/Auth/Auth';
import ShareScreen from './src/screens/SharePlace/SharePlace';
import FindScreen from './src/screens/FindPlace/FindPlace';

// Register Screens

Navigation.registerComponent('ReactNativeStart.AuthScreen', () => AuthScreen);
Navigation.registerComponent('ReactNativeStart.ShareScreen', () => ShareScreen);
Navigation.registerComponent('ReactNativeStart.FindScreen', () => FindScreen);

// Start a App
Navigation.setRoot({
  root: {
    stack: {
      children: [{
        component: {
          name: 'ReactNativeStart.AuthScreen'
        }
      }],
      options: {
        topBar: {
          title: {
            text: 'Login'
          }
        }
      }
    }
  }
});