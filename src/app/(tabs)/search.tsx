import { query } from "@/src/service/user"
import { UserResponse } from "@/src/types/userTypes"
import { useEffect, useState } from "react"
import { View, Text, TextInput, ActivityIndicator, FlatList } from "react-native"
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

  if (isLoading) {
    <View style={styles.loading}>
      <ActivityIndicator size={'small'} color={'#cc66ff'}/>
    </View>
  }

    return (
        <View style={styles.inputLabel}>
            <TextInput
                placeholderTextColor={'#6b7280'}
                style={styles.inputArea}
                placeholder="Pesquise aqui"
                clearButtonMode="always"
                value={searchQuery}
                onChangeText={(query)=> handleSearch(query)}
              />

            <FlatList 
              data={data}
              keyExtractor={(item)=>item.nick}
              renderItem={({item})=> (
                <View>
                  <Text style={styles.username}>
                    {item.nick}
                  </Text>
                  <Text style={styles.name}>
                    {item.name}
                  </Text>
                </View>
              )}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    inputLabel: {
        fontSize:17,
        fontWeight:600,
        color:'#222',
        marginHorizontal:10,
        marginVertical:15
      },
    
      inputArea: {
        height:44,
        backgroundColor:'#fff',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:8,
        borderWidth: 0.2,
        fontSize: 15,
        fontWeight: "500",
        color: '#222'
      },
      loading: {
        flex:1,
        justifyContent:'center',
        alignContent:'center',
      },

      name: {
        fontSize:15,
        marginLeft:10,
        color: '#6b7280'
      },

      username: {
        fontSize:17,
        marginLeft:10,
        fontWeight: '600'
      }

})