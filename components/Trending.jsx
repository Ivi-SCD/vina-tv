import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Trending = ({filmes}) => {
  return (
    <FlatList
      data={filmes}
      keyExtractor={(item) => item.$id}
      renderItem={({item}) => (
        <Text className="text-3xl font-rvmedium text-white">{item.id}</Text>
      )}
      horizontal
    />
  )
}

export default Trending