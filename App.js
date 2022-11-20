import MainContainer from './MainContainer.js';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(["Bottom Tab Navigator: 'tabBarOptions' is deprecated. Migrate the options to 'screenOptions' instead."]);
LogBox.ignoreLogs(["Possible Unhandled Promise Rejection (id: 1):"]);
LogBox.ignoreLogs(["Possible Unhandled Promise Rejection (id: 0):"]);
LogBox.ignoreLogs(["Possible Unhandled Promise Rejection (id: 2):"]);
LogBox.ignoreLogs(["Possible Unhandled Promise Rejection (id: 3):"]);
LogBox.ignoreLogs(["Possible Unhandled Promise Rejection (id: 4):"]);
LogBox.ignoreLogs(["Possible Unhandled Promise Rejection (id: 5):"]);

export default function App() {
  return (
    <MainContainer/>
  );
}