import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React  from "react";
import Dashboard from '../DashboardComponent';
import ClassBasedComponent from '../LifeCycleOfClassBasedComponent';
import LifeCycleOfFunctionalComponent from '../LifeCycleOfFunctionalComponent';
import FlatListComponent from '../FlatListComponent';
import SectionListComponent from '../SectionListComponent';
import ButtonComponent from '../ButtonComponent';
import SwitchComponent from '../SwitchExample';
import TextInputComponent from '../TextInputComponent';
import RefreshControlComponent from '../RefreshControllCOmponent';
import ActivityIndicatorComponent from '../ActivityIndicatorComponent';
import ImageComponent from '../ImageComponent';
import TextComponent from '../TextComponent';

// login
import LoginScreen from '../LoginScreen';
// redux components
import ReduxHome from '../redux/ReduxHome';

import ReduxSagaComponent from '../reduxSaga/ReduxSagaExample';

// redux Thunk
import ReduxThunkComponent from '../reduxThunk/ReduxThunkComponent';
import Statemanagement from '../StateMamanegemt';
// context
import ContextComponent from '../context/ContextComponent';
import ContextScreen1 from '../context/ContextScreen1';
import ContextScreen2 from '../context/ContextScreen2';

import ModalComponent from '../modals/ModalComponent';
import DialogComponent from '../alert/DialogComponent';
import StatusBarComponent from '../StatusBarComponent';
// image loader 
// DATABASE
import DatabaseHomeScreen from '../database/DatabaseHomeScreen';
import RegisterUser from '../database/RegisterUser';
import ViewAllUser from '../database/ViewAllUser';
import ViewUser from '../database/ViewUsers';
import UpdateUser from '../database/UpdateUser';
import DeleteUser from '../database/DeleteUser';
// redux toolkit
import ReduxToolHome from '../reduxtoolkit/ReduxToolHome';


const Stack = createNativeStackNavigator();

const LauncherApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Dashboard'>
      <Stack.Screen 
          name="Dashboard"  
          component={Dashboard} 
          options={{title:'Dashboard'}}/>
      <Stack.Screen name="LifeCycleClassBasedComponent" component={ClassBasedComponent} />
      <Stack.Screen name="LifeCycleFunctionalComponent" component={LifeCycleOfFunctionalComponent} />
      <Stack.Screen name="FlatList" component={FlatListComponent} />
      <Stack.Screen name="SectionList" component={SectionListComponent} />
      <Stack.Screen name="Button" component={ButtonComponent} />
      <Stack.Screen name="Switch" component={SwitchComponent} />
      <Stack.Screen name="TextInput" component={TextInputComponent} />
      <Stack.Screen name="ReefreshControl" component={RefreshControlComponent} />
      <Stack.Screen name="ActivityIndicator" component={ActivityIndicatorComponent} />
      <Stack.Screen name="Image" component={ImageComponent} />
      <Stack.Screen name="Text" component={TextComponent} />
      <Stack.Screen name="Redux" component={ReduxHome} />
      <Stack.Screen name="ReduxSaga" component={ReduxSagaComponent} />
      <Stack.Screen name="StateManagement" component={Statemanagement} />
      <Stack.Screen name="Context" component={ContextComponent} />
      <Stack.Screen name="screen1" component={ContextScreen1} />
      <Stack.Screen name="screen2" component={ContextScreen2} />
      <Stack.Screen name="ModalComponent" component={ModalComponent} />
      <Stack.Screen name="DialogComponent" component={DialogComponent} />
      <Stack.Screen name="StatusBar" component={StatusBarComponent} />
      <Stack.Screen name="ReduxThunk" component={ReduxThunkComponent} />
       {/* Database */}
      <Stack.Screen name="Database" component={DatabaseHomeScreen} />
      <Stack.Screen name="Delete" component={DeleteUser} />
      <Stack.Screen name="Register" component={RegisterUser} />
      <Stack.Screen name="Update" component={UpdateUser} />
      <Stack.Screen name="ViewAll" component={ViewAllUser} />
      <Stack.Screen name="View" component={ViewUser} />
      <Stack.Screen name="Login" component={LoginScreen} />
      
    
      <Stack.Screen name="reduxToolkit" component={ReduxToolHome} />
      
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default LauncherApp;