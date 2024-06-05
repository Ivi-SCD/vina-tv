import {FlatList, Text, View, Image } from 'react-native'
import React from 'react'
import Trending from '../../components/Trending'
import { SafeAreaView } from 'react-native-safe-area-context'
import EmptyState from '../../components/EmptyState'
import { useGlobalContext } from '../../context/GlobalProvider'

const Home = () => {
    const {user} = useGlobalContext();

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
                            {user.nome}
                        </Text>
                    </View>

                    <View className="w-full flex-1 pt-5 pb-8">
                        <Text className="text-gray-100 text-lg font-hvlight">
                            Vistos Recentemente
                        </Text>

                        <Trending filmes={[
                            {url: 'https://imgs.search.brave.com/lMA4jg3AoTrGP4f51JoQPIIHbqS3hbOUONKjkJgtF3Q/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS50bWRiLm9yZy90/L3AvdzUwMC8vcTY3/MjVhUjhaczRJd0dN/WHpaVDhhQzhsaDQx/LmpwZw'
                            ,titulo: 'Vingadores: Ultimato'
                            }, {url:'https://imgs.search.brave.com/quIAmNnnFNCRO4cvDsGZsFmyQnN-06_mKAAAkGFgaSs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/OTFhOUNxMisrSFMu/anBn',
                             titulo: 'The Boys'}, {
                                url: 'https://imgs.search.brave.com/evG2QcDbZsS4njM10y-4jNkuiR-zlxZN5Kx-BbqOVp8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/Lzgxek43dWRHUlVM/LmpwZw',
                                titulo: 'Duna 2'
                            }
                        ]}
                        />
                    </View>

                    <View className="w-full flex-1 pt-5 pb-8">
                        <Text className="text-gray-100 text-lg font-hvlight">
                            Em Alta
                        </Text>

                        <Trending filmes={[
                        {
                            url: 'https://imgs.search.brave.com/oEkW5wFts7rc5AVdGY-D3RtuygDjt4srdE3d6Qib9pc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5mc3RhdGljLmNv/bS8ydzdqeFBrTjgy/enlYSldRZzlWQmN4/ekI2WEk9LzIxMHgz/MTIvc21hcnQvZmls/dGVyczpmb3JtYXQo/d2VicCkvbWVkaWEv/bW92aWVzL2NvdmVy/cy8yMDEzLzAzLzdj/NmQwNDMxN2EwNmM2/Y2VhOTg0ZDQ5NjQ2/ZmI0ZDljXzEuanBn',
                            titulo: 'As Branquelas'
                        },
                        {
                            url: 'https://imgs.search.brave.com/R6gDyhU33vOiRLv3YPe0hDJciSJwKa4bVBstsrfCM_4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFkSmwxNU5xc0wu/anBn',
                            titulo: 'O Último Homem'
                        },
                        {
                            url: 'https://imgs.search.brave.com/zMnTA561Z-MT6MPzwpHfqD26iN9HL8JPZJ7BYiyO3mY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9ici53/ZWIuaW1nMy5hY3N0/YS5uZXQvY18zMDBf/MzAwL3BpY3R1cmVz/LzIzLzA2LzIzLzIz/LzQ2LzM0MDc4NTQu/anBn',
                            titulo: 'Ursinho Pooh: Sangue e Mel'
                        }
                    ]} />

                    </View>

                    <View className="w-full flex-1 pt-5 pb-8">
                        <Text className="text-gray-100 text-lg font-hvlight">
                            Recomendados
                        </Text>

                        <Trending filmes={[
                        {url: 'https://imgs.search.brave.com/hYT9D4tssKRQw-TdZz0DvlJIS67NS-8332bLxRLmUO4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk0yTXlOall4/Tm1VdFlUQXdOaTAw/TVRZeExXSm1OV1l0/WXpabE9EWTNaVGsz/T1RGbFhrRXlYa0Zx/Y0dkZVFYVnlOemt3/TWpRNU56TUAuanBn', titulo: 'The Godfather'},
                        {url: 'https://www.gstatic.com/tv/thumb/movieposters/173378/p173378_p_v8_ac.jpg', titulo: 'O Cavaleiro das Trevas'},
                        {url: 'https://www.gstatic.com/tv/thumb/movieposters/1585/p1585_p_v8_aa.jpg', titulo: 'Pulp Fiction'}
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