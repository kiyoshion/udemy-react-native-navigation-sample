import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';

const Stack = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <BottomTab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#350414' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#350414' },
          }}
        >
          <BottomTab.Screen
            name='MealsCategories'
            component={CategoriesScreen}
            options={{
              title: 'All Meals',
            }}
            />
            <Stack.Screen
              name='MealsOverview'
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name='MealDetail'
              component={MealDetailScreen}
            />
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
});
