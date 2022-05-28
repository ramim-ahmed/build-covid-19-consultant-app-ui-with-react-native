import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { spacing } from "../theme/spacing";
import Text from "./Text";

export default function Prevention() {
  const ImageOne = require("../../assets/images/prevention_1.png");
  const ImageTwo = require("../../assets/images/prevention_2.png");
  const ImageThree = require("../../assets/images/prevention_3.png");
  return (
    <View>
      <Text preset="h3">Prevention</Text>
      <View style={styles.imageSection}>
        <View>
          <Image source={ImageOne} />
          <View style={{ marginTop: spacing[3] }}>
            <Text style={{ textAlign: "center" }} preset="h6">
              Avoid Close
            </Text>
            <Text style={{ textAlign: "center" }} preset="h6">
              Contact
            </Text>
          </View>
        </View>
        <View>
          <Image source={ImageTwo} />
          <View style={{ marginTop: spacing[3] }}>
            <Text style={{ textAlign: "center" }} preset="h6">
              Clean Your
            </Text>
            <Text style={{ textAlign: "center" }} preset="h6">
              Hands Often
            </Text>
          </View>
        </View>
        <View>
          <Image source={ImageThree} />
          <View style={{ marginTop: spacing[3] }}>
            <Text style={{ textAlign: "center" }} preset="h6">
              Wear A
            </Text>
            <Text style={{ textAlign: "center" }} preset="h6">
              Facemask
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageSection: {
    marginTop: spacing[8],
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
