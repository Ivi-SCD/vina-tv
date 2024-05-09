import { ScrollView } from 'react-native';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Modal } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.textoPadrao}>VINA.TV</Text>
      </View>

      <View style={styles.meio}>
        <TextInput keyboardType='email-address' placeholder='Digite seu email'/>
        <TextInput placeholder='Digite sua senha'/>
        <TouchableOpacity style={styles.entrar}> 
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rodape}>
        
      </View>    
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    flex:1,
    backgroundColor: 'black',
    width: '100%',
  },
  textoPadrao: {
    fontWeight: 'bold',
    fontSize: 20,
    color:'white',
  },  
  meio: {
    flex:8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center',
    width: '100%',
  },
  rodape: {
    flex:1,
    backgroundColor:'black',
    width: '100%',
  },
  entrar: {
    width: '50%',
    backgroundColor:'blue'
  }
});