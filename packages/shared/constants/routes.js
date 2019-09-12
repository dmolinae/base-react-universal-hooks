import HomeScreen from '../screens/HomeScreen';
import SecondScreen from '../screens/SecondScreen';

const routes = {
  Home: {
    screen: HomeScreen,
    path: "/"
  },
  Second: {
    screen: SecondScreen,
    path: "/second"
  },
};

export const initialRouteName = {
  initialRouteName: 'Home',
}
export default routes;
