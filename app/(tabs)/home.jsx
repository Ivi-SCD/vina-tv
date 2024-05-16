import {FlatList, Text, View, Image } from 'react-native'
import React from 'react'
import Trending from '../../components/Trending'
import { SafeAreaView } from 'react-native-safe-area-context'
import EmptyState from '../../components/EmptyState'

const Home = () => {
  return (
    <SafeAreaView className="bg-primaryblack">
        <FlatList
            data={[]}
            keyExtractor={(item) => item.$id}
            renderItem={({item}) => (
                <Text className="text-2xl text-white">Ola mundo, o meu id é: {item.id}</Text>
            )}
            ListHeaderComponent={() => (
                <View className="my-6 px-4 space-y-6">
                    <View className="justify-between items-start flex-column mb-6">
                        <Text className="font-hvmedium text-sm text-gray-100">
                            Olá de volta
                        </Text>
                        <Text className="text-2xl font-hvsemibold text-white">
                            Ivisson
                        </Text>
                    </View>

                    <View className="w-full flex-1 pt-5 pb-8">
                        <Text className="text-gray-100 text-lg font-hvlight">
                            Últimos filmes
                        </Text>

                        <Trending filmes={[
                            {id: 1}, {id: 2}, {id: 3
                            }
                        ]}
                        />
                    </View>
                </View>
            )}
            ListEmptyComponent={() => {
                <EmptyState
                    title="Ops! Detectamos uma necessidade de filmes em nossa base de dados"
                    subtitle="Seja o primeiro a enviar-nos um filme."
                />
            }}
        />
    </SafeAreaView>
  )
}

export default Home