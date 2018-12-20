import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import ShareScreen from './src/screens/SharePlace/SharePlace';
import FindScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetail from './src/screens/PlaceDetail/PlaceDetail';
import configureStore from './src/store/configureStore';
import SideDrawer from "./src/screens/SideDrawer/SideDrawer";

const store = configureStore();

// Register Screens

Navigation.registerComponentWithRedux('ReactNativeStart.AuthScreen', () => AuthScreen, Provider, store);
Navigation.registerComponentWithRedux('ReactNativeStart.ShareScreen', () => ShareScreen, Provider, store);
Navigation.registerComponentWithRedux('ReactNativeStart.FindScreen', () => FindScreen, Provider, store);
Navigation.registerComponentWithRedux('ReactNativeStart.PlaceDetail', () => PlaceDetail, Provider, store);
Navigation.registerComponent('ReactNativeStart.SideDrawer', () => SideDrawer);

// Start a App
Navigation.setRoot({
  root: {
    sideMenu: {
      left: {
        stack: {
          id: 'SideMenu',
          children: [
            {
              component: {
                name: 'ReactNativeStart.SideDrawer',
                passProps: {
                  side: 'left'
                }
              }
            }
          ]
        }
      },
      center: {
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
    },
  }
});