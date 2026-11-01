import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Merriweather_700Bold } from '@expo-google-fonts/merriweather';
import { OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';

import USNewsScreen from './screens/USNewsScreen';
import WorldNewsScreen from './screens/WorldNewsScreen';
import SportsNewsScreen from './screens/SportsNewsScreen';
import BookmarksScreen from './screens/BookmarksScreen';
import NewsDetailScreen from './screens/NewsDetailScreen';
import BookmarksContextProvider from './store/context/bookmarks-context';
import Colors from './constants/colors';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

const tabTitles = {
  USNews: 'US News',
  WorldNews: 'World News',
  SportsNews: 'Sports',
};

function TabsNavigator() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.accent,
        tabBarInactiveTintColor: Colors.muted,
        tabBarStyle: { backgroundColor: Colors.card },
        tabBarLabelStyle: { fontFamily: 'open-sans-bold', fontSize: 12 },
      }}
    >
      <Tabs.Screen
        name="USNews"
        component={USNewsScreen}
        options={{
          title: 'US',
          tabBarIcon: ({ color, size }) => <Ionicons name="flag" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="WorldNews"
        component={WorldNewsScreen}
        options={{
          title: 'World',
          tabBarIcon: ({ color, size }) => <Ionicons name="earth" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="SportsNews"
        component={SportsNewsScreen}
        options={{
          title: 'Sports',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="basketball" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary },
        headerTintColor: 'white',
        headerTitleStyle: { fontFamily: 'merriweather-bold' },
        sceneStyle: { backgroundColor: Colors.background },
        drawerActiveTintColor: Colors.accent,
        drawerLabelStyle: { fontFamily: 'open-sans-bold' },
      }}
    >
      <Drawer.Screen
        name="NewsTabs"
        component={TabsNavigator}
        options={({ route }) => ({
          title: tabTitles[getFocusedRouteNameFromRoute(route) ?? 'USNews'],
          drawerLabel: 'Latest News',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="newspaper" color={color} size={size} />
          ),
        })}
      />
      <Drawer.Screen
        name="Bookmarks"
        component={BookmarksScreen}
        options={{
          title: 'Bookmarked News',
          drawerIcon: ({ color, size }) => <Ionicons name="bookmark" color={color} size={size} />,
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'merriweather-bold': Merriweather_700Bold,
    'open-sans': OpenSans_400Regular,
    'open-sans-bold': OpenSans_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar style="light" />
      <BookmarksContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.primary },
              headerTintColor: 'white',
              headerTitleStyle: { fontFamily: 'merriweather-bold' },
              contentStyle: { backgroundColor: Colors.background },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewsDetail"
              component={NewsDetailScreen}
              options={{ title: 'Story' }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </BookmarksContextProvider>
    </>
  );
}
