/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import LoginScreen from './src/app/screens/LoginScreen'
import LauncherApp from './src/app/screens/navigation/LauncherApp'

AppRegistry.registerComponent(appName, () => LauncherApp);
