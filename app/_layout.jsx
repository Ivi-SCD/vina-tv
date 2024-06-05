
import { Slot, SplashScreen, Stack } from 'expo-router'
import React, { useEffect } from 'react'
import { useFonts } from 'expo-font'

import GlobalProvider from '../context/GlobalProvider';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Roboto-Black": require('../assets/fonts/Roboto-Black.ttf'),
    "Roboto-BlackItalic": require('../assets/fonts/Roboto-BlackItalic.ttf'),
    "Roboto-Bold": require('../assets/fonts/Roboto-Bold.ttf'),
    "Roboto-BoldItalic": require('../assets/fonts/Roboto-BoldItalic.ttf'),
    "Roboto-Thin": require('../assets/fonts/Roboto-Thin.ttf'),
    "Roboto-ThinItalic": require('../assets/fonts/Roboto-ThinItalic.ttf'),
    "Roboto-Light": require('../assets/fonts/Roboto-Light.ttf'),
    "Roboto-LightItalic": require('../assets/fonts/Roboto-LightItalic.ttf'),
    "Roboto-Medium": require('../assets/fonts/Roboto-Medium.ttf'),
    "Roboto-MediumItalic": require('../assets/fonts/Roboto-MediumItalic.ttf'),
    "Roboto-Regular": require('../assets/fonts/Roboto-Regular.ttf'),
    "HindVadodara-Bold": require('../assets/fonts/HindVadodara-Bold.ttf'),
    "HindVadodara-Light": require('../assets/fonts/HindVadodara-Light.ttf'),
    "HindVadodara-Medium": require('../assets/fonts/HindVadodara-Medium.ttf'),
    "HindVadodara-Regular": require('../assets/fonts/HindVadodara-Regular.ttf'),
    "HindVadodara-SemiBold": require('../assets/fonts/HindVadodara-SemiBold.ttf')
  });

  useEffect(() => {
    if(error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error])

if(!fontsLoaded && !error) return null;

  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(autenticacao)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{headerShown: false}}/>
      </Stack>
    </GlobalProvider>

    
  )
}

export default RootLayout