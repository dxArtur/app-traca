import { Link, router, useRouter, useNavigation } from "expo-router";
import { useState } from "react";
import { Image, Pressable, SafeAreaView, Text, TextInput, View, StyleSheet, Alert } from "react-native";
import { signin } from "../service/user";

export default function Index() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
const handleSignin = async () => {
  try {
    const navigate = useNavigation()
    const userData = {email, password}
    const response = await signin("/api/signin", userData)
    const token = response.data

    if (response.status === 200) {
      router.push("/home")
    }
    if (response.status === 500) {
      Alert.alert('Error', 'bad auth')
    }

    else {
      Alert.alert('Error', 'bad auth')
    }
    
   } catch (error) {
    Alert.alert('Error', 'bad auth')
  }
}

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'#eBecf4'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image 
            style={styles.headerImage}
            source={require('../../assets/images/logo-traca.png')}
          />
          <Text style={styles.title}>Bem vindo de volta</Text>
          <Text style={styles.subtitle}>Leia, compartilhe e esteja com a gente</Text>

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Endereço de email</Text>
              <TextInput 
                placeholderTextColor={'#6b7280'}
                keyboardType="email-address"
                style={styles.inputArea}
                placeholder="john@example.com"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Senha</Text>
              <TextInput
                placeholderTextColor={'#6b7280'}
                style={styles.inputArea}
                placeholder="********"
                value={password}
                onChangeText={setPassword}
              />
            </View>
          </View>

          <View >
            <Pressable
            style={styles.button}
            onPress={handleSignin}
            >
              <View>
                <Text style={styles.textButton}>Entrar</Text>
              </View>
            </Pressable>
          </View>

            <Pressable style={{marginTop: "auto"}}>
              <View >
                <Link href={'/signup'}>
                  <Text style={styles.formFooter}>ainda não tem uma conta?
                    <Text  style={{textDecorationLine:"underline", color: '#dc4ee9'}}> Registre-se agora</Text>
                  </Text>
                </Link>
              </View>
            </Pressable>

          

        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1
  },

  header: {
    marginVertical: 36
  },

  headerImage: {
    width: 80,
    height:80,
    alignSelf:"center",
    marginBottom:36
  },

  title: {
    fontSize:27,
    fontWeight:'700',
    color:'#1e1e1e',
    marginBottom:6,
    textAlign:"center"
  },

  subtitle: {
    fontSize:15,
    fontWeight:500,
    color:'#929292',
    textAlign:"center"
  },

  form: {
    flex: 1,
    marginTop: 32,
    marginBottom: 8,
  },

  input: {
    marginBottom: 16
  },

  inputLabel: {
    fontSize:17,
    fontWeight:600,
    color:'#222',
    marginBottom:8,
  },

  inputArea: {
    height:44,
    backgroundColor:'#fff',
    paddingVertical:10,
    paddingHorizontal:20,
    borderRadius:12,
    fontSize: 15,
    fontWeight: "500",
    color: '#222'
  },

  button: {
    backgroundColor: '#924EE9',
    borderRadius: 8,
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    flexDirection: 'row',
    paddingVertical:10,
    paddingHorizontal:20,
    borderColor: '#924ee9',
  },
  
  textButton: {
    color:'#fff',
    fontWeight: "600",
    fontSize: 18,
  },

  formFooter: {
    marginTop: 25,
    fontSize: 17,
    fontWeight: 600,
    color: '#6b7280',
    textAlign: 'center',
    letterSpacing: 0.15
  }
})



