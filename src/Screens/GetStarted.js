import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomImage from '../Components/CustomImage'
import theme from '../utils/Styles'
import CustomText from '../Components/CustomText'
import CustomButton from '../Components/CustomButton'

const GetStarted = ({ navigation }) => {
    return (
        <View style={styles.container}>
         
                <CustomImage
                    source={require('../assets/images/logo2.png')}
                    padding={50}
                />
          
                <CustomText
                    title='Medics'
                    fontSize={28}
                    fontFamily={theme.fonts.bold}
                    color={theme.colors.primary}
                    textAlign='center'
                />
                <CustomText
                    title="Let's Get Started!"
                    fontSize={theme.fontSize.heading}
                    fontFamily={theme.fonts.bold}
                    color={theme.colors.black}
                    textAlign='center'
                    marginTop={20}
                />
                <CustomText
                    title={" Login to enjoy the features we’ve\nprovided, and stay healthy!"}
                    color={theme.colors.secondary}
                    fontSize={theme.fontSize.regular}
                    fontFamily={theme.fonts.interRegular}
                    textAlign='center'
                    marginTop={10}
                    marginBottom={30}
                />
              <View >
              <CustomButton
                   title='login'
                   paddingVertical={14}
                   paddingHorizontal={100}
                   backgroundColor={theme.colors.primary}
                   color={theme.colors.white}
                   fontSize={theme.fontSize.regular}
                    fontFamily={theme.fonts.interSemi}
                    borderRadius={50}
                    marginTop={10}
                    onPress={()=>navigation.navigate('Login')}
                    // borderWidth={1}
                />
                 <CustomButton
                   title='Sign Up'
                   paddingVertical={14}
                   paddingHorizontal={90}
                   backgroundColor={theme.colors.white}
                   color={theme.colors.primary}
                   fontSize={theme.fontSize.regular}
                    fontFamily={theme.fonts.interSemi}
                    borderRadius={50}
                    borderWidth={1}
                    borderColor={theme.colors.primary}
                    marginTop={10}
                    onPress={()=>navigation.navigate('SignUp')}
                />
              </View>
                
         
        </View>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.white

    },
    text: {

    }
})