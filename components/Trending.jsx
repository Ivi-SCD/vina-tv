import { FlatList, Image, Text, View } from 'react-native';
import React from 'react';

const Trending = ({ filmes }) => {
  return (
    <FlatList
      data={filmes}
      keyExtractor={(item) => item.titulo}
      renderItem={({ item }) => (
        <View className="flex-shrink-0 m-4">
          <Image
            source={{ uri: item.url }}
            style={{ width: 150, height: 200, borderRadius: 10 }}
          />
          <Text className="mt-2 text-lg font-semibold text-white">{item.titulo}</Text>
        </View>
      )}
      horizontal
    />
  );
};

export default Trending;
