import { View, Text, ScrollView, Image, Modal, Pressable, Alert } from 'react-native' 
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { icons } from '../../constants'
import Formulario from '../../components/Formulario'
import CustomButton from '../../components/CustomButtom'
import { Link, router } from 'expo-router'

import axios from 'axios'
import { createUser } from '../../lib/appwrite'
import { useGlobalContext } from '../../context/GlobalProvider'

const Registrar = () => {

  const {setUser, setIsLoggedIn} = useGlobalContext()

  const [form, setForm] = useState({
    nome: '',
    email: '',
    password: '',
    cep:'',
    cidade:'',
    bairro:'',
    rua:'',
    numero:'',
    complemento:''
  });

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [modalVisible, setModalVisible] = useState(false);

  const fetchAddressInfo = async () => {
    try {
      
      const response = await axios.get(`https://viacep.com.br/ws/${form.cep}/json/`);
      
      if(response.data.erro) throw new Error('Ocorrou um erro inesperado')

      const { localidade, bairro, logradouro } = response.data;
      setForm({
        ...form,
        cidade: localidade,
        bairro: bairro,
        rua: logradouro,
      });
    } catch (err) {
      setForm({
        ...form,
        cidade: '',
        bairro: '',
        rua: '',
      });
      setModalVisible(true)
    }
  };
  

  const submit = async () => {
    if (!form.nome || !form.email || !form.password || !form.cep 
      || !form.cidade || !form.bairro || !form.rua) {
      Alert.alert('Error', 'Por favor complete todos os campos.')
    } 

    setIsSubmitting(true)

    try {
      const result = await createUser(form.email, form.password, form.nome, form.cep,
        form.cidade, form.bairro, form.rua, form.numero, form.complemento)
      
      setUser(result);
      setIsLoggedIn(true);
      router.replace('/home')
    } catch(error) {
      Alert.alert('Error', error.message)
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    <SafeAreaView className="bg-primaryblack h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">

          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View className='flex-start mt-5 justify-center items-center bg-opacity-15'>
            <View className='bg-gray-800 p-4 rounded-lg bg-opacity-25'>
              <Text className='text-lg font-bold mb-4 text-center text-white'>
                Falha em encontrar o CEP. Tente novamente.
              </Text>
              <Pressable
                className='bg-primaryorange px-4 py-2 rounded-lg'
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text className='text-white font-bold text-center'>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

          <Image source={icons.logo}
          resizeMode='contain' className="w-[115px] h-[75px]"/>

          <Text className="text-2xl text-white text-semibold mt-5 font-rbold">
            Registrar-se em VinaTv.
          </Text>

          <Formulario
          title="Nome Completo"
          value={form.nome}
          handleChangeText={(e) => setForm({ ...form, nome: e})}
          otherStyles="mt-3"
          keyboardType="text"
          />

          <Formulario 
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form,
            email: e})}
          otherStyles="mt-3"
          keyboardType="email-address"/>

          <Formulario 
          title="Senha"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e})}
          otherStyles="mt-3"
          keyboardType="password"/>

          <Formulario
          title="CEP"
          value={form.cep}
          handleChangeText={(e) => setForm({...form, cep: e})}
          onEndEditing={() => fetchAddressInfo()}
          otherStyles="mt-3"
          keyboardType="numeric"
          />

          <Formulario
          title="Cidade"
          editable={false}
          value={form.cidade}
          handleChangeText={(e) => setForm({...form, cidade: e})}
          otherStyles="mt-3"
          keyboardType="text"
          />

          <Formulario
          title="Bairro"
          editable={false}
          value={form.bairro}
          handleChangeText={(e) => setForm({...form, bairro: e})}
          otherStyles="mt-3"
          keyboardType="text"
          />

          <Formulario
          title="Rua"
          editable={false}
          value={form.rua}
          handleChangeText={(e) => setForm({...form, rua: e})}
          otherStyles="mt-3"
          keyboardType="text"
          />

          <Formulario
          title="Numero"
          value={form.numero}
          handleChangeText={(e) => setForm({...form, numero: e})}
          otherStyles="mt-3"
          keyboardType="numeric"
          />

          <Formulario
          title="Complemento"
          value={form.complemento}
          handleChangeText={(e) => setForm({...form, complemento: e})}
          otherStyles="mt-3"
          keyboardType="text"
          />

          <CustomButton
          title="Registrar"
          handlePress={submit}
          containerStyles="mt-10"
          isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2 mb-10">
            <Text className="text-lg text-gray-100 font-hvlight">
              Já possui uma conta?
            </Text>
            <Link href="/login" className='text-lg font-hvbold text-white'>Entrar</Link>
          </View>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  )
}

export default Registrar