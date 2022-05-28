import React from 'react'
import { StyleSheet, View } from 'react-native'
import { spacing } from '../theme/spacing'
import Text from './Text'

export default function FeelingSick() {
  return (
    <View style={styles.container} >
      <Text preset='h2' >Are you feeling sick?</Text>
      <Text style={styles.description} >If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: spacing[12]
  },

  description: {
    lineHeight: 20,
    marginTop: spacing[2]
  },
})