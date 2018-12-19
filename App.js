import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import ShareScreen from './src/screens/SharePlace/SharePlace';
import FindScreen from './src/screens/FindPlace/FindPlace';
import configureStore from './src/store/configureStore';

const store = configureStore();

// Register Screens

Navigation.registerComponentWithRedux('ReactNativeStart.AuthScreen', () => AuthScreen, Provider, store);
Navigation.registerComponentWithRedux('ReactNativeStart.ShareScreen', () => ShareScreen, Provider, store);
Navigation.registerComponentWithRedux('ReactNativeStart.FindScreen', () => FindScreen, Provider, store);

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