import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { icons } from '../../constants'
import Formulario from '../../components/Formulario'
import CustomButton from '../../components/CustomButtom'
import { Link, router } from 'expo-router'
import { getCurrentUser, logar } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'

const Login = () => {

  const {setUser, setIsLoggedIn} = useGlobalContext();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if (form.email === "" || form.password === "") {
      Alert.alert("Error","Por favor, preencha os campos.")
    }

    setIsSubmitting(true)

    try {
      await logar(form.email, form.senha);
      const result = await getCurrentUser();
      setUser(result);
      setIsLoggedIn(true);

      Alert.alert("Success", "Usuario logado com sucesso.");
      router.replace("/home");
    } catch(error) {
      
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SafeAreaView className="bg-primaryblack h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image source={icons.logo}
          resizeMode='contain' className="w-[115px] h-[75px]"/>

          <Text className="text-2xl text-white text-semibold mt-5 font-rbold">
            Logar em VinaTv.

          </Text>
          <Formulario 
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form,
            email: e})}
          otherStyles="mt-7"
          keyboardType="email-address"/>

          <Formulario 
          title="Senha"
          value={form.senha}
          handleChangeText={(e) => setForm({ ...form,
            senha: e})}
          otherStyles="mt-7"
          keyboardType="password"/>
        
          <CustomButton 
          title="Login"
          handlePress={submit}
          containerStyles="mt-10"
          isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-hvlight">
              Não possui uma conta?
            </Text>
            <Link href="/registrar" className='text-lg font-hvbold text-white'>Registrar</Link>
          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login