import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import Text from './Text'

export default function OwnTest() {
    const image = require('../../assets/images/Frame.png')
  return (
    <View style={styles.container}  >
      <View>
          <Image style={styles.image} source={image} />
      </View>
      <View style={styles.ownTestContent}>
            <Text preset='h4' >Do your own test!</Text>
            <View style={{marginTop: spacing[3]}} >
                <Text>Follow the instructions to</Text>
                <Text>do your own test.</Text>
            </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: spacing[8],
        backgroundColor: colors.lightBlue,
        height: 104,
        borderRadius: 16,
        flexDirection: 'row',
    },

    ownTestContent: {
        marginLeft: spacing[6],
        padding: spacing[3],
    },

    image: {
        marginTop: -12,
        marginLeft: 12
    },
})
