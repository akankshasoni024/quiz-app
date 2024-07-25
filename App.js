import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import QuestionScreen from './src/screens/QuestionScreen';
import ResultScreen from './src/screens/ResultScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import AboutScreen from './src/screens/AboutScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
     
        <Stack.Navigator initialRouteName="WelcomeScreen">
          <Stack.Screen 
            name="WelcomeScreen" 
            component={WelcomeScreen} 
            options={{ 
              headerShown: false 
            }}
          />
          <Stack.Screen name="HomeScreen" component={HomeScreen} 
          options={{ 
            headerShown: false 
          }}/>
          <Stack.Screen name="QuestionScreen" component={QuestionScreen}
          options={{ 
            headerShown: false 
          }} />
          <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ 
              headerShown: false 
            }}/>
          <Stack.Screen name="AboutScreen" component={AboutScreen} options={{ 
              headerShown: false 
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
});

export default App;
