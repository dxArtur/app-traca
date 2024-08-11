import TabBar from "@/src/components/TabBar";
import { FontAwesome5 } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return(
    <Tabs
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#cc66ff'
    }}
    >
      <Tabs.Screen
        name="home"
        options={{
          // href: null
          tabBarIcon: ({ color}) => <FontAwesome5 name="home" color={color} size={23} /> 
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          // href: null
          tabBarIcon: ({ color}) => <FontAwesome5 name="compass" color={color} size={23} /> 

        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          // href: null
          tabBarIcon: ({ color}) => <FontAwesome5 name="plus" color={color} size={23}/> 
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          // href: null
          tabBarIcon: ({ color}) => <FontAwesome5 name="search" color={color} size={23}/> 
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          // href: null
          tabBarIcon: ({ color}) => <FontAwesome5 name="user-alt" color={color} size={23}/> 
        }}
      />
    </Tabs>

  )
}
