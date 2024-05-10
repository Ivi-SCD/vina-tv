import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import { icons } from '../constants';

const Formulario = ({title, value, placeholder,
    handleChangeText, otherStyles, ...props}) => {

    const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-rmedium">{title}</Text>
      
      <View className="w-full 
      h-16 
      px-4 
      bg-orange-600 
      rounded-2xl 
      border-2 
      border-red-200 
      focus:border-red-400 
      flex 
      flex-row 
      items-center">
        <TextInput
          className="flex-1 
          text-white 
          font-rbold 
          text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#FFFFFFF"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Senha" && !showPassword}
          {...props}
        />

        {title === "Senha" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.olhoaberto : icons.olhofechado}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>  
    </View>
  )
}

export default Formulario