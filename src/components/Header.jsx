import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
export default function Header() {
  return (
    <View style={styles.container} >
      <Pressable>
        <AntDesign name="menu-fold" size={34} color="white" />
      </Pressable>
      <Pressable>
        <Ionicons name="notifications-outline" size={34} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
       flexDirection: 'row',
       justifyContent: 'space-between'
    },
})