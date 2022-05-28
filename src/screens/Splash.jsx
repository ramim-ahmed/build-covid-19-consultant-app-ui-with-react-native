import React from "react";
import { StyleSheet, View } from "react-native";
import ContactButton from "../components/ContactButton";
import FeelingSick from "../components/FeelingSick";
import Header from "../components/Header";
import HeadTitle from "../components/HeadTitle";
import OwnTest from "../components/OwnTest";
import Prevention from "../components/Prevention";
import { colors } from "../theme/colors";
import { spacing } from "../theme/spacing";

export default function Splash() {
  return (
    <View style={styles.container}>
       <View style={styles.topRow}>
         <Header />
         <HeadTitle />
         <FeelingSick />
         <ContactButton />
       </View>
       <View style={styles.downRow}>
         <Prevention />
         <OwnTest />
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  topRow: {
    flex: 1,
    paddingHorizontal: spacing[6],
    paddingTop: spacing[6],
    backgroundColor: colors.blue,
    borderBottomRightRadius: spacing[8],
    borderBottomLeftRadius: spacing[8],
  },
  downRow: {
    flex: 1,
    paddingHorizontal: spacing[6],
    marginTop: spacing[6]
  },
});
