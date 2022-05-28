import { FontAwesome } from '@expo/vector-icons';
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";
import Text from "./Text";
export default function HeadTitle() {
  return (
    <View style={styles.container}>
      <View>
        <Text preset="h1">Covid-19</Text>
      </View>
      <View style={styles.countrySelection} >
        <View>
           <Image source={require('../../assets/images/flag.png')} />
        </View>
        <View>
          <Text preset='h6' >USA</Text>
        </View>
        <View>
        <FontAwesome name="caret-down" size={30} color="black" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: spacing[12],
      alignItems: 'center',
  },
  countrySelection: {
      flexDirection: "row",
      width: 150,
      borderRadius: 30,
      padding: spacing[2],
      justifyContent: 'space-evenly' ,
      alignItems: 'center',
      backgroundColor: colors.white,
      color: colors.black
  },
});
