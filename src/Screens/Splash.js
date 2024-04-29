import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import CustomImage from '../Components/CustomImage'
import theme from '../utils/Styles'
import CustomText from '../Components/CustomText'
const { height, width } = Dimensions.get('screen')

const Splash = () => {
  return (
    <View style={styles.container}>
      <View>
        <CustomImage
          source={require('../assets/images/logo.png')}
          padding={70}
        />
      </View>
      <View style={styles.text}>
        <CustomText
          title='Medics'
          fontSize={28}
          fontFamily={theme.fonts.bold}
          color={theme.colors.white}
        />
      </View>
    </View>
  )
}

export default Splash
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary

  },
  text: {

  }

})