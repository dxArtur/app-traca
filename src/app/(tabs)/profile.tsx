import { getUser } from "@/src/service/user"
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { View, Text, Alert, Image, StyleSheet, Pressable } from "react-native"


const user= {
    "nick": "torch",
    "email": "daniel@email.com",
    "name": "johnny storm"
}


export default function profile (){



    return(
        <View style={styles.container}>
            <View style={styles.CoverContainer}>
                <Image
                style={styles.CoverImage}
                source={require('@/assets/images/cover.png')}
                />
            </View >
            <View >
                <View style={styles.ProfileContainer}>
                    <Image
                    style={styles.ImageProfileContainer}
                    source={require('@/assets/images/profile.png')}
                    />
                    <Text style={styles.Title}
                    >
                        {user.nick}
                    </Text>
                    <Text
                    style={styles.SubTitleName}
                    >
                        {user.name}
                    </Text>

                    <Text
                    style={styles.Bio}
                    >
                        on flames
                    </Text>
                    <View style={styles.FollowContainer}>
                        <Pressable >
                            <Text style={styles.FollowButton}>
                                follow
                            </Text>
                        </Pressable>
                        <FontAwesome5 name="comment" color={'#929292'} size={23} />
                        {/* <Pressable>
                            <Text style={styles.Followers}>
                                446 Following
                            </Text>
                        </Pressable> */}
                        <Pressable>
                            <Text style={styles.Followers}>
                                1961 Followers
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    CoverContainer:{
        width:'100%',
        height:'20%',      
    },
    
    CoverImage:{
        flex:1,
        width:'100%',
        height: '100%',
        resizeMode: "cover"
    },

    ProfileContainer: {
        marginTop: 10,  
        gap:5,
        alignItems: "center"
    },

    ImageProfileContainer: {
        width: 150,
        height: 150,
        borderRadius:100,
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },

    Title: {
        fontSize:27,
        fontWeight:'700',
        color:'#1e1e1e',
        textAlign:"center"
    },

    Bio: {
        fontSize:15,
        fontWeight:600,
        color:'#929292',
        textAlign:"center"
    },

    SubTitleName: {
        fontSize:15,
        fontWeight:500,
        color:'#1e1e1e',
        textAlign:"center"
    },

    FollowContainer: {
        flexDirection:"row",
        gap: 5,
        padding: 8,
        alignItems: "center",
        justifyContent: 'center'
    },

    FollowButton: {
        backgroundColor: '#cc66ff',
        color: '#fff',
        fontSize:15,
        fontWeight:500,
        paddingHorizontal:15,
        borderRadius:8
    },

    Followers: {
        fontSize:15,
        fontWeight:500,
        color: '#929292'
    }
})