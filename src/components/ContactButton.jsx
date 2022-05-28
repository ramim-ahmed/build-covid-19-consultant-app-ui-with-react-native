import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { colors } from '../theme/colors'
import { spacing } from '../theme/spacing'
import Text from './Text'

export default function ContactButton() {
  return (
    <View style={styles.container} >
         <Pressable style={styles.phoneButton} >
             <Text style={{textAlign: 'center', color: colors.white}} preset='h5'>Call Now</Text>
         </Pressable>
         <Pressable style={styles.messageButton} >
             <Text preset='h5' style={{textAlign: 'center'}} >Send SMS</Text>
         </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: spacing[12],
    },
    phoneButton: {
        flex: 1,
        backgroundColor: colors.red,
        padding: spacing[3],
        borderRadius: 30,
        marginRight: spacing[4]
    },
    messageButton: {
        backgroundColor: colors.white,
        padding: spacing[3],
        borderRadius: 30,
        flex: 1,
        marginLeft: spacing[4]
    },
})