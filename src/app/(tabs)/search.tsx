import { query } from "@/src/service/user"
import { UserResponse } from "@/src/types/userTypes"
import { router } from "expo-router"
import { useEffect, useState } from "react"
import { View, Text, TextInput, ActivityIndicator, FlatList, Pressable } from "react-native"
import { StyleSheet } from "react-native"


export default function searchPage () {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<UserResponse[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  


  useEffect(() =>{
    if (searchQuery) {
      fetchData()
    }
  }, [searchQuery])


  const fetchData = async() => {
    setIsLoading(true)
    try {
      const response = await query(`/api/search/${searchQuery}`)
      console.log(response.data)  
      setData(response.data)
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
  }


  const handleGotoUserPage = async(username: string) => {
    router.navigate({pathname:"/profile", params:{username}})

  }

  return (
    <View style={styles.container}>

      <TextInput
        placeholderTextColor={'#6b7280'}
        style={styles.inputArea}
        placeholder="Pesquise aqui"
        clearButtonMode="always"
        value={searchQuery}
        onChangeText={(query) => handleSearch(query)}
      />
      <View style={styles.loading}>

        {isLoading ? (
          <View style={styles.loading}>
            <ActivityIndicator size={'large'} color={'#cc66ff'} />
          </View>
        ) : data.length === 0 ? (
          searchQuery ? (
            <View>
              <Text style={styles.notFound}>
                Nenhum usuário encontrado
              </Text>
            </View>
          ) : null
        ) : (

          <FlatList
            style={styles.list}
            data={data}
            keyExtractor={(item) => item.nick}
            renderItem={({ item }) => (
              <Pressable
                style={styles.element}
                onPress={() => handleGotoUserPage(item.nick)}
              >
                <Text style={styles.username}>
                  {item.nick}
                </Text>
                <Text style={styles.name}>
                  {item.name}
                </Text>
              </Pressable>
            )}
          />
        )}
      </View>
    </View>
  )

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 15
  },


  inputArea: {
    height: 44,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: 0.2,
    fontSize: 15,
    fontWeight: "500",
    color: '#222'
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
  },

  name: {
    fontSize: 15,
    marginLeft: 10,
    color: '#6b7280'
  },

  username: {
    fontSize: 17,
    marginLeft: 10,
    fontWeight: '600'
  },

  list: {
    marginTop: 10,
    marginLeft: 10
  },

  element: {
    marginTop: 10,
  },

  notFound: {
    textAlign: "center",
    fontWeight: '800',
    fontSize: 17,
    marginTop: 20,
    color:'#222'
  }


})