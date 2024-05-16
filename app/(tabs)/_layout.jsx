import { View, Text } from 'react-native'
import { Tabs } from 'expo-router'
import React from 'react'
import { icons } from '../../constants'
import { Image } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "hvsemibold" : "hvregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#a30006",
          tabBarInactiveTintColor: "#f06f91",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#1c0128",
            borderTopWidth: 1,
            borderTopColor: "#c21a01",
            height: 84,
          }, 
        }}
      > 
        <Tabs.Screen
          name="home"
          options={{
            title:"Home",
            headerShown:false,
            tabBarIcon: ({color, focused}) => (
              <TabIcon
              icon={icons.logo}
              color={color}
              name="Home"
              focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="play"
          options={{
            title:"Play",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.play}
                color={color}
                name="Play"
                focused={focused}
              />
            )
          }}
        />

        <Tabs.Screen
          name="perfil"
          options={{
            title: "Perfil",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.perfil}
                color={color}
                name="Perfil"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
      
      <StatusBar backgroundColor="#161622" style="light" />
    </>
  )
}

export default TabsLayout
