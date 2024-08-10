import { View, Text, TextInput } from "react-native"
import { StyleSheet } from "react-native"


export default function search () {
    return (
        <View style={styles.inputLabel}>
            <TextInput
                placeholderTextColor={'#6b7280'}
                style={styles.inputArea}
                placeholder="Pesquise aqui"
                
                // value={password}
                // onChangeText={setPassword}
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
        borderColor: '#cc66ff',
        fontSize: 15,
        fontWeight: "500",
        color: '#222'
      },
})