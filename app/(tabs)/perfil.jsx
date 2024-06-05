import { View, Text, Image } from 'react-native'
import React from 'react'
import { useGlobalContext } from '../../context/GlobalProvider';

const Perfil = () => {
  
  const {user} = useGlobalContext();
  
  const usuario = {
    nome: user.nome,
    email: user.email,
    fotoUrl: user.avatar,
    cep: user.cep,
    cidade: user.cidade,
    rua: user.rua,
    bairro: user.bairro,
    complemento: user.complemento,
    numero: user.numero
  };
  
  return (
    <View className="flex-1 items-center justify-center bg-primarywhite">
      <Image
        source={{ uri: usuario.fotoUrl }}
        style={{ width: 100, height: 100, borderRadius: 50 }}
      />
      <View className="mt-4">
        <Text className="text-lg font-bold">{usuario.nome}</Text>
        <Text className="text-gray-500">{usuario.email}</Text>
        <Text>{usuario.cep}, {usuario.cidade}</Text>
        <Text>{usuario.rua}, {usuario.numero}</Text>
        <Text>{usuario.bairro}</Text>
        <Text>{usuario.complemento}</Text>
      </View>
    </View>
  )
}

export default Perfil
