import { Image, Pressable, SafeAreaView, Text, TextInput, View, StyleSheet } from "react-native";

export default function Index() {
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
              />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Senha</Text>
              <TextInput
                placeholderTextColor={'#6b7280'}
                style={styles.inputArea}
                placeholder="********"
              />
            </View>
          </View>

          <View >
            <Pressable style={styles.button}>
              <View>
                <Text style={styles.textButton}>Entrar</Text>
              </View>
            </Pressable>
          </View>

            <Pressable style={{marginTop: "auto"}}>
              <View >
                <Text style={styles.formFooter}>ainda não tem uma conta?
                  <Text  style={{textDecorationLine:"underline", color: '#dc4ee9'}}>Registre-se agora</Text>
                </Text>
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



