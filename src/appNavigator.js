import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "./screens/mainScreen";

const appNavigator = createStackNavigator(
  {
    Main: {
      screen: MainScreen,
      navigationOptions: {
        title: 'Công Ty TNHH Nguyên Luân',
        headerTitleStyle: {
          textAlign: 'center',
        }
      }
    },
    // Login: {
    //   screen: loginScreen,
    //   navigationOptions: { headerShown: false }
    // },
    // Weather:{
    //   screen: WeatherScreen,
    //   navigationOptions: {
    //     title: 'Thời Tiết',
    //     headerTitleStyle: {
    //       textAlign: 'center',
    //       paddingRight: 30,
    //     }
    //   }
    // },

    
  },
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: '#CC6600' },
      headerTintColor: '#fff',
      headerTitleStyle: { fontWeight: 'bold' },
    },
  }
);
  export default appNavigator;