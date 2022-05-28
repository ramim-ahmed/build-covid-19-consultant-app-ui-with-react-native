import React from "react";
import { StyleSheet, Text as RNText } from "react-native";
import { presets } from "../presets/Text.preset";

export default function Text({ children, preset = "default", style }) {
  const textStyles = StyleSheet.compose(presets[preset], style);
  return <RNText style={textStyles}>{children}</RNText>;
}
