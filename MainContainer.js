import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

//Screens
import Date from './Date';
import Year from './Year';
import Number from './Number';

//Screen name
const numberName = 'Number';
const dateName = 'Date';
const yearName = 'Year';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return(
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName = {numberName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if(rn === numberName){
              iconName = focused? 'number' : 'number';
              return <Octicons name = {iconName} size = {size} color = {color} style={{padding: 5}}/>
            }
            else if(rn === dateName){
              iconName = focused? 'ios-calendar':'ios-calendar-outline';
              return <Ionicons name = {iconName} size = {size} color = {color} style={{padding: 5}}/>
            }
            else if(rn === yearName){
              iconName = focused? 'globe':'globe-outline';
              return <Ionicons name = {iconName} size = {size} color = {color} style={{padding: 5}}/>
            }
          },
        })}

        tabBarOptions ={{
            activeTintColor: '#355C7D',
            inactiveTintColor: 'lightgrey',
            labelStyle: {fontSize: 14}
        }}
        >

        <Tab.Screen name = {numberName} component ={Number}/>
        <Tab.Screen name = {dateName} component ={Date}/>
        <Tab.Screen name = {yearName} component ={Year}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}
