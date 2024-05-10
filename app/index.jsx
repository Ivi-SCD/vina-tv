import { Text } from "react-native";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { ScrollView } from "react-native";
import { icons } from "../constants";
import { View, Image  } from "react-native";
import { CustomButton } from "../components";

export default function App() {
  return (
    <SafeAreaView className="h-full bg-primaryblack">

      <ScrollView contentContainerStyle={{height: "100%",}}>

        <View className="w-full flex justify-content items-center min-h-[85vh] px-4 mt-20">
          <Image source={icons.logo} className="w-[130px] h-[84]" resizeMode="contain">
            
          </Image>
          <Text className="font-hvsemibold text-2xl text-white mb-20 ">VinaTv.</Text>

          <View className="relative">
            <Text className="text-lg text-white font-bold text-center ">Descubra as infinidades e novidades do Cinema com {' '}
            <Text className="text-primaryorange">VinaTv. </Text></Text>
          </View>

          <Text className="text-sm font-rregular text-gray-100 mt-7 text-center">
            Onde a criatividade das plataformas modernas de streaming encontram a inovação e o conforto de casa.
          </Text>

            <CustomButton
            title="Continuar com e-mail"
            handlePress={() => router.push('/login')}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      
      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}
