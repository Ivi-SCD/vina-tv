import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const AutenticacaoLayout = () => {
  return (
    <>
      <StatusBar backgroundColor="#161622" style="light"/>
      <Stack>
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="registrar" options={{ headerShown: false }} />
      </Stack>
        
    </> 
  )
}

export default AutenticacaoLayout
